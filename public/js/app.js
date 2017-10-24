var app = angular.module("gotApp", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $stateProvider
  .state('home', {
    url:'/home',
    controller: 'mainCtrl',
    templateUrl: '/templates/home.html'
  })
  .state('character',{
    url:'/character/:id',
    controller: 'characterCtrl',
    templateUrl: '/templates/character.html',
    params:{
      characterParam: null
    }
  })
  .state('auth', {
    url: '/authorization?token&name',
    controller: function($rootScope, $stateParams, $state, $http) {
      if ($stateParams.token) {
        var user = {
          name: $stateParams.name,
          // token: $stateParams.token
        }
        localStorage.setItem("user", JSON.stringify(user));
        $rootScope.currentUser = user.name;
        $http.defaults.headers.common.Authorization = 'Bearer ' + user.token;
        $state.go('home');
      }
    }
  })
  .state('profile', {
    url: '/profile',
    controller: 'profileCtrl',
    templateUrl: '/templates/profile.html',
    params: {
      profileParam: null
    }
  })
  // $urlRouterProvider.otherwise('/characters');
});

app.run(function($rootScope) {
  var user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    $rootScope.currentUser = user.name;
  }
});
