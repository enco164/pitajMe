"use strict";
/**
 * Created by nevena on 9.9.15..
 */
app.controller('UserCtrl', [
  '$scope',
  'Question',
  'Account',
  'Follow',
  function($scope, Question, Account, Follow){

    $scope.account = Account.findById({
      id: localStorage.getItem('getProfile')
    }, function(){
      var date = new Date(Date.now() - (new Date($scope.account.dob)).getTime());
      $scope.account.age = Math.abs(date.getUTCFullYear() - 1970);
    });

    $scope.questions = Question.find({
      filter:{
        where: {
          accountId: localStorage.getItem('getProfile')
        },
        include: 'category'
      }
    }, function(success, err){
      //console.log(success)
    });

    //TODO !!!!!!!!
    $scope.fo
    $scope.followees = Follow.find({
      followerId: localStorage.getItem('$LoopBack$currentUserId'),
      followeeId: localStorage.getItem('getProfile')
    }, function(success){
      if (success.length == 1) $scope.follows = success[0].id;
    });

    //TODO ne treba u svakom kontroleru da stoji logout funkcija
    $scope.logout = function(){
      Account.logout({
        id: localStorage.getItem('$LoopBack$currentUserId')
      }, function(err) {
        console.log(err);
      });
    };

    $scope.follow = function(){
      Follow.create({
        followerId: localStorage.getItem('$LoopBack$currentUserId'),
        followeeId: localStorage.getItem('getProfile')
      }, function(success){
        $scope.follows = success.id;
      });
    };

    $scope.unfollow = function(){
      Follow.delete({
        id: $scope.follows
      }, function(success, error){
        $scope.follows = false;
      });
    };

    $scope.logged = !!localStorage.getItem('$LoopBack$accessTokenId');

  }
]);
