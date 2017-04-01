import React from 'react';
import {render} from 'react-dom';
import ChatMessageItem from './ChatMessageItem.jsx';

class ChatMessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    //bind methods here
  }
  //Insert Methods Here

  render() {
  	let messageList = undefined;
  	return (
  		<div>
  		<h3> Event Chatter </h3>
	  	{messageList !== undefined ? (
	  		this.props.messages.map((message) => <ChatMessageItem />)  
	  	) : <div></div>}
  		</div>
  	);
  }
}

export default ChatMessageList;