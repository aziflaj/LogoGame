(function() {
  angular
    .module('app')
    .service('levelsService', levelsService);

  levelsService.$inject = ['$http'];

  function levelsService($http) {
    var o = {
      getAllLevels: getAllLevels,
      getLevelById: getLevelById
    };

    return o;

    // IMPLEMENTATION

    function getAllLevels() {
      return $http.get('/data/levels.json')
        .then(getAllLevelsComplete)
        .catch(getAllLevelsFailed);

      function getAllLevelsComplete(response) {
        return response;
      }

      function getAllLevelsFailed(error) {
        console.log('Error while fetching levels data: ' + error.data);
      }
    }

    function getLevelById(id) {
      return $http.get('/data/levels.json')
        .then(filterLevelById)
        .catch(getLevelByIdFailed);

      function filterLevelById(response) {
        for (level of response.data) {
          if (level.id == id) {
            return level;
          }
        }
      }

      function getLevelByIdFailed() {
        console.log('Error while fetching level data: ' + error.data);
      }
    }
  }
})();
