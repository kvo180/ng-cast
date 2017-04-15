angular.module('video-player')

// .controller('appCtrl', function($scope) {
//   $scope.videos = window.exampleVideoData;
// })

.directive('app', function() {
  return {
    scope: {

    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function(youTube) {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      this.onClick = ($event, index) => {
        this.currentVideo = this.videos[index];
      };
      this.selectVideo = (videos) => {
        this.videos = videos;
        this.currentVideo = this.videos[0];
      };
      this.searchResults = (query, callback) => {
        youTube.search(query, callback);
      };
      // initialize app by calling YouTube API for live data
      this.searchResults('dogs', this.selectVideo);
    },
    templateUrl: 'src/templates/app.html'
  };
});
