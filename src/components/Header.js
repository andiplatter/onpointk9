import React, { Component } from 'react';
import logo from '../images/logo.PNG';
import { Link } from 'react-router-dom';
import './Header.css';
import { getUser } from '../ducks/reducer';
import { connect } from 'react-redux';
import MobileMenu from './MobileMenu';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: props.loggedIn,
      user: props.user,
      showMenu: false
    };
  }
  componentDidMount() {
    this.props.getUser();
  }
  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }
  render() {
    console.log('LOOK HERE', this.props.user);
    const isAdmin =
      this.props.user.email === 'andi.platter@gmail.com' ? true : false;
    const fontColor = this.props.color;
    return (
      <div className="headerContainer">
        <i
          className="fa fa-bars hamburger fa-2x"
          onClick={_ => this.toggleMenu()}
          aria-hidden="true"
          style={{ color: fontColor }}
        />
        {this.state.showMenu ? <MobileMenu color={this.props.color} /> : null}
        <ul className="header">
          <li>
            <Link
              className="Home-Link nav-link"
              to="/"
              style={{ color: fontColor }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="Services-Link nav-link"
              to="/services"
              style={{ color: fontColor }}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="Contact-Link nav-link"
              to="/contact"
              style={{ color: fontColor }}
            >
              Contact
            </Link>
            {isAdmin &&
              <Link
                className="Contact-Link nav-link"
                to="/appointments"
                style={{ color: fontColor }}
              >
                Admin stuff
              </Link>}
          </li>

          {this.props.loggedIn
            ? <li>
                <a
                  className="nav-link"
                  href="/auth/logout"
                  style={{ color: fontColor }}
                >
                  Logout - {this.props.user.firstName}
                </a>
              </li>
            : <li>
                <a
                  className="nav-link"
                  href="/auth"
                  style={{ color: fontColor }}
                >
                  Login
                </a>
              </li>}
        </ul>
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
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

export default connect(mapStateToProps, { getUser })(Header);
