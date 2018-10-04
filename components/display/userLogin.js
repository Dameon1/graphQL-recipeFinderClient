
import React from 'react';
import '../styles/userLogin.css';
import Input from './LoginInput';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'; 
import { login } from '../../actions/auth';
import { 
    required, 
    nonEmpty } from '../../validators';
import {
  Field, 
  reduxForm, 
  focus } from 'redux-form';

export class LoginForm extends React.Component {
    
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    };
    
    render() {
      if (this.props.loggedIn) {
        return <Redirect to="/dashboard" />;
      };

      let error;
      if (this.props.error) {
        error = (
          <div className="form-error" aria-live="polite">
            { this.props.error }
          </div>
        );
      };

      return ( 
        <div className="loginPage">
        <h2 className="userSignInHeader">Sign In</h2> 
        <form
          className="login-form"
          onSubmit={ this.props.handleSubmit(values => this.onSubmit(values)) }>
          { error }
          <label htmlFor="username" className='signInLabel'>Username</label>
          <Field                
            component={ Input }
            type="text"
            name="username"
            id="username"
            validate={ [required, nonEmpty] }
            />               
          <label htmlFor="password" className='signInLabel'>Password</label>
          <Field               
            component={ Input }
            type="password"
            name="password"
            id="password"
            validate={ [required, nonEmpty] }
            />
          <button disabled={ this.props.pristine || this.props.submitting } className="signInButton">
            Sign in
          </button>
        </form>
        </div>
      );
    };

};

const mapStateToProps = state => ({
    loggedIn: state.authReducer.loggedIn
  });

export default connect(mapStateToProps)(reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm));
