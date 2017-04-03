'use strict';

var db = require('./config');
var users = require('./data').users;
var events = require('./data').events;
var usersEvents = require('./data').usersEvents;



// iterate over the users array
users.forEach( (user) => {
  db.query('INSERT into users VALUES (${user_id}, ${token}, ${firstname}, ${lastname}, ${photoUrl}, ${email}, ${phoneNumber}) ON CONFLICT (user_id) DO UPDATE SET phoneNumber = excluded.phoneNumber, email = excluded.email;', 
    user)
 .then((result) => {
   console.log('these are fake users', result);
   // done(null, result);
 })
 .catch((err) => {
   console.log('this is an error with users', err);
   // done(err, null);
 });
});

events.forEach( (event) => {
  db.query('INSERT into EVENTS VALUES (${event_id}, ${owner}, ${title}, ${short_desc}, ${description}, ${location}, ${date}, ${time}, ${min})ON CONFLICT (event_id) DO UPDATE SET description = excluded.description;',
    event)
  .then((result) => {
    console.log('these are fake events', result);
  })
  .catch((err) => {
    console.log('this is an error with events', err);
  });
});

usersEvents.forEach( (userEvent) => {
  db.query('INSERT into users_events VALUES (${event_id}, ${user_id}, ${current_status})', userEvent)
  .then((result) => {
    console.log('these are fakes user_events', result);
  })
  .catch((err) => {
    console.log('this is an error with the user_events', err);
  });
}); 


// db.query('SELECT * FROM users')
// .then( (result) => {
//   let users = result[0];
//   users.forEach((user1) => {
//     users.forEach((user2) => {
//       if (user1.user_id !== user2.user_id){
//         db.query('INSERT into friends SET ?', {user1: user1.user_id, user2: user2.user_id})
//       }
//     });
//   });
// });
  // add each to users table
    // add all events to events table
      // add all attendees to userEvents table
        // add all friends to friends table
          // exit script