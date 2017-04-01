'use strict';

let db = require('../config');

module.exports = function(req, res) {
	console.log('trying to insert');
	let user = req.body.user;
	db.query('INSERT into CHATS (message, user_id, firstname, event_id) VALUES ($1, $2, $3, $4)', 
		[req.body.message, user.user_id, user.firstname, req.body.eventId])
  .then( () => {
    res.status(201).send();
  })
  .catch( (err) => {
  	console.log(err);
    res.status(404).send(err);
  });
};