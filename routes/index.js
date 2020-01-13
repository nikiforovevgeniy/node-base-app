const express = require('@/express');

const routes = {
	'/user': '@/routes/user',
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