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
    })
    .state('level', {
      url: '/levels/:levelId',
      templateUrl: 'templates/level.html',
      controller: 'SingleLevelController',
      controllerAs: 'vm'
    })
    .state('logo', {
      url: '/levels/:levelId/logo/:logoId',
      templateUrl: 'templates/logo.html',
      controller: 'LogoController',
      controllerAs: 'vm'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main');

});
