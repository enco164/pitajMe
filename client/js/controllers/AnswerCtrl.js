/**
 * Created by nevena on 7.9.15..
 */
app.controller('AnswerCtrl', [
  '$scope',
  'Answer',
  function($scope, Answer){
    $scope.answers = Answer.find({
      include: 'categories'
    }, function(err, questions){
      console.log($scope.answers);
    });

  }
]);
