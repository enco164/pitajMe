/**
 * Created by enco on 14.9.15..
 */
app
  .run(function ($state,$rootScope) {
    $rootScope.$state = $state;
    $rootScope.AT = localStorage.getItem('$LoopBack$accessTokenId');
  })
  .controller(
  'MainCtrl', function($scope, $route, $stateParams, $location, Account, $state, Category, Post, $rootScope) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $stateParams;

    $scope.currentId = Account.getCurrentId();
    $scope.isAuthenticated = Account.isAuthenticated();

    $scope.getProfile = function(){
      $scope.currentId = Account.getCurrentId();
      $state.go('user-detail');
    };

    $scope.getAT = function(){
      return $rootScope.AT;
    };

    $scope.isAdmin = function(){
      return true;
    };

    $scope.logged = Account.isAuthenticated();

    $scope.logout = function(){
      Account.logout({},{
        id: Account.getCurrentId()
      }, function(value, responseHeaders) {
        $scope.isAuthenticated = false;
        $rootScope.AT = '';
        $state.go('login');
      }, function(httpResponse){
        console.log(httpResponse);
      });
    };

    $scope.isAuth = function(){
      return Account.isAuthenticated();
    };

    $scope.currentID = function(){
      return Account.getCurrentId();
    };

    $scope.question = {
      title: "",
      text: "",
      isAnonymous: "",
      accountId: Account.getCurrentId(),
      category  : ""
    };

    $scope.sendQuestion = function(question){
      if (question.image && !checkImageUrl(question.image)) {
        $('#image-url').popover('show');
        return;
      }
      if (question.title != "" && question.text != "") {
        Post.create({}, {
          type: 'question',
          title: $scope.question.title,
          text: $scope.question.text,
          isAnonymous: $scope.question.isAnonymous,
          accountId: Account.getCurrentId(),
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
              '<div class="grid-item col-md-4 col-sm-6 col-xs-12">'+
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
          /*$scope.questions.unshift($scope.q);*/
        }, function (httpResponse) {
          console.log(httpResponse);
        });
      }
    };

    $scope.categories = Category.find({}, function(value, responseHeaders){
      $scope.categories.forEach(function(e, i){
        $scope.categories[i].count = Category.posts.count({
          id: e.id
        }, function(){}, function(){});
      });
    }, function(httpResponse){});

    var checkImageUrl = function (url) {
      return(url.match(/\.(jpeg|jpg|gif|png|svg)$/) != null);
    };



  }
);
