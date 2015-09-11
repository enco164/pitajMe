"use strict";
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

    $scope.logout = function(){
      console.log("bla bla");
      Account.logout({id: localStorage.getItem('$LoopBack$currentUserId')}, function(err) {
        console.log(err);
      });
    };

    $scope.logged = !!localStorage.getItem('$LoopBack$accessTokenId');

  }
]);
