import React, { Component } from 'react';
import SocialIcons from '../components/SocialIcons';
import Header from '../components/Header';
import servicesimg from '../images/shep-laying.jpg';
import './services.css';
import pupsOnBucket from '../images/bourbs-looking-up.JPG';
import '../components/serviceCard.css';
import dogRunning from '../images/dog-running.JPG';
import dogBucket from '../images/one-pup-on-bucket.JPG';
import dogAward from '../images/dogAward.JPG';
import dogGroup from '../images/dogGroup.JPG';
import mobileShep from '../images/mobileShep.png';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import axios from 'axios';
import { connect } from 'react-redux';

class Services extends Component {
  constructor() {
    super();
    this.state = {
      services: []
    };
    this.selectModal = this.selectModal.bind(this);
  }

  componentDidMount() {
    axios.get('/api/services').then(response => {
      console.log(response);
      const arr = response.data.map(c => {
        c.showModal = false;
        return c;
      });
      this.setState({
        services: arr
      });
    });
  }

  selectModal(id) {
    if (this.props.loggedIn) {
      let newArr = this.state.services.map(c => {
        console.log(c);
        if (c.id == id) {
          c.showModal = true;
        } else {
          c.showModal = false;
        }
        return c;
      });
      console.log(newArr);
      this.setState({
        services: newArr
      });
    } else {
      alert(
        'You cannot schedule an appointment unless you are logged in! Sorry!'
      );
    }
  }

  render() {
    const services = this.state.services.map((c, i, a) =>
      <ServiceCard
        key={i}
        service={c}
        selectModal={this.selectModal}
        user={this.props.user}
      />
    );
    return (
      <div className="services">
        <div
          className="servicesPic hero"
          style={{ backgroundImage: 'url(' + servicesimg + ')' }}
        >
          <div className="mobileShep" />
          <Header color="white" />
          <div className="subheader1">
            <h2>SERVICES</h2>
          </div>
          <SocialIcons className="socialIcons" colorClass="socialWhite" />
        </div>
        <h3 className="servicesH2">Training Programs</h3>
        <section>
          {services}
        </section>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
    user: state.user
  };
}
export default connect(mapStateToProps)(Services);
