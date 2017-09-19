import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './mobileMenu.css';
import './Header.css';

class MobileMenu extends Component {
  render() {
    return (
      <div>
        <ul className="menu-header">
          <li>
            <Link
              style={{ color: this.props.color }}
              className="Home-Link menu-link"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ color: this.props.color }}
              className="Services-Link menu-link"
              to="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              style={{ color: this.props.color }}
              className="Contact-Link menu-link"
              to="/contact"
            >
              Calendar
            </Link>
          </li>
          {this.props.loggedIn
            ? <li>
                <a
                  style={{ color: this.props.color }}
                  className="menu-link"
                  href="/auth/logout"
                >
                  Logout - {this.props.user.firstName}
                </a>
              </li>
            : <li>
                <a
                  style={{ color: this.props.color }}
                  className="menu-link"
                  href="/auth"
                >
                  Login
                </a>
              </li>}
        </ul>
      </div>
    );
  }
}

export default MobileMenu;
