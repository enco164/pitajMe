"use strict";
/**
 * Created by nevena on 10.9.15..
 */
app.controller('AskQuestionCtrl', [
  '$scope',
  'Question',
  'Account',
  'Category',
  function($scope, Question, Account, Category){
    $scope.error = false;

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
      },function(question, err){
        $scope.questions.push(question);
        console.log("question", question || err);
      });
    };

    $scope.logout = function(){
      console.log("bla bla");
      Account.logout({id: localStorage.getItem('$LoopBack$currentUserId')}, function(err) {
        console.log(err);
      });
    };

    $scope.logged = !!localStorage.getItem('$LoopBack$accessTokenId');

  }
]);
