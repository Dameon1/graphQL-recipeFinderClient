import React from 'react';
//import '../styles/userLogin.css';
//import { registerUser } from '../../actions/createUser';
//import { login } from '../../actions/auth';
//import Input from './LoginInput';

import {
  required, 
  nonEmpty, 
  matches, 
  length, 
  isTrimmed } from '../validators';

const passwordLength = length({min: 7, max: 72});
const matchesPassword = matches('password');

export class CreateAccountForm extends React.Component {

    render() {
      return  (
        <p>CREATE NEW ACCOUNT</p>
      )
    }
    // onSubmit(values) {
    //     const { username, password } = values;
    //     const user = { username, password };
    //     return this.props
    //         .dispatch(registerUser(user))
    //         .then(() => this.props.dispatch(login(username, password)));
    // };

    // render() {
    //     if (this.props.loggedIn) {
    //       return <Redirect to="/dashboard" />;
    //     };

    //     return (
    //       <div className="loginPage">
    //         <h2 className="userSignInHeader">Register</h2> 
    //         <form className="login-form"
    //               onSubmit={ this.props.handleSubmit(values => this.onSubmit(values)) } >
    //           <label htmlFor="username" className='signInLabel'>Username</label>
    //           <Field                    
    //             component={ Input }
    //             type="text"
    //             name="username"
    //             validate={ [required, nonEmpty, isTrimmed] }
    //             />
    //           <label htmlFor="password" className='signInLabel'>Password</label>
    //           <Field
    //             component={ Input }
    //             type="password"
    //             name="password"
    //             validate={ [required, passwordLength, isTrimmed] }
    //             />
    //           <label htmlFor="Confirm password" className='signUpPasswordConfirmLabel'>Confirm password</label>
    //           <Field                  
    //             component={ Input }
    //             type="password"
    //             name="Confirm password"
    //             validate={ [required, nonEmpty, matchesPassword] }
    //             />
    //           <button type="submit" disabled={ this.props.pristine || this.props.submitting } className='signInButton'>
    //             Register
    //           </button>
    //         </form>
    //       </div>
    //     );
    // };

};

// const mapStateToProps = state => ({
//     loggedIn: state.authReducer.loggedIn
// });

