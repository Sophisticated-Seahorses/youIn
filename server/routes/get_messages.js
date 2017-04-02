'use strict'

let db = require('../config.js');

module.exports = function(event_id){
  console.log('inside save messageyoyoyo', event_id);

return db.query('SELECT * FROM MESSAGES WHERE event_id=$1', [event_id]);
}
