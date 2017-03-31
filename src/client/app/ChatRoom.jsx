import React from 'react';
import $ from 'jquery';
import io from 'socket.io-client';

const socket = io();

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', user: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleChatMessageSubmit = this.handleChatMessageSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleChatMessageSubmit(event) {
    event.preventDefault();
    console.log(this.state.user[0]);
    socket.emit('sendMessage', {
      user: this.state.user[0],
      eventId: this.props.eventId,
      message: this.state.value
    })
  }

  componentDidMount(){
    $.ajax({
      url: '/user',
      method: 'GET',
      success: function(data) {
        this.setState({user: data});
      }.bind(this),
      error: function(err) {
        console.log('error in ajax request in ChatRoom', err);
        this.props.history.push('/');
      }
    })
  }

  render() {
    return (
      <div>
        <ul id="messages"></ul>
        <form onSubmit={this.handleChatMessageSubmit}>
          <input id="m" type="text" value={this.state.value} onChange={this.handleChange}/>
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default ChatRoom;