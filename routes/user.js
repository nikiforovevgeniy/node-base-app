const router = require('express').Router();
const handleError = require('@/routes/handleError');
const userController = require('@/controllers/user');

router.get('/', handleError(userController.index));

module.exports = router;