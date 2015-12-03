angular.module('app')
  .controller('LevelsController', LevelsController);

LevelsController.$inject('$http');

function LevelsController($http) {
  var self = this;
  $http.get('/data/levels.json').success(function(data) {
    self.levels = data;
  });
};
