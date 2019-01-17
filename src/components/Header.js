 import React from "react";
 import { Link } from '@reach/router';

 import './styles/header.css';
// import { signUserOut } from '../../actions/auth';
// import { signingUserOut } from "../../actions/userActions";

 export default class Header extends React.Component {

//   handleSignOut() {
//    this.props.dispatch(signingUserOut());
//    this.props.dispatch(signUserOut());
//   };

//TODO SEPARATE HEADERS INTO SEPARATE FILES
  render() {
    if (!this.props.loggedIn) {
      return (
        <div className='header'>
          <h1 className="headerText">
            what2eat
          </h1>
          <div className="navLinks">
            <Link to="/loginPage" >
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
    )}
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
              <button className="navLinkButtons" onClick={ () => { this.handleSignOut() } }>Sign Out</button>
            </Link> 
          </div>
        </div>
    )
  };
};
