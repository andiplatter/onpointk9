import React, { Component } from 'react';
import SocialIcons from '../components/SocialIcons';
import Header from '../components/Header';
import firstpageimg from '../images/croppedB.jpg';
import bourbsJump from '../images/bourbs-jumping-off.JPG';
import bronky from '../images/bronky.JPG';
import contactForm from '../components/contactForm';
import Footer from '../components/Footer';
import mobileB from '../images/mobileBB.png';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div>
          <div
            className="hero home-hero"
            style={{
              backgroundImage: 'url(' + firstpageimg + ')',
              backgroundSize: 'cover'
            }}
          >
            <div className="mobileB" />
            <Header color="#363131" />
            <div className="subheader">
              <div className="grayBox">
                <h2>Dog Training and Behavior Modification</h2>
              </div>
            </div>
            <SocialIcons colorClass="socialGray" />
          </div>
        </div>
        <section className="aboutSection">
          <section className="aboutItem">
            {/*}<img className="aboutImg" src={bourbsJump} alt={'bourbsJump'} />*/}
            <div>
              <p className="firstP">
                At On Point K9 we believe in training in a way that is fun and
                easy for both the owner and the dog. Training is done through
                classical and operant conditioning with the use of rewards to
                motivate the dog to want to obey its owner, rather than bribing
                the dog to listen or making the dog afraid to do anything else.
                We use markers to create an easy to use communication system for
                the owner and dog to be able to better understand one another
                and to strengthen the bond between owner and dog.
              </p>
            </div>
            <div className="aboutDiv" />
          </section>
          <section className="aboutItem">
            <p className="secondP">
              Rewards can be food, toys, praise, or love and affection. We use
              heavy rewards (primarily food and treats) early on in the training
              process but quickly phase them out and replace them with petting
              and verbal praise as the dog begins to demonstrate complete
              understanding of what is expected. Once a dog has shown
              understanding of what we want it to do, we also begin to correct
              any undesired behaviors and replace them with the preferred
              behaviors. We also focus on relationship building, confidence
              building, trust building, etc.
            </p>
            <div className="bronky" />
          </section>
          <section>
            <p className="thirdP">
              This method of training clearly outlines what we expect of our
              dogs, making it extremely easy for them to begin making the
              correct decisions. Once a dog is making correct decisions on its
              own, incorrect decisions (bad behaviors - such as pulling on
              leash) will stop occurring. This method of training also
              eliminates any fear, aggression or reactivity that a dog may have
              had prior as we take away the uncertainty that often leads to
              those traits
            </p>
          </section>
        </section>
        <contactForm />
        <Footer />
      </div>
    );
  }
}
export default Home;
