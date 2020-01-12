require('module-alias/register');

(async () => {
	try {
		require('@/server').listen(8010);
		require('@/routes');
	} catch (error) {
		console.error(error);
	}
})();