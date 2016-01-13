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
  .controller('ArticleListCtrl',
  function($scope, Account, Category, Post){
    document.body.id = 'content-wrap';
    $scope.class = 'content-wrap';

    var maxPostTextLen = 95;

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
    }, function(value){
      $scope.articles = value;
      $scope.articles.forEach(function(item){
        item.text = readMoreFunction(item.text, maxPostTextLen, '/articles/'+item.id);
      });
    });

    $scope.checkImageUrl = function (url) {
      return(url.match(/\.(jpeg|jpg|gif|png|svg)$/) != null);
    };

  }
);
