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
  '$routeParams',
  function($scope, Answer, Question, Account, Post, $routeParams){
    $scope.params = $routeParams;

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
        $scope.question.isLiked = false;
        questionLiked();
        $scope.question.owner = $scope.question.accountId == Account.getCurrentId();
        $scope.question.wholeTime = getWholeDate(value.timestamp);
        $scope.question.timestamp = time(value.timestamp);
        $scope.answers = value.answers;
        if(!!$scope.answers) {
          for (var i = 0; i < $scope.answers.length; i++) {

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

            $scope.answers[i].owner = $scope.answers[i].account.id == Account.getCurrentId();
            $scope.answers[i].timestamp = time($scope.answers[i].timestamp);

            if(!!$scope.answers[i].comments) {
              $scope.answers[i].comments.forEach(function (e, j) {
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
        value.comments = [];
        value.owner = true;
        //$scope.answers.unshift(value);
        $scope.answers.push(value);
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
        value.owner = true;
        $scope.answers.forEach(function(e, i){
          if (e.id == answer.id) $scope.answers[i].comments.push(value);
        });
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
      Post.likes.link({id: $scope.question.id, fk: Account.getCurrentId()},
        {value: 1},
        function successCb(value, responseHeaders){
          console.log(value);
          $scope.question.isLiked = true;
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
        },
        function errorCb(error){
          console.log(error);
        }
      );
    };

    $scope.dislikeQuestion = function(){
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
      Post.likes.link({id: $scope.question.id, fk: Account.getCurrentId()},
        function successCb(value, responseHeaders){
          console.log(value);
          reloadQuestion();
        },
        function errorCb(error){
          console.log(error);
        }
      );
    };

    function questionLiked (){
      Post.likes.exists({
        id: $scope.params.id,
        fk: Account.getCurrentId()
      }, function(value, responseHeaders){
        $scope.question.isLiked = true;
        console.log(value);
      }, function(httpResponse){
        console.log(httpResponse);
        //$scope.question.isLiked = false;
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



    $scope.deleteQuestion = function(){
    //TODO Post.question.destroyAll ??
      Post.destroyById({id: $scope.question.id},
        function successCb(value, responseHeaders){
          console.log(value);
          window.location.replace('/#/');
        },
        function errorCb(error){
          console.log(error);
        });
    };

    $scope.deleteAnswer = function(answer){
      Post.destroyById({id: answer.id},
        function successCb(value, responseHeaders){
          console.log(value);
          $scope.answers.forEach(function(e, i){
            if (answer.id == e.id) $scope.answers.splice(i, 1);
          });
        },
        function errorCb(error){
          console.log(error);
        });

    };

    $scope.deleteComment = function(comment, answer){
      Post.destroyById({id: comment.id},
        function successCb(value, responseHeaders){
          console.log(value);
          $scope.answers.forEach(function(e, i){
            if (answer.id == e.id)
              $scope.answers[i].comments.forEach(function(c, j){
                if (comment.id == c.id) $scope.answers[i].comments.splice(j, 1);
              })
          });
        },
        function errorCb(error){
          console.log(error);
        });

    };


  }
]);
