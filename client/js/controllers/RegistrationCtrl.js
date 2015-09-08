/**
 * Created by nevena on 8.9.15..
 */
app.controller('RegistrationCtrl', [
  '$scope',
  'countryService',
  'dateService',
  'Account',
  function($scope, countryService, dateService, Account){
    $scope.countries = countryService.get();
    $scope.sex = dateService.getSex();
    $scope.days = dateService.getDay();
    $scope.months = dateService.getMonth();
    $scope.years = dateService.getYear();

    $scope.acc = {
      email: "",
      password: "",
      username: "",
      sex: "",
      country: "",
      day: "",
      month: "",
      year: ""
    }

    $scope.createAccount = function(acc){
      console.log(acc);
      Account.create({
          email: $scope.acc.email,
          password: $scope.acc.password,
          username: $scope.acc.username,
          country: $scope.acc.country.name,
          dob: $scope.acc.day.name+"/"+$scope.acc.month.name+"/"+$scope.acc.year.name,
          sex: $scope.acc.sex
        }, function(account, err) {
        console.log(account);
        window.location.replace('/#/login');
      });
    }
  }
]);
