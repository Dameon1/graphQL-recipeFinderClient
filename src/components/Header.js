import React from "react";
import User from "./User";
import GuestHeader from "./GuestHeader";
import UserHeader from "./UserHeader";
import { Headline, HeadlineText } from "./styles";

export class Header extends React.Component {
  render() {
    return (
      <Headline>
        <HeadlineText>What2Eat</HeadlineText>
        <User>
          {data => {
            if (!data.data.me) {
              return <GuestHeader />;
            } else {
              return <UserHeader />;
            }
          }}
        </User>
      </Headline>
    );
  }
}

export default Header;
