import React from 'react';
import EventListItem from './EventListItem.jsx';

class MyEvents extends React.Component {
  constructor(props){
    super(props);
    this.state={}
  }


render(){

  return(
    <div>
      {this.props.events.map( event =>
        <EventListItem key={event.date} event={event}/>
      )}
    </div>
    )
  }
}

export default MyEvents;