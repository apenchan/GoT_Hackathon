var app = angular.module("gotApp", ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('characters', {
    url:'/characters',
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
  // .state('character.images', {
  //   url: '/images',
  //   controller: 'characterCtrl',
  //   templateUrl: 'templates/character-images.html'
  // })
  $urlRouterProvider.otherwise('/characters');
}]);
