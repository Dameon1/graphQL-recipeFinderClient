import React from "react";
import { Link } from "@reach/router";
import { NavButton } from "./styles";
import SignOut from "./SignOut";

export class GuestHeader extends React.Component {
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

export default GuestHeader;
