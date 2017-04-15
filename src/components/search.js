angular.module('video-player')

.directive('search', function() {
  return {
    scope: {
      selectVideo: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function(youTube) {
      this.result = (query, callback) => {
        youTube.search(query, callback);
      };
      this.input = '';
    },
    templateUrl: 'src/templates/search.html'
  };
});
