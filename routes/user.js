const router = require('express').Router();
const { requestValidate, errorInterceptor } = require('@/routes/helpers');
const userController = require('@/controllers/user');

router.get(
	'/',
	errorInterceptor(userController.getAll)
);

router.post(
	'/',
	requestValidate(userController.validationRules.create),
	errorInterceptor(userController.create)
);

module.exports = router;