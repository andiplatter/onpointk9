import React, { Component } from 'react';
import SocialIcons from '../components/SocialIcons';
import Header from '../components/Header';
import savPic from '../images/bS.JPG';
import './contact.css';
import Footer from '../components/Footer';
import ContactForm from '../components/contactForm';
import mobileBS from '../images/mobileBS.png';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div>
          <div
            className="savPic hero"
            style={{ backgroundImage: 'url(' + savPic + ')' }}
          >
            <div className="mobileBS" />
            <Header color="#363131" />
            <div className="subheader2">
              <h2>CONTACT</h2>
            </div>
            <SocialIcons colorClass="socialGray" />
          </div>
          <ContactForm />
          <p className="aboutP">
            About the Trainer Ethical seitan meditation 8-bit heirloom, coloring
            book pour-over street art. Vape affogato man braid direct trade
            knausgaard. Wayfarers mustache man braid austin snackwave. Scenester
            tacos vape, air plant ugh yuccie raclette vegan locavore. Fashion
            axe ennui affogato post-ironic wolf tattooed flexitarian plaid kogi
            kinfolk shabby chic everyday carry. Bicycle rights celiac taxidermy
            lo-fi pinterest letterpress quinoa organic vice drinking vinegar
            retro church-key pour-over gastropub. DIY kale chips four dollar
            toast post-ironic, salvia locavore hashtag. Tote bag jianbing direct
            trade intelligentsia quinoa, williamsburg skateboard. DIY heirloom
            thundercats pabst copper mug leggings. Fam whatever kombucha af,
            subway tile hella swag shoreditch semiotics chicharrones. Squid
            dreamcatcher meh cornhole brunch. Bitters pok pok health goth, art
            party single-origin coffee cloud bread chia tacos cred fanny pack
            mustache mumblecore skateboard chicharrones brunch.
          </p>
        </div>

        <Footer />
      </div>
    );
  }
}
export default Contact;
