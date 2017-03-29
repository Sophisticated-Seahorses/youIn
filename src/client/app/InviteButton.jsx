import React from 'react';
import {render} from 'react-dom';
import FriendsListItem from './FriendsListItem.jsx';
import Modal from 'boron/DropModal';
import $ from 'jquery';
import InviteList from './InviteList.jsx';

class InviteButton extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			email: '',
			invites: null
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	showModal(){
		this.refs.modal.show();
	}

	hideModal(){
		this.refs.modal.hide();
	}

	componentWillMount(){
		$.ajax({
			url: '/invites',
			method: 'GET',
			contentType: 'application/json',
			success: function(data){
				this.setState({
					invites: data
				})
			}.bind(this),
	    error: function(err) {
	      console.log('unsuccessful insert into invites', err);
	    }	
		});
	}

	handleSubmit(event){
		event.preventDefault();
		let inviteData = {
			name: this.state.name,
			email: this.state.email
		}
		$.ajax({
			url: '/invites',
			method: 'POST',
			data: JSON.stringify(inviteData),
			contentType: 'application/json',
	    success: function() {
	    	this.hideModal();
	    }.bind(this),
	    error: function(err) {
	      console.log('unsuccessful insert into invites', err);
	    }
		});
	}

	handleChange(name, event){
		let newState = {};
		newState[name] = event.target.value;
		this.setState(newState);
	}

  render(){
    return(
      <div>
      <div><button id="invite" onClick={this.showModal.bind(this)} className="col-md-4 col-md-offset-4">Send Invite To App</button></div>
      <Modal ref="modal">
      	<div className="container-fluid">
      		<form onSubmit={this.handleSubmit.bind(this)}>
      			<div className="row">
      				<div className="col-md-12">
      					<InviteList invites={this.state.invites}> </InviteList>
	      				<h4 className='create'>Input name and email:</h4>
	              Name: 
	              <input 
	                value={this.state.title} 
	                type="text"
	                onChange={this.handleChange.bind(this, 'name')} required
	              />
	              Email: 
	              <input 
	                value={this.state.title} 
	                type="text"
	                onChange={this.handleChange.bind(this, 'email')} required
	              />	              
      				</div>
              <div className="col-md-12">
                <button type="submit">Invite</button>
              </div>
      			</div>
      		</form>
      	</div>
      </Modal>
      </div>
    );
  }
}

export default InviteButton;