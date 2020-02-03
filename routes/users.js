const router = require('express').Router();
const { requestValidate, responseJSON } = require('@/routes/helpers');
const { validationRules: rules, getAll, create } = require('@/controllers/users');

router.get(
	'/',
	responseJSON(getAll)
);

router.post(
	'/',
	requestValidate(rules.create),
	responseJSON(create)
);

module.exports = router;