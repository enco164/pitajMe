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

    $scope.question = {
      title: "",
      text: "",
      isAnonymous: "",
      accountId: Account.getCurrentId(),
      category  : ""
    };

    $scope.categories = Category.find();

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

    Post.find({
      filter:{
        where:{
          type: "question",
          timestamp: {gte: weekBefore, lte: new Date()}
        },
        include: [ 'likes', 'answers' ],
        order: 'answers.length DESC',
        limit: 10
      }
    }, function(value, responseHeaders){
      console.log(value);
    }, function(httpResponse){
      console.log(httpResponse);
    });

  }
]);
