import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import LoginForm from './login-form';

import './account-pages.css';

export class LoginPage extends React.Component {
  render() {
    //redirect to user's create page
    // if (this.props.currentUser) {
    //   return <Redirect to={`/create/${this.props.currentUser}`} />;
    // }
    return (
      <main role="main">
        <div className="account-page-icon">
          <img
            src="../images/deltio-icon-main.png"
            alt="the deltio icon, a postcard"
            className="icon-main"
          />
        </div>
        <div className="account-form-wrapper">
          <h2>Log in</h2>
          <LoginForm />
          <br />
          <p>Need an account?</p>
          <button type="submit">
            <Link to="/signup">Sign up here</Link>
          </button>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(LoginPage);