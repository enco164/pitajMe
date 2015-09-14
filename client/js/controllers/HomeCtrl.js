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


    $scope.questions = Question.find({
      filter: {
        order: 'timestamp DESC',
        include: ['account', 'category']
      }
    }, function(questions, err){
      for (var i = 0;i<$scope.questions.length; i++){
        var timestamp = $scope.questions[i].timestamp;
        var date = new Date(timestamp);
        var month = date.getMonth()+1;
        var day = date.getDate()-1;
        var year = date.getFullYear();
        $scope.questions[i].timestamp = day + '.' + month + '.' + year;

        $scope.questions[i].answers = Question.answer.count({
          id: $scope.questions[i].id
        }, function(count, err){});
      }
    });

    $scope.question = {
      title: "",
      text: "",
      isAnonymous: "",
      accountId: localStorage.getItem('$LoopBack$currentUserId'),
      category  : ""
    };

    $scope.categories = Category.find();

    $scope.sendQuestion = function(question){
      Question.create({
        title: $scope.question.title, text: $scope.question.text, isAnonymous: $scope.question.isAnonymous,
        accountId: $scope.question.accountId, categoryId: $scope.question.category.id, timestamp: new Date()
      },function(question, err){});
    };

    $scope.logout = function(){
      Account.logout({id: localStorage.getItem('$LoopBack$currentUserId')}, function(err) {
        console.log(err);
      });
    };

    $scope.logged = !!localStorage.getItem('$LoopBack$accessTokenId');

  }
]);
