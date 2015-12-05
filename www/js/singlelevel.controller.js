(function() {
  angular
    .module('app')
    .controller('SingleLevelController', SingleLevelController);

  SingleLevelController.$inject = ['$http', '$stateParams', 'levelsService'];

  function SingleLevelController($http, $stateParams, levelsService) {
    var self = this;

    var levelId = $stateParams.levelId;
    levelsService.all().success(function(data) {

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
