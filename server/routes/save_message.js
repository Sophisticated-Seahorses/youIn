'use strict'

let db = require('../config.js');

module.exports = function(message){
  console.log('inside save message', message);

return db.query('INSERT INTO messages (event_id, event_owner, message, photourl, author_email, author_id, name) VALUES ($1, $2, $3, $4, $5, $6, $7)', [message.event_id, message.event_owner, message.message, message.photourl, message.author_email, message.author_id, message.name])
}
