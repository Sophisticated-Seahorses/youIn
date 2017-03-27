import React from 'react';
import {render} from 'react-dom';
import OwnerEventList from './OwnerEventList.jsx';
import FriendEventList from './FriendEventList.jsx';
import CreateEventButton from './CreateEventButton.jsx';
import Homepage from './Homepage.jsx';
import {users as friends} from '../../../server/data.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Facebook from './Facebook.jsx';
import $ from 'jquery';




class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      friends: [],
      facebookToken: '',
      userName: '',
      ownerEvents: [
        {
          event_id: 1,
          owner: 1,
          title: 'I Wanna Go To The Beach',
          'short_desc': 'Beach Party',
          description: 'Let\'s go to Ocean Beach while the sun is out! BYOB and don\'t joke about sharks, I\'ll kick you out for real.',
          location: 'Ocean Beach, SF, right off the N Judah.',
          date: '2017-03-14',
          time: '05:30:00',
          attendees: 10
        }
      ],
      friendEvents: [
        {
          event_id: 2,
          owner: 2,
          title: 'Pig, Beer, and Bocce Ball',
          'short_desc': 'BBQ',
          description: 'Vegan Only; don\'t be a jerk about it.',
          location: '456 Fillmore Street, San Francisco, CA 94117',
          date: '2017-03-14',
          time: '17:45:00',
          attendees: 3
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
          attendees: 6
        }
      ]
    }

    this.getUsers = this.getUsers.bind(this);
  }

  componentDidMount() {
    let context = this;

    context.getUsers();
  }
  setToken(token) {
    // console.log(token, 'this token went through to the top');
    this.setState({
      facebookToken: token
    });
    // console.log(this.state.facebookToken, 'so does this work?');
  }
  setName(name) {
    this.setState({
      userName: name 
    });
  }

  getUsers() {
    let context = this;
    $.ajax({
      url: '/users',
      method: 'GET',
      contentType: 'application/json',
      success: function(data) {
        console.log('result of get on /users', data);
        context.setState({friends: data});
      },
      error: function(err) {
        console.log('error in ajax get request in CreateEventButton', err);
      }
    })
  }

  getEvents(history, callback) {
    $.ajax({
      url: '/events',
      method: 'GET',
      contentType: 'application/json',
      success: callback.bind(this),
      error: function(err) {
        console.log(err);
        if (err.status === 401) {
          //history.push('/');
        }
      }.bind(this),
    });
  }

  render () {
    return (
      <Router>
      <div>
        <Route exact path='/' component={(props) => {
          return (<Facebook history={props.history} 
            setToken={this.setToken.bind(this)}
            setName={this.setName.bind(this)} 
            getEvents={this.getEvents.bind(this)}/>
          )
        }} />
        <Route path='/homepage' component={(props) => {
          return ( <Homepage ownerEvents={this.state.ownerEvents}
            friendEvents={this.state.friendEvents} friends={this.state.friends} 
            accessToken={this.state.facebookToken} userName={this.state.userName}
            history={props.history}
            getEvents={this.getEvents.bind(this)}/>)
        }} />
      </div>
      </Router>
    )
  }

}

render(<App/>, document.getElementById('app'));