"use strict";
/**
 * Created by nevena on 7.9.15..
 */
app
  /*.directive('onLastRepeat', function() {
    return function(scope, element, attrs) {
      if (scope.$last) setTimeout(function(){
        console.log(element);
        scope.$emit('onRepeatLast', element, attrs);
      }, 1);
    };
  })*/
  .controller('CategoryCtrl', [
  '$scope',
  'Category',
  'Post',
  'Account',
  'Like',
  '$stateParams',
  function($scope, Category, Post, Account, Like, $stateParams){
    document.body.id = '';
    $scope.params = $stateParams;
    $scope.interest = false;

    /*$scope.$on('onRepeatLast', function(scope, element, attrs){
      $('.grid').isotope({
        // options
        layoutMode: 'masonry',
        itemSelector: '.grid-item',
        masonry: {
          gutter: 30
        }
      });
    });*/

    $scope.cat = Category.findById({
      id: $scope.params.id
    }, function(value){
      console.log(value);
    }, function(httpResponse){
      console.log(httpResponse);
    });


    Category.interests.exists({
      id: $scope.params.id,
      fk: Account.getCurrentId()
    }, function(value){
      console.log(value);
      $scope.interest = true;
    }, function(httpResponse){
      console.log(httpResponse);
    });

    $scope.questions = Category.posts({
      id: $scope.params.id,
      filter: {
        where: { or :[{type: 'question'}, {type: 'article'} ]},
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
      for (var i = 0;i<$scope.questions.length; i++){
        if (value[i].account.sex == 'Male') $scope.questions[i].gender = 'boy';
        else $scope.questions[i].gender = 'girl';

        $scope.questions[i].timestamp = time($scope.questions[i].timestamp);

        $scope.questions[i].answ = Post.answers.count({
          id: $scope.questions[i].id
        }, function(value, responseHeaders){
        }, function(httpResponse){});
        // TODO brojanje odgovora na pitanje - srediti kao i brojanje lajkova
        $scope.questions[i].ans_female = 0;
        $scope.questions[i].ans_male = 0;
        for(var k = 0; k < $scope.questions[i].answers.length; k++){
          if($scope.questions[i].answers[k].account.sex == 'Male') $scope.questions[i].ans_male++;
          if($scope.questions[i].answers[k].account.sex == 'Female') $scope.questions[i].ans_female++;
        }
        //postavljanje broja lajkova
        $scope.questions[i].likeCount = Like.likeCounterMethod({
          postId: $scope.questions[i].id
        }, function(value, responseHeaders){}, function(httpResponse){});
        //
        $scope.questions[i].dislikeCount = Like.dislikeCounterMethod({
          postId: $scope.questions[i].id
        }, function(value, responseHeaders){}, function(httpResponse){});

      }
      console.log(value);
    }, function(httpResponse){
      console.log(httpResponse);
    });

    $scope.likeCategory = function(){
      Account.interests.link({
        id: Account.getCurrentId(),
        fk: $scope.params.id
      }, {}, function(value){
          $scope.interest = true;
        },
        function(httpResponse){console.log(httpResponse)});
    };

    $scope.dislikeCategory = function(){
      Account.interests.unlink({
        id: Account.getCurrentId(),
        fk: $scope.params.id
      }, function(value){
        console.log(value);
        $scope.interest = false;
      }, function(httpResponse){
        console.log(httpResponse);
      });
    };

  }
]);
