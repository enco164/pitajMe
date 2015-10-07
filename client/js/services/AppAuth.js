/**
 * Created by enco on 7.10.15..
 */
/**
 * Created by enco on 25.9.15..
 */
app.factory('AppAuth',[
  'LoopBackAuth',
  'Account',
  '$location',
  function(LoopBackAuth, Account, $location){
    return {
      register : function(data){
        console.log('signup');
        console.log('data', data);
        Account.create({email: data.email, password: data.password});
      },
      login : function(data){
        Account.login({email: data.email, password: data.password}, function() {
          /*var next = $location.nextAfterLogin || '/';
           $location.nextAfterLogin = null;
           $location.path(next);
           */
        });
      },
      logout: function(){
        User.logout({},{id: Account.getCurrentId()}, null, function(err){
          LoopBackAuth.clearUser();
          LoopBackAuth.clearStorage();
        });
      },
      loginFromCookie: function(userId, accessToken){
        LoopBackAuth.clearUser();
        LoopBackAuth.clearStorage();
        LoopBackAuth.rememberMe = true;
        LoopBackAuth.setUser(accessToken, userId, null);
        LoopBackAuth.save();
        $location.path('/');
      },
      resetPassword: function(passwords){

      },
      ensureHasCurrentUser: function(cb){
      }
    };
  }
]);
