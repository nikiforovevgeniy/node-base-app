const bodyParser = require('body-parser');
const express = require('express')();

express.use(bodyParser.json());

module.exports = express;