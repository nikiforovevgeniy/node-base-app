const router = require('express').Router();
const { requestValidate, errorInterceptor } = require('@/routes/helpers');
const { validationRules: rules, getAll, create } = require('@/controllers/user');

router.get(
	'/',
	errorInterceptor(getAll)
);

router.post(
	'/',
	requestValidate(rules.create),
	errorInterceptor(create)
);

module.exports = router;