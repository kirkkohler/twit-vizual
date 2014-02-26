'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Define Tweets Schema
 */
var TweetsSchema = new Schema({
  name: String,
  info: String,
  awesomeness: Number
});

/**
 * Validations
 */
TweetsSchema.path('awesomeness').validate(function (num) {
  return num >= 1 && num <= 10;
}, 'Awesomeness must be between 1 and 10');

// Define Model based on above schema
mongoose.model('Tweets', TweetsSchema);
