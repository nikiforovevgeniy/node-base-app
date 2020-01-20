const sequelize = require('@/sequelize')();
const User = sequelize.import('@/models/user');

module.exports = {

	async index (req, res, next) {
		const users = await User.findAll();
		res.json(users);
	}

}