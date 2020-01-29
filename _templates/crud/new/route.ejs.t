---
to: routes/<%= h.inflection.pluralize(name) %>.js
---
const router = require('express').Router();
const { requestValidate, errorInterceptor } = require('@/routes/helpers');
const { validationRules: rules, getAll, getOne, create, update, remove } = require('@/controllers/<%= h.inflection.pluralize(name) %>');

router.get(
	'/',
	errorInterceptor(getAll)
);

router.get(
	'/:id',
	errorInterceptor(getOne)
);

router.post(
	'/',
	requestValidate(rules.create),
	errorInterceptor(create)
);

router.patch(
	'/:id',
	requestValidate(rules.create),
	errorInterceptor(update)
);

router.delete(
	'/:id',
	errorInterceptor(remove)
);

module.exports = router;