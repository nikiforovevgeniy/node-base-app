const router = require('express').Router();
const passport = require('passport');
const { requestValidate, responseJSON } = require('@/routes/helpers');
const { validationRules: rules, getJWT } = require('@/controllers/auth');

router.post(
	'/',
	requestValidate([
		...rules.email,
		...rules.password,
	]),
	passport.authenticate('local', { session: false }),
	responseJSON(getJWT)
);

module.exports = router;