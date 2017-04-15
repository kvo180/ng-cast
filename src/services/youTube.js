angular.module('video-player')
.service('youTube', function($http) {
  this.search = (query, callback) => {
    $http({
      method: 'GET',
      url: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${window.YOUTUBE_API_KEY}&q=${query}&maxResults=5&type=video&videoEmbeddable=true`,
    }).then(function successCallback(response) {
      console.log('Success, response received');
      callback(response.data.items);
    }, function errorCallback(response) {
      console.log('Error, request failed');
    });
  };
});
