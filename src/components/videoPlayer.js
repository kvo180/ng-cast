angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    scope: {
      video: '<',
      text: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      console.log('PLAYER: ', this.video);
      if (this.video) {
        console.log('if');
        this.text = '';
      } else {
        console.log('else');
        this.text = 'Please wait';
      }
    },
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
