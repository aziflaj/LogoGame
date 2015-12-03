(function() {
  angular
    .module('app')
    .service('LevelsService', LevelsService);

  LevelsService.$inject = ['$http'];

  function LevelsService($http) {
    var o = {
      all: getAllLevels
    };

    return o;

    // IMPLEMENTATION

    function getAllLevels() {
      return $http.get('/data/levels.json');
    }
  }
})();
