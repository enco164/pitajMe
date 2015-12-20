"use strict";
/**
 * Created by enco on 7.9.15..
 */
app
  /*.directive('onLastRepeat', function() {
   return function(scope, element, attrs) {
   //console.log(element);
   if (scope.$last) setTimeout(function(){
   scope.$emit('onRepeatLast', element, attrs);
   }, 1);
   };
   })*/
  .controller('ArticleListCtrl', [
    '$scope',
    'Account',
    'Category',
    'Post',
    'Like',
    'Sponsored',
    '$state',
    function($scope, Account, Category, Post, Like, Sponsored, $state){
      document.body.id = 'content-wrap';
      $scope.class = 'content-wrap';

      Post.find({
        filter: {
          where: {type: 'article'},
          order: 'timestamp DESC',
          include: [
            {relation: 'account'},
            {relation: 'category'},
            {relation: 'likes'},
            {relation: 'answers',
              scope: {include: 'account'}
            }
          ]
        }
      }, function(value, responseHeaders){
        $scope.articles = value;
      });

      $scope.logout = function(){
        Account.logout({},{
          id: Account.getCurrentId()
        }, function(value, responseHeaders) {
          console.log(value);
        }, function(httpResponse){
          console.log(httpResponse);
        });
      };

      $scope.logged = !!Account.isAuthenticated();

      $scope.checkImageUrl = function (url) {
        return(url.match(/\.(jpeg|jpg|gif|png|svg)$/) != null);
      };

    }
  ]);
