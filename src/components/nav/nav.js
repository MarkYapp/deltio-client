import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser } from '../../actions/auth';

import './nav.css';

export class Nav extends React.Component {
  logoutUser() {
    this.props.dispatch(logoutUser());
  }

  render() {
    return (
      <header role="banner" className="nav-header">
        {!this.props.currentUser ? (
          <nav role="navigation">
            <div className="nav-icon">
              <Link to="/">
                <img src="../images/deltio-nav-icon.png" alt="the yappr logo, a postcard" />
              </Link>
            </div>
            <Link to="/signup">
              <button className="nav-btn">Sign up</button>
            </Link>
            <Link to="/login">
              <button className="nav-btn">Log in</button>
            </Link>
          </nav>
        ) : (
          <nav role="navigation">
            <Link to="/">
              <button className="nav-btn" onClick={e => this.logoutUser(e)}>
                Log out
              </button>
            </Link>{' '}
          </nav>
        )}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Nav);
