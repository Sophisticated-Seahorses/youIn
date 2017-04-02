import React from 'react';
import MyEvents from './MyEvents.jsx';


class Account extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      photo: false
    }
  }
  render(){
    return(
    <div>
      <div className='col-sm-12 accountTopBar'>
        <div className='row-sm-3 accountPhoto'>
         <img src={this.props.friends[0].photourl} />
        </div>
        <div className='row-sm-9 accountName'>
          <h2>{this.props.username}</h2>
        </div>
      </div>
      <div className='col-sm-12 accountMyEvents'>
        <h2>My Events</h2>
        <MyEvents events={this.props.myEvents}/>

      </div>
      <div className='col-sm-12 accountFriendEvents'>
        <h2>Friend's Events</h2>
        <MyEvents events={this.props.friendEvents}/>
      </div>
    </div>
    )
  }
}

export default Account;
