"use strict";
/**
 * Created by nevena on 7.9.15..
 */
app.controller('CategoryCtrl', [
  '$scope',
  'Category',
  'Post',
  'Account',
  '$routeParams',
  function($scope, Category, Post, Account, $routeParams){

    $scope.params = $routeParams;
    $scope.interest = false;


      $scope.cat = Category.findById({
            id: $scope.params.id
      }, function(value, responseHeaders){
        console.log(value);
      }, function(httpResponse){
        console.log(httpResponse);
      });


    Category.interests.exists({
      id: $scope.params.id,
      fk: Account.getCurrentId()
    }, function(value, responseHeaders){
      console.log(value);
      $scope.interest = true;
    }, function(httpResponse){
      console.log(httpResponse);
    });

    $scope.questions = Category.posts({
      id: $scope.params.id,
      filter: {
        where: {type: 'question'},
        order: 'timestamp DESC',
        include: ['account', 'category']
      }
    }, function(value, responseHeaders){
      for (var i = 0;i<$scope.questions.length; i++){
        if (value[i].account.sex == 'Male') $scope.questions[i].gender = 'boy';
        else $scope.questions[i].gender = 'girl';

        var timestamp = $scope.questions[i].timestamp;
        $scope.questions[i].timestamp = time(timestamp);

        $scope.questions[i].answers = Post.answers.count({
          id: $scope.questions[i].id
        }, function(value, responseHeaders){
        }, function(httpResponse){});

      }
      console.log(value);
    }, function(httpResponse){
      console.log(httpResponse);
    });

    $scope.likeCategory = function(){
      Category.interests.link({
        id: $scope.params.id,
        fk: Account.getCurrentId()
      }, function(value, responseHeaders){
        console.log(value);
        $scope.interest = true;
      }, function(httpResponse){
        console.log(httpResponse);
      });
    };

    $scope.dislikeCategory = function(){
      Category.interests.unlink({
        id: $scope.params.id,
        fk: Account.getCurrentId()
      }, function(value, responseHeaders){
        console.log(value);
        $scope.interest = false;
      }, function(httpResponse){
        console.log(httpResponse);
      });
    };

    $scope.logout = function(){
      Account.logout({id: localStorage.getItem('$LoopBack$currentUserId')}, function(err) {
        console.log(err);
      });
    };

    $scope.logged = !!localStorage.getItem('$LoopBack$accessTokenId');
    console.log($scope.category);
  }
]);
