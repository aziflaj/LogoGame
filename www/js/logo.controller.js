(function(){
  angular
    .module('app')
    .controller('LogoController', LogoController);

  LogoController.$inject = ['$stateParams', 'levelsService'];

  function LogoController($stateParams, levelsService) {
    var self = this;

    self.check = check;

    var levelId = $stateParams.levelId;
    var logoId = $stateParams.logoId;

    // levelsService.all().success(function(data) {
    //   dance:
    //   for (item of data) {
    //     if (item.id == levelId) {
    //       self.levelName = item.name;
    //       for (logo of item.content.logos) {
    //         if (logo.id == logoId) {
    //           self.logo = logo;
    //           console.log(logo);
    //           break dance;
    //         }
    //       }
    //     }
    //   }
    // });

    function check(inputName) {
      if (angular.isDefined(inputName) && inputName.toUpperCase() === self.logo.name.toUpperCase()) {
        localStorage[levelId][self.logo.name] = true; //store as found
        alert('Correct!');
        // history.back(-1);
      } else {
        //TODO: should tilt the icon
      }
    }

  };
})();
