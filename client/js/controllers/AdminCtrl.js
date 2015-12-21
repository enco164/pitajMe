/**
 * Created by nevena on 19.11.15..
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


      $stateProvider.state('admin',{
        url:'/',
        templateUrl: 'views/adminPanel.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin',
        admin: true
      });

      //$locationProvider.html5Mode(true);
    }])
  .config(function(LoopBackResourceProvider) {

    // Use a custom auth header instead of the default 'Authorization'
    LoopBackResourceProvider.setAuthHeader('X-Access-Token');

    // Change the URL where to access the LoopBack REST API server
    LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');
  })
  .controller('AdminCtrl', [
    '$scope',
    'Account',
    'Post',
    'Category',
    '$timeout',
    'Sponsored',
    '$location',
    function($scope, Account, Post, Category, $timeout, Sponsored, $location) {
      document.body.id = '';
      $scope.questionNum = 10;
      $scope.answerNum = 10;
      $scope.commentNum = 10;


      function getQuestions(){
        $scope.questions = Post.find({
          filter:{
            where: {
              type: 'question'
              //timestamp: {gte: weekBefore, lte: new Date()}
            },
            include: ['category', 'answers', 'account'],
            order: 'timestamp DESC'
            //limit: 25
          }
        }, function(value, responseHeaders){
          $scope.totalItems = $scope.questions.length;
          findSponsoredPosts();
          $scope.questions.forEach(function(e, i){
            $scope.questions[i].editing = false;
            $scope.questions[i].owner = $scope.questions[i].accountId == Account.getCurrentId();
            $scope.questions[i].wholeTime = getWholeDate(e.timestamp);
            $scope.questions[i].timestamp = time(e.timestamp);
          });
          //console.log(value);
        }, function(error){
          console.log(error);
        });
      }

      function getArticles(callback){
        $scope.articles = Post.find({
          filter:{
            where: {
              type: 'article'
              //timestamp: {gte: weekBefore, lte: new Date()}
            },
            include: ['category', 'answers', 'account'],
            order: 'timestamp DESC'
            //limit: 25
          }
        }, function(value, responseHeaders){
          $scope.articles.forEach(function(e, i){
            $scope.articles[i].editing = false;
            $scope.articles[i].owner = $scope.articles[i].accountId == Account.getCurrentId();
            $scope.articles[i].wholeTime = getWholeDate(e.timestamp);
            $scope.articles[i].timestamp = time(e.timestamp);
          });
          if(callback) callback();
          //console.log(value);
        }, function(error){
          console.log(error);
        });
      }

      function getAnswers(){
        $scope.answers = Post.find({
          filter:{
            where: {
              type: 'answer'
              //timestamp: {gte: weekBefore, lte: new Date()}
            },
            include: [{relation: 'question'}, {relation: 'account'}],
            order: 'timestamp DESC'
            //limit: 5
          }
        }, function(value, responseHeaders){
          $scope.answers.forEach(function(e, i){
            $scope.answers[i].editing = false;
            $scope.answers[i].owner = $scope.answers[i].accountId == Account.getCurrentId();
            $scope.answers[i].wholeTime = getWholeDate(e.timestamp);
            $scope.answers[i].timestamp = time(e.timestamp);
          });
          //console.log(value);
        }, function(error){
          console.log(error);
        });
      }

      function getComments(){
        $scope.comments = Post.find({
          filter:{
            where: {
              type: 'comment'
              //timestamp: {gte: weekBefore, lte: new Date()}
            },
            include: [
              {relation: 'answer',
                scope:{
                  include:[
                    {relation: 'question'}
                  ]
                }},
              {relation: 'account'}
            ],
            order: 'timestamp DESC'
            //limit: 5
          }
        }, function(value, responseHeaders){
          $scope.comments.forEach(function(e, i){
            $scope.comments[i].editing = false;
            $scope.comments[i].owner = $scope.comments[i].accountId == Account.getCurrentId();
            $scope.comments[i].wholeTime = getWholeDate(e.timestamp);
            $scope.comments[i].timestamp = time(e.timestamp);
          });
          //console.log(value);
        }, function(error){
          console.log(error);
        });
      }

      function getCategories(){
        $scope.categories = Category.find({
          filter:{ order: 'name ASC'}
        }, function(value, responseHeaders){}, function(httpResponse){});
      }

      function getAccounts(){
        $scope.accounts = Account.find({
          filter:{ order: 'username ASC'}
        }, function(value, responseHeaders){}, function(httpResponse){});
      }

      function findSponsoredPosts(){
        Sponsored.find({},function(value){
          $scope.questions.forEach(function(question) {
            question.sponsored = [];
          });
          $scope.questions.forEach(function(question) {
            value.forEach(function(sp, i){
              if (question.id == sp.postId) question.sponsored.push(sp.id);
            });
          });
        });
      }

      getQuestions();
      getArticles();
      getAnswers();
      getComments();
      getCategories();
      getAccounts();


      $scope.deleteCategory = function(category){
        Category.removeById({id: category.id},
          function successCb(value, responseHeaders){
            $scope.categories.forEach(function(e, i){if (e.id == category.id) $scope.categories.splice(i, 1);});
          },
          function errorCb(error){
            console.log(error);
          });
      };

      $scope.deleteAccount = function(account){
        Account.removeById({id: account.id},
          function successCb(value, responseHeaders){
            $scope.accounts.forEach(function(e, i){if (e.id == account.id) $scope.accounts.splice(i, 1);});
          },
          function errorCb(error){
            console.log(error);
          });
      };

      $scope.deletePost = function(post){
        Post.removeById({id: post.id},
          function successCb(value, responseHeaders){
            if (post.type == 'question'){$scope.questions.forEach(function(e, i){if (e.id == post.id) $scope.questions.splice(i, 1);});}
            if (post.type == 'answer'){$scope.answers.forEach(function(e, i){if (e.id == post.id) $scope.answers.splice(i, 1);});}
            if (post.type == 'comment'){$scope.comments.forEach(function(e, i){if (e.id == post.id) $scope.comments.splice(i, 1);});}
          },
          function errorCb(error){
            console.log(error);
          });
      };

      $scope.addCategory = function(category){
        console.log(category);
        Category.create({}, {
          name: category.name,
          about: category.about
        }, function(value, responseHeaders){
          console.log(value, responseHeaders);
          getCategories();
          /*$scope.categories.push(value);*/
          var scrollId = '#category-' + value.id;
          $timeout(function(){
            $('html, body').animate({
              scrollTop: $(scrollId).offset().top-30
            }, 500);
          }, 1000);
        }, function(httpResponse){
          console.log(httpResponse);
        })
      };

      $scope.updateCategory = function(category){
        Category.update({
          where: {
            id: category.id
          }
        }, {
          name: category.name,
          about: category.about
        }, function(value, responseHeaders){
          category.editing = false;
        }, function(httpResponse){});
      };

      $scope.sponsoredPost = function(sponId, postId){
        Sponsored.update({
            where:{ id: sponId }
          }, {
            postId: postId
          }, function(value, responseHeaders){
            findSponsoredPosts();
          },
          function(httpResponse){ console.log(httpResponse);}
        );

      };


      var checkImageUrl = function (url) {
        return(url.match(/\.(jpeg|jpg|gif|png|svg)$/) != null);
      };


      $scope.addPost = function(post){
        if (post.image && !checkImageUrl(post.image)) {
          $('#image-url').popover('show');
          return;
        }
        if (post.title != "" && post.text != "") {

          Post.create({
            type: 'article',
            title: post.title,
            text: post.text,
            isAnonymous: false,
            accountId: Account.getCurrentId(),
            categoryId: post.category.id,
            timestamp: new Date(),
            opinionFrom: 3,
            image: post.image

          }, function (article, header) {
            getArticles(function () {
              var scrollId = '#article-' + article.id;
              $timeout(function () {
                $('html, body').animate({
                  scrollTop: $(scrollId).offset().top - 30
                }, 200);
              }, 1000);
            });
          }, function (httpResponse) {
            console.log(httpResponse);
            $scope.message = httpResponse.data.error.message;
          });
        }
      };


      $scope.updateArticle = function(article){
        Post.update({
          where: {
            id: article.id
          }
        }, {
          title: article.title,
          text: article.text
        }, function(value, responseHeaders){
          article.editing = false;
        }, function(httpResponse){
          console.log(JSON.stringify(httpResponse));
        });
      };


      $scope.loadMore = function(post) {
        if (post == 'question') {
          $scope.questionNum += 10;
          if ($scope.questionNum >= $scope.questions.length-1)
            $scope.hideQuestionLoad = true;
        }
        if (post == 'answer') {
          $scope.answerNum += 10;
          if ($scope.answerNum >= $scope.answers.length-1)
            $scope.hideAnswerLoad = true;
        }
        if (post == 'comment') {
          $scope.commentNum += 10;
          if ($scope.commentNum >= $scope.comments.length-1)
            $scope.hideCommentLoad = true;
        }
      };

    }
  ]);
