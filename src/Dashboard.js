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

        <div className="dashboard__section">
          <div className="l-container">
            <article className="dashboard__info">
              <h3>Project</h3>
              <h2 className="dashboard__info__id">XXX1234567</h2>
            </article>
            <article className="dashboard__info">
              <h3>Description</h3>
              <p>Lorem ipsum dolor ...</p>
            </article>
          </div>
        </div>

        <div className="dashboard__section">
          <div className="l-container">
              <h3>Project Overview</h3>
              <div className="dashboard__grid">
                <h4 className="dashboard__grid__title">Planning</h4>
                <div className="dashboard__grid__block">Task</div>
                <div className="dashboard__grid__block">Task</div>
                <div className="dashboard__grid__block">Task</div>
              </div>
              <div className="dashboard__grid">
                <h4 className="dashboard__grid__title">Executing</h4>
                <div className="dashboard__grid__block">Task</div>
                <div className="dashboard__grid__block">Task</div>
                <div className="dashboard__grid__block">Task</div>
              </div>
              <div className="dashboard__grid">
                <h4 className="dashboard__grid__title">Closing</h4>
                <div className="dashboard__grid__block">Task</div>
                <div className="dashboard__grid__block">Task</div>
                <div className="dashboard__grid__block">Task</div>
              </div>
          </div>
        </div>

        <div className="dashboard__section">
          <div className="l-container--grid">
            <div className="l-short">
              <h3>Upcoming</h3>
              <div className="dashboard__task">
                <h5>Task</h5>
                <p>Lorem ipsum dolor amet...</p>
              </div>
            </div>
            <div className="l-short">
              <h3>At Risk</h3>
              <div className="dashboard__task">
                <h5>Task</h5>
                <p>Lorem ipsum dolor amet...</p>
              </div>
            </div>
            <div className="l-short">
              <h3>Failed</h3>
              <div className="dashboard__task">
                <h5>Task</h5>
                <p>Lorem ipsum dolor amet...</p>
              </div>
            </div>

          </div>
        </div>

        <div className="dashboard__section">
          <div className="l-container">
            <div className="l-short">
              <h3>Failed</h3>
              <div className="dashboard__task">
                <h5>Task</h5>
                <p>Lorem ipsum dolor amet...</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Dashboard;
