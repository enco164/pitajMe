"use strict";
/**
 * Created by nevena on 8.9.15..
 */
app.controller('RegistrationCtrl', [
  '$scope',
  'countryService',
  'dateService',
  'Account',
  '$location',
  function($scope, countryService, dateService, Account, $location){
    document.body.id = '';
    $scope.countries = countryService.get();
    $scope.sex = dateService.getSex();
    $scope.days = dateService.getDay();
    $scope.months = dateService.getMonth();
    $scope.years = dateService.getYear();
    $scope.error = false;

    $scope.acc = {
      email: "",
      password: "",
      username: "",
      sex: "",
      country: "",
      day: "",
      month: "",
      year: ""
    };

    $scope.loading = false;

    $scope.createAccount = function(acc){
      $scope.error = false;
      $scope.loading = true;
      if (acc.day.name == 'Day' || acc.month.name == 'Month' || acc.year.name == 'Year'){
        $scope.error = true;
        $scope.errorMessage = 'Please insert Date of birth';
      } else if (acc.country.name == 'Country'){
        $scope.error= true;
        $scope.errorMessage = 'Please choose your country';
      }else if(acc.sex == ''){
        $scope.error= true;
        $scope.errorMessage = 'Please choose gender';
      }else{
        Account.create({
          email: $scope.acc.email,
          password: $scope.acc.password,
          username: $scope.acc.username,
          country: $scope.acc.country.name,
          dob: $scope.acc.day.name+"/"+$scope.acc.month.name+"/"+$scope.acc.year.name,
          sex: $scope.acc.sex
        }, function(value, responseHeaders) {
          $location.path('/register-success');
          $scope.loading = false;
        }, function(httpResponse){
          $scope.error= true;
          $scope.errorMessage = httpResponse.data;
          $scope.loading = false;
        });
      }

      if($scope.error){
        document.getElementById("errorMessage").scrollIntoView();
        $scope.loading = false;
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
