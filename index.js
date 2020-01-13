require('module-alias/register');
require('dotenv').config();

const config = require('@/config');

(async () => {
	try {
		require('@/server').listen(config.port);
		require('@/routes');
	} catch (error) {
		console.error(error);
	}
})();