import React from 'react';

class EventOverview extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {}
    this.updateEventDetails = this.updateEventDetails.bind(this);
  }
  componentDidMount(){
    console.log('inside DID MOUNT EVENT OVERVIEW')
  }
  updateEventDetails(event){
    console.log('inside update event details');
  }

  render(){
    const event = this.props.event.length ? this.props.event[0] : undefined;
    return(
      <div className='EventOverviewWrapper'>
        <div className='eventDetails'>
          <h4>Date: {event.title}</h4>
          <h4>Location: {event.description}</h4>
          <h4>Location: {event.short_desc}</h4>

          <p onClick={this.updateEventDetails}>Update</p>
        </div>

        <div className='whosIn'>
          <ul>
            <li>MIKE</li>
            <li>ED</li>
            <li>BETH</li>
          </ul>
          <h4>Add Friends</h4>
        </div>

        <div className='reminders'>
          <h4>Send rsvp reminders to group now</h4>
          <h4>Send event reminders to group now</h4>
        </div>
      </div>
    )
  }
}

export default EventOverview;
