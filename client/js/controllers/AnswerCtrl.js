"use strict";
/**
 * Created by nevena on 7.9.15..
 */
app.controller('AnswerCtrl', [
  '$scope',
  'Answer',
  'Question',
  'Account',
  '$routeParams',
  function($scope, Answer, Question, Account, $routeParams){
    $scope.params = $routeParams;
    $scope.question = Question.findById({
      id: $scope.params.id,
      filter:{ include: ['account', 'category']}
    });


    $scope.answers = Question.answer({
      id: $scope.params.id,
      filter: {include: 'question'}
    }, function(){
      for(var i=0; i<$scope.answers.length; i++){
        $scope.answers[i].account = Account.findById({
          id: $scope.answers[i].accountId
        }, function(account, err){
        });
      }
    });

    $scope.answer = {
      text: "",
      isAnonymous: false
    };

    $scope.sendAnswer = function (answer) {
      if (answer.isAnonymous == undefined) answer.isAnonymous = false;
      Answer.create({
        text: answer.text,
        isAnonymous: answer.isAnonymous,
        timestamp: new Date,
        accountId: localStorage.getItem('$LoopBack$currentUserId'),
        questionId: $scope.params.id
      }, function(answer, err){
        console.log("answer", answer || err);
      });
    };

    $scope.logout = function(){
      Account.logout({id: localStorage.getItem('$LoopBack$currentUserId')});
    };

    $scope.logged = !!localStorage.getItem('$LoopBack$accessTokenId');

  }
]);
