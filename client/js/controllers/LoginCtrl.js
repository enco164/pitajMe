"use strict";
/**
 * Created by enco on 7.9.15..
 */
app.controller('LoginCtrl',
  function($scope, Account, $rootScope){
    document.body.id = '';
    $scope.check = true;

    $scope.login_fn = function(){
      Account.login({
        rememberMe: $scope.check
      },{
        username: $scope.username,
        password: $scope.password
      }, function(value, responseHeaders) {
        $rootScope.AT = localStorage.getItem('$LoopBack$accessTokenId');
        console.log(JSON.stringify(value.user.username));
        window.location.replace('/#/');
      }, function(httpResponse){
        console.log(httpResponse);
        $scope.message = httpResponse.data.error.message;
      });
    };

    $scope.logout = function(){
      Account.logout({},{
        id: Account.getCurrentId()
      }, function(value, responseHeaders) {
        console.log(value);
      }, function(httpResponse){
        console.log(httpResponse);
      });
    };

    /*Account.isValid(function (valid) {
      if (!valid) {
        console.log(user.errors);
      }
    });*/

    $scope.logged = !!localStorage.getItem('$LoopBack$accessTokenId');

  });
