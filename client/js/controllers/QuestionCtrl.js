"use strict";
/**
 * Created by nevena on 7.9.15..
 */
app.controller('QuestionCtrl', [
  '$scope',
  'Answer',
  'Question',
  'Account',
  'Post',
  'Like',
  'Category',
  '$stateParams',
  '$timeout',
  function($scope, Answer, Question, Account, Post, Like, Category, $stateParams, $timeout){
    $scope.params = $stateParams;
    document.body.id = '';
    $scope.editing=false;

    function reloadQuestion(){
      $scope.question = Post.findById({
        id: $scope.params.id,
        filter: {
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
            $scope.answers[i].wholeTime = getWholeDate($scope.answers[i].timestamp);
            $scope.index = i;
            Post.likes.exists({
              id: $scope.answers[i].id,
              fk: Account.getCurrentId()
            }, function(value, responseHeaders){
              console.log(value);
              $scope.answers[$scope.index].liked = true;
            }, function(httpResponse){
              console.log(httpResponse);
              $scope.answers[$scope.index].liked = false;
            });
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
        console.log(httpResponse);
      });
    }

    reloadQuestion();

    $scope.sendAnswer = function (answer) {
      console.log(JSON.stringify(answer));
      if (answer.isAnonymous == undefined) {
        answer.isAnonymous = false;
      }
      Post.answers.create({
        id: $scope.question.id
      },{
        type: 'answer',
        text: answer.text,
        isAnonymous: answer.isAnonymous,
        timestamp: new Date,
        accountId: Account.getCurrentId()
      }, function(value, responseHeaders){
        console.log(value, responseHeaders);
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
      Post.comments.create({
        id: answer.id
      },{
        type: 'comment',
        text: comment.text,
        accountId: Account.getCurrentId(),
        timestamp: new Date()
      }, function(value, responseHeaders){
        console.log(value);
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
      }, function(httpResponse){
        console.log(httpResponse);
      })
    }

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





    /*Like and dislike for question*/
    $scope.likeQuestion = function(){
      if ($scope.question.isDisliked) return; //TODO ispisati poruku da ne moze da lajkuje dok ne undislajkuje
      Post.likes.link({id: $scope.question.id, fk: Account.getCurrentId()},
        {value: 1},
        function successCb(value, responseHeaders){
          console.log(value);
          $scope.question.isLiked = true;
          reloadQuestion();
        },
        function errorCb(error){
          console.log(error);
        }
      );
    };

    $scope.unlikeQuestion = function(){
      Post.likes.unlink({id: $scope.question.id, fk: Account.getCurrentId()},
        function successCb(value, responseHeaders){
          console.log(value);
          $scope.question.isLiked = false;
          reloadQuestion();
        },
        function errorCb(error){
          console.log(error);
        }
      );
    };

    $scope.dislikeQuestion = function(){
      if ($scope.question.isLiked) return;
      Post.likes.link({id: $scope.question.id, fk: Account.getCurrentId()},
        {value: -1},
        function successCb(value, responseHeaders){
          console.log(value);
          reloadQuestion();
        },
        function errorCb(error){
          console.log(error);
        }
      );
    };

    $scope.undislikeQuestion = function(){
      Post.likes.unlink({id: $scope.question.id, fk: Account.getCurrentId()},
        function successCb(value, responseHeaders){
          console.log(value);
          reloadQuestion();
        },
        function errorCb(error){
          console.log(error);
        }
      );
    };

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




    /*Like and dislike for answers*/
    $scope.likeAnswer = function(answer){
      Post.likes.link({id: answer.id, fk: Account.getCurrentId()},
        {value: 1},
        function successCb(value, responseHeaders){
          console.log(value);
          $scope.answers.forEach(function(e, i){
            if (e.id == answer.id) $scope.answers[i].liked = true;
          });
          //reloadQuestion();
        },
        function errorCb(error){
          console.log(error);
        }
      );
    };

    $scope.unlikeAnswer = function(answer){
      Post.likes.unlink({id: answer.id, fk: Account.getCurrentId()},
        function successCb(value, responseHeaders){
          console.log(value);
          $scope.answers.forEach(function(e, i){
            if (e.id == answer.id) $scope.answers[i].liked = false;
          });
          //reloadQuestion();
        },
        function errorCb(error){
          console.log(error);
        }
      );
    };

    $scope.dislikeAnswer = function(answer){
      Post.likes.link({id: answer.id, fk: Account.getCurrentId()},
        {value: -1},
        function successCb(value, responseHeaders){
          console.log(value);
          reloadQuestion();
        },
        function errorCb(error){
          console.log(error);
        }
      );
    };

    $scope.undislikeAnswer = function(answer){
      Post.likes.link({id: answer.id, fk: Account.getCurrentId()},
        function successCb(value, responseHeaders){
          console.log(value);
          reloadQuestion();
        },
        function errorCb(error){
          console.log(error);
        }
      );
    };



    /*Like and dislike for comments*/
    $scope.likeComment = function(comment){
      Post.likes.link({id: comment.id, fk: Account.getCurrentId()},
        {value: 1},
        function successCb(value, responseHeaders){
          console.log(value);
          reloadQuestion();
        },
        function errorCb(error){
          console.log(error);
        }
      );
    };

    $scope.unlikeComment = function(comment){
      Post.likes.unlink({id: comment.id, fk: Account.getCurrentId()},
        function successCb(value, responseHeaders){
          console.log(value);
          reloadQuestion();
        },
        function errorCb(error){
          console.log(error);
        }
      );
    };

    $scope.dislikeComment = function(comment){
      Post.likes.link({id: comment.id, fk: Account.getCurrentId()},
        {value: -1},
        function successCb(value, responseHeaders){
          console.log(value);
          reloadQuestion();
        },
        function errorCb(error){
          console.log(error);
        }
      );
    };

    $scope.undislikeComment = function(comment){
      Post.likes.link({fk: comment.id, id: Account.getCurrentId()},
        function successCb(value, responseHeaders){
          console.log(value);
          reloadQuestion();
        },
        function errorCb(error){
          console.log(error);
        }
      );
    };


    var updatePost = function(post){
      Account.posts.updateById({id: Account.getCurrentId(), fk: post.id}, {text: post.text},
        function(value, response){
        },
        function(httpResponse){console.log(httpResponse)});
    };

    var deletePost = function(post, successCb){
      Account.posts.destroyById({id: Account.getCurrentId(), fk: post.id}, {text: post.text},
        function(value, response){
          successCb();
        },
        function(httpResponse){console.log(httpResponse)});
    };

    $scope.deleteQuestion = function(){
      deletePost($scope.question, function(){
        window.location.replace('/#/');
      });
    };

    $scope.updateQuestion = function(question){
      $scope.editing = false;
      updatePost(question);
    };

    $scope.deleteAnswer = function(answer){
      deletePost(answer, function(){
        $scope.answers.forEach(function(e, i){
          if (answer.id == e.id) $scope.answers.splice(i, 1);
        });
      });
    };

    $scope.updateAnswer = function(answer){
      $scope.answers.forEach(function(e, i){
        if (e.id == answer.id) $scope.answers[i].editing = false;
      });
      updatePost(answer);
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

    $scope.updateComment = function(comment){
      $scope.answers.forEach(function(e, i){
        $scope.answers[i].comments.forEach(function(m, j){
          if (m.id == comment.id) $scope.answers[i].comments[j].editing = false;
        });
      });
      updatePost(comment);
    };


  }
]);
