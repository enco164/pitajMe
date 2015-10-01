"use strict";
/**
 * Created by nevena on 7.9.15..
 */
app.controller('CategoryCtrl', [
  '$scope',
  'Category',
  'Post',
  'Account',
  'Like',
  '$routeParams',
  function($scope, Category, Post, Account, Like, $routeParams){
    document.body.id = '';
    $scope.params = $routeParams;
    $scope.interest = false;


    $scope.cat = Category.findById({
      id: $scope.params.id
    }, function(value, responseHeaders){
      console.log(value);
    }, function(httpResponse){
      console.log(httpResponse);
    });

    $scope.categories = Category.find({}, function(value, responseHeaders){
      $scope.categories.forEach(function(e, i){
        $scope.categories[i].count = Category.posts.count({
          id: e.id
        }, function(){}, function(){});
      });
    }, function(httpResponse){});


    Category.interests.exists({
      id: $scope.params.id,
      fk: Account.getCurrentId()
    }, function(value, responseHeaders){
      console.log(value);
      $scope.interest = true;
    }, function(httpResponse){
      console.log(httpResponse);
    });

    $scope.questions = Category.posts({
      id: $scope.params.id,
      filter: {
        where: {type: 'question'},
        order: 'timestamp DESC',
        include: [
          {relation: 'account'},
          {relation: 'category'},
          {relation: 'likes'},
          {relation: 'answers',
            scope: {include: 'account'}
          }
        ]
      }
    }, function(value, responseHeaders){
      for (var i = 0;i<$scope.questions.length; i++){
        if (value[i].account.sex == 'Male') $scope.questions[i].gender = 'boy';
        else $scope.questions[i].gender = 'girl';

        $scope.questions[i].timestamp = time($scope.questions[i].timestamp);

        $scope.questions[i].answ = Post.answers.count({
          id: $scope.questions[i].id
        }, function(value, responseHeaders){
        }, function(httpResponse){});
        // TODO brojanje odgovora na pitanje - srediti kao i brojanje lajkova
        $scope.questions[i].ans_female = 0;
        $scope.questions[i].ans_male = 0;
        for(var k = 0; k < $scope.questions[i].answers.length; k++){
          if($scope.questions[i].answers[k].account.sex == 'Male') $scope.questions[i].ans_male++;
          if($scope.questions[i].answers[k].account.sex == 'Female') $scope.questions[i].ans_female++;
        }
        //postavljanje broja lajkova
        $scope.questions[i].likeCount = Like.likeCounterMethod({
          postId: $scope.questions[i].id
        }, function(value, responseHeaders){}, function(httpResponse){});
        //
        $scope.questions[i].dislikeCount = Like.dislikeCounterMethod({
          postId: $scope.questions[i].id
        }, function(value, responseHeaders){}, function(httpResponse){});

      }
      console.log(value);
    }, function(httpResponse){
      console.log(httpResponse);
    });

    $scope.likeCategory = function(){
      Category.interests.link({
        id: $scope.params.id,
        fk: Account.getCurrentId()
      }, {}, function(value, responseHeaders){
        console.log(value);
        $scope.interest = true;
      }, function(httpResponse){
        console.log(httpResponse);
      });
    };

    $scope.dislikeCategory = function(){
      Category.interests.unlink({
        id: $scope.params.id,
        fk: Account.getCurrentId()
      }, function(value, responseHeaders){
        console.log(value);
        $scope.interest = false;
      }, function(httpResponse){
        console.log(httpResponse);
      });
    };

    var weekBefore = new Date(new Date() - new Date(1000*60*60*24*7));

    $scope.topQuestions = Post.find({
      filter:{
        where:{
          type: "question",
          timestamp: {gte: weekBefore}
        },
        include: 'answers'
      }
    }, function(value, responseHeaders){
      value = value.sort(sortByAnswersLen);
      value = value.slice(0,5);
      $scope.topQuestions = value;
    }, function(httpResponse){
      console.log(httpResponse);
    });

    $scope.mostLiked = Post.find({
      filter:{
        where:{
          type: "question",
          timestamp: {gte: weekBefore}
        },
        include: 'likes'
      }
    }, function(value, responseHeaders){
      value = value.sort(sortByLikesLen);
      value = value.slice(0,5);
      $scope.mostLiked = value;
    }, function(httpResponse){
      console.log(httpResponse);
    });

    $scope.logout = function(){
      Account.logout({id: localStorage.getItem('$LoopBack$currentUserId')}, function(err) {
        console.log(err);
      });
    };

    $scope.logged = !!localStorage.getItem('$LoopBack$accessTokenId');

    function sortByAnswersLen(a, b) {
      return ((a.answers.length > b.answers.length) ? -1 : ((a.answers.length < b.answers.length) ? 1 : 0));
    }

    function sortByLikesLen(a, b) {
      return ((a.likes.length > b.likes.length) ? -1 : ((a.likes.length < b.likes.length) ? 1 : 0));
    }
  }
]);
