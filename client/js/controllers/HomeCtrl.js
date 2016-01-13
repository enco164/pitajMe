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
  .controller('HomeCtrl',
  function($scope, Account, Category, Post, Like, Sponsored){
    document.body.id = 'content-wrap';
    $scope.class = 'content-wrap';



    var pageLength = 3;
    var multiplier = 1;
    $scope.hasMoreQuestions = true;

    $scope.questions = [];

    $scope.sponsoredPosts = [];
    $scope.sponsoredList = Sponsored.find(
      {filter: {order: 'id ASC'}},
      function(value){
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
            function(value){
              if (value[0].account && value[0].account.sex && value[0].account.sex == 'Male') value[0].gender = 'boy';
              else value[0].gender = 'girl';
              $scope.sponsoredPosts[e.id-1] = value[0];
            },
            function(httpResponse){console.log(httpResponse)});
        });
      }, function(httpResponse){});


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
      $scope.articles = value.slice(0, 3);
    });

    $scope.loadNextQuestions = function(){
      var len = $scope.questions.length;
      Post.find({
        filter: {
          where: {type: 'question'},
          order: 'timestamp DESC',
          limit: pageLength,
          skip: len,
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
        multiplier++;
        for (var i = 0;i<value.length; i++){
          if (value[i].account && value[i].account.sex && value[i].account.sex == 'Male') value[i].gender = 'boy';
          else value[i].gender = 'girl';

          value[i].time = time(value[i].timestamp);

          value[i].answ = Post.answers.count({
            id: value[i].id
          }, function(value, responseHeaders){
          }, function(httpResponse){

          });
          value[i].dislikes = 0;
          value[i].likes = 0;
          value[i].dislikes = Like.dislikeCounterMethod({
            postId: value[i].id
          }, function(value, responseHeaders){}, function(httpResponse){});
          value[i].likes = Like.likeCounterMethod({
            postId: value[i].id
          }, function(value, responseHeaders){ }, function(httpResponse){});
          // TODO brojanje odgovora na pitanje - srediti kao i brojanje lajkova
          value[i].ans_female = 0;
          value[i].ans_male = 0;
          for(var k = 0; k < value[i].answers.length; k++){
            if(value[i].answers[k].account && value[i].answers[k].account.sex == 'Male') value[i].ans_male++;
            if(value[i].answers[k].account && value[i].answers[k].account.sex == 'Female') value[i].ans_female++;
          }
        }
        value.forEach(function(item){
          $scope.questions.push(item);
        });
        if(value.length < pageLength) $scope.hasMoreQuestions = false;
      }, function(httpResponse){
      });
    };

    $scope.loadNextQuestions();

    $scope.checkImageUrl = function (url) {
      return(url.match(/\.(jpeg|jpg|gif|png|svg)$/) != null);
    };

  }
);
