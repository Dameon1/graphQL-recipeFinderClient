import React from "react";
import User from "./User";
import GuestHeader from "./GuestHeader";
import UserHeader from "./UserHeader";
import "./styles/header.css";

export default class Header extends React.Component {
  render() {
    return (
      <User>
        {data => {
          if (!data.data.me) {
            return <GuestHeader />;
          } else {
            return <UserHeader />;
          }
        }}
      </User>
    );
  }
}
