const router = require('express').Router();
const { authenticate, validate, responseJSON } = require('@/routes/helpers');
const { validation: rules, getAll, create } = require('@/controllers/users');

router.get(
	'/',
	authenticate('jwt'),
	/*permission(user => ({
		groups: user.groups,
		actions: 'users:show',
	})),*/
	responseJSON(getAll)
);

router.post(
	'/',
	authenticate('jwt'),
	/*permission(user => ({
		groups: user.groups,
		actions: 'users:show',
	})),*/
	validate([
		rules.firstName,
		rules.lastName,
		rules.email,
	]),
	responseJSON(create)
);

module.exports = router;