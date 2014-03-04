'use strict';

module.exports = {
  env: 'production',
  mongo: {
    uri: process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         'mongodb://heroku:ac6224c096e2844af126799246ea9084@troup.mongohq.com:10078/app22715158'
  }
};