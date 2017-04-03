let dotenv = require('dotenv');
dotenv.config({path: '.env'});

let twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
let twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
let twilioNumber = process.env.TWILIO_NUMBER;

let client = require('twilio')(twilioAccountSid, twilioAuthToken); 
 
module.exports.sendSms = function(event, attendees) {
  let eventDateString = event.date.slice(0, 10);
  let fullEventTime = new Date (eventDateString + ' ' + event.time);

  let hoursLeft = Math.floor((Date.parse(fullEventTime) - Date.now()) / (60 * 60 * 1000));

  console.log('the twilioAccountSid', twilioAccountSid);
  return new Promise(function(resolve, reject) {
    let allData = [];

    attendees.forEach(function(attendee) {
      // trace: attendee;
      client.messages.create({ 
        to: attendee.phonenumber, 
        from: twilioNumber, 
        body: `Hey ${attendee.firstname}, ${event.title} is happening in ${hoursLeft} hours! Are youIn?`

      }, function(err, data) {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log('SMS sent!');
          allData.push(data);

          if (allData.length === attendees.length) {
            resolve(allData);
          }
        }
      });
    });
  }); 
};
