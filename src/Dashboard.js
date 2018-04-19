import React, { Component } from 'react';
import pin from './images/pin.png';

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

          <div className="dashboard__overview-container">
            <article className="dashboard__overview">
              <h3>Project</h3>
              <h2 className="dashboard__overview__id">XXX1234567</h2>
            </article>
            <article className="dashboard__overview">
              <h3>Description</h3>
              <p>Lorem ipsum dolor ...</p>
            </article>
            <article className="dashboard__overview">
              <h3>Progress</h3>
              <p>50/100 Tasks complete</p>
              <span className="tag">On Track</span>
            </article>
          </div>

            <div className="timeline">
              <div className="timeline__pin">
                <img src={pin} alt="pin" />
              </div>
              <div className="timeline__progress">
                <div className="timeline__progress__bar"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard__section">
          <div className="l-container">
              <h3>Project Breakdown</h3>
              <div className="dashboard__grid" style={{'--status-color': 'var(--red)'}}>
                <h4 className="dashboard__grid__title">Initiative Planning</h4>
                <div className="dashboard__grid__block">Task</div>
                <div className="dashboard__grid__block">Task</div>
                <div className="dashboard__grid__block">Task</div>
              </div>
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
              <h3>Completed</h3>
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
