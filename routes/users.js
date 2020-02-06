const router = require('express').Router();
const passport = require('passport');
const { requestValidate, responseJSON } = require('@/routes/helpers');
const { validationRules: rules, getAll, create } = require('@/controllers/users');

router.get(
	'/',
	passport.authenticate('jwt', { session: false }),
	responseJSON(getAll)
);

router.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	requestValidate(rules.create),
	responseJSON(create)
);

module.exports = router;