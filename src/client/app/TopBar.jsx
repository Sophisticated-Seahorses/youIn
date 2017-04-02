import React from 'react';

class TopBar extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <div className='topBar'>
        <span>#{this.props.event.title}</span>
        <div className="progress">
          <span className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
            <span className="sr-only">60% Complete</span>
          </span>
        </div>
      </div>
    )
  }
}

export default TopBar;
