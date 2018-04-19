import React, { Component } from 'react';

class Stage1 extends Component {
  constructor(props) {
    super(props)
      this.state = {
         projectSize: "",
         projectHosting:"",
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
    let stage = 2;
    let inputs = [    ]
    this.props.saveStage(stage,inputs);
  }


  render() {
    return (
      <div className="stage-container">

        <fieldset className="radio-group">
          <h5>Select the size of your project</h5>
          <label htmlFor="projectSize-1">
            <input id="projectSize-1" name="projectSize" onChange={this.handleInput}  value="<500K" type="radio"/>
            &lt;500K
          </label>
          <label htmlFor="projectSize-2">
            <input id="projectSize-2" name="projectSize" onChange={this.handleInput}  value="<5MIL" type="radio"/>
            &lt;5 Million
          </label>
          <label htmlFor="projectSize-3">
            <input id="projectSize-3" name="projectSize" onChange={this.handleInput}  value=">5MIL" type="radio"/>
            &gt;5 Million
          </label>
          <label htmlFor="projectSize-4">
            <input id="projectSize-4" name="projectSize" onChange={this.handleInput}  value=">25MIL" type="radio"/>
            &gt;25 Million
          </label>
        </fieldset>

        <fieldset className="radio-group">
          <h5>Select the hosting for your project</h5>
          <label htmlFor="project-hosting-1">
            <input id="project-hosting-1" name="project-hosting" onChange={this.handleInput}  value="Private" type="radio"/>
            Private
          </label>
          <label htmlFor="projectHosting-2">
            <input id="projectHosting-2" name="projectHosting" onChange={this.handleInput}  value="Public" type="radio"/>
            Public
          </label>
          <label htmlFor="projectHosting-3">
            <input id="projectHosting-3" name="projectHosting" onChange={this.handleInput}  value="Community" type="radio"/>
            Community
          </label>
          <label htmlFor="projectHosting-4">
            <input id="projectHosting-4" name="projectHosting" onChange={this.handleInput}  value="Hybrid" type="radio"/>
            Hybrid
          </label>
          <label htmlFor="projectHosting-5">
            <input id="projectHosting-5" name="projectHosting" onChange={this.handleInput}  value="Internal" type="radio"/>
            Internal
          </label>
        </fieldset>


        <fieldset className="radio-group">
          <h5>Select the Tech</h5>
          <label htmlFor="projectTech-1">
            <input id="projectTech-1" name="projectTech" onChange={this.handleInput}  value="New" type="radio"/>
            New
          </label>
          <label htmlFor="projectTech-2">
            <input id="projectTech-2" name="projectTech" onChange={this.handleInput}  value="Existing" type="radio"/>
            Existing
          </label>
        </fieldset>

        {
        this.state.projectTech === "New" &&
        <fieldset className="radio-group">
          <h5>What type of New Tech</h5>
          <label htmlFor="projectTechType-1">
            <input id="projectTechType-1" name="projectTechType" onChange={this.handleInput}  value="Hardware" type="radio"/>
            Hardware
          </label>
          <label htmlFor="projectTechType-2">
            <input id="projectTechType-2" name="projectTechType" onChange={this.handleInput}  value="Code/Software" type="radio"/>
            Code/Software
          </label>
          <label htmlFor="projectTechType-3">
            <input id="projectTechType-3" name="projectTechType" onChange={this.handleInput}  value="Both" type="radio"/>
            Both
          </label>
        </fieldset>
        }

        <fieldset className="radio-group">
          <h5>Select the Maturity</h5>
          <label htmlFor="projectMaturity-1">
            <input id="projectMaturity-1" name="projectMaturity" onChange={this.handleInput}  value="Full" type="radio"/>
            Full
          </label>
          <label htmlFor="projectMaturity-2">
            <input id="projectMaturity-2" name="projectMaturity" onChange={this.handleInput}  value="Partial" type="radio"/>
            Partial
          </label>
          <label htmlFor="projectMaturity-3">
            <input id="projectMaturity-3" name="projectMaturity" onChange={this.handleInput}  value="Not Applicable" type="radio"/>
            Not Applicable
          </label>
        </fieldset>


        <fieldset className="radio-group">
          <h5>Select the SLC</h5>
          <label htmlFor="projectSLC-1">
            <input id="projectSLC-1" name="projectSLC" onChange={this.handleInput}  value="Full" type="radio"/>
            Full
          </label>
          <label htmlFor="projectSLC-2">
            <input id="projectSLC-2" name="projectSLC" onChange={this.handleInput}  value="Partial" type="radio"/>
            Partial
          </label>
        </fieldset>

        <br/>
        <div className="button button--large" onClick={this.onSubmit}>Submit</div>

        {/* <div className="button button--large" onClick={this.onSubmit}>Next</div> */}
      </div>
    );
  }
}

export default Stage1;
