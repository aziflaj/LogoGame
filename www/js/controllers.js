angular.module('app.controllers', [])

.controller('logoGameCtrl', function($scope) {

})

.controller('aboutCtrl', function($scope) {

})

.controller('levelsCtrl', function($scope, $http) {

  $http.get('/data/levels.json').success(function(data) {
    $scope.levels = data;
  });

})
