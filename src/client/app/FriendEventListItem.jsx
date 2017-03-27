import React from 'react';
import FriendDetailedView from './FriendDetailedView.jsx';
import moment from 'moment';
class FriendEventListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      accepted: false,
      rejected: false
    }
    //bind methods here
    this.handleClickListItem = this.handleClickListItem.bind(this);
  }
  //Insert Methods Here
  handleClickListItem() {
    this.setState({clicked: !this.state.clicked});
  }

  onAcceptClick () {
    this.setState({ accepted: true, rejected: false });
  }

  onRejectClick() {
    this.setState({ accepted: false, rejected: true });

  }

  render() {
    let date = moment(this.props.event.date);
    let accepted = this.state.accepted === true ? "accepted" : null;
    let rejected = this.state.rejected === true ? "rejected" : null;

    return (
      <div>
      <div className="panel list-item row" onClick={this.handleClickListItem}>
        <div className="glyphicon glyphicon-globe col-sm-1"></div>
        <div className={`${accepted} ${rejected} col-sm-4`}>{this.props.event.title}</div>
        <div className={`${accepted} ${rejected} col-sm-4`}>{date.format('dddd D') + 'th'} at {this.props.event.time}</div>
        <div className={`${accepted} ${rejected} col-sm-3`}>{this.props.event.attendees.length}<span> people IN</span></div>
        <br/>
      </div>
        {this.state.clicked ? <FriendDetailedView
          accessToken={this.props.accessToken}
          onIn={this.onAcceptClick.bind(this)}
          onOut={this.onRejectClick.bind(this)}
          event={this.props.event}/> : '' }
      </div>
    );
  }
}

export default FriendEventListItem;


