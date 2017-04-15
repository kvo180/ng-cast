angular.module('video-player')

.controller('AppCtrl', function(youTube) {
  this.videos = window.exampleVideoData;
  this.currentVideo = this.videos[0];
  this.selectVideo = ($event, index) => {
    this.currentVideo = this.videos[index];
  };
  this.searchResults = (videos) => {
    this.videos = videos;
    this.currentVideo = this.videos[0];
  };
  youTube.search('dogs', this.searchResults);
})

.directive('app', function() {
  return {
    scope: {},
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: 'AppCtrl',
    templateUrl: 'src/templates/app.html'
  };
});
