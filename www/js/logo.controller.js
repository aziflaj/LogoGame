(function(){
  angular
    .module('app')
    .controller('LogoController', LogoController);

  LogoController.$inject = ['$ionicPopup', '$stateParams', 'levelsService'];

  function LogoController($ionicPopup, $stateParams, levelsService) {
    var vm = this;
    vm.check = check;
    vm.found = false;
    vm.level = {};
    vm.logo = {};

    activate();

    // IMPLEMENTATION

    function activate() {
      return getLogo().then(function() {
        vm.found = window.localStorage[vm.level.id + vm.logo.name];
        console.log('found: ' + vm.found);
        console.log('Activated Logo View');
      });
    }

    function check(inputName) {
      if (angular.isDefined(inputName) && inputName.toUpperCase() === vm.logo.name.toUpperCase()) {
        window.localStorage[$stateParams.levelId + vm.logo.name] = true; //store as found
        console.log('Correct!');
        $ionicPopup.alert({
          title: vm.level.name,
          template: 'You found ' + vm.logo.name
        }).then(function(res) {
          history.back(-1);
        });
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
