var app = require('../../server/server');

module.exports = function(Post) {

  Post.observe('before save', function(ctx, next){
    if(ctx.instance.type == 'article'){
      var RoleMapping = app.models.RoleMapping;
      var Role = app.models.Role;
      RoleMapping.find({where:{principalId: ctx.instance.accountId}}, function(err,rm){
        if(err) {
          console.log(err);
          return;
        }

        Role.find({where:{id: rm.roleId}}, function(err, role){
          if(err) {
            console.log(err);
            return;
          }

          if(role && role[0].name=='admin'){
            next();
          } else {
            console.log('neko ko nema admin rolu pokusava da doda article!');
          }
        });
      });
    } else {
      next();
    }
  });


  /*Remote method for top questions*/
  Post.topQuestionsMethod = function(limit, cb){
    Post.find({
      where:{
        type: 'question',
        timestamp: {gte: weekBefore}
      },
      include: [ 'likes', 'answersArr' ]
    },function(err, posts){
      posts = posts.sort(sortByAnswersLen);
      posts = posts.slice(0, limit);

      posts.forEach(function(post){
        var title = post.title;
        //console.log(post);
        /*
         post.answersArr.forEach(function(ans){
         console.log(ans.text);
         });
         */
        console.log(post.answersArr);

        console.log('-----------------');
      });

      cb(null, posts);
    });
  };


  /**
   * HOOK za before delete pitanja i odgovora
   * ako se brise pitanje, brisu se svi njegovi odgovori
   * ako se brise odgovor na pitanje, brisu se svi njegovi komentari
   */
  Post.observe('before delete', function(ctx, next) {
    //TODO probati sa findById
    Post.find({
      where: {
        id:ctx.where.id
      },
      include: [
        {relation: 'answers', scope: {include: 'comments'}},
        {relation: 'comments'}]
    }, function(err, post){
      //console.log(err, post);
      if (!post[0]) return;
      if (post[0].type == 'question'){
        var answers = post[0].__data.answers;
        if (answers){
          answers.forEach(function(e1, i){
            Post.deleteById(e1.id, function (err, post) { });
          })
        }
      }

      if (post[0].type == 'answer'){
        var comments = post[0].__data.comments;
        if (comments){
          comments.forEach(function(e, i){
            Post.deleteById(e.id, function(err, post){
              console.log(err, post.id);
            });
          });
        }
      }
    });
    next();
  });

  var weekBefore = new Date(new Date() - new Date(1000*60*60*24*7));

  function sortByAnswersLen(a, b) {
    //console.log(a.answers, b.answers, '---------');
    return ((a.answersArr.length > b.answersArr.length) ? -1 : ((a.answersArr.length < b.answersArr.length) ? 1 : 0));
  }

  Post.remoteMethod(
    'topQuestionsMethod',
    {
      accepts: {arg: 'limit', type: 'number', required: true},
      returns: {arg: 'topQuestions', type: 'Array'},
      http: {path: '/topQuestions', verb: 'get'},
      root: true
    }
  );
};
