'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Tweet = mongoose.model('Tweet');

/**
 * Populate database with sample application data
 */

//Clear old tweets, then add tweets into db
// else error message if failure in passing schema or validator
Tweet.find({}).remove(function() {
  Tweet.create({
    author_name: 'Twitter API',
    author_username: '@twitterapi',
    author_avatar: 'https://pbs.twimg.com/profile_images/1327824369/kirk3_bigger.jpg',
    created_at: 'Wed Feb 26 23:51:55 +0000 2014',
    text: '@ishra Awaiting my beta invite. Lots of cool features...'
  }, {
    author_name: 'API',
    author_username: '@twitterapi',
    author_avatar: 'https://pbs.twimg.com/profile_images/1327824369/kirk3_bigger.jpg',
    created_at: 'Wed Feb 26 23:51:55 +0000 2014',
    text: 'cool'
  }, {
    author_name: 'TESTTESTTESTTEST',
    author_username: '@twitterapi',
    author_avatar: 'https://pbs.twimg.com/profile_images/1327824369/kirk3_bigger.jpg',
    created_at: 'Wed Feb 26 23:51:55 +0000 2014',
    text: 'My beta invite. Lots of cool features. My beta invite. Lots of cool features. My beta invite. Lots of cool features. My beta invite. Lots of cool features.'
  }, {
    author_name: 'Twitter API',
    author_username: '@twitterapi',
    author_avatar: 'https://pbs.twimg.com/profile_images/1327824369/kirk3_bigger.jpg',
    created_at: 'Wed Feb 26 23:51:55 +0000 2014',
    text: 'Cool features...'
  }, {
    author_name: 'Twitter API',
    author_username: '@twitterapi',
    author_avatar: 'https://pbs.twimg.com/profile_images/1327824369/kirk3_bigger.jpg',
    created_at: 'Wed Feb 26 23:51:55 +0000 2014',
    text: '@ishra @ishra @ishra @ishra @ishra @ishra @ishra @ishra @ishra @ishra @ishra @ishra @ishra @ishra @ishra '
  }, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('finished populating tweets');
    }
  });
});

// Clear old users, then add a default user
User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('finished populating users');
    }
  });
});