angular.module('video-player')

// .controller('appCtrl', function($scope) {
//   $scope.videos = window.exampleVideoData;
// })

.directive('app', function() {
  return {
    scope: {
      videos: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      this.videos = window.exampleVideoData;
      console.log('APP: ', this.videos);
    },
    templateUrl: 'src/templates/app.html'
  };
});
