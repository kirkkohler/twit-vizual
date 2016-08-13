'use strict';

var mongoose = require('mongoose'),
	Tweet = mongoose.model('Tweet');

// Reference: Good primer on creating RESTful service with express http://blog.modulus.io/nodejs-and-express-create-rest-api

/**
 * Get Tweets
 */
exports.get = function(req, res) {
	return Tweet.find().sort('-date').limit(100).exec(function(err, tweet) {
		if (!err) {
			return res.json(tweet);
		} else {
			return res.send(err);
		}
	});
};