import React, { Component } from 'react';
import './schedule.css';
import axios from 'axios';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aptdate: '',
      timeslot: '',
      focus: '',
      serviceID: props.service.id,
      userID: props.user.id,
      phone: '',
      dogBreed: '',
      dogName: '',
      fixed: '',
      gender: '',
      info: ''
    };
  }
  submit(e) {
    e.preventDefault();
    console.log('SUMBIT TO MY WILLL!!!!!');
    let body = {
      appointment: [
        this.state.aptdate,
        this.state.timeslot,
        this.state.focus,
        this.props.service.id,
        this.props.user.id,
        this.state.phone,
        this.state.dogBreed,
        this.state.dogName,
        this.state.fixed == 'Yes',
        this.state.gender,
        this.state.info
      ]
    };
    console.log(body);
    axios.post('/api/appointment', body).then(response => {
      console.log(response);
      alert('Appointment Scheduled');
      this.props.selectModal(-1);
    });
  }

  handleChangeDate(val) {
    this.setState({
      aptdate: val
    });
  }

  handleChangeTime(val) {
    this.setState({
      timeslot: val
    });
  }

  handleChangeFocus(val) {
    this.setState({
      focus: val
    });
  }

  handleChangePhone(val) {
    this.setState({
      phone: val
    });
  }

  handleChangeBreed(val) {
    this.setState({
      dogBreed: val
    });
  }

  handleChangeName(val) {
    this.setState({
      dogName: val
    });
  }
  handleChangeFixed(val) {
    this.setState({
      fixed: val
    });
  }
  handleChangeGender(val) {
    this.setState({
      gender: val
    });
  }
  handleChangeInfo(val) {
    this.setState({
      info: val
    });
  }

  render() {
    return (
      <div className="scheduleContainer">
        <form className="formSContainer" onSubmit={e => this.submit(e)}>
          <h1 onClick={_ => this.props.selectModal(-1)}>X</h1>
          <p className="datep">Date of Appointment</p>
          <select
            className="date"
            value={this.state.aptdate}
            onChange={e => this.handleChangeDate(e.target.value)}
          >
            <option value="Please select a date">Please Select a date</option>
            <option value="September 19 2017">September 19 2017</option>
            <option value="September 20 2017">September 20 2017</option>
            <option value="September 21 2017">September 21 2017</option>
            <option value="September 22 2017">September 22 2017</option>
            <option value="September 23 2017">September 23 2017</option>
            <option value="September 24 2017">September 24 2017</option>
          </select>
          <p className="timep">Time of Appointment</p>
          <select
            className="time"
            value={this.state.timeslot}
            onChange={e => this.handleChangeTime(e.target.value)}
          >
            <option value="Please select a time">Please Select a time</option>
            <option value="9-11">9-11am</option>
            <option value="11-1">11am-1pm</option>
            <option value="1-3">1-3pm</option>
            <option value="3-5">3-5pm</option>
          </select>
          <p className="focusp">Focus for Appointment</p>
          <select
            className="focus"
            value={this.state.focus}
            onChange={e => this.handleChangeFocus(e.target.value)}
          >
            <option value="" disabled selected>
              Please Select an area of focus
            </option>
            <option value="Obedience">Obedience</option>
            <option value="Leash Manners">Leash Mamnners</option>
            <option value="Tricks">Tricks</option>
            <option value="Behavior Modification">Behavior Modification</option>
          </select>
          <div className="phone">
            <label>Phone Number:</label>
            <input
              placeholder="Phone Number"
              value={this.state.phone}
              onChange={e => this.handleChangePhone(e.target.value)}
            />
          </div>
          <div className="name">
            <label>Dog's Name:</label>
            <input
              placeholder="Dog's Name"
              value={this.state.dogName}
              onChange={e => this.handleChangeName(e.target.value)}
            />
          </div>
          <div className="breed">
            <label>Dog's Breed:</label>
            <input
              placeholder="Dog's Breed"
              value={this.state.dogBreed}
              onChange={e => this.handleChangeBreed(e.target.value)}
            />
          </div>
          <div className="fixed">
            <p>Has your dog been Spayed or Neutured?</p>
            <div onChange={e => this.handleChangeFixed(e.target.value)}>
              <label>Yes</label>
              <input type="radio" name="fixed" value="Yes" />
              <label>No</label>
              <input type="radio" name="fixed" value="No" />
              <label>Not Old Enough</label>
              <input type="radio" name="fixed" value="Too young" />
            </div>
          </div>
          <div className="gender">
            <p>Is your dog a male or female?</p>
            <div onChange={e => this.handleChangeGender(e.target.value)}>
              <label>Male</label>
              <input type="radio" name="gender" value="Male" />
              <label>Female</label>
              <input type="radio" name="gender" value="Female" />
            </div>
          </div>
          <div
            className="info"
            onChange={e => this.handleChangeInfo(e.target.value)}
          >
            <label>Additional Information:</label>
            <input
              placeholder="Additional Information"
              value={this.state.info}
            />
          </div>
          <button className="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default Schedule;
