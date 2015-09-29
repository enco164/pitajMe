module.exports = function(Like) {


  Like.dislikeCounterMethod = function(postId, cb){
    var like = Like.find({
      where: {
        postId: postId,
        value: -1
      }
    }, function(err, like){
      cb(null, like.length);
    });
  };

  Like.likeCounterMethod = function(postId, cb){
    var like = Like.find({
      where: {
        postId: postId,
        value: 1
      }
    }, function(err, like){
      cb(null, like.length);
    });
  };

  Like.likeAccountsMethod = function(postId, cb){
    var accounts = [];
    Like.find({where: {postId: postId, value: 1}, include: [{relation: 'account'}]}, function(err, like){
      like.forEach(function(e, i){
        var acc = {id: e.__data.account.id, username: e.__data.account.username, sex: e.__data.account.sex};
        accounts.push(acc);
      });
      cb(null, accounts);
    });
  };

  Like.dislikeAccountsMethod = function(postId, cb){
    var accounts = [];
    Like.find({where: {postId: postId, value: -1}, include: [{relation: 'account'}]}, function(err, like){
      like.forEach(function(e, i){
        var acc = {id: e.__data.account.id, username: e.__data.account.username, sex: e.__data.account.sex};
        accounts.push(acc);
      });
      cb(null, accounts);
    });
  };

  Like.remoteMethod(
    'likeCounterMethod',
    {
      accepts: {arg: 'postId', type: 'string', required: true},
      returns: {arg: 'likeNum', type: 'number'},
      http: {path: '/likeCounter', verb: 'get'},
      root: true
    }
  );

  Like.remoteMethod(
    'dislikeCounterMethod',
    {
      accepts: {arg: 'postId', type: 'string', required: true},
      returns: {arg: 'dislikeNum', type: 'number'},
      http: {path: '/dislikeCounter', verb: 'get'},
      root: true
    }
  );

  Like.remoteMethod(
    'likeAccountsMethod',
    {
      accepts: {arg: 'postId', type: 'string', required: true},
      returns: {arg: 'accounts', type: 'array'},
      http: {path: '/likeAccounts', verb: 'get'},
      root: true
    }
  );

  Like.remoteMethod(
    'dislikeAccountsMethod',
    {
      accepts: {arg: 'postId', type: 'string', required: true},
      returns: {arg: 'accounts', type: 'array'},
      http: {path: '/dislikeAccounts', verb: 'get'},
      root: true
    }
  );


};
