angular.module('video-player')

.controller('SearchCtrl', function(youTube) {
  this.search = (query, callback) => {
    youTube.search(query, callback);
    this.input = '';
  };
  this.input = '';
})

.directive('search', function() {
  return {
    scope: {
      result: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: 'SearchCtrl',
    templateUrl: 'src/templates/search.html'
  };
});
