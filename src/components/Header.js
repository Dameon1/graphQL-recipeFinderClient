import React from "react";
import { Link } from '@reach/router';
import User from './User';
import './styles/header.css';
import Spinner from 'react-spinkit';
import SignOut from './SignOut';
// import { signUserOut } from '../../actions/auth';
// import { signingUserOut } from "../../actions/userActions";

 export default class Header extends React.Component {

//   handleSignOut() {
//    this.props.dispatch(signingUserOut());
//    this.props.dispatch(signUserOut());
//   };

//TODO SEPARATE HEADERS INTO SEPARATE FILES
  render() {
    return (      
      <User>
        {(data) => {
          console.log(data.loading);
          if(data.loading) {
           return <Spinner spinnername="circle" fadeIn='none' />;
          }
          if(!data.data.me) {
            return (
              <div className='header'>
                <h1 className="headerText">
                  what2eat
                </h1>
                <div className="navLinks">
                  <Link to="/signIn" >
                    <button className="navLinkButtons">Login</button>
                  </Link>
                  <Link to="/signUp" >
                    <button className="navLinkButtons">Sign up</button>
                  </Link>  
                  <Link to="/dashboard" >
                    <button className="navLinkButtons" >Dashboard</button>
                  </Link>
                  <Link to="/" >
                    <button className="navLinkButtons">Home</button>
                  </Link>
                </div>
              </div>
            )
          } else {
            return (
              <div className='header'>
                <h1 className="headerText">
                  what2eat
                </h1>
                <div className="navLinks">
                  <Link to="/dashboard" >
                    <button className="navLinkButtons">Dashboard</button>
                  </Link>
                  <Link to="/myRecipes" >
                    <button className="navLinkButtons">My recipes</button>
                  </Link> 
                  <Link to="/" >
                    <SignOut />
                  </Link> 
                </div>
              </div>
          )
          }
        }}
      </User>
    )

    // if (!this.props.loggedIn) {
    //   return (
        
    // )}
     
  };
};
