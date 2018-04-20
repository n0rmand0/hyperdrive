import React, { Component } from 'react';
import pin from './images/pin.png';
import manifest from './manifest';

const statusColor = (s)=>{
  if(s==="neutral" || !s) return "--light-gray";
  if(s==="pass") return "--green";
  if(s==="danger") return "--yellow";
  if(s==="fail") return "--red";
}
const statusTextColor = (s)=>{
  if(s==="neutral" || !s) return "--medium-gray";
}

class Dashboard extends Component {
  constructor(props) {
    super(props)
      this.state = {
         popup: false,
         currentPopup: ""
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

  handlePopup = (i)=>{
    if(this.state.popup){
      this.setState({
        popup: false,
        currentPopup: i
      })
    } else{
      this.setState({
        popup: true,
        currentPopup: i
      })
    }
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  render() {

    let tasks = this.props.ipTasks.length + this.props.planTasks.length + this.props.executeTasks.length;

    let completedTasks = this.props.ipTasks.filter(array=>array.status==="pass").length + this.props.planTasks.filter(array=>array.status==="pass").length + this.props.executeTasks.filter(array=>array.status==="pass").length

    let progress = 100-completedTasks/tasks*100;
    let progressPercent = progress+"%";



    const popup = <div className="popup-container">
      <div className="popup">
        <h3>Enter your info</h3>
        <input type="text" name={this.state.currentPopup} onChange={this.handleInput} value={this.state[this.state.currentPopup]} />
        <div className="button--secondary" onClick={this.handlePopup}>Submit</div>
      </div>
    </div>

    return (
      <div className="dashboard">

        {this.state.popup && popup}

        <div className="dashboard__section">
          <div className="l-container">

          <div className="dashboard__overview-container">
            {/* <article className="dashboard__overview">
              <h3>Project</h3>
              <h2 className="dashboard__overview__id">XXX1234567</h2>
            </article> */}
            {/* <article className="dashboard__overview">
              <h3>Description</h3>
              <p>Lorem ipsum dolor ...</p>
            </article> */}
            <article className="dashboard__overview">
              <h3>Progress</h3>
              <p>50/100 Tasks complete</p>
              <span className="tag">On Track</span>
            </article>
          </div>

            <div className="timeline">
              <div className="timeline__pin" style={{"right":progressPercent}}>
                <img src={pin} alt="pin" />
              </div>
              <div className="timeline__progress">
                <div className="timeline__progress__bar" style={{"right":progressPercent}}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard__section">
          <div className="l-container">
              <h3>Project Breakdown</h3>

              <div className="dashboard__grid">
                <h4 className="dashboard__grid__title">Initiative Planning</h4>

                {this.props.ipTasks.map(
                  ({name,status})=>{
                    return  <div className="dashboard__grid__block" style={{'--status-color': 'var('+statusColor(status)+')'}}>
                    <h4>{name}</h4>
                    <span title="Missing data" onClick={()=>{this.handlePopup("inputP")}}>!</span>
                    </div>
                  }
                )}
               </div>


              <div className="dashboard__grid">
                <h4 className="dashboard__grid__title">Planning <div className="dashboard__grid__progress"></div></h4>
                {this.props.planTasks.map(
                  ({name,status})=>{
                    return  <div className="dashboard__grid__block" style={{'--status-color': 'var('+statusColor(status)+')','--status-text-color': 'var('+statusTextColor(status)+')'}}>
                    <h4>{name}</h4>
                    <span title="Missing data" onClick={()=>{this.handlePopup("inputP")}}>!</span>
                    </div>
                  }
                )}
              </div>

              <div className="dashboard__grid">
                <h4 className="dashboard__grid__title">Executing</h4>
                {this.props.executeTasks.map(
                  ({name,status})=>{
                    return  <div className="dashboard__grid__block" style={{'--status-color': 'var('+statusColor(status)+')','--status-text-color': 'var('+statusTextColor(status)+')'}}>
                    <h4>{name}</h4>
                    <span title="Missing data" onClick={()=>{this.handlePopup("inputP")}}>!</span>
                    </div>
                  }
                )}
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
