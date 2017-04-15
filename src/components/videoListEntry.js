angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    scope: {
      video: '<',
      onClick: '<',
      index: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      // console.log('VIDOELISTENTRY', this);
    },
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
