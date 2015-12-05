(function() {
  angular
    .module('app')
    .controller('SingleLevelController', SingleLevelController);

  SingleLevelController.$inject = ['$http', '$stateParams', 'levelsService'];

  function SingleLevelController($http, $stateParams, levelsService) {
    var vm = this;
    vm.level = {};
    vm.logos = [];

    activate();

    // IMPLEMENTATION
    function activate() {
      return getLevel().then(function() {
        console.log('Activated Level View');
      });
    }

    function getLevel() {
      var levelId = $stateParams.levelId;
      return levelsService.getLevelById(levelId)
        .then(function(response) {
          vm.level = response;
          vm.logos = response.content.logos;
        });
    }
  };
})();
