---
to: models/<%= name %>.js
---
const bookshelf = require('@/bookshelf');

const <%= name %> = bookshelf.model('<%= Name %>', {
	tableName: '<%= h.inflection.pluralize(name) %>',
});

module.exports = <%= name %>;