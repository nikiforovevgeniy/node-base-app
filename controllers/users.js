const { body } = require('express-validator');
const { User } = require('@/models');

module.exports = {

	validationRules: {
		create: [
			body('firstName')
				.exists({ checkNull: true, checkFalsy: true })
				.withMessage('Имя не указано'),
			body('lastName')
				.exists({ checkNull: true, checkFalsy: true })
				.withMessage('Фамилия не указана'),
			body('email')
				.exists({ checkNull: true, checkFalsy: true })
				.withMessage('Email не указан')
				.isEmail()
				.withMessage('Email невалидный'),
		],
	},

	async getAll (req, res, next) {
		const users = await User.findAll();
		res.json(users);
	},

	async create (req, res, next) {
		const user = await User.create(req.body);
		res.json(user);
	},

}