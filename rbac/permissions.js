module.exports = {
	user: {
		can: [
			'users:self',
		],
	},
	admin: {
		inherits: ['user'],
		can: [
			'users:getAll',
			'users:getOne',
			'users:create',
		],
	},
}