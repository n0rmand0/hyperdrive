import React, { Component } from 'react';

class Splash extends Component {
  constructor(props) {
    super(props)
}


  render() {
    return (
      <div className="stage-container l-center">
        <h3>Short description... lorem ipsum</h3>
        <br/>
        <div className="button--large button--block" onClick={ ()=>{this.props.saveStage(1) } }>Add Project</div>
      </div>
    );
  }
}

export default Splash;
