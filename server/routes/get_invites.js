'use strict';

let db = require('../config');

module.exports = function(req, res) {
  
  db.query('select * from invites')
  .then ( (invites) => {
    res.status(200).json(invites);
  })
  .catch( (err) => {
    res.status(404).send(err, 'Error in get_invites handler function');
  })

}