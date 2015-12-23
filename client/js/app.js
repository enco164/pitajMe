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
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home',{
          url: '/',
          views:{
            '': {
              templateUrl:'views/home.html',
              controller: 'HomeCtrl',
              controllerAs: 'home'
            },
            'sidebar@home':{
              templateUrl: 'views/sidebar.html',
              controller: 'SidebarCtrl'
            }
          }
        })
        .state('login',{
          url: '/login',
          views:{
            '':{
              templateUrl:'views/login.html',
              controller: 'LoginCtrl',
              controllerAs: 'login'
            },
            'sidebar@login':{
              templateUrl: 'views/sidebar.html',
              controller: 'SidebarCtrl'
            }
          }

        })
        .state('question',{
          url: '/question/:id',
          views:{
            '': {
              templateUrl: 'views/question.html',
              controller: 'QuestionCtrl',
              controllerAs: 'questionView'
            },
            'sidebar@question':{
              templateUrl: 'views/sidebar.html',
              controller: 'SidebarCtrl'
            }
          }
        })
        .state('articles', {
          abstract: true,
          url: '/articles',
          template: '<ui-view/>'
        })
        .state('articles.list',{
          url: '/',
          views:{
            '': {
              templateUrl: 'views/article_list.html',
              controller: 'ArticleListCtrl',
              controllerAs: 'articleList'
            },
            'sidebar@articles.list':{
              templateUrl: 'views/sidebar.html',
              controller: 'SidebarCtrl'
            }
          }
        })
        .state('articles.detail',{
          url: '/:id',
          views:{
            '': {
              templateUrl: 'views/article.html',
              controller: 'ArticleCtrl',
              controllerAs: 'articleView'
            },
            'sidebar@articles.detail':{
              templateUrl: 'views/sidebar.html',
              controller: 'SidebarCtrl'
            }
          }
        })
        .state('registration', {
          url:'/registration',
          views:{
            '': {
              templateUrl: 'views/registration.html',
              controller: 'RegistrationCtrl',
              controllerAs: 'registration'
            },
            'sidebar@registration':{
              templateUrl: 'views/sidebar.html',
              controller: 'SidebarCtrl'
            }
          }

        })
        .state('my-profile', {
          url:'/my-profile',
          templateUrl: 'views/profile.html',
          controller: 'ProfileCtrl',
          controllerAs: 'profile'
        })
        .state('user', {
          url:'/user-detail/:id',
          views: {
            '':{
              templateUrl: 'views/user.html',
              controller: 'UserCtrl',
              controllerAs: 'user'
            },
            'sidebar@user':{
              templateUrl: 'views/sidebar.html',
              controller: 'SidebarCtrl'
            }
          }

        })
        .state('ask-question',{
          url:'/ask-question',
          views:{
            '':{
              templateUrl: 'views/askQuestion.html',
              controller: 'AskQuestionCtrl',
              controllerAs: 'askQuestion'
            },
            'sidebar@ask-question':{
              templateUrl: 'views/sidebar.html',
              controller: 'SidebarCtrl'
            }
          }
        })
        .state('edit-profile', {
          url:'/edit-profile',
          templateUrl: 'views/editProfile.html',
          controller: 'EditProfileCtrl',
          controllerAs: 'editProfile'
        })
        .state('category', {
          url:'/category/:id',
          views:{
            '':{
              templateUrl: 'views/category.html',
              controller: 'CategoryCtrl',
              controllerAs: 'category'
            },
            'sidebar@category':{
              templateUrl: 'views/sidebar.html',
              controller: 'SidebarCtrl'
            }
          }
        })
        .state('verified',{
          url: '/verified',
          templateUrl: 'views/verified.html'
        })
        .state('register-success',{
          url:'/register-success',
          views:{
            '':{
              templateUrl: 'views/registerSuccess.html'
            },
            'sidebar@register-success':{
              templateUrl: 'views/sidebar.html',
              controller: 'SidebarCtrl'
            }
          }
        })
        .state('forgot-password',{
          url:'/forgot-password',
          templateUrl: 'views/forgotPassword.html',
          controller: 'ForgotPassCtrl',
          controllerAs: 'forgotPass'
        })
        .state('reset-password',{
          url:'/reset-password/:accessToken',
          templateUrl: 'views/resetPasswordForm.html',
          controller: 'ResetPassCtrl',
          controllerAs: 'forgotPass'
        });

      $locationProvider.html5Mode(true);
    }])
  .config(function(LoopBackResourceProvider) {

    // Use a custom auth header instead of the default 'Authorization'
    LoopBackResourceProvider.setAuthHeader('X-Access-Token');

    // Change the URL where to access the LoopBack REST API server
    LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');
  });

