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
      Account.login({username: $scope.email, password: $scope.password}, function(){
        console.log("Uspeo");
      });
      console.log('login: ' + $scope.email, $scope.password);
    };


  }
]);
