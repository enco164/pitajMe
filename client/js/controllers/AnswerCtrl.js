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

    $scope.answers = Answer.find({
      filter: {
        include: ['account', 'question', 'category'],
        //ne includuje account podatke
        where: {questionId: id}
      }
    }, function(err, questions){
    })
  }
]);
