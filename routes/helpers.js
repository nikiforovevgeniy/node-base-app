const { validationResult } = require('express-validator');

const requestValidate = function (rules) {
	return async function (req, res, next) {
		await Promise.all(rules.map(rule => rule.run(req)));

		try {
			validationResult(req).throw();
			next();
		} catch (error) {
			const [{param, msg}] = validationResult(req).array();
			next(new Error(msg));
		}
	}
}

const errorInterceptor = function (fn) {
	return async function (req, res, next) {
		try {
			await fn(req, res, next);
		} catch (error) {
			next(error);
		}
	}
}

module.exports = {
	requestValidate,
	errorInterceptor,
}