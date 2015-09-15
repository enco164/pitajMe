"use strict";
/**
 * Created by enco on 7.9.15..
 */
app.controller('LoginCtrl', [
  '$scope',
  'Account',
  function($scope, Account){
    $scope.check = true;

    $scope.login_fn = function(){
      Account.login({
        rememberMe: $scope.check
      },{
        username: $scope.username,
        password: $scope.password
      }, function(value, responseHeaders) {
        window.location.replace('/#/')
      }, function(httpResponse){
        console.log(httpResponse);
        $scope.message = httpResponse.data.error.message;
      });
    };

    $scope.logout = function(){
      Account.logout({},{
        id: localStorage.getItem('$LoopBack$currentUserId')
      }, function(value, responseHeaders) {
        console.log(value);
      }, function(httpResponse){
        console.log(httpResponse);
      });
    };

    $scope.logged = !!localStorage.getItem('$LoopBack$accessTokenId');

  }
]);
