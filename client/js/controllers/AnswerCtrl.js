"use strict";
/**
 * Created by nevena on 7.9.15..
 */
app.controller('AnswerCtrl', [
  '$scope',
  'Answer',
  'Question',
  'Account',
  function($scope, Answer, Question, Account){
    var id = localStorage.getItem('questId');
    $scope.question = Question.findById({
      id: id,
      filter:{ include: ['account', 'category']}
    });


    $scope.answers = Question.answer({
      id: id,
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
        questionId: id
      }, function(answer, err){
        console.log("answer", answer || err);
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
