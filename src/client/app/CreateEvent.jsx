import React from 'react';

class CreateEvent extends React.Component {
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
    return(
    <div>
    <h4>Event name</h4>
    <div className="input-group">
      <span className="input-group-addon" id="basic-addon1"></span>
      <input type="text" className="form-control" aria-describedby="basic-addon1"/>
    </div>

    <h4>Location name</h4>
    <div className="input-group">
      <span className="input-group-addon" id="basic-addon1"></span>
      <input type="text" className="form-control" aria-describedby="basic-addon1"/>
    </div>

    <h4>Location Address</h4>
    <div className="input-group">
      <span className="input-group-addon" id="basic-addon1"></span>
      <input type="text" className="form-control" aria-describedby="basic-addon1"/>
    </div>


    <h4>Date & Time</h4>
    <div className="input-group">
      <span className="input-group-addon" id="basic-addon1"></span>
      <input type="text" className="form-control" aria-describedby="basic-addon1"/>
    </div>


    <h4>Suggested Donation (optional)</h4>
    <div className="input-group">
      <span className="input-group-addon" id="basic-addon1"></span>
      <input type="text" className="form-control" aria-describedby="basic-addon1"/>
    </div>

    <h4>Minimum number of friends for this Event</h4>
    <div className="input-group">
      <span className="input-group-addon" id="basic-addon1"></span>
      <input type="text" className="form-control" aria-describedby="basic-addon1"/>
    </div>

    <div className="col-sm-1"><button className="btn-primary" onClick={this.handleClickedInvite}>Invite friends from Facebook</button><span><p>(optional)</p></span></div>
    <div>
      <h4>Invite Friends on YouIn</h4>
    </div>
    <div>
      <ul>
        <li>Nick</li>
        <li>Sam</li>
        <li>Gus</li>
        <li>JG</li>
        <li>David</li>
        <li>Jeff</li>
      </ul>
    </div>
    </div>

    )
  }
}

export default CreateEvent;