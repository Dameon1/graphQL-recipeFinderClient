
import React from 'react';
import './styles/userLogin.css';
import Input from './LoginInput';

import {
  required, 
  nonEmpty, 
  matches, 
  length, 
  isTrimmed } from '../validators';

const passwordLength = length({min: 7, max: 72});
const matchesPassword = matches('password');

export default class CreateAccount extends React.Component {
    
  state = {    
    password: '',
    username: '',
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
    
  render() {
    return (
      <div className="loginPage">
        <h2 className="userSignInHeader">Register</h2> 
        <form method="post"
              className="login-form"
              onSubmit={async e => {
                        e.preventDefault();
                        console.log(this.state)
                    //await signin();
                        this.setState({username: '', password: '', confirmPassword: '' });
                        }}>

          {/* --------- */}
          <label htmlFor="username" className='signInLabel'>Username</label>
          <div className="form-input">
            
            <input className="text-input"
                   id={ this.props.name }
                   placeholder={` ${this.props.name}`}
                   type={ this.props.type }
                   ref={ input => (this.input = input) }
            { ...this.props.input }
            />
          </div>
          {/* --------- */}
          <label htmlFor="username" className='signInLabel'>Username</label>
            <input
              name="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.saveToState}                    
              type="text"
              validate={ [required, nonEmpty, isTrimmed] }
            />


          <label htmlFor="password" className='signInLabel'>Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.saveToState}
              validate={ [required, passwordLength, isTrimmed] }
            />
          <label htmlFor="confirmPassword" className='signInLabel'>Confirm</label>
            <input                  
              type="password"
              name="confirmPassword"
              placeholder="confrim password"
              validate={ [required, nonEmpty, matchesPassword] }
                //value={this.state.password}
              onChange={this.saveToState}
            />
            <button type="submit" disabled={ this.props.pristine || this.props.submitting } className='signInButton'>
              Register
            </button>
          </form>
        </div>
      );
    };
};
