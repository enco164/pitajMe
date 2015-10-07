/**
 * Created by enco on 7.10.15..
 */
app.controller('ForgotPassCtrl', [
  '$scope',
  'Account',
  function($scope, Account){

    $scope.message = '';

    $scope.resetPassword = function(em){
      Account.resetPassword({},{email: em},
        function(value, response){
          $scope.error = false;
          $scope.message = 'Link successfully sent to your email';
      }, function(err){
          console.log(err);
          $scope.error = true;
          $scope.message = 'Ooops! Something went wrong, try again later :(' ;
      });
    };

  }]);
