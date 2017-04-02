import React from 'react';

class EventListItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(
      <div className='eventListItem'>
        <li onClick={this.props.handleEventClick}> {this.props.event.description}
        </li>
      </div>
    )
  }
}

export default EventListItem;
