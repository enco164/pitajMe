/**
 * Created by enco on 7.9.15..
 */
app.controller('LoginCtrl', [
  '$scope',
  'Account',
  '$location',
  function($scope, Account, $location){

    var sc = this;

    $scope.login_fn = function(){
      Account.login({username: $scope.username, password: $scope.password}, function(accessToken, err) {
        window.location.replace('/#/')
      });
      console.log('login: ' + $scope.username, $scope.password);
    };



  }
]);
