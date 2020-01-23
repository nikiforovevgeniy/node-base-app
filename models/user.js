const bookshelf = require('@/bookshelf');

const user = bookshelf.model('User', {
	tableName: 'users'
});

module.exports = user;