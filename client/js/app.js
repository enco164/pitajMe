/**
 * Created by enco on 7.9.15..
 */
var app = angular
  .module('app', [
    'ngResource',
    'ngRoute',
    'lbServices'
  ])
  .config(['$routeProvider', '$locationProvider', function($routeProvider,
                                                           $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/answers/:id', {
        templateUrl: 'views/answers.html',
        controller: 'AnswerCtrl',
        controllerAs: 'answer'
      })
      .when('/registration', {
        templateUrl: 'views/registration.html',
        controller: 'RegistrationCtrl',
        controllerAs: 'registration'
      })
      .when('/my-profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/user-detail/:id', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .when('/ask-question', {
        templateUrl: 'views/askQuestion.html',
        controller: 'AskQuestionCtrl',
        controllerAs: 'askQuestion'
      })
      .when('/edit-profile', {
        templateUrl: 'views/editProfile.html',
        controller: 'EditProfileCtrl',
        controllerAs: 'editProfile'
      })
      .otherwise({
        redirectTo: '/'
      });

    //$locationProvider.html5Mode(true);
  }])
  .config(function(LoopBackResourceProvider) {

    // Use a custom auth header instead of the default 'Authorization'
    LoopBackResourceProvider.setAuthHeader('X-Access-Token');

    // Change the URL where to access the LoopBack REST API server
    LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');
  });
