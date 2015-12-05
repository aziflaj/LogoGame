(function(){
  angular
    .module('app')
    .controller('LogoController', LogoController);

  LogoController.$inject = ['$stateParams', 'levelsService'];

  function LogoController($stateParams, levelsService) {
    var vm = this;
    vm.check = check;
    vm.level = {};
    vm.logo = {};

    activate();

    // IMPLEMENTATION

    function activate() {
      return getLogo().then(function() {
        console.log('Activated Logo View');
      });
    }

    function check(inputName) {
      if (angular.isDefined(inputName) && inputName.toUpperCase() === self.logo.name.toUpperCase()) {
        window.localStorage[$stateParams.levelId + self.logo.name] = true; //store as found
        console.log('Correct!');
        // history.back(-1);
      } else {
        //TODO: should tilt the icon
      }
    }

    function getLogo() {
      var levelId = $stateParams.levelId;
      var logoId = $stateParams.logoId;

      return levelsService.getLevelById(levelId)
        .then(function(level) {
          vm.level = level;

          for (logo of level.content.logos) {
            if (logo.id == logoId) {
              vm.logo = logo;
              return vm.logo;
            }
          }
        });
    }
  };
})();
