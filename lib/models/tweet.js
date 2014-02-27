'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Define Tweet Schema
 */
var TweetSchema = new Schema({
	author_name: String,
	author_username: String,
	author_avatar: String,
	created_at: Date,
	text: String
	//awesomeness: Number
});

/**
 * Validations
 */
/* Not currently being used

TweetSchema.path('created_at').validate(function (num) {
  return num >= 1 && num <= 10;
}, 'Date must be greater than -1');
*/

// Define Model based on above schema
mongoose.model('Tweet', TweetSchema);