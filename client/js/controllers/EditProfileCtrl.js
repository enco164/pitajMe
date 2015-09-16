"use strict";
/**
 * Created by nevena on 10.9.15..
 */
app.controller('EditProfileCtrl', [
  '$scope',
  'Question',
  'Account',
  'Answer',
  'Category',
  'Interest',
  'countryService',
  'dateService',
  'detailsService',
  function($scope, Question, Account, Answer, Category, Interest, countryService, dateService, detailsService){
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

    $scope.interests = {category: []}

    Account.interests({
      id: Account.getCurrentId()
    }, function(value, responseHeaders){
      console.log(value, responseHeaders);
      value.forEach(function(e, i){
        $scope.interests.category.push(e.name)
      });
    }, function(httpResponse){
      console.log(httpResponse);
    });


    $scope.editAccount = function(newAccount){
      var day = parseInt(newAccount.day) +1;
      $scope.account.dob= newAccount.year+"/"+newAccount.month+"/"+day;
      Account.prototype$updateAttributes({ id: $scope.account.id }, $scope.account)
        .$promise.then(function() {});
      /*category.forEach(function(e, i){
        if (e.isChecked == true){
          Interest.findOne({
            accountId: Account.getCurrentId(),
            categoryId: e.id
          }, function(value, responseHeaders){
            console.log(value);
          }, function(httpResponse){
            console.log(httpResponse);
          });
        }
      });*/
    };


    $scope.logout = function(){
      Account.logout({id: localStorage.getItem('$LoopBack$currentUserId')}, function(err) {
        console.log(err);
      });
    };

    $scope.categories = Category.find({}, function(value){
      $scope.categories.forEach(function(e, i){
        e.isChecked = false;
      });
    }, function(){});

    $scope.logged = !!localStorage.getItem('$LoopBack$accessTokenId');

  }
]);
