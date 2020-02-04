exports.seed = async function(knex) {
	await Promise.all([
		knex('users').truncate(),
	]);

	await knex('users').insert([
		{
			name: 'test',
			email: 'test@test.ru',
			password: '$2y$10$u.wGDSYogq8ZbkIkLR1C1Oe5YRNEHU2kPh5O9kEz42VpAcRadYoAW', //12345
		},
	]);
}