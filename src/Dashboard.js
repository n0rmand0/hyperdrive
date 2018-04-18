import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props)
      this.state = {
         input1: "",
         input2:"",
         input3:""
       }
    }

  handleInput = (e)=>{
    let input = e.target.name;
    this.setState({
      [input]: e.target.value
    })
  }

  onSubmit = ()=>{
    let stage = 3;
    let inputs = [
      this.state.input1,
      this.state.input2,
      this.state.input3,
    ]
    this.props.saveStage(stage,inputs);
  }


  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-container">
          Dashboard
        </div>
      </div>
    );
  }
}

export default Dashboard;
