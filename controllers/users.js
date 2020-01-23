const { body } = require('express-validator');
const User = require('@/models/user');

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
		const users = await User.fetchAll();
		res.json(users);
	},

	async create (req, res, next) {
		const user = new User(req.body);
		await user.save();
		res.json(user);
	},

}