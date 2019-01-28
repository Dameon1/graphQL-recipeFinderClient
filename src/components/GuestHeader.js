import React from "react";
import { Link } from "@reach/router";
import { NavButton } from "./styles";

export default class GuestHeader extends React.Component {
  render() {
    return (
      <nav>
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
      </nav>
    );
  }
}
