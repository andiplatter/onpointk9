import React, { Component } from 'react';
import email from '../images/gmail-icon-BW.png';
import facebook from '../images/facebook-icon-BW.png';
import instagram from '../images/instagram-icon-BW.png';
import phone from '../images/phone-icon-BW.png';
import './socialIcons.css';

class SocialIcons extends Component {
  render() {
    const fontColor = this.props.colorClass;
    console.log(typeof fontColor);
    return (
      <div className="socialIcons">
        <a href="https://www.facebook.com/TrainOnPointK9/" target="_blank">
          <i
            className={'fa fa-facebook-square fa-2x ' + fontColor}
            aria-hidden="true"
          />
        </a>
        <a
          href="https://www.instagram.com/trainonpointk9/?hl=en"
          target="_blank"
        >
          <i
            className={'fa fa-instagram fa-2x ' + fontColor}
            aria-hidden="true"
          />
        </a>
        <a href="mailto:train.onpointk9@gmail.com" target="_blank">
          <i
            className={'fa fa-envelope-o fa-2x ' + fontColor}
            aria-hidden="true"
          />
        </a>
        <a href="">
          <i className={'fa fa-phone fa-2x ' + fontColor} aria-hidden="true" />
        </a>
      </div>
    );
  }
}
export default SocialIcons;
