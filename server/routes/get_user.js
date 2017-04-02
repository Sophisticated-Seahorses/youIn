'use strict';

let db = require('../config');

module.exports = function(req, res) {
  db.query('SELECT users.user_id, users.firstname, users.lastname, users.photoUrl FROM users \
  		where users.user_id = $1', [req.user.user_id])
  .then ( (users) => {
    res.status(200).json(users);
  })
  .catch( (err) => {
    res.status(500).send(err, 'Error in get_users handler function');
  })

}
