'use strict';

// May not need this service if only reading from server. 

app.service('Tweet', ['$http',
	function Tweet($http) {
		// AngularJS will instantiate a singleton by calling "new" on this function
		$http.get('/api/tweets').success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			return data;
		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			console.log(data);
		});
	}
]);