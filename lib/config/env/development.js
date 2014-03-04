'use strict';

module.exports = {
	env: 'development',
	mongo: {
		uri: 'mongodb://localhost/fullstack-dev'
	},
	twitter: {
		//api key
		consumer_key: process.env.TWITTER_CONSUMER_KEY || 'CPyVTcBsc5YsUIfqGpZQ',
		consumer_secret: process.env.TWITTER_CONSUMER_SECRET || 'LfSBO9f9JgbsSzrhs62m1WC7UOsAEjnI4yGArZ1w',
		access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY || '14356238-X3YpniZCia9QBWrCFzmb7eHRWsWllI9UuKalCJfto',
		access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || '5PF60UxDnfZywpWNBJ0BITUV8YXzRk3EDpUMp60PtkKTA'
	}
};