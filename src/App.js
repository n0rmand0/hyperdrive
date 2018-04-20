import React, { Component } from 'react';
import logo from './images/logo.png';
import './styles/build.css';
import * as firebase from "firebase";
import request from "request";
//components
import Splash from './Splash';
import Stage1 from './Stage1';
import Stage2 from './Stage2';
import Dashboard from './Dashboard';
import {serviceNow, serviceNowTasks} from "./servicenow";
import demo from './demo';

// import manifest from './manifest';
// import retrieveListItems from './sharepoint';

// sharepoint stuff
// retrieveListItems();


////////////////////////////////////////////////////////////////
// direct way
// var options = {
//   url: "https://pncmelliniumfalcon.service-now.com/api/now/table/u_pto/0e4aa80adb211b00547cf438bf961934",
//   headers: {
//     'User-Agent': 'request',
//     "username":"",
//
//
//
//   }
// };

// request(options, function (data, response) {
//     // parsed response body as js object
//     console.log(data, response);
// });

 ////////////////////////////////////////////////////////////////
const config = {
  apiKey: "AIzaSyD5NNqR4nFXZNHFEA2LX0mOY_DA0ZpgzFE",
  authDomain: "releasethefriction.firebaseapp.com",
  databaseURL: "https://releasethefriction.firebaseio.com",
  projectId: "releasethefriction",
  storageBucket: "releasethefriction.appspot.com",
  messagingSenderId: "284420893708"
};
firebase.initializeApp(config);
const database = firebase.database().ref();


// firebase integration
////////////////////////////////////////////////////////////////
// ?? I dont tbink we need this, but this snippet will allow annonmous sign ons
// firebase.auth().signInAnonymously().catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });


// write data example
// database.set({
//   test: "gains",
// })


// delete data example
// database.set({
//   test: null
// })

// read data example and print to console
// database.on("value", snapshot => {console.log( snapshot.val().test )})

// service now stuff
var pto = "https://pncmelliniumfalcon.service-now.com/api/now/table/u_pto"
var ptb = "https://pncmelliniumfalcon.service-now.com/api/now/table/u_ptb_2"
var buildreq = "https://pncmelliniumfalcon.service-now.com/api/now/table/u_server_build_request"
var eastr = "https://pncmelliniumfalcon.service-now.com/api/now/table/u_pnc_eastr"
var cappm = "https://pncmelliniumfalcon.service-now.com/api/now/table/u_cappm";
var jenkins = "";


class App extends Component {

