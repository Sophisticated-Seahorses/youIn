'use strict';

let db = require('../config');
module.exports = function(req, res) {
	var user_id = req.user.user_id;
  db.query('select * from invites where user_id = $1', [user_id])
  .then ( (invites) => {
    res.status(200).json(invites);
  })
  .catch( (err) => {
    res.status(404).send(err, 'Error in get_invites handler function');
  })

}