"use strict";
/**
 * Created by nevena on 10.9.15..
 */
app.controller('AskQuestionCtrl', [
  '$scope',
  'Post',
  'Account',
  'Category',
  '$location',
  'AuthService',
  function($scope, Post, Account, Category, $location, AuthService){
    document.body.id = '';
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
      Post.create({
        type: 'question',
        title: $scope.question.title,
        text: $scope.question.text,
        isAnonymous: $scope.question.isAnonymous,
        accountId: $scope.question.accountId,
        categoryId: $scope.question.category.id,
        timestamp: new Date(),
        opinionFrom: parseInt(question.opinionFrom)

      },function(question, header){
        $location.path('/#/question/'+question.id);
      }, function(httpResponse){
        console.log(httpResponse);
        $scope.message = httpResponse.data.error.message;
      });
    };

    $scope.logout = function(){
      AuthService.logout();
    };

    $scope.logged = !!localStorage.getItem('$LoopBack$accessTokenId');

  }
]);
