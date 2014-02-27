'use strict';

// TODO: Investigate using this streaming package: https://github.com/mileszim/twat or mtwitter
// TODO: Investigate using Mongodb Capped collections for twitter streaming ******
var twitter = require('ntwitter');

var twit = new twitter({
	consumer_key: '5zyCsADsPP7XMYKjTV5Ng',
	consumer_secret: 'JDYkrG7wMxuQD0xkiAN3adJPabW56ZwqBsD7ATA0',
	access_token_key: '14356238-woVTgmselsSQsom3s6R3xVE0BbRCQw5B3pTGy6iCH',
	access_token_secret: 'DRf0W53thGePPNlXlVXDeC14XCFuW4NgbvSJZGHfm3qtA'
});

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
			console.dir(data);
			//return res.json(data);
		} else {
			console.log(err);
			return res.send(err);
		}
	});
};

exports.stream = function() {
	twit.stream('statuses/sample', function(stream) {
		stream.on('data', function(err, data) {
			console.log('attempting to stream with twitter...');
			if (!err) {
				console.log(data);
			} else {
				console.log(err);
			}
		});
	});
};