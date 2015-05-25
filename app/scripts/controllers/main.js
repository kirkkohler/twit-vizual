'use strict';

app.controller('MainController', function ($scope, TweetService) {
  TweetService.getTweets().success(function (response) {
    $scope.tweets = response;
  }).error(function (response) {
    console.log('error');
    console.log(response);
  });
});
