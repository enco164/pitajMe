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
      filter:{ include: ['account', 'category']}       //TODO (cak i kada se includuje account, kao rezultat je postoji objekat Account, vec samo accountId)
    }, function(question){
      $scope.question.timestamp = time(question.timestamp);
    });

    getAnswers();

    function getAnswers(){
      $scope.answers = Question.answer({
        id: $scope.params.id,
        filter: {include: ['question', 'account']}
      }, function(answers){
        for(var i=0; i<$scope.answers.length; i++){
          $scope.answers[i].timestamp = time(answers[i].timestamp);
          $scope.answers[i].account = Account.findById({
            id: $scope.answers[i].accountId
          });
        }
      });
    };


    $scope.answer = {
      text: "",
      isAnonymous: false
    };

    $scope.sendAnswer = function (answer) {
      if (answer.isAnonymous == undefined) answer.isAnonymous = false;
      Answer.create({},{
        text: answer.text,
        isAnonymous: answer.isAnonymous,
        timestamp: new Date,
        accountId: localStorage.getItem('$LoopBack$currentUserId'),
        questionId: $scope.params.id
      }, function(value, responseHeaders){
        //TODO poslednji dodati komentar nema ispisan username account-a (staviti username trenutnog korisnika)
        //PRVI NACIN
        $scope.answers.push(value);
        //DRUGI NACIN
        getAnswers();
        console.log(value);
      }, function(httpResponse){
        console.log(httpResponse);
        $scope.message = httpResponse.data.error.message;
      });
    };

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

    function time(timestamp){
      var date = new Date(timestamp);
      var month = date.getMonth()+1;
      var day = date.getDate();
      var year = date.getFullYear();
      var time = day + '.' + month + '.' + year;
      return time;
    }
  }
]);
