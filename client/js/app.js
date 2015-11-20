/**
 * Created by enco on 7.9.15..
 */
var app = angular
  .module('app', [
    'ngResource',
    'ngRoute',
    'ui.router',
    'ngAnimate',
    'lbServices',
    'ngEmoticons',
    'ui.bootstrap'
  ])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home',{
          url: '/',
          templateUrl:'views/home.html',
          controller: 'HomeCtrl',
          controllerAs: 'home'
        })
        .state('login',{
          url: '/login',
          templateUrl:'views/login.html',
          controller: 'LoginCtrl',
          controllerAs: 'login'
        })
        .state('question',{
          url: '/question/:id',
          templateUrl: 'views/question.html',
          controller: 'QuestionCtrl',
          controllerAs: 'questionView'
        })
        .state('registration', {
          url:'/registration',
          templateUrl: 'views/registration.html',
          controller: 'RegistrationCtrl',
          controllerAs: 'registration'
        })
        .state('my-profile', {
          url:'/my-profile',
          templateUrl: 'views/profile.html',
          controller: 'ProfileCtrl',
          controllerAs: 'profile'
        })
        .state('user', {
          url:'/user-detail/:id',
          templateUrl: 'views/user.html',
          controller: 'UserCtrl',
          controllerAs: 'user'
        })
        .state('ask-question',{
          url:'/ask-question',
          templateUrl: 'views/askQuestion.html',
          controller: 'AskQuestionCtrl',
          controllerAs: 'askQuestion'
        })
        .state('edit-profile', {
          url:'/edit-profile',
          templateUrl: 'views/editProfile.html',
          controller: 'EditProfileCtrl',
          controllerAs: 'editProfile'
        })
        .state('category', {url:'/category/:id',
          templateUrl: 'views/category.html',
          controller: 'CategoryCtrl',
          controllerAs: 'category'
        })
        .state('verified',{url: '/verified',
          templateUrl: 'views/verified.html'
        })
        .state('register-success',{url:'/register-success',
          templateUrl: 'views/registerSuccess.html'
        })
        .state('forgot-password',{url:'/forgot-password',
          templateUrl: 'views/forgotPassword.html',
          controller: 'ForgotPassCtrl',
          controllerAs: 'forgotPass'
        })
        .state('reset-password',{
          url:'/reset-password/:accessToken',
          templateUrl: 'views/resetPasswordForm.html',
          controller: 'ResetPassCtrl',
          controllerAs: 'forgotPass'
        })
        .state('admin',{
          url:'/admin',
          templateUrl: 'views/adminPanel.html',
          controller: 'AdminCtrl',
          controllerAs: 'admin'
        });

      //$locationProvider.html5Mode(true);
    }])
  .config(function(LoopBackResourceProvider) {

    // Use a custom auth header instead of the default 'Authorization'
    LoopBackResourceProvider.setAuthHeader('X-Access-Token');

    // Change the URL where to access the LoopBack REST API server
    LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');
  });

