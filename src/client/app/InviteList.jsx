import React from 'react';

var InviteList = (props) => (
	<div className="invite-list">
	{props.invites.map((invite) =>
		<div>Name: <b>{invite.name}</b>            Email: <b>{invite.email} </b></div> 
	)}
	</div>
);

export default InviteList;