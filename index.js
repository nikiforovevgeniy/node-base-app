require('module-alias/register');

const config = require('@config');

(async () => {
	try {
		require('@/server').listen(config.port);
		require('@/routes');
	} catch (error) {
		console.error(error);
	}
})();