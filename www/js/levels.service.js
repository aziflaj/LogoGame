(function() {
  angular
    .module('app')
    .service('levelsService', levelsService);

  levelsService.$inject = ['$http'];

  function levelsService($http) {
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
