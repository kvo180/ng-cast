angular.module('video-player')

.controller('SearchCtrl', function(youTube) {
  this.debounce = (func, wait, immediate) => {
    var timeout;
    return () => {
      var context = this, args = arguments;
      var later = () => {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  };
  this.search = (query, callback) => {
    youTube.search(query, callback);
  };
  this.debounce(this.search, 500, false);
  this.input = '';
  this.service = {};
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
