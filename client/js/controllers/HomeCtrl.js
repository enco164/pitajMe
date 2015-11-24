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
    '$state',
    function($scope, Account, Category, Post, Like, $state){
      document.body.id = 'content-wrap';
      $scope.class = 'content-wrap';

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

      /*$scope.question = {
        title: "",
        text: "",
        isAnonymous: "",
        accountId: Account.getCurrentId(),
        category  : ""
      };

      $scope.categories = Category.find({}, function(value, responseHeaders){
        $scope.categories.forEach(function(e, i){
          $scope.categories[i].count = Category.posts.count({
            id: e.id
          }, function(){}, function(){});
        });
      }, function(httpResponse){});*/

      /*$scope.sendQuestion = function(question){
        if (question.title != "" && question.text != "") {
          Post.create({}, {
            type: 'question',
            title: $scope.question.title,
            text: $scope.question.text,
            isAnonymous: $scope.question.isAnonymous,
            accountId: $scope.question.accountId,
            categoryId: $scope.question.category.id,
            timestamp: new Date(),
            opinionFrom: parseInt(question.opinionFrom),
            image: $scope.question.image
          }, function (value, responseHeaders) {
            console.log(value);
            $state.transitionTo('question', {id: value.id});
            $scope.q = Post.findById({
              id: value.id,
              filter: {
                include: [
                  {relation: 'account'}, {relation: 'category'}, {relation: 'likes'},
                  {relation: 'answers', scope: {include: 'account'}},
                  {relation: 'likes'},
                  {relation: 'answers',
                    scope: {include: 'account'}
                  }
                ]
              }
            }, function (value, responseHeaders) {
              $scope.q.timestamp = time($scope.q.timestamp);
              if (value.account.sex == 'Male') $scope.q.gender = 'boy';
              else $scope.q.gender = 'girl';
              $scope.q.dislikes = 0;
              $scope.q.likes = 0;
              $scope.q.ans_male = 0;
              $scope.q.ans_female = 0;
              console.log('new item', value);
              var $items = $(
                '<div class="grid-item">'+
                '<article>'+
                '<a href="/#/question/"'+$scope.q.id+'>'+
                '<img src="img/post-test-6.jpg" alt="Alt tekst za sliku" class="img-responsive"/>'+
                '</a>'+
                '<div class="post-content clearfix '+$scope.q.gender+'-post">'+
                '<h1>'+
                '<a href="/#/user-detail/'+$scope.q.accountId+'">'+$scope.q.account.username+'</a>'+
                '<span>'+$scope.q.time+'</span>'+
                '</h1>'+
                '<h2><a href="/#/question/'+$scope.q.id+'">'+$scope.q.title+'</a></h2>'+
                '<h3><a href="/#/category/'+$scope.q.category.id+'">'+$scope.q.category.name+'</a></h3>'+
                '<p>'+$scope.q.text+'</p>'+
                '<div class="stats">'+
                '<div class="girls"><i class="fa fa-female"> </i>'+$scope.q.ans_female+'</div>'+
                '<div class="boys"><i class="fa fa-male"> </i>'+$scope.q.ans_male+'</div>'+
                '<div class="girls"><i class="fa fa-thumbs-o-up"></i>'+$scope.q.dislikes+'</div>'+
                '<div class="girls"><i class="fa fa-thumbs-o-down"></i>'+$scope.q.dislikes+'</div>'+
                '</div>'+
                '</div>'+
                '</article>'+
                '</div>');
              $('.grid').prepend( $items )
                .isotope( 'prepended', $items );
            }, function (httpResponse) {
            });
            $scope.questions.unshift($scope.q);
          }, function (httpResponse) {
            console.log(httpResponse);
          });
        }
      };*/

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
