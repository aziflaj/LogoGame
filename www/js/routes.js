angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('logoGame', {
      url: '/main',
      templateUrl: 'templates/logoGame.html',
      controller: 'logoGameCtrl'
    })
        
      
    
      
        
    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html',
      controller: 'aboutCtrl'
    })
        
      
    
      
        
    .state('levels', {
      url: '/levels',
      templateUrl: 'templates/levels.html',
      controller: 'levelsCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main');

});