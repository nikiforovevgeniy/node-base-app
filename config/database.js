module.exports = {
	test: {
		host: process.env.DB_TEST_HOST || 'localhost',
		user: process.env.DB_TEST_USER || 'root',
		password: process.env.DB_TEST_PASSWORD,
		database: process.env.DB_TEST_DB,
	},
}