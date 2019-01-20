
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
//import Form from './styles/Form';
//import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';
import {navigate} from '@reach/router';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($username: String!, $password: String!) {
    signInUser(username: $username, password: $password) {
      id
      username
      password
    }
  }
`;

function routeToHome(data) {
  navigate('/dashboard')  
};

class SignIntoAccount extends Component {
  state = {    
    password: '',
    username: '',
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        //refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signin, { data, error, loading }) => {
         if(data){routeToHome(data)}
          return (
            <form method="post"
                  onSubmit={async e => {
                    e.preventDefault();
                    console.log(this.state)
                    await signin();
                    this.setState({username: '', password: '' });
                  }}>
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Sign into your account</h2>
                <p error={error} />
                <label htmlFor="username">
                username
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.saveToState}
                  />
                </label>
                <button type="submit">Sign In!</button>
              </fieldset>
            </form>
        )}}
      </Mutation>
    );
  }
}

export default SignIntoAccount;


// import React, { Component } from 'react';
// import { Mutation } from 'react-apollo';
// import gql from 'graphql-tag';
// //import Form from './styles/Form';
// //import Error from './ErrorMessage';
// import { CURRENT_USER_QUERY } from './User';
// import { Router } from '@reach/router';
// import './styles/userLogin.css';

// const SIGNUP_MUTATION = gql`
//   mutation SIGNUP_MUTATION($email: String!, $name: String!, $password: String!) {
//     signup(email: $email, name: $name, password: $password) {
//       id
//       email
//       name
//     }
//   }
// `;

// function routeToHome() {
//   Router.push({
//     pathname: '/',
//     });  
// };

// class CreateAccountForm extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };
//   saveToState = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   render() {
//     return (
//       <Mutation
//         mutation={SIGNUP_MUTATION}
//         variables={this.state}
//         refetchQueries={[{ query: CURRENT_USER_QUERY }]}
//       >
//          {(signup, { data, error, loading }) => {
//            if(data){routeToHome()}
//            return (
//           <form
//             method="post"
//             onSubmit={async e => {
//               e.preventDefault();
//               await signup();
//               this.setState({ name: '', email: '', password: '' });
//             }}
//           >       
//             <fieldset disabled={loading} aria-busy={loading}>
//               <h2>Sign Up for An Account</h2>
//               <p error={error} />
//               <label htmlFor="email">
//                 Email
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="email"
//                   value={this.state.email}
//                   onChange={this.saveToState}
//                 />
//               </label>
//               <label htmlFor="name">
//                 Name
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="name"
//                   value={this.state.name}
//                   onChange={this.saveToState}
//                 />
//               </label>
//               <label htmlFor="password">
//                 Password
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="password"
//                   value={this.state.password}
//                   onChange={this.saveToState}
//                 />
//               </label>            
//               <button type="submit">Sign Up!</button>
//             </fieldset>
//           </form>
//         )}}
//       </Mutation>
//     );
//   }
// }

// export default CreateAccountForm;
// export { SIGNUP_MUTATION }




// import React from 'react';
// import '../styles/userLogin.css';
// //import { registerUser } from '../../actions/createUser';
// //import { login } from '../../actions/auth';
// //import Input from './LoginInput';
// // import {
// //   Field, 
// //   reduxForm, 
// //   focus } from 'redux-form';
// import {
//   required, 
//   nonEmpty, 
//   matches, 
//   length, 
//   isTrimmed } from '../validators';

// const passwordLength = length({min: 7, max: 72});
// const matchesPassword = matches('password');

// export class SignUpForm extends React.Component {
    
//     onSubmit(values) {
//         const { username, password } = values;
//         const user = { username, password };
//         return this.props
//             .dispatch(registerUser(user))
//             .then(() => this.props.dispatch(login(username, password)));
//     };

//     render() {
//         if (this.props.loggedIn) {
//           return <Redirect to="/dashboard" />;
//         };

//         return (
//           <div className="loginPage">
//             <h2 className="userSignInHeader">Register</h2> 
//             <form className="login-form"
//                   onSubmit={ this.props.handleSubmit(values => this.onSubmit(values)) } >
//               <label htmlFor="username" className='signInLabel'>Username</label>
//               <Field                    
//                 component={ Input }
//                 type="text"
//                 name="username"
//                 validate={ [required, nonEmpty, isTrimmed] }
//                 />
//               <label htmlFor="password" className='signInLabel'>Password</label>
//               <Field
//                 component={ Input }
//                 type="password"
//                 name="password"
//                 validate={ [required, passwordLength, isTrimmed] }
//                 />
//               <label htmlFor="Confirm password" className='signUpPasswordConfirmLabel'>Confirm password</label>
//               <Field                  
//                 component={ Input }
//                 type="password"
//                 name="Confirm password"
//                 validate={ [required, nonEmpty, matchesPassword] }
//                 />
//               <button type="submit" disabled={ this.props.pristine || this.props.submitting } className='signInButton'>
//                 Register
//               </button>
//             </form>
//           </div>
//         );
//     };

// };

// const mapStateToProps = state => ({
//     loggedIn: state.authReducer.loggedIn
// });

// export default connect(mapStateToProps)(reduxForm({
//     form: 'registration',
//     onSubmitFail: (errors, dispatch) => 
//         dispatch(focus('registration', Object.keys(errors)[0]))
// })(SignUpForm));