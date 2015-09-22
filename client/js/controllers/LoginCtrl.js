"use strict";
/**
 * Created by enco on 7.9.15..
 */
app.controller('LoginCtrl', [
  '$scope',
  '$window',
  'Account',
  'UserIdentity',
  'LoopBackAuth',
  function($scope, $window, Account, UserIdentity, LoopBackAuth){
    $scope.check = true;

    $scope.login_fn = function(){
      Account.login({
        rememberMe: $scope.check
      },{
        username: $scope.username,
        password: $scope.password
      }, function(value, responseHeaders) {
        window.location.replace('/#/');
        console.log(value);
      }, function(httpResponse){
        console.log(httpResponse);
        $scope.message = httpResponse.data.error.message;
      });
    };

    $scope.logout = function(){
      Account.logout({},{
        id: localStorage.getItem('$LoopBack$currentUserId')
      }, function(value, responseHeaders) {
        console.log(value);
      }, function(httpResponse){
        console.log(httpResponse);
      });
    };

    function statusChangeCallback(response) {
      console.log('statusChangeCallback');
      console.log(response);
      // The response object is returned with a status field that lets the
      // app know the current login status of the person.
      // Full docs on the response object can be found in the documentation
      // for FB.getLoginStatus().
      if (response.status === 'connected') {
        // Logged into your app and Facebook.
        testAPI();
      } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
      } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
      }
    }

    function checkLoginState() {
      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
      });
    }

    $window.fbAsyncInit = function() {
      FB.init({
        appId      : '891256094245407',
        cookie     : true,  // enable cookies to allow the server to access
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.2' // use version 2.2
      });

      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
        if (response.status === 'connected') {
          console.log("token: ", response);
          if (localStorage.getItem('$LoopBack$accessTokenId') == null){
            LoopBackAuth.accessTokenId = response.authResponse.accessToken;
            LoopBackAuth.currentUserId = response.authResponse.userId;
          }

        }
      });
    }

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/all.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // Here we run a very simple test of the Graph API after login is
    // successful.  See statusChangeCallback() for when this call is made.
    function testAPI() {
      console.log('Welcome!  Fetching your information.... ');
      FB.api('/me', {fields: 'id, name, email, gender'}, function(response) {
        var id = response.id;
        var name = response.name;
        var email = response.email;
        var sex = response.gender;

        UserIdentity.findOne({
          filter: {where: {userId: id}}
        }, function(value, responseHeaders){
          console.log(value);
        }, function(httpResponse){
          console.log(httpResponse);
          Account.create({},{
            provider: facebook, email: email, sex: sex.charAt(0).toUpperCase() + sex.slice(1), facebookId: id, password: 'facebook'
          }, function(value, responseHeaders){
            console.log(value);
          }, function(httpResponse){
            console.log(httpResponse);
          });
        });

        /*Account.findOne({
          filter: {where: {facebookId: id}}
        }, function(value, responseHeaders){
          console.log(value);
        }, function(httpResponse){
          console.log(httpResponse);
            Account.create({},{
              username: name, email: email, sex: sex.charAt(0).toUpperCase() + sex.slice(1), facebookId: id, password: 'facebook'
            }, function(value, responseHeaders){
              console.log(value);
            }, function(httpResponse){
              console.log(httpResponse);
            });
        });*/
        /*document.getElementById('status').innerHTML =
          'Thanks for logging in, ' + response.name + '!';*/
      });
    }

    /*Account.isValid(function (valid) {
     if (!valid) {
     console.log(user.errors);
     }
     });*/

    $scope.logged = !!localStorage.getItem('$LoopBack$accessTokenId');

  }
]);

//ako ne potoji acc sa pravim id(facebookId, googleId), proverava da li postoji, ako ne postoji registrujem ga
//trazi gender od googla
