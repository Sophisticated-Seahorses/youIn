'use strict';

let db = require('../config');

module.exports = function(req, res) {
	let user = parseInt(req.user.user_id);
	let email = req.body.email;
	let name = req.body.name;

	db.query('INSERT into INVITES (user_id, name, email)\
		VALUES ($1, $2, $3)', [user, name, email])
	.then(() => {

		res.status(201).send();
	})
	.catch( (err) => {
		console.log(err)
		res.status(404).send(err);
	})
};