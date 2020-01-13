const sequelize = require('@/sequelize')();
const User = sequelize.import('@/models/user');

module.exports = {

	async index (req, res, next) {
		try {
			const users = await User.findAll();
			res.json(users);
		} catch (error) {
			next(error);
		}
	}

}