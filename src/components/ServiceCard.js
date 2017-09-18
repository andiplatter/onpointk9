import React, { Component } from 'react';
import pupsOnBucket from '../images/bourbs-looking-up.JPG';
import './serviceCard.css';
import Schedule from './Schedule';
import bronx from '../images/bronx.JPG';
import dogAward from '../images/dogAward.JPG';
import dogGroup from '../images/dogGroup.JPG';
import dogBucket from '../images/one-pup-on-bucket.JPG';

export default class ServiceCard extends Component {
  constructor() {
    super();
    this.state = {
      pictures: {
        pupsOnBucket: pupsOnBucket,
        bronx: bronx,
        dogAward: dogAward,
        dogGroup: dogGroup,
        dogBucket: dogBucket
      }
    };
  }
  render() {
    const service = this.props.service;
    return (
      <div className="serviceCardContainer">
        {service.showModal
          ? <Schedule
              selectModal={this.props.selectModal}
              user={this.props.user}
              service={service}
            />
          : null}
        <div className="lessonTitle">
          {service.title}
        </div>
        <p className="lesson">
          {service.description}
        </p>
        <div className="lessonPrice">
          {service.pricetext}
        </div>
        <button
          className="schedule"
          onClick={_ => this.props.selectModal(service.id)}
        >
          Schedule
        </button>
        <img
          className="ServImg"
          src={this.state.pictures[service.imgurl]}
          alt={'pupsOnBucket'}
        />
      </div>
    );
  }
}
