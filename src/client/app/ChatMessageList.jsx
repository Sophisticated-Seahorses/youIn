import React from 'react';
import {render} from 'react-dom';
import ChatMessageItem from './ChatMessageItem.jsx';

class ChatMessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	let messageList = undefined;
    if(this.props.messages !== null){
      messageList = this.props.messages;
    }
  	return (
  		<div>
  		<h3> Event Chatter </h3>
	  	{messageList !== undefined ? (
	  		this.props.messages.map((message, i) => <ChatMessageItem key={i} message={message}/>)  
	  	) : <div></div>}
  		</div>
  	);
  }
}

export default ChatMessageList;