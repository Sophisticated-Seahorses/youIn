import React from 'react';

class OwnerDetailedView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    //bind methods here

  }
  //insert methods here

  render() {
    const attendees = this.props.event.attendees;

    return (
      <div className="row list-item">
        <div className="col-md-8 col-md-offset-1">
          <p>{this.props.event.description}</p>
          <p>{this.props.event.location}</p>
        </div>
        <div className="col-md-3">
          <ul>
            {attendees.map((attendee, i) => <li key={i}>{attendee}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default OwnerDetailedView;