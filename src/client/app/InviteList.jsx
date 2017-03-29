import React from 'react';

var InviteList = (props) => (
	<div className="invite-list">
	{props.invites.map((invite) =>
		<div>Name: {invite.name} Email: {invite.email}</div>
	)}
	</div>
);

export default InviteList;