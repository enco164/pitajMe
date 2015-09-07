/**
 * Created by enco on 7.9.15..
 */
app.controller('HomeCtrl', [
  '$scope',
  'Question',
  function($scope, Question){
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
        console.log(timestamp, date, $scope.questions[i].timestamp)
      }
      console.log($scope.questions);
    });
  }
]);
