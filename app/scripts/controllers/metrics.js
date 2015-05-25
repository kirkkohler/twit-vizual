'use strict';

app.controller('MetricsController', function ($scope, TweetService) {
  var max = 50;

  // get data from tweet stream in db
  TweetService.getTweets().success(function (response) {
    $scope.tweets = response;
    $scope.d3Data = [{
      name: 'ANGULARJS',
      count: 0
    }, {
      name: 'NODEJS',
      count: 0
    }, {
      name: 'MONGODB',
      count: 0
    }, {
      name: 'EXPRESSJS',
      count: 0
    }, {
      name: 'JAVASCRIPT',
      count: 0
    }];

    // get counts for twitter search
    // TODO calculate counts server side and serve up to new api route/endpoint.
    for (var i = 0; i < $scope.tweets.length; i++) {
      // if counted max, break out of for loop that counts
      if (i > max) {
        break;
      }
      if ($scope.tweets[i].text.toUpperCase().indexOf($scope.d3Data[0].name) !== -1) {
        $scope.d3Data[0].count++;
      } else if ($scope.tweets[i].text.toUpperCase().indexOf($scope.d3Data[1].name) !== -1) {
        $scope.d3Data[1].count++;
      } else if ($scope.tweets[i].text.toUpperCase().indexOf($scope.d3Data[2].name) !== -1) {
        $scope.d3Data[2].count++;
      } else if ($scope.tweets[i].text.toUpperCase().indexOf($scope.d3Data[3].name) !== -1) {
        $scope.d3Data[3].count++;
      } else if ($scope.tweets[i].text.toUpperCase().indexOf($scope.d3Data[4].name) !== -1) {
        $scope.d3Data[4].count++;
      }
    }
  });
});
