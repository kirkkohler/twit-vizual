'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Tweets = mongoose.model('Tweets');

/**
 * Populate database with sample application data
 */

//Clear old tweets, then add tweets into db
// else error message if failure in passing schema or validator
Tweets.find({}).remove(function() {
  Tweets.create({
    name: 'Soon to be Tweets ---- HTML5 Boilerplate',
    info: 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
    awesomeness: 10
  }, {
    name: 'AngularJS',
    info: 'AngularJS is a toolset for building the framework most suited to your application development.',
    awesomeness: 10
  }, {
    name: 'Karma',
    info: 'Spectacular Test Runner for JavaScript.',
    awesomeness: 10
  }, {
    name: 'Express',
    info: 'Flexible and minimalist web application framework for node.js.',
    awesomeness: 10
  }, {
    name: 'MongoDB + Mongoose',
    info: 'An excellent document database. Combined with Mongoose to simplify adding validation and business logic.',
    awesomeness: 10
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