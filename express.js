const bodyParser = require('body-parser');

let express = null;

module.exports = (() => {
	if (!express) {
		express = require('express')();
		
		express.use(bodyParser.json());
	}
	return express;
})();