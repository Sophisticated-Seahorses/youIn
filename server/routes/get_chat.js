'use strict';

let db = require('../config');

module.exports = function(req, res) {
  db.query('SELECT * FROM chats WHERE event_id = $1', [req.query.eventId])
  .then ( (chats) => {
    res.status(200).json(chats);
  })
  .catch( (err) => {
    res.status(500).send(err, 'Error in get_chats handler function');
  })
}