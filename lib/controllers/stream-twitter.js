'use strict';

// TODO: Investigate using this streaming package: https://github.com/mileszim/twat or mtwitter
// TODO: Investigate using Mongodb Capped collections for twitter streaming ******
var twitter = require('ntwitter');
var mongoose = require('mongoose'),
	Tweet = mongoose.model('Tweet');

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Application Config
var config = require('../config/config');

var twit = new twitter({
	consumer_key: config.twitter.consumer_key,
	consumer_secret: config.twitter.consumer_secret,
	access_token_key: config.twitter.access_token_key,
	access_token_secret: config.twitter.access_token_secret
});

// connect to mongodb
var db = mongoose.connection;
mongoose.createConnection(config.mongo.uri);
db.on('error', console.error);
db.once('open', function() {
	console.info('twitter connected successfully to db ...');
}); // end db open connection

/**
 * Create connection to twitter.
 */
exports.connect = function() {
	twit.verifyCredentials(function(err, data) {
		console.log('attempting to verify credentials with twitter...');
		if (!err) {
			console.log('credentials confirmed with twitter.');
		} else {
			console.log(err);
		}
	});
};

exports.search = function(req, res) {
	twit.search('nodejs OR #node', {}, function(err, data) {
		console.log('attempting to search with twitter...');
		if (!err) {
			//console.dir(data);
			//return res.json(data);
		} else {
			console.log(err);
			return res.send(err);
		}
	});
};

exports.stream = function() {
	// medium filtering should help reduce noisey tweets and get 'higher value tweets'
	// 'filter_level': 'medium',
	twit.stream('statuses/filter', {
		'track': 'angularjs, angular, node, nodejs, mongodb, expressjs, javascript',
		'language': 'en'
	}, function(stream) {
		console.log('attempting to stream with twitter ...\n');

		/* Some error occurred in stream */
		stream.on('error', function(err) {
			console.log('Twitter Stream ERROR: ' + err);
		});

		/* Chunk of data as buffer or string received in stream */
		stream.on('data', function(chunk) {
			// TODO use twitter id in db
			// TODO update document fields to use same as twitter fields e.g. avatar === profile_image_url
			console.info('Data: ' + chunk.user.name + ", " + chunk.user.screen_name + ", " +
				chunk.user.profile_image_url + ", " + chunk.text + ", " + chunk.user.created_at);

			// if db is connected in a running state
			if (db.readyState === 1) {
				Tweet.create({
					author_name: chunk.user.name,
					author_username: chunk.user.screen_name,
					author_avatar: chunk.user.profile_image_url.replace('normal', 'bigger'),
					created_at: chunk.user.created_at,
					text: chunk.text
				}, function(err) {
					if (err) {
						console.log("ERROR: When attempt create object to db: " + err);
					} else {
						console.info('added tweet into db');
					}
				});
			}
		});

		/* Stream Ended */
		stream.on('end', function(response) {
			// Handle a disconnection
			console.log('twitter stream ended ...\n');
		});

		/* Stream Destroyed */
		stream.on('destroy', function(response) {
			// Handle a 'silent' disconnection from Twitter, no end/error event fired
			console.log('twitter stream is destroyed ...\n');
		});

		// Disconnect stream after 30 minutes
		setTimeout(stream.destroy, 1800000);
	});
};