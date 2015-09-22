/**
 * Created by nevena on 22.9.15..
 */
app.controller('AccountCtrl', [
  '$scope',
  '$cookies',
  '$location',
  '$window',
  '$rootScope',
  'Account',
  'LoopBackAuth',
  'srvAuth',
  function($scope, $cookies, $location, $window, $rootScope, Account, LoopBackAuth, srvAuth){
    var access_token = readCookie('access_token');
    var userId = readCookie('userId');
    console.log(access_token, userId);
    console.log('before',LoopBackAuth);
    if( localStorage.getItem('$LoopBack$accessTokenId') == null ){
      LoopBackAuth.currentUserId = userId;
      LoopBackAuth.accessTokenId = access_token;
      LoopBackAuth.rememberMe = true;
      LoopBackAuth.save();
      console.log('after',LoopBackAuth);
    }

    $rootScope.user = {};

    $window.fbAsyncInit = function() {
      FB.init({
        appId: '891256094245407',
        status: true,
        cookie: true,
        xfbml: true
      });
      srvAuth.watchAuthenticationStatusChange();
    };

    $scope.getMyLastName = function() {
      srvAuth.getMyLastName()
        .then(function(response) {
          $scope.last_name = response.last_name;
        }
      );
    };

    passport.use('facebook', new FacebookStrategy(

      // facebook will send back the tokens and profile
      function(access_token, refresh_token, profile, done) {
        // asynchronous
        process.nextTick(function() {
          console.log(access_token, refresh_token, profile, done);
          // find the user in the database based on their facebook id
          /*User.findOne({ 'id' : profile.id }, function(err, user) {

            // if there is an error, stop everything and return that
            // ie an error connecting to the database
            if (err)
              return done(err);

            // if the user is found, then log them in
            if (user) {
              return done(null, user); // user found, return that user
            } else {
              // if there is no user found with that facebook id, create them
              var newUser = new User();

              // set all of the facebook information in our user model
              newUser.fb.id    = profile.id; // set the users facebook id
              newUser.fb.access_token = access_token; // we will save the token that facebook provides to the user
              newUser.fb.firstName  = profile.name.givenName;
              newUser.fb.lastName = profile.name.familyName; // look at the passport user profile to see how names are returned
              newUser.fb.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

              // save our user to the database
              newUser.save(function(err) {
                if (err)
                  throw err;

                // if successful, return the new user
                return done(null, newUser);
              });
            }
          });*/
        });
      }));
  }
]);



function readCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  }
  return "";
}


