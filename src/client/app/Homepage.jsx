import React from 'react';
import OwnerEventList from './OwnerEventList.jsx';
import FriendEventList from './FriendEventList.jsx';
import CreateEventButton from './CreateEventButton.jsx';
import LogoutButton from './LogoutButton.jsx';

const Homepage = (props) => (

  <div>
    <div className="container">
      <div className="page-header">
       <h2 id='userName'>Welcome {props.userName}</h2>
        <LogoutButton />
      </div>
      <CreateEventButton 
      history={props.history}
      friends={props.friends}
      getEvents={props.getEvents}/>
      <br /><br />
      <div className='container events'>
        <br></br><br></br>
        <h2 id="my-events-title" className='header-inner'> My Events</h2>
        <OwnerEventList  ownerEventsArr={props.ownerEvents}/>
      </div>
        <br /><br />
      <div className='container events'>
        <h2 id="friend-events-title"className='header-inner'> Friend Events</h2>
        <FriendEventList accessToken={props.accessToken} friendEventsArr={props.friendEvents}/>
      </div>
    </div>
  </div>
)



export default Homepage;