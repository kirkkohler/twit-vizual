'use strict';

var mongoose = require('mongoose'),
	Tweets = mongoose.model('Tweets');

/**
 * Get Tweets
 */
exports.get = function(req, res) {
	return Tweets.find(function(err, tweets) {
		if (!err) {
			return res.json(tweets);
		} else {
			return res.send(err);
		}
	});
};