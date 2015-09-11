"use strict";
/**
 * Created by nevena on 10.9.15..
 */
app.controller('EditProfileCtrl', [
  '$scope',
  'Question',
  'Account',
  'Answer',
  'countryService',
  'dateService',
  'detailsService',
  function($scope, Question, Account, Answer, countryService, dateService, detailsService){
    $scope.countries = countryService.get();
    $scope.relationships = detailsService.getRelationship();
    $scope.occupations = detailsService.getOccupation();
    $scope.sex = dateService.getSex();
    $scope.days = dateService.getDay();
    $scope.months = dateService.getMonth();
    $scope.years = dateService.getYear();
    $scope.error = false;

    $scope.account = Account.findById({
      id: localStorage.getItem('$LoopBack$currentUserId')
    }, function(){
      $scope.date = new Date($scope.account.dob);
      $scope.account.day = ($scope.date.getDate()-1).toString();
      $scope.account.month = $scope.months[$scope.date.getMonth()+1].name;
      $scope.account.year = ($scope.date.getFullYear()).toString();
    });

    $scope.editAccountount = function(newAccount){
      var day = parseInt(newAccount.day) +1;
      $scope.account.dob= newAccount.year+"/"+newAccount.month+"/"+day;
      Account.prototype$updateAttributes({ id: $scope.account.id }, $scope.account)
        .$promise.then(function() {});
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
