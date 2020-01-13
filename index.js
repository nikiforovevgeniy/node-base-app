require('module-alias/register');

const { port } = require('@config/app');

(async () => {
	try {
		require('@/server').listen(port);
		require('@/routes');
	} catch (error) {
		console.error(error);
	}
})();