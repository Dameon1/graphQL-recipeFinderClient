import React from "react";
import { Link } from "@reach/router";
import { NavButton } from "./styles";
import SignOut from "./SignOut";

export default class GuestHeader extends React.Component {
  //TODO SEPARATE HEADERS INTO SEPARATE FILES
  render() {
    return (
      <nav>
        <Link to="/dashboard">
          <NavButton>Dashboard</NavButton>
        </Link>
        <Link to="/myRecipes">
          <NavButton>My recipes</NavButton>
        </Link>
        <Link to="/">
          <SignOut />
        </Link>
      </nav>
    );
  }
}
