const { validationResult } = require('express-validator');

module.exports = function (rules) {
	return async function (req, res, next) {
		await Promise.all(rules.map(rule => rule.run(req)));

		try {
			validationResult(req).throw();
		} catch (error) {
			const [{param, msg}] = validationResult(req).array();
			next(new Error(msg));
		}
	}
};