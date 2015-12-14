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
  .controller('HomeCtrl', [
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

      $scope.questions = Post.find({
        filter: {
          where: {type: 'question'},
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
        for (var i = 0;i<$scope.questions.length; i++){
          if (value[i].account && value[i].account.sex && value[i].account.sex == 'Male') $scope.questions[i].gender = 'boy';
          else $scope.questions[i].gender = 'girl';

          $scope.questions[i].time = time($scope.questions[i].timestamp);

          $scope.questions[i].answ = Post.answers.count({
            id: $scope.questions[i].id
          }, function(value, responseHeaders){
          }, function(httpResponse){

          });
          /* TODO brojanje lajkova -- srediti da bude bolje, mozda cak i server to da uradi*/
          $scope.questions[i].dislikes = 0;
          $scope.questions[i].likes = 0;
          $scope.questions[i].dislikes = Like.dislikeCounterMethod({
            postId: $scope.questions[i].id
          }, function(value, responseHeaders){}, function(httpResponse){});
          $scope.questions[i].likes = Like.likeCounterMethod({
            postId: $scope.questions[i].id
          }, function(value, responseHeaders){ }, function(httpResponse){});
          // TODO brojanje odgovora na pitanje - srediti kao i brojanje lajkova
          $scope.questions[i].ans_female = 0;
          $scope.questions[i].ans_male = 0;
          for(var k = 0; k < $scope.questions[i].answers.length; k++){
            if($scope.questions[i].answers[k].account && $scope.questions[i].answers[k].account.sex == 'Male') $scope.questions[i].ans_male++;
            if($scope.questions[i].answers[k].account && $scope.questions[i].answers[k].account.sex == 'Female') $scope.questions[i].ans_female++;
          }

        }
      }, function(httpResponse){});

      $scope.sponsoredPosts = [];
      $scope.sponsoredList = Sponsored.find(
        {filter: {order: 'id ASC'}},
        function(value, responseHeaders){
	  value.forEach(function(e, i){
            Post.find({
                filter: {
                  where: {id: e.postId},
                  include: [
                    {relation: 'account'},
                    {relation: 'category'},
                    {relation: 'likes'},
                    {relation: 'answers',
                      scope: {include: 'account'}
                    }
                  ]
                }
              },
              function(value, responseHeaders){
                if (value[0].account && value[0].account.sex && value[0].account.sex == 'Male') value[0].gender = 'boy';
                else value[0].gender = 'girl';
                $scope.sponsoredPosts[e.id-1] = value[0];
              },
              function(httpResponse){console.log(httpResponse)});
          });
        }, function(httpResponse){});


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
