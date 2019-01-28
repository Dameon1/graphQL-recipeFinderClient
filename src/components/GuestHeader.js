import React from "react";
import { Link } from "@reach/router";
import { NavButton } from "./styles";
import "./styles/header.css";

export default class GuestHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="headerText">what2eat</h1>
        <div className="navLinks">
          <Link to="/signIn">
            <NavButton>Login</NavButton>
          </Link>
          <Link to="/signUp">
            <NavButton>Sign up</NavButton>
          </Link>
          <Link to="/dashboard">
            <NavButton>Dashboard</NavButton>
          </Link>
          <Link to="/">
            <NavButton>Home</NavButton>
          </Link>
        </div>
      </div>
    );
  }
}
