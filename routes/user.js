const router = require('express').Router();
const errorInterceptor = require('@/routes/errorInterceptor');
const requestValidate = require('@/routes/requestValidate');
const userController = require('@/controllers/user');

router.get(
	'/',
	//requestValidate(userController.rules.create),
	errorInterceptor(userController.index)
);

module.exports = router;