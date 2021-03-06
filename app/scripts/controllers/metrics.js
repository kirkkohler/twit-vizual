'use strict';

app.controller('MetricsController', function ($scope, TweetService) {
  var max = 100;

  // get data from tweet stream in db
  TweetService.getTweets().success(function (response) {
    $scope.tweets = response;
    $scope.d3Data = [{
      name: 'AI',
      count: 0
    }, {
      name: 'ArtificialIntelligence',
      count: 0
    }, {
      name: 'ML',
      count: 0
    }, {
      name: 'MachineLearning',
      count: 0
    }, {
      name: 'VR',
      count: 0
    }, {
      name: 'VirtualReality',
      count: 0
    }, {
      name: 'AR',
      count: 0
    }, {
      name: 'AugmentedReality',
      count: 0
    }, {
      name: 'MixedReality',
      count: 0
    }];

    // get counts for twitter search
    // TODO calculate counts server side and serve up to new api route/endpoint.
    for (var i = 0; i < $scope.tweets.length; i++) {
      // if counted max, break out of for loop that counts
      if (i >= max) {
        break;
      }
      if ($scope.tweets[i].text.toUpperCase().indexOf($scope.d3Data[(0)].name.toUpperCase()) !== -1) {
        $scope.d3Data[0].count++;
      } 

      if ($scope.tweets[i].text.toUpperCase().indexOf($scope.d3Data[1].name.toUpperCase()) !== -1) {
        $scope.d3Data[1].count++;
      }

      if ($scope.tweets[i].text.toUpperCase().indexOf($scope.d3Data[2].name.toUpperCase()) !== -1) {
        $scope.d3Data[2].count++;
      }

      if ($scope.tweets[i].text.toUpperCase().indexOf($scope.d3Data[3].name.toUpperCase()) !== -1) {
        $scope.d3Data[3].count++;
      }

      if ($scope.tweets[i].text.toUpperCase().indexOf($scope.d3Data[4].name.toUpperCase()) !== -1) {
        $scope.d3Data[4].count++;
      }

      if ($scope.tweets[i].text.toUpperCase().indexOf($scope.d3Data[5].name.toUpperCase()) !== -1) {
        $scope.d3Data[5].count++;
      }

      if ($scope.tweets[i].text.toUpperCase().indexOf($scope.d3Data[6].name.toUpperCase()) !== -1) {
        $scope.d3Data[6].count++;
      }

      if ($scope.tweets[i].text.toUpperCase().indexOf($scope.d3Data[7].name.toUpperCase()) !== -1) {
        $scope.d3Data[7].count++;
      }

      if ($scope.tweets[i].text.toUpperCase().indexOf($scope.d3Data[8].name.toUpperCase()) !== -1) {
        $scope.d3Data[8].count++;
      }
    }
  });
});
