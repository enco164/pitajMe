/**
 * Created by enco on 14.9.15..
 */
app.controller(
  'MainCtrl', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    //$scope.isAuthenticated = Account.isAuthenticated();
    //$scope.currentId = Account.currentId();
    //$scope.logout = function(){Account.logout({id: Account.getCurrentId()});};
  }
);
