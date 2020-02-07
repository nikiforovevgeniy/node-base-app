---
to: controllers/<%= h.inflection.pluralize(name) %>.js
---
const { check } = require('express-validator');
const { <%= Name %> } = require('@/models');

module.exports = {

	validation: {
		//
	},

	async getAll () {
		return = await <%= Name %>.fetchAll();
	},

	async getOne ({ id }) {
		return await <%= Name %>.forge({id}).fetch();
	},

	async create (data) {
		return await <%= Name %>.forge(data).save();
	},

	async update ({ id, ...data }) {
		return await <%= Name %>.forge({id}).save(data);
	},

	async remove ({ id }) {
		await <%= Name %>.forge({id}).destroy();
		return { id };
	},

}