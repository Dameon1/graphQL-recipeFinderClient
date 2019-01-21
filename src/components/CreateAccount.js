import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/form';
import './styles/userLogin.css';
import Error from './ErrorMessage';
// import {
//   required, 
//   nonEmpty, 
//   matches, 
//   length, 
//   isTrimmed } from '../validators';

// const passwordLength = length({min: 7, max: 72});
// const matchesPassword = matches('password');

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($username:String!,$password:String!) {
    createUser(username:$username,password:$password){
      username
    }
  }
`

export default class CreateAccount extends React.Component {

  state = {    
    password: '',
    username: '',
    
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render(){
    return (
      <Mutation mutation={SIGNUP_MUTATION}
                variables={this.state}>
        {(signup,{ error,loading }) => {
        return (  
        <div className="loginPage">
          <Form method='post'
                className="login-form"
                onSubmit={async (e) => { 
                  e.preventDefault();
                  await signup();
                  this.setState({password:"",username:""});
          }}>
            <Error error={error} />
            <label htmlFor="username" className='signInLabel'>Username</label> 
              <input
                name="username"
                placeholder="username"
                value={this.state.username}
                onChange={this.saveToState}                    
                type="text"
              />
            <label htmlFor="password" className='signInLabel'>Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.saveToState}
              />          
            <button type="submit" disabled={ this.props.pristine || this.props.submitting } className='signInButton'>
              Register
            </button>            
          </Form>
        </div>
        )}}
      </Mutation>
    )
  }
}

