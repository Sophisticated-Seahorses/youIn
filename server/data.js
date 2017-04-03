'use strict';

let users = [
  {
    user_id: 1,
    token: 1234,
    firstname: 'David',
    lastname: 'Deng',
    photoUrl: 'anthonyurl',
    email: 'daviddeng@gmail.com',
    phoneNumber: null
  },

  {
    user_id: 2,
    token: 12345,
    firstname: 'JG',
    lastname: 'Demathieu',
    photoUrl: 'nickurl',
    email: 'jgdemathieu@gmail.com',
    phoneNumber: null
  },

  {
    user_id: 3,
    token: 12346,
    firstname: 'Mike',
    lastname: 'Burton',
    photoUrl: 'davidurl',
    email: 'david.brodie122@gmail.com',
    phoneNumber: null
  },
  {
    user_id: 4,
    token: 12344,
    firstname: 'Jeff',
    lastname: 'Milberger',
    photoUrl: 'gusurl',
    email: 'jeff.milberger@gmail.com',
    phoneNumber: null
  },

  {
    user_id: 5,
    token: 123467,
    firstname: 'Fred',
    lastname: 'Zirdung',
    photoUrl: 'fredurl',
    email: 'fred@hackreactor.com',
    phoneNumber: null
  } 
];
let events = [
  {
    event_id: 1,
    owner: 1,
    title: 'I Wanna Go To The Beach',
    'short_desc': 'Beach Party',
    description: 'Let\'s go to Ocean Beach while the sun is out! BYOB and don\'t joke about sharks, I\'ll kick you out for real.',
    location: 'Ocean Beach, SF, right off the N Judah.',
    date: '2017-03-14',
    time: '05:30:00',
    attendees: 10,
    min: 5
  },
  {
    event_id: 2,
    owner: 2,
    title: 'Pig, Beer, and Bocce Ball',
    'short_desc': 'BBQ',
    description: 'Vegan Only; don\'t be a jerk about it.',
    location: '456 Fillmore Street, San Francisco, CA 94117',
    date: '2017-03-14',
    time: '17:45:00',
    attendees: 3,
    min: 15
  },
  {
    event_id: 3,
    owner: 5,
    title: 'Moonlight at 8',
    'short_desc': 'Movie',
    description: 'Let\'s go see Moonlight',
    location: 'Downtown AMC Metreon',
    date: '2017-03-14',
    time: '20:00:00',
    attendees: 6,
    min: 5
  }
];

let usersEvents = [
  {
    event_id: 1,
    user_id: 2,
    'current_status': 'pending'
  },
  {
    event_id: 1,
    user_id: 3,
    'current_status': 'pending'
  },
  {
    event_id: 1,
    user_id: 4,
    'current_status': 'rejected'
  },
  {
    event_id: 1,
    user_id: 5,
    'current_status': 'pending'
  },
  {
    event_id: 2,
    user_id: 1,
    'current_status': 'accepted'
  },
  {
    event_id: 2,
    user_id: 3,
    'current_status': 'rejected'
  },
  {
    event_id: 2,
    user_id: 4,
    'current_status': 'accepted'
  },
  {
    event_id: 2,
    user_id: 5,
    'current_status': 'pending'
  },
  {
    event_id: 3,
    user_id: 1,
    'current_status': 'rejected'
  },
  {
    event_id: 3,
    user_id: 2,
    'current_status': 'accepted'
  },
  {
    event_id: 3,
    user_id: 3,
    'current_status': 'pending'
  },
  {
    event_id: 3,
    user_id: 4,
    'current_status': 'accepted'
  },
];

module.exports.users = users;
module.exports.events = events;
module.exports.usersEvents = usersEvents;

