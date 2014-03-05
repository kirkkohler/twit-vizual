'use strict';

app.controller('MainController', function($scope, $http) {
	$http.get('/api/tweets').success(function(tweets) {
		$scope.tweets = tweets;
	});
});