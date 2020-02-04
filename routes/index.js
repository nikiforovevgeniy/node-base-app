const express = require('@/express');

const routes = {
	'/auth': '@/routes/auth',
	'/users': '@/routes/users',
}

Object.keys(routes).forEach(rout => {
	express.use(
		rout,
		require(routes[rout])
	);
});

express.use((error, req, res, next) => {
	console.error(error);
	res.status(500).json({
		error: error.message,
	});
});