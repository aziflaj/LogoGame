(function() {
  angular
    .module('app')
    .controller('LevelsController', LevelsController);

  LevelsController.$inject = ['$http', 'LevelsService'];

  function LevelsController($http, LevelsService) {
    var self = this;

    LevelsService.all().success(function(data) {
      self.levels = data;
    });
  };
})();
