"use strict";
/**
 * Created by nevena on 9.9.15..
 */
app.controller('UserCtrl', [
  '$scope',
  'Question',
  'Account',
  'Follow',
  '$routeParams',
  function($scope, Question, Account, Follow, $routeParams){

    $scope.params = $routeParams;
    console.log('R: ' + $routeParams);

    $scope.account = Account.findById({
      id: $scope.params.id
    }, function(){
      var date = new Date(Date.now() - (new Date($scope.account.dob)).getTime());
      $scope.account.age = Math.abs(date.getUTCFullYear() - 1970);
    });

    $scope.questions = Question.find({
      filter:{
        where: {
          accountId: $scope.params.id
        },
        include: 'category'
      }
    }, function(success, err){
      //console.log(success)
    });

    //TODO !!!!!!!! Account.prototype$__get__follower()
    $scope.followees = Account.prototype$__get__following({
      id: localStorage.getItem('$LoopBack$currentUserId')
    }, function(success, error){
      console.log(success);
    });
    /*$scope.followees = Follow.find({
      filter:{
        where:{
          followerId: localStorage.getItem('$LoopBack$currentUserId'),
          followeeId: $scope.params.id
        }
      }
    }, function(success){
      if (success.length == 1) $scope.follows = success[0].id;
    });*/

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
        followeeId: $scope.params.id
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
