'use strict';

app.controller('MetricsController', function($scope) {
	$scope.greeting = "Resize the page to see the re-rendering";
	// hard-code data
	$scope.d3Data = [{
		name: 'Greg',
		score: 98
	}, {
		name: 'Ari',
		score: 96
	}, {
		name: 'Q',
		score: 75
	}, {
		name: 'Loser',
		score: 48
	}]; // end hard code data

	$scope.extraData = [{
		name: 'Greg',
		score: 2
	}, {
		name: 'Ari',
		score: 36
	}, {
		name: 'Q',
		score: 55
	}, {
		name: 'Loser',
		score: 14
	}]; // end hard code data
});