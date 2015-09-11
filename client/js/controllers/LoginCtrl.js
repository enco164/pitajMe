"use strict";
/**
 * Created by enco on 7.9.15..
 */
app.controller('LoginCtrl', [
  '$scope',
  'Account',
  function($scope, Account){

    $scope.login_fn = function(){
      Account.login({username: $scope.username, password: $scope.password}, function(accessToken, err) {
        window.location.replace('/#/')
      });
      console.log('login: ' + $scope.username, $scope.password);
    };

    $scope.logout = function(){
      console.log("bla bla");
      Account.logout({id: localStorage.getItem('$LoopBack$currentUserId')}, function(err) {
        console.log(err);
      });
    };

    $scope.logged = !!localStorage.getItem('$LoopBack$accessTokenId');

  }
]);
