import React from 'react';
import $ from 'jquery';
import io from 'socket.io-client';

const socket = io();

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', user: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleChatMessageSubmit(event) {
    socket.emit('sendMessage', this.state.value);
    event.preventDefault();
  }

  onComponentLoad(){
    
  }

  render() {
    return (
      <div>
        <ul id="messages"></ul>
        <form onSubmit={this.handleSubmit}>
          <input id="m" type="text" value={this.state.value} onChange={this.handleChange}/>
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default ChatRoom;