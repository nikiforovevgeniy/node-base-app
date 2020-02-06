module.exports = {
	user: {
		can: [
			{
				name: 'users:getOne',
				when: params => true
			}
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