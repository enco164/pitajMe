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
      $scope.account.day = ($scope.date.getDate()).toString();
      $scope.account.month = $scope.months[$scope.date.getMonth()+1].name;
      $scope.account.year = ($scope.date.getFullYear()).toString();
      console.log($scope.account);
    });

    $scope.interests = Account.interests({
      id: Account.getCurrentId()
    }, function(value, responseHeaders){
      console.log(value, responseHeaders);
      $scope.account.interests = value;
      $scope.categories = Category.find({},
        function(value, responseHeaders){
          $scope.categories.forEach(function(e1, i){
            $scope.categories[i].inter = 'default';
            $scope.interests.forEach(function(e2, j){
              if (e2.id == e1.id) $scope.categories[i].inter = 'success';
            });
          });
          console.log($scope.categories);
        }, function(httpResponse){});
    }, function(httpResponse){
      console.log(httpResponse);
    });


    $scope.editAccount = function(newAccount){
      var day = parseInt(newAccount.day);
      $scope.account.dob= newAccount.year+"/"+newAccount.month+"/"+day;
      Account.prototype$updateAttributes({ id: $scope.account.id }, $scope.account)
        .$promise.then(function() {
          window.location.replace('/#/user-detail/'+Account.getCurrentId());
        });
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

    $scope.followUnfollow = function(category){
      var interest = {id: category.id, name: category.name, about: category.about};
      if (category.inter == 'default'){
        Category.interests.link({
          id: category.id,
          fk: Account.getCurrentId()
        }, function(value, responseHeaders){
          $scope.categories.forEach(function(e, i){
            if (e.id == category.id) $scope.categories[i].inter = 'success';
          });
        }, function(httpResponse){
          console.log(httpResponse.data.error.errmsg);
        });
      }
      else if (category.inter == 'success'){
        Category.interests.unlink({
          id: category.id,
          fk: Account.getCurrentId()
        }, function(value, responseHeaders){
          $scope.categories.forEach(function(e, i){
            if (e.id == category.id) $scope.categories[i].inter = 'default';
          });
        }, function(httpResponse){
          console.log(httpResponse.data.error.errmsg);
        });
      }
    };


    $scope.logout = function(){
      Account.logout({id: localStorage.getItem('$LoopBack$currentUserId')}, function(err) {
        console.log(err);
      });
    };

    $scope.logged = !!localStorage.getItem('$LoopBack$accessTokenId');

  }
]);
