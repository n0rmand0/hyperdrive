import React, { Component } from 'react';

class Stage1 extends Component {
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
      <div className="stage-container">
        <label htmlFor="">
          input1
          <input name="input1" onChange={this.handleInput}  value={this.state.input1} type="text"/>
        </label>

        <label htmlFor="">
          input2
          <input name="input2" onChange={this.handleInput}  value={this.state.input2} type="text"/>
        </label>

        <label htmlFor="">
          input3
          <input name="input3" onChange={this.handleInput}  value={this.state.input3} type="text"/>
        </label>
        <br/>
        <div className="button--large" onClick={this.onSubmit}>Next›</div>
      </div>
    );
  }
}

export default Stage1;
