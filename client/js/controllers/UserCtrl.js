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
  '$routeParams',
  function($scope, Question, Account, Category, Follow, Post, Interest, $routeParams){

    $scope.class = 'content-wrap';

    $scope.params = $routeParams;

    $scope.isMe = Account.getCurrentId() == $scope.params.id;

    $scope.getAccount = function(){

      $scope.account = Account.findById({
        id: $scope.params.id,
        filter: {include: ['following', 'followers']}
      }, function(){
        var date = new Date(Date.now() - (new Date($scope.account.dob)).getTime());
        $scope.account.age = Math.abs(date.getUTCFullYear() - 1970);
        $scope.account.dob = getDate($scope.account.dob);
        console.log($scope.account);
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
          include: ['category', 'answers'],
          order: 'timestamp DESC',
          limit: 5
        }
      }, function(value, responseHeaders){
        $scope.questions.forEach(function(e, i){
          e.timestamp = time(e.timestamp);
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
          include: ['question'],
          order: 'timestamp DESC',
          limit: 5
        }
      }, function(value, responseHeaders){
        $scope.answers.forEach(function(e, i){
          e.timestamp = time(e.timestamp);
          //console.log(e.question);
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
              }}
          ],
          order: 'timestamp DESC',
          limit: 5
        }
      }, function(value, responseHeaders){
        $scope.comments.forEach(function(e, i){
          e.timestamp = time(e.timestamp);
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

    $scope.deleteQuestion = function(question){
      //TODO Post.question.destroyAll ??
      Post.removeById({id: question.id},
        function successCb(value, responseHeaders){
          console.log(value);
          $scope.questions.forEach(function(e, i){
            if (e.id == question.id) $scope.questions.splice(i, 1);
          });
          getQuestions();
          getAnswers();
          getComments();
        },
        function errorCb(error){
          console.log(error);
        });
    };

    $scope.deleteAnswer = function(answer){
      Post.removeById({id: answer.id},
        function successCb(value, responseHeaders){
          console.log(value);
          $scope.answers.forEach(function(e, i){
            if (answer.id == e.id) $scope.answers.splice(i, 1);
          });
          getAnswers();
          getComments();
        },
        function errorCb(error){
          console.log(error);
        });
    };

    $scope.deleteComment = function(comment){
      Post.removeById({id: comment.id},
        function successCb(value, responseHeaders){
          console.log(value);
          $scope.comments.forEach(function(e, i){
            if (comment.id == e.id) $scope.comments.splice(i, 1);
          });
          getComments();
        },
        function errorCb(error){
          console.log(error);
        });
    };

  }
]);