  constructor() {
    super()
      this.state = {
         stage: 2,
         ipTasks: [
           {
             name:"TSSC",
             status: "pass",
             true: ""
           },
           {
             name:"TSC",
             status: "pass",
             true: ""
           },
           {
             name: "FRM",
             status: "pass",
             true: ""
           }
         ],
         planTasks: [
           {
             name:"Engagement Assessment and Plan",
             status:"pass",
             true: ""
           },
           {
             name:"Application Request",
             status:"pass",
             true: ""
           },
           {
             name:"Inherent Risk Rating",
             status:"pass",
             true: ""
           },
           {
             name:"Technology delivery factory",
             status:"pass",
             true: ""
           },
           {
             name:"Business Requirements",
             status:"",
             endpoint: cappm,
             key: "u_business_requirements",
             true: "Complete"
           },
           {
             name:"Cyber Security Project Engagement Survey",
             status:"",
             endpoint: cappm,
             key: "u_cyber_security_survey",
             true: "true"
           },
           {
             name:"Cyber Security Mnemonic Survey",
             status:"",
             endpoint: cappm,
             key: "u_cyber_security_mnemonic_survey",
             true: "Requirements Review Complete"

           },
           {
             name:"Phase Gate Planning",
             status:"",
             endpoint: cappm,
             key: "u_phase_gate_planning",
             true: "Complete"
           }
         ],
         executeTasks: [
           {
             name:"Solution Requirements",
             status:"",
             endpoint: cappm,
             key: "u_solution_requirements",
             true: "Complete"
           },
           {
             name:"Detailed Solution Design Package",
             status:"",
             endpoint: cappm,
             key: "u_detailed_solution_design_package",
             true: "Complete"
           },
           {
             name:"Security Requirements",
             status:"",
             endpoint: cappm,
             key: "u_security_requirements",
             true: "Complete"
           },
           {
             name:"Permit to build",
             status:"",
             endpoint: cappm,
             key: "u_ptb"
           },
           {
             name:"Test Strategy & Approach",
             status:"",
             endpoint: cappm,
             key: "u_test_strategy_and_approach",
             true: "true"
           },
           {
             name:"Phase Gate Approval to Build",
             status:"",
             endpoint: cappm,
             key: "u_phase_gate_approval_to_build",
             true: "Complete"
           },
           {
             name:"Build/Code",
             status:"",
             endpoint: jenkins,
             true: ""
           },
           {
             name:"Server Build Request Dev",
             status:"",
             endpoint: cappm,
             key: "u_serverbuilddev",
             true: ""
           },
           {
             name:"Server Build Request QA",
             status:"",
             true: ""
           },
           {
             name:"TCOE Testing",
             status:"",
             true: ""
           },
           {
             name:"Test Results Summary Report",
             status:"",
             true: ""
           },
           {
             name:"Permit to Operate",
             status:"",
             true: ""
           },
           {
             name:"eBRP - SP",
             status:"",
             true: ""
           },
           {
             name:"Server Build Request",
             status:"",
             true: ""
           },
           {
             name:"Pre-Deploy",
             status:"",
             true: ""
           },
           {
             name:"Transition to BAU",
             status:"",
             true: ""
           }

         ]

       }
    }

  handleSaveStage = (stage,inputs)=>{
    this.setState({
      stage: stage
    })
    inputs && inputs.map( i=>{
        this.setState({
          [i]:i
        })
    })
  }

  updateTasks = ()=>{
    console.log(serviceNowTasks);
    let ipTasks = [];
    let planTasks = [];
    let executeTasks = [];

    this.state.planTasks.map( (task)=>{
      console.log(task);
      if(serviceNowTasks.result[1][task.key]===task.true){
        planTasks.push({
          name: task.name,
          status: "pass",
          true: task.true
        })
      }else {
        planTasks.push({
          name: task.name,
          status: "fail",
          true: task.true
        })
      }
    });

    this.state.executeTasks.map( (task)=>{
      console.log(task);
      if(serviceNowTasks.result[1][task.key]===task.true){
        executeTasks.push({
          name: task.name,
          status: "pass",
          true: task.true
        })
      }else {
        executeTasks.push({
          name: task.name,
          status: "fail",
          true: task.true
        })
      }
    });



    this.setState({
      planTasks: planTasks,
      executeTasks: executeTasks,
    })
  }


  componentDidMount(){
    serviceNow(cappm);
    setTimeout( () =>{
      this.updateTasks();
    }, 2000);

  }

  componentDisUpdate(){

  }

  render() {

    return (
      <div className={this.state.stage ===2 ? "App is-dashboard" : "App"}>

        <header className="header">
          <div className="header__container">
            <img src={logo} className="header__logo" alt="logo" onClick={ ()=>{this.setState({stage:0})} } />
          </div>
        </header>

          {
             this.state.stage===0 &&
             <Splash saveStage={this.handleSaveStage}/>
          }
          {
            this.state.stage===1 &&
            <Stage1 saveStage={this.handleSaveStage}/>
          }
          {
            this.state.stage===2 &&
            <Dashboard saveStage={this.handleSaveStage} ipTasks={this.state.ipTasks} planTasks={this.state.planTasks}
            executeTasks={this.state.executeTasks}/>
          }
          {/* {
            this.state.stage===3 &&
            <Dashboard saveStage={this.handleSaveStage}/>
          } */}



        <footer className="footer">
        </footer>
      </div>
    );
  }
}

export default App;
