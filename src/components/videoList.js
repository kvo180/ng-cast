angular.module('video-player')
.directive('videoList', function() {
  return {
    scope: {
      videos: '<',
      onClick: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      // this.onClick = (event) => {

      // };
      // console.log('VIDEOLIST', this);
    },
    templateUrl: 'src/templates/videoList.html'
  };
});
