/**
 * Created by enco on 14.9.15..
 */
app.controller(
  'MainCtrl', function($scope, $route, $stateParams, $location, Account) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $stateParams;

    $scope.currentId = Account.getCurrentId();
    $scope.isAuthenticated = Account.isAuthenticated();

    $scope.getProfile = function(){
      $scope.currentId = Account.getCurrentId();
      window.location.replace('/#/user-detail/'+$scope.currentId);
    };

    $scope.logout = function(){
      Account.logout({},{
        id: Account.getCurrentId()
      }, function(value, responseHeaders) {
        console.log(value);
        $scope.isAuthenticated = false;
        window.location.replace('/#/login');
      }, function(httpResponse){
        console.log(httpResponse);
      });
    };

    $scope.isAuth = function(){
      return Account.isAuthenticated();
    };
  }
);
