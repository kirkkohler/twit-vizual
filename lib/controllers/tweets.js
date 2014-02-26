'use strict';

var mongoose = require('mongoose'),
	Tweet = mongoose.model('Tweet');

/**
 * Get Tweets
 */
exports.get = function(req, res) {
	return Tweet.find(function(err, tweet) {
		if (!err) {
			return res.json(tweet);
		} else {
			return res.send(err);
		}
	});
};