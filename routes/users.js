const router = require('express').Router();
const { checkPermission, authenticate, validate, responseJSON } = require('@/routes/helpers');
const { validation: rules, getAll, create } = require('@/controllers/users');

router.get(
	'/',
	authenticate('jwt'),
	checkPermission(user => ({
		roles: user.role,
		permission: 'users:getAll',
	})),
	responseJSON(getAll)
);

router.post(
	'/',
	authenticate('jwt'),
	checkPermission(user => ({
		roles: user.role,
		permission: 'users:create',
	})),
	validate([
		rules.firstName,
		rules.lastName,
		rules.email,
	]),
	responseJSON(create)
);

module.exports = router;