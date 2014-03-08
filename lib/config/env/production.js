'use strict';

module.exports = {
  env: 'production',
  mongo: {
    uri: process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         'mongodb://heroku:8966fb637e9d4c92c2c07ba8f99413c3@troup.mongohq.com:10078/app22749702'
  }
};