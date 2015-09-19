module.exports = function(Post) {

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
