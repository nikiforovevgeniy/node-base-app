const router = require('express').Router();
const errorInterceptor = require('@/routes/errorInterceptor');
const userController = require('@/controllers/user');

router.get('/', errorInterceptor(userController.index));

module.exports = router;