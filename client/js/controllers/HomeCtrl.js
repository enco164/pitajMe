/**
 * Created by enco on 7.9.15..
 */
app.controller('HomeCtrl', [
  '$scope',
  'Question',
  'Account',
  function($scope, Question, Account){
    $scope.questions = Question.find({
      filter: {
        include: ['account', 'category']
      }
    }, function(err, questions){
      for (var i = 0;i<$scope.questions.length; i++){
        var timestamp = $scope.questions[i].timestamp;
        var date = new Date(timestamp);
        var month = date.getMonth()+1;
        var day = date.getDate()-1;
        var year = date.getFullYear();
        $scope.questions[i].timestamp = day + '.' + month + '.' + year;
      }
    });

    $scope.openAnswers = function(question){
      console.log(question);
      localStorage.setItem('questId', question.id);
    }

    if (localStorage.getItem('$LoopBack$accessTokenId')){
      $scope.logged = true;
    } else $scope.logged = false;

    $scope.logout_fn = function(){
      var token = localStorage.getItem('$LoopBack$accessTokenId');
      console.log(token);
      Account.logout(token, function(err) {
        console.log(err || 'Logged out');
      });
    }
  }
]);
