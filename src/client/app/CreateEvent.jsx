import React from 'react';
import {render} from 'react-dom';
import FriendsListItem from './FriendsListItem.jsx';
import $ from 'jquery';

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: {},
      friends: [],
      title: '',
      what: 'food-drinks',
      where: '',
      date: '',
      time: '',
      min: '',
      invitees: {},
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inviteFriend = this.inviteFriend.bind(this);
    this.addToUsers_Events = this.addToUsers_Events.bind(this);
    this.handleClickedInvite = this.handleClickedInvite.bind(this);
  }

  componentDidMount() {
    this.setState({friends: this.props.friends});
  }

  handleChange (name, event) {
    let newState = {};
    newState[name] = event.target.value;
    this.setState(newState);
  }

  handleClickedInvite(){
    console.log('inside handleClickedInvite')
      FB.ui({
      method: 'send',
      link: 'https://you--in-staging.herokuapp.com/',
    });
  }

  inviteFriend(friend) {
    let it = friend.user_id;
    if (this.state.clicked[it]) {
      return () => {

        this.setState((prevState, props) => {
          let clicked = prevState.clicked;
          let invitees = prevState.invitees;
          let id = friend.user_id;
          clicked[id] = false;
          delete invitees[id];
          return {invitees: invitees, clicked: clicked};
        });
      };
    } else {
      return () => {

        this.setState((prevState, props) => {
          let clicked = prevState.clicked;
          let invitees = prevState.invitees;
          let id = friend.user_id;
          invitees[id] = friend;
          clicked[id] = true;
          return {invitees: invitees, clicked: clicked};
        });
      };
    }
  }

  addToUsers_Events(eventId) {
    //post request on new route, events/users
    //include user ids from attendees
    //include data from the event that was created

    let users = this.state.invitees;
    let userIds = [];
    for (let i in users) {
      userIds.push(users[i].user_id);
    }
    let users_eventsData = {
      userIds: userIds,
      eventId: eventId,
    };

    $.ajax({
      url: '/events/users',
      method: 'POST',
      data: JSON.stringify(users_eventsData),
      contentType: 'application/json',
      success: function(data) {
        console.log('success from addToUsers_Events in CreateEvent :', data);
        this.props.getEvents(this.props.history, function(result) {
          this.setState({
            ownerEvents: result.ownerEvents,
            friendEvents: result.friendEvents
          });
        });
      }.bind(this),
      error: function(err) {
        console.log('error from addToUsers_Events  in CreateEvent', err);
        this.props.history.push('/');
      }.bind(this)
    });
  }

  handleSubmit (event) {
    let context = this;
    event.preventDefault();
    let eventData = {
      owner: '1', //this is hardcoded - we need to have the owner come from who is logged in.
      title: this.state.title,
      short_desc: this.state.what,
      description: this.state.description,
      location: this.state.where,
      date: this.state.date,
      time: this.state.time,
      min: this.state.min
    };
    $.ajax({
      url: '/events/create',
      method: 'POST',
      data: JSON.stringify(eventData),
      contentType: 'application/json',
      success: function(data) {
        console.log('data from ajax in CreateEvent', data.event_id);
        context.addToUsers_Events(data.event_id);
      },
      error: function(err) {
        console.log('error in ajax request in CreateEvent', err);
        this.props.history.push('/');
      }
    });
  }


  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="row">
          <div className="col-sm-8">
            <div className="form-group">
              <h4>Event name</h4>
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon1"></span>
                <input type="text" className="form-control" aria-describedby="basic-addon1"
                  value={this.state.title}
                  type="text"
                  onChange={this.handleChange.bind(this, 'title')} required/>
              </div>

              <h4>Location</h4>
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon1"></span>
                <input type="text" className="form-control" aria-describedby="basic-addon1"
                  value={this.state.where}
                  onChange={this.handleChange.bind(this, 'where')}
                  type="text" required/>
              </div>

              <h4>Pick an Event Category</h4>
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon1"></span>
                <select value={this.state.what} onChange={this.handleChange.bind(this, 'what')} required>
                 <option value="food-drinks" >Food/Drinks</option>
                 <option value="indoor-activity">Indoor Activity</option>
                 <option value="outdoor-activity">Outdoor Activity</option>
                 <option value="hangout">Hangout</option>
                 <option value="other">Other</option>
               </select>
              </div>

              <h4>Date & Time</h4>
              <div className='input-group date' id='datetimepicker1'>
                  <input className="form-control" aria-describedby="basic-addon1"
                    value={this.state.date}
                    onChange={this.handleChange.bind(this, 'date')}
                    type="date" required
                  />
                  <input className="form-control" aria-describedby="basic-addon1"
                    value={this.state.time}
                    onChange={this.handleChange.bind(this, 'time')}
                    type="time" required
                    />
                  <span className="input-group-addon">
                      <span className="glyphicon glyphicon-calendar"></span>
                  </span>
              </div>

              <h4>Suggested Donation (optional)</h4>
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon1"></span>
                <input type="text" className="form-control" aria-describedby="basic-addon1"/>
              </div>

              <h4>Minimum number of friends for this Event</h4>
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon1"></span>
                <input type="text" className="form-control" aria-describedby="basic-addon1"
                  value={this.state.min}
                  onChange={this.handleChange.bind(this, 'min')}
                  type="number" required/>
              </div>

              <div className="col-sm-12" className="facebook-button">
                <button className="btn-primary"
                        onClick={this.handleClickedInvite}>
                        Invite friends from Facebook (optional)
                </button>
              </div>

              <div className="col-sm-12">
                <h4>Invite Friends on YouIn</h4>
              </div>
              <div className="col-sm-12" >
                {
                  this.props.friends.map( (friend, i) => (
                    <FriendsListItem
                      className="friendsNameList"
                      key={i}
                      friend={friend}
                      inviteFriend={this.inviteFriend(friend)}
                      />
                    )
                  )
                }
              </div>

            </div>
            <div className="col-md-12">
              <h4 className='create'>Description: </h4>
            </div>
            <div className="col-md-12">
              <input
              value={this.state.description}
              onChange={this.handleChange.bind(this, 'description')}
              type="text" required/>
            </div>
            <div className="col-md-12">
              <button type="submit">See Who's In!</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    );

  }
}

export default CreateEvent;
