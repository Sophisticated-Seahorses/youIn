import React from 'react';
import Message from './Message.jsx';
// var socket = require('react-socket');

class Chat extends React.Component{
  constructor(props){
    super(props);
    this.state={
      message: '',
      messages: []
    }
    // bind functions
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    // var socket = io();
    // var context = this;
    // socket.on('messages', (msg) => {
    //   console.log('messages', msg);
    //   let messages = context.state.messages;
    //   messages = msg;
    //   console.log('messages', messages);
    //   context.setState({
    //     messages: messages
    //   })
    // });
  }

  componentDidMount(){
    //listening for 'chat message', setting state
  }

  handleFormSubmit(event){
    event.preventDefault();
    event.stopPropagation();

    let context = this;
    let author = this.props.owner;
    console.log('author', author);
    let name = author.firstname + ' ' + author.lastname;
    console.log('name', name);
    console.log('name', author.firstname);
    console.log('inside form event');

    // var socket = io();
    // var message = {
    //   event_id: 3,
    //   event_owner: 234234234,
    //   message: this.state.message,
    //   photourl: author.photourl,
    //   author_id: author.user_id,
    //   author_email: author.email,
    //   name: name
    // }

    // //route and message to send to server
    // socket.emit('chat', message);

    // this.setState({
    //   message: ''
    // })
  }

  handleTextChange(event){
    console.log('inside handleTextChange')
    this.setState({
      message: event.target.value
    })
  }

  render(){

    return(
    <div className='chatContainer'>
      <form onSubmit={this.handleFormSubmit} className='chatFlexForm'>

        <div className='chatFlexTop'>
          <div className='flexRowTop'>
            <h2 className='flexRowItemLeft'> <span className='left-arrow'>&#9664; </span>Event Name </h2>
          </div>
        </div>

        <div className='chatFlexMiddle'>
          <ul className='flexRowMiddle'>
          </ul>
        </div>

        <div className='chatFlexBottom'>
          <div className='flexRowBottom'>
            <input type='text' className='chatFlex4-5' onChange={this.handleTextChange} value={this.state.message} placeholder='chat with friends' />
            <input type='submit' className='chatFlex1-5' />
          </div>
        </div>

      </form>
    </div>
    )
  }
}

export default Chat;
            // {this.state.messages.map(message =>
            //   // <Message message={message} className='displayChatNames' key={message.created}/>
            // )}