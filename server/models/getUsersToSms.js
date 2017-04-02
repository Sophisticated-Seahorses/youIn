let db = require('../config');

//Add: Database query (people [attending the party] && [have a phoneNumber])

module.exports.attendingUsersWithPhone = (id) => {

  let query = 'SELECT u.firstname, u.phoneNumber\
  FROM users AS u JOIN users_events AS ue \
  ON u.user_id = ue.user_id\
  WHERE ue.event_id = $1\
  AND u.phoneNumber NOTNULL\
  AND ue.current_status!=\'rejected\'\
  ';

  return db.query(query, [id])
  .then((usersToSms) => {
    // console.log('the query returned attending', usersToSms);
    return usersToSms;
  })
  .catch( (err) => {
    console.log('error in events table query', err);
  });
};

