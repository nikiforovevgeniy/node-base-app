---
to: routes/<%= h.inflection.pluralize(name) %>.js
---
const router = require('express').Router();
const { requestValidate, responseJSON } = require('@/routes/helpers');
const { validationRules: rules, getAll, getOne, create, update, remove } = require('@/controllers/<%= h.inflection.pluralize(name) %>');

router.get(
	'/',
	responseJSON(getAll)
);

router.get(
	'/:id',
	responseJSON(getOne)
);

router.post(
	'/',
	requestValidate(rules.create),
	responseJSON(create)
);

router.patch(
	'/:id',
	requestValidate(rules.create),
	responseJSON(update)
);

router.delete(
	'/:id',
	responseJSON(remove)
);

module.exports = router;