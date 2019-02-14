import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { loginUser } from '../../actions/auth';

export class LoginForm extends React.Component {
  onSubmit(values) {
    console.log(`login form values: ${values.username}`);
    this.props.dispatch(loginUser(values));
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <div className="form-row">
          <label htmlFor="username">Username:</label>
          <Field component="input" id="username" name="username" type="text" required={true} />
        </div>
        <div className="form-row">
          <label htmlFor="password">Password:</label>
          <Field component="input" id="password" name="password" required={true} />
        </div>
        <button type="submit" className="login-form-submit-btn">
          Log in
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login'
})(LoginForm);
