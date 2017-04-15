angular.module('video-player')

// .controller('appCtrl', function($scope) {
//   $scope.videos = window.exampleVideoData;
// })

.directive('app', function() {
  return {
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
    },
    templateUrl: 'src/templates/app.html'
  };
});
