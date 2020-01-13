module.exports = {
	port: process.env.SERVER_PORT || 8010,
	db: {
		test: {
			host: process.env.DB_TEST_HOST || 'localhost',
			user: process.env.DB_TEST_USER || 'root',
			password: process.env.DB_TEST_PASSWORD,
			database: process.env.DB_TEST_DB,
		},
	},
}