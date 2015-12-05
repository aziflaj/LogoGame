(function() {
  angular
    .module('app')
    .controller('SingleLevelController', SingleLevelController);

  SingleLevelController.$inject = ['$http', '$stateParams', 'LevelsService'];

  function SingleLevelController($http, $stateParams, LevelsService) {
    var self = this;

    var levelId = $stateParams.levelId;
    LevelsService.all().success(function(data) {

      for (item of data) {
        if (item.id == levelId) {
          self.level = item;
          self.logos = self.level.content.logos;
          break;
        }
      }
    });
  };
})();
