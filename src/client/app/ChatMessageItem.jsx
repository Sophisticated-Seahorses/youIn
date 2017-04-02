import React from 'react';
import {render} from 'react-dom';

const ChatMessageItem = (props) => (
	<div> <b>{props.message.firstname}</b> : {props.message.message}</div>
)
export default ChatMessageItem;