'use strict';

module.exports = {
	env: 'production',
	mongo: {
		uri: process.env.MONGOLAB_URI ||
			process.env.MONGOHQ_URL ||
			'mongodb://heroku:5eebcd9ec8cd6d83b2b490d14b701e6e@oceanic.mongohq.com:10059/app22843337'
	}
};