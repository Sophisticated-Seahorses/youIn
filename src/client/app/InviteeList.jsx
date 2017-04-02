import React from 'react';
import {render} from 'react-dom';

const InviteeList = (props) => (
	<div>
		<h6>Invited Friends</h6>
		<ul>
			{props.invitees.map((invitee) => (
				<li key={invitee.id}>Name: {invitee.name} | Email: {invitee.email} </li>
			))}
		</ul>
	</div>
)
export default InviteeList;
