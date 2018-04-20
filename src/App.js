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
import serviceNow from "./servicenow";
import demo from './demo';


// service now stuff
serviceNow("u_pto");


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



class App extends Component {

  constructor() {
    super()
      this.state = {
         stage: 2,
         ipTasks: [
           {
             name:"TSSC",
             status: "pass"
           },
           {
             name:"TSC",
             status: "pass"
           },
           {
             name: "FRM",
             status: "pass"
           }
         ],
         planTasks: [
           {
             name:"Engagement Assessment and Plan",
             status:"pass"
           },
           {
             name:"Application Request",
             status:""
           },
           {
             name:"Inherent Risk Rating",
             status:""
           },
           {
             name:"Technology delivery factory",
             status:""
           },
           {
             name:"Business Requirements",
             status:""
           },
           {
             name:"Cyber Security Project Engagement Survey",
             status:""
           },
           {
             name:"Cyber Security Mnemonic Survey",
             status:""
           },
           {
             name:"Phase Gate Planning",
             status:""
           }
         ],
         executeTasks: [
           {
             name:"Solution Requirements",
             status:""
           },
           {
             name:"Detailed Solution Design Package",
             status:""
           },
           {
             name:"Security Requirements",
             status:""
           },
           {
             name:"Permit to build",
             status:""
           },
           {
             name:"Test Strategy & Approach",
             status:""
           },
           {
             name:"Phase Gate Approval to Build",
             status:""
           },
           {
             name:"Build/Code",
             status:""
           },
           {
             name:"Server Build Request Dev",
             status:""
           },
           {
             name:"Server Build Request QA",
             status:""
           },
           {
             name:"TCOE Testing",
             status:""
           },
           {
             name:"Test Results Summary Report",
             status:""
           },
           {
             name:"Permit to Operate",
             status:""
           },
           {
             name:"eBRP - SP",
             status:""
           },
           {
             name:"Server Build Request",
             status:""
           },
           {
             name:"Pre-Deploy",
             status:""
           },
           {
             name:"Transition to BAU",
             status:""
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
