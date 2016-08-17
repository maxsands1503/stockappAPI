var knex = require('../db/knex');

module.exports ={
// setup functions in here
//ROUTES SETUP (1)
getData : function(){
  return knex('users').innerJoin('stocks', 'users_id', 'users.id');
  },
//ROUTES SETUP (3)
getOneData : function(id){
  return knex('users').innerJoin('stocks', 'users_id', 'users.id').where({users_id : id});
},
//ROUTES SETUP (5)
addStockItem : function(input){
  return knex.raw("INSERT INTO stocks (user_id, ticker, owned, avgPrice) values (user.id, input.ticker, input.owned, input.avgPrice)")
},
//ROUTES SETUP (7)
deleteItem : function(body){
  return knex('stocks').del().where({id: body});
},
//ROUTES SETUP (9)

};
