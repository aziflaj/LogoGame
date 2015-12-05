(function() {
  angular
    .module('app')
    .controller('LevelsController', LevelsController);

  LevelsController.$inject = ['$http', 'levelsService'];

  function LevelsController($http, levelsService) {
    var self = this;

    levelsService.all().success(function(data) {
      self.levels = data;
    });
  };
})();
