const router = require('express').Router();
const { authenticate, validate, responseJSON } = require('@/routes/helpers');
const { validationRules: rules, getAll, create } = require('@/controllers/users');

router.get(
	'/',
	authenticate('jwt'),
	responseJSON(getAll)
);

router.post(
	'/',
	authenticate('jwt'),
	validate(rules.create),
	responseJSON(create)
);

module.exports = router;