import React, { Component } from 'react';
import logo from './images/logo.png';
import './styles/build.css';
import * as firebase from "firebase";

//components
import Input from './Input.js';


var config = {
  apiKey: "AIzaSyD5NNqR4nFXZNHFEA2LX0mOY_DA0ZpgzFE",
  authDomain: "releasethefriction.firebaseapp.com",
  databaseURL: "https://releasethefriction.firebaseio.com",
  projectId: "releasethefriction",
  storageBucket: "releasethefriction.appspot.com",
  messagingSenderId: "284420893708"
};
firebase.initializeApp(config);

// not sure if we need this ??
// firebase.auth().signInAnonymously().catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });
//


const ref = firebase.database().ref();

// ref.on("value", snapshot=>{ console.log('gains', snapshot.exists() ) } );

// write data example
// ref.set({
//   test: "gains",
// })
//

// delete data example
// ref.set({
//   test: null
// })

// read data example and print to console
ref.on("value", snapshot => {console.log( snapshot.val().test )})



class App extends Component {
  render() {
    return (
      <div className="App">



        <header className="header">
          <div className="header__container">
            {/* <img src={logo} className="header__logo" alt="logo" /> */}
          </div>
        </header>
        <main>
          {/* <h3>Lorem ipsum</h3> */}
          <Input/>
        </main>
        <footer className="footer"></footer>
      </div>
    );
  }
}

export default App;
