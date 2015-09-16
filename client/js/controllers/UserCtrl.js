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
  'Interest',
  '$routeParams',
  function($scope, Question, Account, Category, Follow, Interest, $routeParams){

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
        console.log($scope.account);
      });

    };

    $scope.getAccount();

    Question.find({
      filter:{
        where: {
          accountId: $scope.params.id
        },
        include: 'category'
      }
    }, function(value, responseHeaders){
      $scope.questions = value;
      console.log(value);
    }, function(error){
      console.log(error);
    });

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
      id: $scope.params.id
    }, function(value, responseHeaders){
      console.log(value, responseHeaders);
    }, function(httpResponse){
      console.log(httpResponse);
    });
  }
]);
