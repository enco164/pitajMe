/**
 * Created by enco on 7.10.15..
 */
app.controller('ResetPassCtrl', [
  '$scope', 'Account','$stateParams', '$http',
  function($scope, Account, $stateParams, $http) {

    $scope.accessToken = $stateParams.accessToken;
    $scope.password = '';
    $scope.confirmation = '';
    $scope.response = false;


    $scope.resetPassword = function(){
      $scope.response = false;
      $http({
        method: 'POST',
        url: '/reset-password?access_token='+ $stateParams.accessToken,
        data: {password: $scope.password, confirmation: $scope.confirmation}
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(response);
        $scope.responseMsg = response.data.content;
        $scope.response = true;


      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(response);
      });
    };



  }]);
