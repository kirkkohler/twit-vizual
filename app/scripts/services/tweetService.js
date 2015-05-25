'use strict';

/**
 * Service to retrieve Tweets from Server API
 */
app.factory('TweetService', function ($http) {
    var service = {
      getTweets: getTweets
    };

    return service;

    // Functions

    /**
     * Call get tweets request to server
     */
    function getTweets() {
      return $http.get('/api/tweets').success(function (data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(data);
        return data;
      }).error(function (data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(data);
        return data;
      });
    };
  }
);
