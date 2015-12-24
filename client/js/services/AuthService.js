/**
 * Created by enco on 7.10.15..
 */
/**
 * Created by enco on 25.9.15..
 */
app.factory('AuthService',[
  'LoopBackAuth',
  'Account',
  '$q',
  '$rootScope',
  '$location',
  function(LoopBackAuth, Account, $q, $rootScope, $location){

    function login(username, password, rememberMe) {
      return Account
        .login({rememberMe: rememberMe}, {username: username, password: password})
        .$promise
        .then(function(response) {
          $rootScope.currentUser = {
            id: response.user.id,
            tokenId: response.id,
            username: username
          };

          var next = $location.nextAfterLogin || '/';
          $location.nextAfterLogin = null;
          $location.path(next);
        }, function(error){
          $rootScope.errorMessage = error.data.error.message;
        });
    }
    function logout() {
      return Account
        .logout()
        .$promise
        .then(function() {
          $rootScope.currentUser = null;
        });
    }
    function register(email, password) {
      return Account
        .create({
          email: email,
          password: password
        })
        .$promise;
    }
    return {
      login: login,
      logout: logout,
      register: register
    };

  }
]);
