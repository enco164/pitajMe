"use strict";
/**
 * Created by enco on 7.9.15..
 */
app.controller('HomeCtrl', [
  '$scope',
  'Account',
  'Category',
  'Post',
  'Like',
  function($scope, Account, Category, Post){

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
        if (value[i].account.sex == 'Male') $scope.questions[i].gender = 'boy';
        else $scope.questions[i].gender = 'girl';

        var timestamp = $scope.questions[i].timestamp;
        $scope.questions[i].timestamp = time(timestamp);

        $scope.questions[i].answ = Post.answers.count({
          id: $scope.questions[i].id
        }, function(value, responseHeaders){
        }, function(httpResponse){});
        /* TODO brojanje lajkova -- srediti da bude bolje, mozda cak i server to da uradi*/
        $scope.questions[i].likes_male = 0;
        $scope.questions[i].likes_female = 0;
        for(var j = 0; j < $scope.questions[i].likes.length; j++){
          if($scope.questions[i].likes[j].sex == 'Male') $scope.questions[i].likes_male++;
          if($scope.questions[i].likes[j].sex == 'Female') $scope.questions[i].likes_female++;
        }
        // TODO brojanje odgovora na pitanje - srediti kao i brojanje lajkova
        $scope.questions[i].ans_female = 0;
        $scope.questions[i].ans_male = 0;
        for(var k = 0; k < $scope.questions[i].answers.length; k++){
          if($scope.questions[i].answers[k].account.sex == 'Male') $scope.questions[i].ans_male++;
          if($scope.questions[i].answers[k].account.sex == 'Female') $scope.questions[i].ans_female++;
        }

      }
    }, function(httpResponse){});

    $scope.categories = Category.find({}, function(value){
      console.log(value);
    }, function(httpResponse){
      console.log(httpResponse);
    });

    $scope.question = {
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
    }, function(httpResponse){});

    $scope.sendQuestion = function(question){
      if (question.title != "" && question.text != "") {
        Post.create({}, {
          type: 'question',
          title: $scope.question.title,
          text: $scope.question.text,
          isAnonymous: $scope.question.isAnonymous,
          accountId: $scope.question.accountId,
          categoryId: $scope.question.category.id,
          timestamp: new Date(),
          opinionFrom: parseInt(question.opinionFrom)
        }, function (value, responseHeaders) {
          console.log(value);
          $scope.q = Post.findById({
            id: value.id,
            filter: {
              include: [
                {relation: 'account'}, {relation: 'category'}, {relation: 'likes'},
                {relation: 'answers', scope: {include: 'account'}}
              ]
            }
          }, function (value, responseHeaders) {
            $scope.q.timestamp = time($scope.q.timestamp);
            if (value.account.sex == 'Male') $scope.q.gender = 'boy';
            else $scope.q.gender = 'girl';
          }, function (httpResponse) {
          });
          $scope.questions.unshift($scope.q);
        }, function (httpResponse) {
          console.log(httpResponse);
        });
      }
    };

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

    //TODO sortiranje postova po broju odgovora
    var weekBefore = new Date(new Date() - new Date(1000*60*60*24*7));

    $scope.topQuestions = Post.find({
      filter:{
        where:{
          type: "question",
          timestamp: {gte: weekBefore}
        },
        include: 'answers'
      }
    }, function(value, responseHeaders){
      value = value.sort(sortByAnswersLen);
      value = value.slice(0,5);
      $scope.topQuestions = value;
    }, function(httpResponse){
      console.log(httpResponse);
    });

    $scope.mostLiked = Post.find({
      filter:{
        where:{
          type: "question",
          timestamp: {gte: weekBefore}
        },
        include: 'likes'
      }
    }, function(value, responseHeaders){
      value = value.sort(sortByLikesLen);
      value = value.slice(0,5);
      $scope.mostLiked = value;
    }, function(httpResponse){
      console.log(httpResponse);
    });

    function sortByAnswersLen(a, b) {
      return ((a.answers.length > b.answers.length) ? -1 : ((a.answers.length < b.answers.length) ? 1 : 0));
    }

    function sortByLikesLen(a, b) {
      return ((a.likes.length > b.likes.length) ? -1 : ((a.likes.length < b.likes.length) ? 1 : 0));
    }
  }
]);
