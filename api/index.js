var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var queries = require('../Queries/apiQueries');

//change to use the list.js file
var stock = require('./stock');
router.use('/stock', stock);

module.exports = router;
