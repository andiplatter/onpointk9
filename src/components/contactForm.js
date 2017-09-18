import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './contactForm.css';

class contactForm extends Component {
  render() {
    return (
      <form className="formContainer">
        <div>
          <h3>Questions?</h3>
          <label> First Name: </label>
          <input placeholder="Enter First Name" />
        </div>
        <div>
          <label> Last Name: </label>
          <input placeholder="Enter Last Name" />
        </div>
        <div>
          <label> Email: </label>
          <input placeholder="Enter Email" />
        </div>
        <div>
          <label> Phone Number: </label>
          <input placeholder="Enter Phone Number" />
        </div>
        <div>
          <label> Additional Info: </label>
          <input placeholder="Enter Additional Info" />
        </div>
        <button>Enter</button>
      </form>
    );
  }
}
export default contactForm;
