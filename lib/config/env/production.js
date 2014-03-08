'use strict';

module.exports = {
	env: 'production',
	mongo: {
		uri: process.env.MONGOLAB_URI ||
			process.env.MONGOHQ_URL ||
			'mongodb://heroku:5PFHT6RCjpmdc-qPv6fSdZPpyDZjKoOvdSZOdy6eA1fTh6S33r-0Z79_liHEhuDPBgi3h4rXlw10-QX034NRdA@oceanic.mongohq.com:10061/app22842837'
	}
};