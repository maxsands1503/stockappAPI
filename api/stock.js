var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var queries = require('../Queries/apiQueries');

//(ROUTES SETUP (1)
router.get('/', function(req, res, next){
  queries.getData()
  .then(function(data){
      res.json({stocks: data});
  });
});
//(ROUTES SETUP (4)
router.get('/:id', function(req, res, next){
  queries.getOneData(req.params.id)
  .then(function(data){
      res.json({stocks: data});
  });
});
//(ROUTES SETUP (6)
router.post('/', function(req, res, next){
  queries.addstocksItem(req.query)
  .then(function(data){
      res.json({message: 'stock item added'});
  });
});
//(ROUTES SETUP (8)
router.delete('/:id', function(req, res, next){
  queries.deleteItem(req.query.stocks_id)
  .then(function(data){
      res.json({stocks: data});
  });
});
//(ROUTES SETUP (10)

module.exports = router;
