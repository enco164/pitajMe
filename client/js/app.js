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
    'ui.bootstrap',
    'djds4rce.angular-socialshare'
  ])
  .run(function($FB){
    $FB.init('891256094245407');
  })
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {


      $urlRouterProvider.otherwise('/404');

      $stateProvider
        .state('root',{
          url: '',
          abstract: true,
          views: {
            'header': {
              templateUrl: 'views/header.html',
              controller: 'HeaderCtrl'
            },
            'footer': {
              templateUrl: 'views/footer.html',
              controller: 'FooterCtrl'
            }
          }
        })
        .state('root.home',{
          url: '/',
          views:{
            'container@': {
              templateUrl:'views/home.html',
              controller: 'HomeCtrl',
              controllerAs: 'home'
            },
            'sidebar@root.home':{
              templateUrl: 'views/sidebar.html',
              controller: 'SidebarCtrl'
            }
          }
        })
        .state('root.login',{
          url: '/login',
          views:{
            'container@':{
              templateUrl:'views/login.html',
              controller: 'LoginCtrl',
              controllerAs: 'login'
            },
            'sidebar@root.login':{
              templateUrl: 'views/sidebar.html',
              controller: 'SidebarCtrl'
            }
          }

        })
        .state('root.question',{
          url: '/question/:id',
          views:{
            'container@': {
              templateUrl: 'views/question.html',
              controller: 'QuestionCtrl',
              controllerAs: 'questionView'
            },
            'sidebar@root.question':{
              templateUrl: 'views/sidebar.html',
              controller: 'SidebarCtrl'
            }
          }
        })
        .state('root.articles', {
          abstract: true,
          url: '/articles',
          views:{
            'container@': {template: '<ui-view/>'}
          }
        })
        .state('root.articles.list',{
          url: '/',
          views:{
            '': {
              templateUrl: 'views/article_list.html',
              controller: 'ArticleListCtrl',
              controllerAs: 'articleList'
            },
            'sidebar@root.articles.list':{
              templateUrl: 'views/sidebar.html',
              controller: 'SidebarCtrl'
            }
          }
        })
        .state('root.articles.detail',{
          url: '/:id',
          views:{
            '': {
              templateUrl: 'views/article.html',
              controller: 'ArticleCtrl',
              controllerAs: 'articleView'
            },
            'sidebar@root.articles.detail':{
              templateUrl: 'views/sidebar.html',
              controller: 'SidebarCtrl'
            }
          }
        })
        .state('root.registration', {
          url:'/registration',
          views:{
            'container@': {
              templateUrl: 'views/registration.html',
              controller: 'RegistrationCtrl',
              controllerAs: 'registration'
            },
            'sidebar@root.registration':{
              templateUrl: 'views/sidebar.html',
              controller: 'SidebarCtrl'
            }
          }

        })
        .state('root.my-profile', {
          url:'/my-profile',
          views: {
            'container@': {
              templateUrl: 'views/profile.html',
              controller: 'ProfileCtrl',
              controllerAs: 'profile'
            }
          }
        })
        .state('root.user', {
          url:'/user-detail/:id',
          views: {
            'container@':{
              templateUrl: 'views/user.html',
              controller: 'UserCtrl',
              controllerAs: 'user'
            },
            'sidebar@root.user':{
              templateUrl: 'views/sidebar.html',
              controller: 'SidebarCtrl'
            }
          }

        })
        .state('root.ask-question',{
          url:'/ask-question',
          views:{
            'container@':{
              templateUrl: 'views/askQuestion.html',
              controller: 'AskQuestionCtrl',
              controllerAs: 'askQuestion'
            },
            'sidebar@root.ask-question':{
              templateUrl: 'views/sidebar.html',
              controller: 'SidebarCtrl'
            }
          }
        })
        .state('root.edit-profile', {
          url:'/edit-profile',
          views: {
            'container@': {
              templateUrl: 'views/editProfile.html',
              controller: 'EditProfileCtrl',
              controllerAs: 'editProfile'
            }
          }
        })
        .state('root.category', {
          url:'/category/:id',
          views:{
            'container@':{
              templateUrl: 'views/category.html',
              controller: 'CategoryCtrl',
              controllerAs: 'category'
            },
            'sidebar@root.category':{
              templateUrl: 'views/sidebar.html',
              controller: 'SidebarCtrl'
            }
          }
        })
        .state('root.verified',{
          url: '/verified',
          views: {
            'container@':{
              templateUrl: 'views/verified.html'
            }
          }
        })
        .state('root.register-success',{
          url:'/register-success',
          views:{
            'container@':{
              templateUrl: 'views/registerSuccess.html'
            },
            'sidebar@root.register-success':{
              templateUrl: 'views/sidebar.html',
              controller: 'SidebarCtrl'
            }
          }
        })
        .state('root.forgot-password',{
          url:'/forgot-password',
          views: {
            'container@': {
              templateUrl: 'views/forgotPassword.html',
              controller: 'ForgotPassCtrl',
              controllerAs: 'forgotPass'
            }
          }
        })
        .state('root.reset-password',{
          url:'/reset-password/:accessToken',
          views: {
            'container@': {
              templateUrl: 'views/resetPasswordForm.html',
              controller: 'ResetPassCtrl',
              controllerAs: 'forgotPass'
            }
          }
        });

      $locationProvider.html5Mode(true);
    })
  .config(function(LoopBackResourceProvider) {

    // Use a custom auth header instead of the default 'Authorization'
    LoopBackResourceProvider.setAuthHeader('X-Access-Token');

    // Change the URL where to access the LoopBack REST API server
    LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');
  });

