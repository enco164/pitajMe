"use strict";
/**
 * Created by nevena on 8.9.15..
 */
app.controller('ProfileCtrl', [
  '$scope',
  'Question',
  'Account',
  'Answer',
  function($scope, Question, Account, Answer){

    $scope.account = Account.findById({
      id: localStorage.getItem('$LoopBack$currentUserId')
    }, function(){
      var date = new Date(Date.now() - (new Date($scope.account.dob)).getTime());
      $scope.account.age = Math.abs(date.getUTCFullYear() - 1970);
    });

    $scope.questions = Question.find({
      filter:{
        where: {
          accountId: localStorage.getItem('$LoopBack$currentUserId'),
          isAnonymous: false
        },
        include: 'category',
        order: 'timestamp DESC'
      }
    }, function(success, err){
      //console.log(success)
    });

    $scope.answers = Answer.find({
      filter:{
        where: {
          accountId: localStorage.getItem('$LoopBack$currentUserId'),
          isAnonymous: false
        },
        include: ['question'],
        order: 'timestamp DESC'
      }
    }, function (answers, err) {});

    $scope.logout = function(){
      console.log("bla bla");
      Account.logout({id: localStorage.getItem('$LoopBack$currentUserId')}, function(err) {
        console.log(err);
      });
    };

    $scope.deleteQuestion = function(question){
      Question.delete({
        id: question.id
      }, function(success, err){
        $scope.questions.forEach(function(q, index){
          if (q.id == question.id) {
            $scope.questions.splice(index, 1);
          }
        });
      });
    };

    $scope.deleteAnswer = function(answer){
      Answer.delete({
        id: answer.id
      }, function(success, err){
        $scope.answers.forEach(function(a, index){
          if (a.id == answer.id) {
            $scope.answers.splice(index, 1);
          }
        });
      });
    };

    if (localStorage.getItem('$LoopBack$accessTokenId')){
      $scope.logged = true;
    } else {
      $scope.logged = false;
      window.location.replace('/#/');
    }
  }
]);
