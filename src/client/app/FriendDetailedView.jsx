import React from 'react';
import $ from 'jquery';
import ChatRoom from './ChatRoom.jsx'

class FriendDetailedView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accepted: false,
      rejected: false
    }
    //bind methods here

  }
  //insert methods here

  acceptClick () {
    console.log('BUTTON CLICKED');
    this.setState({ accepted: true, rejected: false });
    this.props.onIn();
    console.log('this  is my event id', this.props.event.event_id);
    this.confirmEventAccept();


  }

  rejectClick () {
    if (this.state.rejected) {
      this.deleteEvent();
    } else {
      this.setState({ accepted: false, rejected: true });
      this.props.onOut();
      this.confirmEventReject();
    }

  }

  updateEventStatus(url) {
    // AJAX request to delete event from users list in the database
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
        console.log('Error', err);
      }
    });
  }

  confirmEventAccept () {
    // AJAX request sent to DB, confirming this users attendance
    console.log('Confirmed Accepted Event for User');
    this.updateEventStatus('/accept');
  }

  confirmEventReject () {
    // AJAX request sent to DB, confirming this users non-attendance
    console.log('Confirmed Rejected Event for User');
    this.updateEventStatus('/reject');

  }

  deleteEvent () {
    console.log('event DELETED!');
    this.updateEventStatus('/delete');

  }

  render() {
    let inButtonText = this.state.accepted === false ? 'I\'m In' : 'I\'m In!';
    let outButtonText = this.state.rejected === false ? 'I\'m Out' : 'Delete';
    let acceptedId = this.state.accepted === true ? "accept-click" : null;
    let rejectedId = this.state.rejected === true ? "reject-click" : null;



    return (
      <div className="row list-item">
        <div className="col-md-8 col-md-offset-1">
          <p>{this.props.event.description}</p>
          <p>{this.props.event.location}</p>
          <button className="update goingButton" id={acceptedId} onClick={this.acceptClick.bind(this)}>{inButtonText}</button>
          <button className="update goingButton" id={rejectedId} onClick={this.rejectClick.bind(this)}>{outButtonText}</button>
        </div>
        <div className="col-md-3">
          <ul>
            {this.props.event.attendees.map((friend, i) => <li key={i}>{friend.firstname}</li>)}
          </ul>
        </div>
        <div className="col-md-12 ">
          <ChatRoom eventId = {this.props.eventId} />
        </div>
      </div>
    );
  }
}

export default FriendDetailedView;
