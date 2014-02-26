'use strict';

var express = require('express'),
	path = require('path'),
	fs = require('fs'),
	mongoose = require('mongoose'),
	twitter = require('./lib/controllers/stream-twitter');

/**
 * Main application file
 */

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Application Config
var config = require('./lib/config/config');

// Connect to database
var db = mongoose.connect(config.mongo.uri, config.mongo.options);
//todo: determine if we can catch once connected & onerror
//db.on('error', console.error.bind(console, 'connection error:'));
/*
db.once('open', function callback() {
	console.log('Connected successfully to DB: ' + config.mongo.uri);
});
*/

// Bootstrap models
var modelsPath = path.join(__dirname, 'lib/models');
fs.readdirSync(modelsPath).forEach(function(file) {
	if (/(.*)\.(js$|coffee$)/.test(file)) {
		require(modelsPath + '/' + file);
	}
});

// Populate empty DB with sample data
require('./lib/config/dummydata');

// Passport Configuration
var passport = require('./lib/config/passport');

// Connect to twitter
twitter.connect();
twitter.search();

var app = express();

// Express settings
require('./lib/config/express')(app);

// Routing
require('./lib/routes')(app);

// Start server
app.listen(config.port, function() {
	console.log('Express server listening on port %d in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;