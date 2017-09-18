import React, { Component } from 'react';
import './appointments.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

class Appointment extends Component {
  constructor() {
    super();
    this.state = {
      appointments: []
    };
  }

  componentDidMount() {
    axios.get('/api/appointments').then(response => {
      console.log(response.data);
      this.setState({
        appointments: response.data
      });
    });
  }

  render() {
    const showAppointments = this.state.appointments.map((c, i) => {
      console.log(c.fixed);
      return (
        <div className="appointmentCard">
          <div className="date">
            Date:
            {c.aptdate}
          </div>
          <div className="time">
            Time:
            {c.timeslot}
          </div>
          <div className="focus">
            Focus:
            {c.focus}
          </div>
          <div className="phone">
            Phone Number:
            {c.phone}
          </div>
          <div className="dogname">
            Dogs Name:
            {c.dogname}
          </div>
          <div className="dogbreed">
            Dogs Breed:
            {c.dogbreed}
          </div>
          <div className="fixed">
            Fixed:
            {`${c.fixed}`}
          </div>
          <div className="gender">
            Gender:
            {c.gender}
          </div>
          <div className="info">
            Info:
            {c.info}
          </div>
          <div className="user">
            Username:
            {c.username}
          </div>
        </div>
      );
    });
    return (
      <div>
        <h1>Appointments</h1>
        <div>
          {showAppointments}
        </div>
      </div>
    );
  }
}
export default Appointment;
