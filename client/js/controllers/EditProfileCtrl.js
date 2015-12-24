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
  'LoopBackAuth',
  '$http',
  '$state',
  function($scope, Question, Account, Answer, Category,
           Interest, countryService, dateService, detailsService,
           LoopBackAuth, $http, $state){
    document.body.id = '';
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
          $state.go('root.user', {id: Account.getCurrentId()});
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
      if (category.inter == 'default'){
        Account.interests.link({
          id: Account.getCurrentId(),
          fk: category.id
        }, {}, function(value){
          $scope.categories.forEach(function(e, i){
            if (e.id == category.id) $scope.categories[i].inter = 'success';
          });
        }, function(httpResponse){
          console.log(httpResponse.data.error.errmsg);
        });
      }
      else if (category.inter == 'success'){
        Account.interests.unlink({
          id: Account.getCurrentId(),
          fk: category.id
        }, function(value, responseHeaders){
          $scope.categories.forEach(function(e, i){
            if (e.id == category.id) $scope.categories[i].inter = 'default';
          });
        }, function(httpResponse){
          console.log(httpResponse.data.error.errmsg);
        });
      }
    };


    $scope.resetLoading = false;

    $scope.resetPassword = function (passwords) {
      $scope.resetLoading = true;
      $http({
        method: 'POST',
        url: '/change-password?access_token='+ LoopBackAuth.accessTokenId,
        data: {current: passwords.currentPassword, password: passwords.newPassword, confirmation: passwords.confirmation}
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(response);
        $scope.resetLoading = false;
        $('#responseMsgContent').text(response.data.content);

        $('#passForm').modal('hide');
        $('#responseMsg').modal('show');

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(response);
        $scope.resetLoading = false;
        $('#responseMsgContent').text(response.data);

        $('#passForm').modal('hide');
        $('#responseMsg').modal('show');
      });
    };

  }
]);
