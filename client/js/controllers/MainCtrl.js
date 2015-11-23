/**
 * Created by enco on 14.9.15..
 */
app
  .run(function ($state,$rootScope) {
    $rootScope.$state = $state;
  })
  .controller(
  'MainCtrl', function($scope, $route, $stateParams, $location, Account, $state) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $stateParams;

    $scope.currentId = Account.getCurrentId();
    $scope.isAuthenticated = Account.isAuthenticated();

    $scope.getProfile = function(){
      $scope.currentId = Account.getCurrentId();
      $state.go('user-detail');
    };

    $scope.logged = Account.isAuthenticated();

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

    $scope.currentID = function(){
      return Account.getCurrentId();
    }
  }
);
