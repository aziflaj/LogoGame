(function() {
  angular
    .module('app')
    .controller('LevelsController', LevelsController);

  LevelsController.$inject = ['$http', 'levelsService'];

  function LevelsController($http, levelsService) {
    var vm = this;
    vm.levels = [];

    activate();

    // IMPLEMENTATION

    function activate() {
      return getAllLevels().then(function() {
        console.log('Activated Levels View');
      });
    }

    function getAllLevels() {
      console.log('Activating');
      return levelsService.getAllLevels()
        .then(function(response) {
          vm.levels = response.data;
          return vm.levels;
        });
    }
  };
})();
