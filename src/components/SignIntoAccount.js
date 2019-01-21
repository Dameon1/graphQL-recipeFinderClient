import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import {navigate} from '@reach/router';

import Form from './styles/form';
import './styles/userLogin.css';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($username: String!, $password: String!) {
    signInUser(username: $username, password: $password) {
      username
    }
  }
`;

function routeToHome() {
  navigate('/dashboard')  
};

export class SignIntoAccount extends React.Component {
  state = {    
    password: '',
    username: '',    
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Mutation mutation={SIGNIN_MUTATION}
                variables={this.state}
                refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
        {(signInUser,{ data,error,loading }) => {
          if(data){routeToHome(data)}
          return (  
          <div className="loginPage">
            <Form method='post'
                  className="login-form"
                  onSubmit={async (e) => { 
                    e.preventDefault();
                    await signInUser();
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
                Sign In
              </button>            
            </Form>
          </div>
        )}}
      </Mutation>
    )
  }
}

export default SignIntoAccount;