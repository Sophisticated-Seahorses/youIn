import React from 'react';
import $ from 'jquery';

class OwnerDetailedView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirm: false,
      remindButtonClicked: false
    };
    //bind methods here
    this.deleteEvent = this.deleteEvent.bind(this);
    this.updateEventStatus = this.updateEventStatus.bind(this);
    this.handleRemindClick = this.handleRemindClick.bind(this);
  }
  //insert methods here


  updateEventStatus(url) {
    // AJAX request to delete event from users list in the database
    // console.log('yo', this.props.accessToken);
    $.ajax({
      url: url,
      method: 'POST',
      'Content-type': 'application/json',
      beforeSend: (xhr) => {
        xhr.setRequestHeader ('Authorization', 'Bearer ' + this.props.accessToken);
      },
      data: {
        eventId: JSON.stringify(this.props.event.event_id)
      },
      success: function() {
        console.log('Success');
      },
      error: function(err) {
        console.log('Error in updateEventStatus in OwnerDetailedView.jsx', err);
      }
    });
  }

  deleteEvent () {
    console.log('event DELETED!');
    this.updateEventStatus('/delete/owner');

  }

  sendSmsReminder(url) {
    // AJAX request to send event reminder SMS from users list in the database
    $.ajax({
      url: url,
      method: 'POST',
      'Content-type': 'application/json',
      data: {
        event: JSON.stringify(this.props.event)
      },
      success: function() {
        console.log('Successful Ajax sendSmsReminder!');
      },
      error: function(err) {
        console.log('Error in sendSmsReminder in OwnerDetailedView.jsx', err);
      }
    });
  }

  handleRemindClick () {
    console.log('reminder clicked!');

    if (!this.state.remindButtonClicked) {
      this.sendSmsReminder('/sms/remind');
    }
    
    this.setState({
      remindButtonClicked: !this.state.remindButtonClicked
    });
  }

  render() {
    const attendees = this.props.event.attendees;

    return (
      <div className="row list-item">
        <div className="col-md-8 col-md-offset-1">
          <p>{this.props.event.description}</p>
          <p>We're meeting at: {this.props.event.location}</p>
        </div>
        <div className="col-md-3">
          <ul>
            {attendees.map((attendee, i) => <li key={i}>{attendee.firstname}</li>)}
          </ul>
        </div>
        <button onClick={this.deleteEvent} id="owner-delete-button" className="col-md-offset-1">Delete this Event</button>
        {!this.state.remindButtonClicked
          ? <button onClick={this.handleRemindClick} id="owner-delete-button" className="col-md-offset-1">Send Reminder Now</button>
          : <h3 className="sendText" id="" onClick={this.handleRemindClick}>Reminder Text Sent!</h3>
        }
      </div>
    );
  }
}

export default OwnerDetailedView;


// {this.state.confirm === false ? "Delete this Event" : "Are you sure?"}