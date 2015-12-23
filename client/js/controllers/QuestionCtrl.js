"use strict";
/**
 * Created by nevena on 7.9.15..
 */
app.controller('QuestionCtrl', [
  '$scope',
  'Answer',
  'Question',
  'Comment',
  'Account',
  'Post',
  'Like',
  'Category',
  '$stateParams',
  '$timeout',
  '$state',
  function($scope, Answer, Question, Comment, Account, Post, Like, Category, $stateParams, $timeout, $state){
    $scope.params = $stateParams;
    document.body.id = '';
    $scope.editing=false;

    function reloadQuestion(){
      $scope.question = Post.findById({
        id: $scope.params.id,
        filter: {
          where: {type: 'question'},
          include: [
            {relation: 'category'},
            {relation: 'account'},
            {relation: 'likes'},
            {relation: 'answers',
              order: 'timestamp DESC',
              scope: {include: [
                {relation: 'account'},
                {relation: 'likes'},
                {relation: 'comments',
                  order: 'timestamp ASC',
                  scope: { include: [
                    {relation: 'account'},
                    {relation: 'likes'}
                  ]}
                }
              ]}
            }
          ]
        }
      }, function(value, responseHeaders){
        if(value.type !== 'question') $state.go('home');
        /*$scope.question.likes = {};
         $scope.question.likes = Post.likes({id: $scope.question.id, filter: {where:{value: -1}}});
         */
        if (value.account.sex == 'Male') $scope.question.gender = 'boy';
        else $scope.question.gender = 'girl';

        $scope.dislikeCount = Like.dislikeCounterMethod({
          postId: $scope.params.id
        }, function(value, responseHeaders){}, function(httpResponse){});

        $scope.likeCount = Like.likeCounterMethod({
          postId: $scope.params.id
        }, function(value, responseHeaders){}, function(httpResponse){});

        //$scope.likeAccounts = Like.likeAccountsMethod({postId: $scope.params.id}, function(value, responseHeaders){}, function(httpResponse){});
        //$scope.dislikeAccounts = Like.dislikeAccountsMethod({postId: $scope.params.id}, function(value, responseHeaders){}, function(httpResponse){});

        $scope.question.ans_female = 0;
        $scope.question.ans_male = 0;
        for(var k = 0; k < $scope.question.answers.length; k++){
          if($scope.question.answers[k].account.sex == 'Male') $scope.question.ans_male++;
          if($scope.question.answers[k].account.sex == 'Female') $scope.question.ans_female++;
        }



        $scope.question.isLiked = false;
        $scope.question.isDisliked = false;
        questionLiked();
        $scope.question.owner = $scope.question.accountId == Account.getCurrentId();
        $scope.question.wholeTime = getWholeDate(value.timestamp);
        $scope.question.timestamp = time(value.timestamp);
        $scope.answers = value.answers;
        if(!!$scope.answers) {
          for (var i = 0; i < $scope.answers.length; i++) {
            $scope.answers[i].liked = false;
            answerLiked(i);
            $scope.answers[i].wholeTime = getWholeDate($scope.answers[i].timestamp);
            $scope.index = i;
            $scope.answers[i].editing = false; //da li se trenutno edituje odgovor
            $scope.answers[i].owner = $scope.answers[i].account.id == Account.getCurrentId();
            $scope.answers[i].timestamp = time($scope.answers[i].timestamp);

            if(!!$scope.answers[i].comments) {
              $scope.answers[i].comments.forEach(function (e, j) {
                $scope.answers[i].comments[j].editing = false;
                $scope.answers[i].comments[j].wholeTime = getWholeDate($scope.answers[i].comments[j].timestamp);
                $scope.answers[i].comments[j].owner = $scope.answers[i].comments[j].account.id == Account.getCurrentId();
                $scope.answers[i].comments[j].timestamp = time(e.timestamp);
              });
            }
          }
        }
      }, function(httpResponse){
        $state.go('home');
      });
    }

    reloadQuestion();

    $scope.sendAnswer = function (answer) {
      console.log(JSON.stringify(answer));
      if (answer.isAnonymous == undefined) {
        answer.isAnonymous = false;
      }
      Account.posts.create({
        id: Account.getCurrentId()
      },{
        type: 'answer',
        text: answer.text,
        isAnonymous: answer.isAnonymous,
        timestamp: new Date,
        accountId: Account.getCurrentId()
      }, function(value, responseHeaders){
        console.log(value, responseHeaders);
        //Linkovanje odgovora i pitanja
        Post.answers.link({
          id: $scope.question.id,
          fk: value.id
        }, {}, function(value, responseHeaders){
          console.log("success", value);
        }, function(httpResponse){
          console.log("failure", httpResponse)
        });
        $scope.a = Post.findById({
          id: value.id,
          filter: {
            include: [
              {relation: 'account'}, {relation: 'category'}, {relation: 'likes'},
              {relation: 'comments', scope: {include: 'account'}}
            ]
          }
        }, function(value, responseHeaders){
          $scope.a.comments = [];
          $scope.a.owner = true;
          $scope.a.timestamp = time($scope.a.timestamp);
          //$scope.answers.unshift(value);
          $scope.answers.push($scope.a);
          var scrollId = '#answer-' + $scope.a.id;
          $timeout(function(){
            $('html, body').animate({
              scrollTop: $(scrollId).offset().top-30
            }, 1000);
          }, 500);
        }, function(httpResponse){});
      }, function(httpResponse){
        console.log(httpResponse);
      });
    };

    $scope.sendComment = function(answer, comment){
      Account.posts.create({
        id: Account.getCurrentId()
      }, {
        type: 'comment',
        text: comment.text,
        accountId: Account.getCurrentId(),
        timestamp: new Date()
      }, function(value, responseHeaders){
        //Linkovanje komentara i odgovora
        Post.comments.link({
          id: answer.id,
          fk: value.id
        }, {}, function(value, responseHeaders){
          console.log("success", value);
        }, function(httpResponse){
          console.log("failure", httpResponse)
        });
        $scope.c = Post.findById({
          id: value.id,
          filter: { include: [ {relation: 'account'} ] }
        }, function(value, responseHeaders){
          $scope.c.owner = true;
          $scope.c.timestamp = time(value.timestamp);
          $scope.answers.forEach(function(e, i){
            if (!$scope.answers[i].comments) $scope.answers[i].comments = [];
            if (e.id == answer.id) {
              $scope.answers[i].comments.push($scope.c);
              var scrollId = '#comment-' + $scope.c.id;
              $timeout(function(){
                $('html, body').animate({
                  scrollTop: $(scrollId).offset().top-30
                }, 1000);
              }, 500);
            }
          });
        }, function(httpResponse){});
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

    $scope.logged = !!Account.isAuthenticated();


    function questionLiked(){
      Post.likes.exists({
        id: $scope.params.id,
        fk: Account.getCurrentId()
      }, function(value, responseHeaders){
        Like.findOne({
          filter: { where: { accountId: Account.getCurrentId(),postId: $scope.params.id }}
        }, function(value, responseHeaders){
          if (value.value == 1) $scope.question.isLiked = true;
          if (value.value == -1) $scope.question.isDisliked = true;
        }, function(httpResponse){
        });
      }, function(httpResponse){
        $scope.question.isLiked = false;
        $scope.question.isDisliked = false;
      });
    }

    function answerLiked(index){
      Post.likes.exists({
        id: $scope.answers[index].id,
        fk: Account.getCurrentId()
      }, function(value, responseHeaders){
        $scope.answers[index].liked = true;
      }, function(httpResponse){
        $scope.answers[index].liked = false;
      });
    }



    // *** LIKE, DISLIKE, UNLIKE, UNDISLIKE ***

    var likeDislikePost = function(post, value, successCb){
      Account.likes.link({
          id:Account.getCurrentId(),
          fk: post.id
        },
        { value: value },
        function (value, responseHeaders){ successCb(); },
        function (httpResponse){ console.log(httpResponse); }
      );
    };

    var unlikeUndislikePost = function(post, successCb){
      Account.likes.unlink({ id: Account.getCurrentId(), fk: post.id },
        function (value, responseHeaders){ successCb(); },
        function (httpResponse){ console.log(httpResponse); }
      );
    };

    // QUESTION
    $scope.likeDislikeQuestion = function(value){
      if ( value == 1 && $scope.question.isDisliked) return; //TODO ispisati poruku da ne moze da lajkuje dok ne undislajkuje
      if ( value == -1 && $scope.question.isLiked) return;
      likeDislikePost($scope.question, value, function(){
        reloadQuestion();
      });

    };

    $scope.unlikeUndislikeQuestion = function(){
      unlikeUndislikePost($scope.question, function(){
        reloadQuestion();
      });
    };


    // ANSWER
    $scope.likeDislikeAnswer = function(answer, value){
      likeDislikePost(answer, value, function(){
        $scope.answers.forEach(function(e, i){
          if (value == 1 && e.id == answer.id) $scope.answers[i].liked = true;
          if (value == -1 && e.id == answer.id) $scope.answers[i].liked = false;
        });
      });
    };

    $scope.unlikeUndislikeAnswer = function(answer){
      unlikeUndislikePost(answer, function(){
        $scope.answers.forEach(function(e, i){
          if (e.id == answer.id) $scope.answers[i].liked = false;
        });
      });
    };


    // COMMENT
    $scope.likeDislikeComment = function(comment, value){
      likeDislikePost(comment, value, function(){
        reloadQuestion();
      });
    };

    $scope.unlikeUndislikeComment = function(comment){
      unlikeUndislikePost(comment, function(){
        reloadQuestion();
      });
    };




    // *** UPDATE ***

    var updatePost = function(post){
      Account.posts.updateById({id: Account.getCurrentId(), fk: post.id}, {text: post.text},
        function(value, response){
        },
        function(httpResponse){console.log(httpResponse)});
    };

    $scope.updateQuestion = function(question){
      $scope.editing = false;
      updatePost(question);
    };

    $scope.updateAnswer = function(answer){
      $scope.answers.forEach(function(e, i){
        if (e.id == answer.id) $scope.answers[i].editing = false;
      });
      updatePost(answer);
    };

    $scope.updateComment = function(comment){
      $scope.answers.forEach(function(e, i){
        $scope.answers[i].comments.forEach(function(m, j){
          if (m.id == comment.id) $scope.answers[i].comments[j].editing = false;
        });
      });
      updatePost(comment);
    };



    // *** DELETE ***

    var deletePost = function(post, successCb){
      Account.posts.destroyById({id: Account.getCurrentId(), fk: post.id}, {text: post.text},
        function(value, response){
          successCb();
        },
        function(httpResponse){console.log(httpResponse)});
    };

    $scope.deleteQuestion = function(){
      deletePost($scope.question, function(){
        $state.go('home');
      });
    };

    $scope.deleteAnswer = function(answer){
      deletePost(answer, function(){
        $scope.answers.forEach(function(e, i){
          if (answer.id == e.id) $scope.answers.splice(i, 1);
        });
      });
    };

    $scope.deleteComment = function(comment, answer){
      deletePost(comment, function(){
        $scope.answers.forEach(function(e, i){
          if (answer.id == e.id)
            $scope.answers[i].comments.forEach(function(c, j){
              if (comment.id == c.id) $scope.answers[i].comments.splice(j, 1);
            });
        });
      });
    };

  }
]);
