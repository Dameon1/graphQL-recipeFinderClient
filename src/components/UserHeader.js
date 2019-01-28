import React from "react";
import { Link } from "@reach/router";
import { NavButton } from "./styles";
import "./styles/header.css";
import SignOut from "./SignOut";

export default class GuestHeader extends React.Component {
  //TODO SEPARATE HEADERS INTO SEPARATE FILES
  render() {
    return (
      <div className="header">
        <h1 className="headerText">what2eat</h1>
        <div className="navLinks">
          <Link to="/dashboard">
            <NavButton>Dashboard</NavButton>
          </Link>
          <Link to="/myRecipes">
            <NavButton>My recipes</NavButton>
          </Link>
          <Link to="/">
            <SignOut />
          </Link>
        </div>
      </div>
    );
  }
}
