"use strict";
/**
 * Created by nevena on 9.9.15..
 */
app.controller('UserCtrl', [
  '$scope',
  'Question',
  'Account',
  'Follow',
  'Interest',
  '$routeParams',
  function($scope, Question, Account, Follow, Interest, $routeParams){

    $scope.params = $routeParams;
    console.log('R: ' + $routeParams);

    $scope.account = Account.findById({
      id: $scope.params.id
    }, function(account){
      var date = new Date(Date.now() - (new Date($scope.account.dob)).getTime());
      $scope.account.age = Math.abs(date.getUTCFullYear() - 1970);
      $scope.account.dob = time(account.dob);
    });

    $scope.questions = Question.find({
      filter:{
        where: {
          accountId: $scope.params.id
        },
        include: 'category'
      }
    }, function(questions){
      for (var i=0; i<questions.length; i++){
        $scope.questions[i].timestamp = time(questions[i].timestamp);
      }
    });

    //TODO !!!!!!!! Account.prototype$__get__follower()
    $scope.followees = Account.prototype$__get__following({
      id: localStorage.getItem('$LoopBack$currentUserId')
    }, function(followees){
      followees.forEach(function(e, index){
        if (e.id == $scope.params.id) $scope.follows = true;
        else $scope.follows = false;
      });
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
      }, function(success, err) {});
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
      /*Account.prototype$__delete__following({
        id: localStorage.getItem('$LoopBack$currentUserId')
      }, function(){});*/

      Follow.find({
        filter:{
          where:{
            followerId: localStorage.getItem('$LoopBack$currentUserId'),
            followeeId: $scope.params.id
          }
        }
      }, function(follow){
        Follow.delete({
          id: follow[0].id
        }, function(){
          $scope.follows = false;
        });
      });

    };

    $scope.logged = !!localStorage.getItem('$LoopBack$accessTokenId');

    $scope.int = Interest.find({
      filter:{
        where:{
          accountId: localStorage.getItem('$LoopBack$currentUserId')
        },
        include: ['account', 'category']
      }
    }, function(success, err){});

    function time(timestamp){
      var date = new Date(timestamp);
      var month = date.getMonth()+1;
      var day = date.getDate();
      var year = date.getFullYear();
      return day + '.' + month + '.' + year;
    }

  }

]);
