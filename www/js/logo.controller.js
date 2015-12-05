(function(){
  angular
    .module('app')
    .controller('LogoController', LogoController);

  LogoController.$inject = ['$stateParams', 'LevelsService'];

  function LogoController($stateParams, LevelsService) {
    var self = this;

    self.check = check;

    var levelId = $stateParams.levelId;
    var logoId = $stateParams.logoId;

    LevelsService.all().success(function(data) {
      dance:
      for (item of data) {
        if (item.id == levelId) {
          self.levelName = item.name;
          for (logo of item.content.logos) {
            if (logo.id == logoId) {
              self.logo = logo;
              console.log(logo);
              break dance;
            }
          }
        }
      }
    });

    function check(inputName) {
      console.log(inputName);
    }

  };
})();
