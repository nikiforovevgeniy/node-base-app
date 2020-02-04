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

const responseJSON = function (fn) {
	return async function (req, res, next) {
		try {
			const result = await fn({
				query: req.query,
				body: req.body,
				params: req.params,
				user: req.user || null,
			});
			res.json(result);
		} catch (error) {
			next(error);
		}
	}
}

module.exports = {
	requestValidate,
	responseJSON,
}