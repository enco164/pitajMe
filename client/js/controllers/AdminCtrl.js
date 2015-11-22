/**
 * Created by nevena on 19.11.15..
 */
app.controller('AdminCtrl', [
  '$scope',
  'Account',
  'Post',
  'Category',
  '$timeout',
  function($scope, Account, Post, Category, $timeout) {
    document.body.id = '';
    /*$scope.questionCurrentPage = 1;
    $scope.answerCurrentPage = 1;
    $scope.commentCurrentPage = 1;*/
    $scope.questionNum = 10;
    $scope.answerNum = 10;
    $scope.commentNum = 10;


    function getQuestions(){
      $scope.questions = Post.find({
        filter:{
          where: {
            type: 'question'
            //timestamp: {gte: weekBefore, lte: new Date()}
          },
          include: ['category', 'answers', 'account'],
          order: 'timestamp DESC'
          //limit: 25
        }
      }, function(value, responseHeaders){
        $scope.totalItems = $scope.questions.length;
        $scope.questions.forEach(function(e, i){
          $scope.questions[i].editing = false;
          $scope.questions[i].owner = $scope.questions[i].accountId == Account.getCurrentId();
          $scope.questions[i].wholeTime = getWholeDate(e.timestamp);
          $scope.questions[i].timestamp = time(e.timestamp);
        });
        console.log(value);
      }, function(error){
        console.log(error);
      });
    }

    function getAnswers(){
      $scope.answers = Post.find({
        filter:{
          where: {
            type: 'answer'
            //timestamp: {gte: weekBefore, lte: new Date()}
          },
          include: [{relation: 'question'}, {relation: 'account'}],
          order: 'timestamp DESC'
          //limit: 5
        }
      }, function(value, responseHeaders){
        $scope.answers.forEach(function(e, i){
          $scope.answers[i].editing = false;
          $scope.answers[i].owner = $scope.answers[i].accountId == Account.getCurrentId();
          $scope.answers[i].wholeTime = getWholeDate(e.timestamp);
          $scope.answers[i].timestamp = time(e.timestamp);
        });
        console.log(value);
      }, function(error){
        console.log(error);
      });
    }

    function getComments(){
      $scope.comments = Post.find({
        filter:{
          where: {
            type: 'comment'
            //timestamp: {gte: weekBefore, lte: new Date()}
          },
          include: [
            {relation: 'answer',
              scope:{
                include:[
                  {relation: 'question'}
                ]
              }},
            {relation: 'account'}
          ],
          order: 'timestamp DESC'
          //limit: 5
        }
      }, function(value, responseHeaders){
        $scope.comments.forEach(function(e, i){
          $scope.comments[i].editing = false;
          $scope.comments[i].owner = $scope.comments[i].accountId == Account.getCurrentId();
          $scope.comments[i].wholeTime = getWholeDate(e.timestamp);
          $scope.comments[i].timestamp = time(e.timestamp);
        });
        console.log(value);
      }, function(error){
        console.log(error);
      });
    }

    function getCategories(){
      $scope.categories = Category.find({
        filter:{ order: 'name ASC'}
      }, function(value, responseHeaders){}, function(httpResponse){});
    }

    function getAccounts(){
      $scope.accounts = Account.find({
        filter:{ order: 'username ASC'}
      }, function(value, responseHeaders){}, function(httpResponse){});
    }

    getQuestions();
    getAnswers();
    getComments();
    getCategories();
    getAccounts();


    $scope.deleteCategory = function(category){
      Category.removeById({id: category.id},
        function successCb(value, responseHeaders){
          $scope.categories.forEach(function(e, i){if (e.id == category.id) $scope.categories.splice(i, 1);});
        },
        function errorCb(error){
          console.log(error);
        });
    };

    $scope.deleteAccount = function(account){
      Account.removeById({id: account.id},
        function successCb(value, responseHeaders){
          $scope.accounts.forEach(function(e, i){if (e.id == account.id) $scope.accounts.splice(i, 1);});
        },
        function errorCb(error){
          console.log(error);
        });
    };

    $scope.deletePost = function(post){
      Post.removeById({id: post.id},
        function successCb(value, responseHeaders){
          if (post.type == 'question'){$scope.questions.forEach(function(e, i){if (e.id == post.id) $scope.questions.splice(i, 1);});}
          if (post.type == 'answer'){$scope.answers.forEach(function(e, i){if (e.id == post.id) $scope.answers.splice(i, 1);});}
          if (post.type == 'comment'){$scope.comments.forEach(function(e, i){if (e.id == post.id) $scope.comments.splice(i, 1);});}
        },
        function errorCb(error){
          console.log(error);
        });
    };

    $scope.addCategory = function(category){
      console.log(category);
      Category.create({}, {
        name: category.name,
        about: category.about
      }, function(value, responseHeaders){
        console.log(value, responseHeaders);
        getCategories();
        /*$scope.categories.push(value);*/
        var scrollId = '#category-' + value.id;
        $timeout(function(){
          $('html, body').animate({
            scrollTop: $(scrollId).offset().top-30
          }, 1000);
        }, 1500);
      }, function(httpResponse){
        console.log(httpResponse);
      })
    }

    $scope.updateCategory = function(category){
      Category.update({
        where: {
          id: category.id
        }
      }, {
        name: category.name,
        about: category.about
    }, function(value, responseHeaders){
        category.editing = false;
      }, function(httpResponse){});
    };

    /*$scope.setPage = function (pageNo) {
      $scope.questionCurrentPage = pageNo;
    };

    $scope.pageChanged = function() {
      $timeout(function(){
        $('html, body').animate({
          scrollTop: 0
        }, 1000);
      }, 500);

      console.log('Page changed to: ' + $scope.questionCurrentPage);
    };*/


    $scope.loadMore = function(post) {
      if (post == 'question') {
        $scope.questionNum += 10;
        if ($scope.questionNum >= $scope.questions.length)
          $scope.hideQuestionLoad = true;
      }
      if (post == 'answer') {
        $scope.answerNum += 10;
        if ($scope.answerNum >= $scope.answers.length)
          $scope.hideAnswerLoad = true;
      }
      if (post == 'comment') {
        $scope.commentNum += 10;
        if ($scope.commentNum >= $scope.comments.length)
          $scope.hideCommentLoad = true;
      }
    }
  }
 ]);
