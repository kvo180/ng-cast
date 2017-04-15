angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    scope: {
      video: '<',
      // text: '<' JUST DELETE THIS AND EVERYTHING WORKS!!!!?!?@?@?#@#$ 
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      // Code below doesn't work: text will always be shown since this.video === undefined. WHY?@#
      // if (!this.video) {
      //   this.text = '';
      // } 
      // this.text = 'Please wait';
    },
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
