import React, { Component } from 'react';

class Input extends Component {

  render() {
    return (
      <div className="input-container">
        <label htmlFor="">
          Label 1
          <input type="text"/>
        </label>
      </div>
    );
  }
}

export default Input;
