exports.seed = async function(knex) {
	await Promise.all([
		knex('users').truncate(),
	]);

	await knex('users').insert([
		{
			name: 'user',
			email: 'user@user.ru',
			password: '$2b$10$iP9ePnF78ye5MMaNRMUeOu7t7jxD5Q3tKxTqAmCptz9mtxFPCUtc2', //12345
			role: 'user',
		},
		{
			name: 'admin',
			email: 'admin@admin.ru',
			password: '$2b$10$iP9ePnF78ye5MMaNRMUeOu7t7jxD5Q3tKxTqAmCptz9mtxFPCUtc2', //12345
			role: 'admin',
		},
	]);
}