"use strict";
/**
 * Created by nevena on 7.9.15..
 */
app.controller('QuestionCtrl', [
  '$scope',
  'Answer',
  'Question',
  'Account',
  '$routeParams',
  function($scope, Answer, Question, Account, $routeParams){
    $scope.params = $routeParams;

    function reloadQuestion(){
      $scope.question = Question.findById({
        id: $scope.params.id,
        filter:{
          include:[
            { relation: 'account' },
            { relation: 'likes' },
            { relation: 'answer',
              scope: {
                include: [
                  { relation: 'account' },
                  { relation: 'likes' },
                  { relation: 'comment',
                    scope: { include: [
                      { relation: 'account' },
                      { relation: 'likes' }]
                    }
                  }
                ], order: 'timestamp DESC'
              }
            },
            { relation: 'category' }
          ],
          order: 'timestamp DESC'
        }
      }, function(value, responseHeaders){
        $scope.question.timestamp = time(value.timestamp);
        $scope.answers = value.answer;
        for(var i=0; i<$scope.answers.length; i++){
          $scope.answers[i].timestamp = time($scope.answers[i].timestamp);
          $scope.answers[i].comment.forEach(function(e, j){
            $scope.answers[i].comment[j].timestamp = time(e.timestamp);
          })
        }
      }, function(httpResponse){
        console.log(httpResponse);
      });
    }

    reloadQuestion();

    $scope.sendAnswer = function (question, answer) {
      if (answer.isAnonymous == undefined) answer.isAnonymous = false;
      Question.answer.create({
        id: question.id
      },{
        text: answer.text, isAnonymous: answer.isAnonymous, timestamp: new Date,
        accountId: Account.getCurrentId(), questionId: $scope.params.id
      }, function(value, responseHeaders){
        reloadQuestion();
        console.log(value, responseHeaders);
      }, function(httpResponse){
        console.log(httpResponse);
      });
    };

    $scope.sendComment = function(answer, comment){
      Answer.comment.create({
        id: answer.id
      },{
        text: comment.text, accountId: Account.getCurrentId(), timestamp: new Date(), answerId: answer.id
      }, function(value, responseHeaders){
        console.log(value);
        reloadQuestion();
      }, function(httpResponse){
        console.log(httpResponse);
      })
    }

    $scope.logout = function(){
      Account.logout({},{
        id: localStorage.getItem('$LoopBack$currentUserId')
      }, function(value, responseHeaders) {
        console.log(value);
      }, function(httpResponse){
        console.log(httpResponse);
      });
    };

    $scope.logged = !!localStorage.getItem('$LoopBack$accessTokenId');


    $scope.likeQuestion = function(){/*
      Question.prototype$__create__likes({id: $scope.question.id},
        {},

      );*/
    }

  }
]);
