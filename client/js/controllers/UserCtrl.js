"use strict";
/**
 * Created by nevena on 9.9.15..
 */
app.controller('UserCtrl', [
  '$scope',
  'Question',
  'Account',
  'Category',
  'Follow',
  'Post',
  'Interest',
  'Like',
  '$routeParams',
  function($scope, Question, Account, Category, Follow, Post, Interest, Like, $routeParams){
    document.body.id = '';

    $scope.params = $routeParams;

    $scope.isMe = Account.getCurrentId() == $scope.params.id;
    $scope.logged = !!Account.isAuthenticated();

    $scope.getAccount = function(){
      $scope.account = Account.findById({
        id: $scope.params.id,
        filter: {include: ['following', 'followers']}
      }, function(value, responseHeaders){
        var date = new Date(Date.now() - (new Date($scope.account.dob)).getTime());
        $scope.account.age = Math.abs(date.getUTCFullYear() - 1970);
        $scope.account.dob = getDate($scope.account.dob);
        $scope.account.following_male = 0;
        $scope.account.following_female = 0;
        $scope.account.followers_male = 0;
        $scope.account.followers_female = 0;
        $scope.account.following.forEach(function(e, i){
          if (e.sex == 'Male') $scope.account.following_male++;
          else if (e.sex == 'Female') $scope.account.following_female++;
        });
        $scope.account.followers.forEach(function(e, i){
          if (e.sex == 'Male') $scope.account.followers_male++;
          else if (e.sex == 'Female') $scope.account.followers_female++;
        });
      }, function(httpResponse){
        console.log(httpResponse);
      });
    };

    $scope.getAccount();

    var weekBefore = new Date(new Date() - new Date(1000*60*60*24*7));

    function getQuestions(){
      $scope.questions = Post.find({
        filter:{
          where: {
            accountId: $scope.params.id,
            type: 'question',
            timestamp: {gte: weekBefore, lte: new Date()}
          },
          include: ['category', 'answers', 'account'],
          order: 'timestamp DESC',
          limit: 5
        }
      }, function(value, responseHeaders){
        $scope.questions.forEach(function(e, i){
          $scope.questions[i].editing = false;
          $scope.questions[i].owner = $scope.questions[i].accountId == Account.getCurrentId();
          $scope.questions[i].wholeTime = getWholeDate(e.timestamp);
          $scope.questions[i].timestamp = time(e.timestamp);
          postLiked($scope.questions[i]);
        });
        console.log(value);
      }, function(error){
        console.log(error);
      });
    }

    function getAnswers(){
      $scope.answers = Post.find({
        filter:{
          where: {
            accountId: $scope.params.id,
            type: 'answer',
            timestamp: {gte: weekBefore, lte: new Date()}
          },
          include: ['question', 'account'],
          order: 'timestamp DESC',
          limit: 5
        }
      }, function(value, responseHeaders){
        $scope.answers.forEach(function(e, i){
          $scope.answers[i].editing = false;
          $scope.answers[i].owner = $scope.answers[i].accountId == Account.getCurrentId();
          $scope.answers[i].wholeTime = getWholeDate(e.timestamp);
          $scope.answers[i].timestamp = time(e.timestamp);
          postLiked($scope.answers[i]);
        });
        console.log(value);
      }, function(error){
        console.log(error);
      });
    }

    function getComments(){
      $scope.comments = Post.find({
        filter:{
          where: {
            accountId: $scope.params.id,
            type: 'comment',
            timestamp: {gte: weekBefore, lte: new Date()}
          },
          include: [
            {relation: 'answer',
              scope:{
                include:[
                  {relation: 'question'}
                ]
              }},
            {relation: 'account'}
          ],
          order: 'timestamp DESC',
          limit: 5
        }
      }, function(value, responseHeaders){
        $scope.comments.forEach(function(e, i){
          $scope.comments[i].editing = false;
          $scope.comments[i].owner = $scope.comments[i].accountId == Account.getCurrentId();
          $scope.comments[i].wholeTime = getWholeDate(e.timestamp);
          $scope.comments[i].timestamp = time(e.timestamp);
          postLiked($scope.comments[i]);
        });
        console.log(value);
      }, function(error){
        console.log(error);
      });
    }

    getQuestions();
    getAnswers();
    getComments();

    $scope.logout = function(){Account.logout({id: Account.getCurrentId()});};

    $scope.follow = function(){
      Account.prototype$__link__following(
        {
          id: Account.getCurrentId(),
          fk: $scope.params.id
        },
        {},
        function successCb(value, responseHeaders){
          console.log('follow() return value: ' + JSON.stringify(value));
          $scope.isFollowing = true;
          $scope.getAccount();
        },
        function error(httpResponse){
          console.log('follow() error: ' + JSON.stringify(httpResponse));
        }
      );
    };

    $scope.unfollow = function(){
      Account.prototype$__unlink__following(
        {
          id: Account.getCurrentId(),
          fk: $scope.params.id
        },
        function successCb(value, responseHeaders){
          $scope.isFollowing = false;
          console.log('unfollow() return value: ' + JSON.stringify(value));
          $scope.getAccount();
        },
        function error(httpResponse){
          console.log('unfollow() error: ' + JSON.stringify(httpResponse));
        }
      );
    };

    Account.prototype$__exists__following(
      {
        id: Account.getCurrentId(),
        fk: $scope.params.id
      },
      function successCb(value, responseHeaders){
        $scope.isFollowing = true;
        console.log('isFollowing return value: ' + JSON.stringify(value));
      },
      function error(httpResponse){
        $scope.isFollowing = false;
        console.log('isFollowing error: ' + JSON.stringify(httpResponse));
      }
    );

    $scope.interests = Account.interests({
      id: Account.getCurrentId()
    }, function(value, responseHeaders){
      console.log(value, responseHeaders);
      /*value.forEach(function(e, i){
       $scope.interests.category.push(e.name)
       });*/
    }, function(httpResponse){
      console.log(httpResponse);
    });

    $scope.updatePost = function(post){
      if (post.type == 'question'){ $scope.questions.forEach(function(e, i){if (e.id == post.id) $scope.questions[i].editing = false;});};
      if (post.type == 'answer'){ $scope.answers.forEach(function(e, i){if (e.id == post.id) $scope.answers[i].editing = false;});};
      if (post.type == 'comment'){ $scope.comments.forEach(function(e, i){if (e.id == post.id) $scope.comments[i].editing = false;});};
      Post.update({
        where:{
          id: post.id
        }
      }, {
        text: post.text
      }, function(value, responseHeaders){}, function(httpResponse){});
    };

    $scope.deletePost = function(post){
      Post.removeById({id: post.id},
        function successCb(value, responseHeaders){
          if (post.type == 'question'){$scope.questions.forEach(function(e, i){if (e.id == post.id) $scope.questions.splice(i, 1);});}
          if (post.type == 'answer'){$scope.answers.forEach(function(e, i){if (e.id == post.id) $scope.answers.splice(i, 1);});}
          if (post.type == 'comment'){$scope.comments.forEach(function(e, i){if (e.id == post.id) $scope.comments.splice(i, 1);});}
        },
        function errorCb(error){
          console.log(error);
        });
    };

    $scope.likePost = function(post){
      var disliked = false;
      if (post.type == 'question')
        $scope.questions.forEach(function(e, i){ if (e.id == post.id && e.isDisliked) disliked = true; });
      if (post.type == 'answer')
        $scope.answers.forEach(function(e, i){ if (e.id == post.id && e.isDisliked) disliked = true; });
      if (post.type == 'comment')
        $scope.comments.forEach(function(e, i){ if (e.id == post.id && e.isDisliked) disliked = true; });
      if (!disliked){
        Post.likes.link({id: post.id, fk: Account.getCurrentId()},
          {value: 1},
          function successCb(value, responseHeaders){
            if (post.type == 'question'){$scope.questions.forEach(function(e, i){if (e.id == post.id) $scope.questions[i].isLiked = true;});}
            if (post.type == 'answer'){$scope.answers.forEach(function(e, i){if (e.id == post.id) $scope.answers[i].isLiked = true;});}
            if (post.type == 'comment'){$scope.comments.forEach(function(e, i){if (e.id == post.id) $scope.comments[i].isLiked = true;});}
          },
          function errorCb(error){
            console.log(error);
          }
        );
      }
    };

    $scope.unlikePost = function(post){
      Post.likes.unlink({id: post.id, fk: Account.getCurrentId()},
        function successCb(value, responseHeaders){
          if (post.type == 'question')
            $scope.questions.forEach(function(e, i){ if (e.id == post.id) $scope.questions[i].isLiked = false; });
          if (post.type == 'answer')
            $scope.answers.forEach(function(e, i){ if (e.id == post.id) $scope.answers[i].isLiked = false; });
          if (post.type == 'comment')
            $scope.comments.forEach(function(e, i){ if (e.id == post.id) $scope.comments[i].isLiked = false; });
        },
        function errorCb(error){
          console.log(error);
        }
      );
    };

    $scope.dislikePost = function(post){
      var liked = false;
      if (post.type == 'question')
        $scope.questions.forEach(function(e, i){ if (e.id == post.id && e.isLiked) liked = true; });
      if (post.type == 'answer')
        $scope.answers.forEach(function(e, i){ if (e.id == post.id && e.isLiked) liked = true; });
      if (post.type == 'comment')
        $scope.comments.forEach(function(e, i){ if (e.id == post.id && e.isLiked) liked = true; });
      if (!liked){
        Post.likes.link({id: post.id, fk: Account.getCurrentId()},
          {value: -1},
          function successCb(value, responseHeaders){
            console.log(value);
            if (post.type == 'question')
              $scope.questions.forEach(function(e, i){if (e.id == post.id) $scope.questions[i].isDisliked = true;});
            if (post.type == 'answer')
              $scope.answers.forEach(function(e, i){if (e.id == post.id) $scope.answers[i].isDisliked = true;});
            if (post.type == 'comment')
              $scope.comments.forEach(function(e, i){if (e.id == post.id) $scope.comments[i].isDisliked = true;});
          },
          function errorCb(error){
            console.log(error);
          }
        );
      }
    };

    $scope.undislikePost = function(post){
      Post.likes.unlink({id: post.id, fk: Account.getCurrentId()},
        function successCb(value, responseHeaders){
          console.log(value);
          if (post.type == 'question')
            $scope.questions.forEach(function(e, i){ if (e.id == post.id) $scope.questions[i].isDisliked = false; });
          if (post.type == 'answer')
            $scope.answers.forEach(function(e, i){ if (e.id == post.id) $scope.answers[i].isDisliked = false; });
          if (post.type == 'comment')
            $scope.comments.forEach(function(e, i){ if (e.id == post.id) $scope.comments[i].isDisliked = false; });
        },
        function errorCb(error){
          console.log(error);
        }
      );
    };

    function postLiked(post){
      Post.likes.exists({
        id: post.id,
        fk: Account.getCurrentId()
      }, function(value, responseHeaders){
        Like.findOne({
          filter: { where: { accountId: Account.getCurrentId(),postId: post.id },
            include: ['post']}
        }, function(value, responseHeaders){
          if (value.post.type == 'question') {
            $scope.questions.forEach(function(e, i){
              if (e. id == post.id){
                if (value.value == 1) $scope.questions[i].isLiked = true;
                if (value.value == -1) $scope.questions[i].isDisliked = true;
              }
            });
          }
          if (value.post.type == 'answer') {
            $scope.answers.forEach(function(e, i){
              if (e. id == post.id){
                if (value.value == 1) $scope.answers[i].isLiked = true;
                if (value.value == -1) $scope.answers[i].isDisliked = true;
              }
            });
          }
          if (value.post.type == 'comment') {
            $scope.comments.forEach(function(e, i){
              if (e. id == post.id){
                if (value.value == 1) $scope.comments[i].isLiked = true;
                if (value.value == -1) $scope.comments[i].isDisliked = true;
              }
            });
          }

        }, function(httpResponse){});
      }, function(httpResponse){
        $scope.questions.forEach(function(e, i) {
          if (e.id == post.id) {
            $scope.questions[i].isLiked = false;
            $scope.questions[i].isDisliked = false;
          }
        });
      });
    }

    $scope.categories = Category.find({}, function(value, responseHeaders){
      $scope.categories.forEach(function(e, i){
        $scope.categories[i].count = Category.posts.count({
          id: e.id
        }, function(){}, function(){});
      });
    }, function(httpResponse){});


    $scope.topQuestions = Post.find({
      filter:{
        where:{
          type: "question",
          timestamp: {gte: weekBefore}
        },
        include: 'answers'
      }
    }, function(value, responseHeaders){
      value = value.sort(sortByAnswersLen);
      value = value.slice(0,5);
      $scope.topQuestions = value;
    }, function(httpResponse){
      console.log(httpResponse);
    });

    $scope.mostLiked = Post.find({
      filter:{
        where:{
          type: "question",
          timestamp: {gte: weekBefore}
        },
        include: 'likes'
      }
    }, function(value, responseHeaders){
      value = value.sort(sortByLikesLen);
      value = value.slice(0,5);
      $scope.mostLiked = value;
    }, function(httpResponse){
      console.log(httpResponse);
    });

    function sortByAnswersLen(a, b) {
      return ((a.answers.length > b.answers.length) ? -1 : ((a.answers.length < b.answers.length) ? 1 : 0));
    }

    function sortByLikesLen(a, b) {
      return ((a.likes.length > b.likes.length) ? -1 : ((a.likes.length < b.likes.length) ? 1 : 0));
    }

  }
]);
