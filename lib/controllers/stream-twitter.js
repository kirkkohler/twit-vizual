'use strict';

// TODO: Investigate using this streaming package: https://github.com/mileszim/twat or mtwitter
// TODO: Investigate using Mongodb Capped collections for twitter streaming ******
var twitter = require('ntwitter');
var mongoose = require('mongoose'),
	Tweet = mongoose.model('Tweet');

var twit = new twitter({
	consumer_key: '5zyCsADsPP7XMYKjTV5Ng',
	consumer_secret: 'JDYkrG7wMxuQD0xkiAN3adJPabW56ZwqBsD7ATA0',
	access_token_key: '14356238-woVTgmselsSQsom3s6R3xVE0BbRCQw5B3pTGy6iCH',
	access_token_secret: 'DRf0W53thGePPNlXlVXDeC14XCFuW4NgbvSJZGHfm3qtA'
});

// connect to mongodb
var db = mongoose.connection;
mongoose.createConnection('mongodb://localhost/test');
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
			//console.log(data);
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
	twit.stream('statuses/sample', {
		'filter_level': 'medium',
		'language': 'en'
	}, function(stream) {
		console.log('attempting to stream with twitter ...\n');

		/* Some error occurred in stream */
		stream.on('error', function(err) {
			console.log('Twitter Stream ERROR: ' + err);
		});

		/* Chunk of data as buffer or string received in stream */
		stream.on('data', function(chunk) {
			console.info('Data: ' + chunk.user.name + ", " + chunk.user.screen_name + ", " +
				chunk.user.profile_image_url + ", "+ chunk.text + ", " + chunk.user.created_at);

			// if db is connected in a running state
			if (db.readyState === 1) {
				Tweet.create({
					author_name: chunk.user.name,
					author_username: chunk.user.screen_name,
					author_avatar: chunk.user.profile_image_url,
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

		// Disconnect stream after five seconds
		setTimeout(stream.destroy, 5000);
	});
};