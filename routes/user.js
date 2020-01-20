const router = require('express').Router();
const { requestValidate, errorInterceptor } = require('@/routes/helpers');
const userController = require('@/controllers/user');

router.get(
	'/',
	errorInterceptor(userController.index)
);

module.exports = router;