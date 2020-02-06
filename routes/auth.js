const router = require('express').Router();
const passport = require('passport');
const { authenticate, validate, responseJSON } = require('@/routes/helpers');
const { validationRules: rules, getJWT } = require('@/controllers/auth');

router.post(
	'/',
	validate([
		...rules.email,
		...rules.password,
	]),
	authenticate('local'),
	responseJSON(getJWT)
);

module.exports = router;