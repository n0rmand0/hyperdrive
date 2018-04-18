import React, { Component } from 'react';
import logo from './images/logo.png';
import './styles/build.css';
import * as firebase from "firebase";
//components
import Splash from './Splash.js';
import Stage1 from './Stage1.js';
import Stage2 from './Stage2.js';


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

// ?? I dont tbink we need this, but this snippet will allow annonmous sign ons
// firebase.auth().signInAnonymously().catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });
//

// write data example
// database.set({
//   test: "gains",
// })
//

// delete data example
// database.set({
//   test: null
// })

// read data example and print to console
database.on("value", snapshot => {console.log( snapshot.val().test )})



class App extends Component {

  constructor() {
    super()
      this.state = {
         stage: 0,
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
      <div className="App">

        <header className="header">
          <div className="header__container">
            <img src={logo} className="header__logo" alt="logo" />
          </div>
        </header>
        <main className="stage-container">
          <div className="l-center">
            <h3>Stage: {this.state.stage}</h3>
          </div>
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
            <Stage2 saveStage={this.handleSaveStage}/>
          }

        </main>
        <footer className="footer"></footer>
      </div>
    );
  }
}

export default App;
