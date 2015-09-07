/**
 * Created by nevena on 7.9.15..
 */
app.controller('CategoryCtrl', [
  '$scope',
  'Categoru',
  function($scope, Category){
    $scope.categories = Category.find({
    }, function(err, questions){
      console.log($scope.categories);
    });

  }
]);
