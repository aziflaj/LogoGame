angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('logoGame', {
      url: '/main',
      templateUrl: 'templates/logoGame.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .state('levels', {
      url: '/levels',
      templateUrl: 'templates/levels.html',
      controller: 'LevelsController',
      controllerAs: 'vm'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main');

});
