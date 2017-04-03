let twilioClient = require('../twilioClient.js');
let model = require('../models/index.js');
// let attendees = require('../dummy_data.json');

module.exports = (req, res) => {
  let sringEvent = req.body['event'];
  let event = JSON.parse(sringEvent);
  
  // model.getUsersToSms.attendingUsersWithPhone(event.event_id);
  // let test = model.getUsersToSms.attendingUsersWithPhone(2);
  // console.log(test);
  //~~hard-coded to event_id value of 2, change in prod~~~~~
  return model.getUsersToSms.attendingUsersWithPhone(event.event_id)
  .then( (attendees) => {
 
    twilioClient.sendSms(event, attendees)
    .then( (results) => {
      res.status(201).send(results);
    })
    .catch( (error) => {
      console.log(error);
      res.status(404).send('Could not send all SMS');
    }); 
  })
  .catch( (err) => {
    console.log('err on the send_sms route', err);
  });
};
