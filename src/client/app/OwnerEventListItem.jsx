import React from 'react';
import OwnerDetailedView from './OwnerDetailedView.jsx';
import moment from 'moment';

class OwnerEventListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    //bind methods here
    this.handleClickListItem = this.handleClickListItem.bind(this);
  }
  //Insert Methods Here
  handleClickListItem() {
    this.setState({clicked: !this.state.clicked});
  }

  render() {
    let date = moment(this.props.event.date);

    return (
      <div>
      <div className="panel list-item row" onClick={this.handleClickListItem}>  
        <div className="glyphicon glyphicon-globe col-sm-1"></div>
        <div className="col-sm-4">{this.props.event.title}</div>
        <div className="col-sm-4">{date.format('dddd D') + 'th'} at {this.props.event.time}</div>
        <div className="col-sm-3">{this.props.event.attendees.length}<span> people IN</span></div>
        <br/>
      </div>
        {this.state.clicked ? <OwnerDetailedView event={this.props.event}/> : '' }
      </div>
    );
  }
}

export default OwnerEventListItem;


