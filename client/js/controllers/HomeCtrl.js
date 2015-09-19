"use strict";
/**
 * Created by enco on 7.9.15..
 */
app.controller('HomeCtrl', [
  '$scope',
  'Account',
  'Category',
  'Post',
  function($scope, Account, Category, Post){

    $scope.class = 'content-wrap';

    $scope.questions = Post.find({
      filter: {
        where: {type: 'question'},
        order: 'timestamp DESC',
        include: ['account', 'category']
      }
    }, function(value, responseHeaders){
      for (var i = 0;i<$scope.questions.length; i++){
        if (value[i].account.sex == 'Male') $scope.questions[i].gender = 'boy';
        else $scope.questions[i].gender = 'girl';

        var timestamp = $scope.questions[i].timestamp;
        $scope.questions[i].timestamp = time(timestamp);

        $scope.questions[i].answers = Post.answers.count({
          id: $scope.questions[i].id
        }, function(value, responseHeaders){
        }, function(httpResponse){});

      }
    }, function(httpResponse){});

    $scope.categories = Category.find({}, function(value){
      console.log(value);
    }, function(httpResponse){
      console.log(httpResponse);
    });

    $scope.question = {
      title: "",
      text: "",
      isAnonymous: "",
      accountId: Account.getCurrentId(),
      category  : ""
    };

    $scope.categories = Category.find({}, function(value, responseHeaders){
      $scope.categories.forEach(function(e, i){
        $scope.categories[i].count = Category.posts.count({
          id: e.id
        }, function(){}, function(){});
      });
    }, function(httpResponse){});

    $scope.sendQuestion = function(question){
      Post.create({},{
        type: 'question',
        title: $scope.question.title,
        text: $scope.question.text,
        isAnonymous: $scope.question.isAnonymous,
        accountId: $scope.question.accountId,
        categoryId: $scope.question.category.id,
        timestamp: new Date(),
        opinionFrom: parseInt(question.opinionFrom)
      },function(value, responseHeaders){
        console.log(value);
      }, function(httpResponse){
        console.log(httpResponse);
      });
    };

    $scope.logout = function(){
      Account.logout({},{
        id: Account.getCurrentId()
      }, function(value, responseHeaders) {
        console.log(value);
      }, function(httpResponse){
        console.log(httpResponse);
      });
    };

    $scope.logged = !!localStorage.getItem('$LoopBack$accessTokenId');

    //TODO sortiranje postova po broju odgovora
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

    function sortByAnswersLen(a, b) {
      return ((a.answers.length > b.answers.length) ? -1 : ((a.answers.length < b.answers.length) ? 1 : 0));
    }

    function sortByLikesLen(a, b) {
      return ((a.likes.length > b.likes.length) ? -1 : ((a.likes.length < b.likes.length) ? 1 : 0));
    }
  }
]);
