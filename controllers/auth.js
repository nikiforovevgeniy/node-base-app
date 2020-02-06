const { jwtSecret } = require('@/config');
const { check } = require('express-validator');
const { User } = require('@/models');
const jwt = require('jsonwebtoken');

module.exports = {

	validation: {
		email: check('email')
			.exists({ checkNull: true, checkFalsy: true })
			.withMessage('Email не указан')
			.isEmail()
			.withMessage('Неверный формат email'),
		password: check('password')
			.exists({ checkNull: true, checkFalsy: true })
			.withMessage('Пароль не указан'),
	},

	async getJWT ({ user }) {
		const token = jwt.sign(user, jwtSecret, {
			expiresIn: '1m'
		});

		return {
			...user,
			token,
		}
	},

}