"use strict";
/**
 * Created by enco on 7.9.15..
 */
app.controller('HomeCtrl', [
  '$scope',
  'Question',
  'Account',
  'Category',
  function($scope, Question, Account, Category){

    $scope.class = 'content-wrap';

    $scope.questions = Question.find({
      filter: {
        order: 'timestamp DESC',
        include: ['account', 'category']
      }
    }, function(value, responseHeaders){
      for (var i = 0;i<$scope.questions.length; i++){
        if (value[i].account.sex == 'Male') $scope.questions[i].gender = 'boy';
        else $scope.questions[i].gender = 'girl'

        var timestamp = $scope.questions[i].timestamp;
        $scope.questions[i].timestamp = time(timestamp);

        $scope.questions[i].answers = Question.answer.count({
          id: $scope.questions[i].id
        }, function(value, responseHeaders){
        }, function(httpResponse){});

        Question.answer({}, function(value){console.log(value)})
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
      Question.create({},{
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

  }
]);
