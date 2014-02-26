'use strict';

/** Array is necessary to handle minification of js code.  
* Last item in array will be the constructor function.
* i.e. Angular uses this array syntax to define the dependencies so that the DI also works after minifying the code.
*/
app.controller('MainController', ['$scope', '$http',
	function($scope, $http) {
		$http.get('/api/tweets').success(function(tweets) {
			$scope.tweets = tweets;
		});
	}
]);