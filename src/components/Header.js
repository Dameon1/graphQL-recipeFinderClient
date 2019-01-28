import React from "react";
import User from "./User";
import GuestHeader from "./GuestHeader";
import UserHeader from "./UserHeader";
import { Headline } from "./styles";
import { HeadlineText } from "./styles";

export default class Header extends React.Component {
  render() {
    return (
      <Headline>
        <HeadlineText>what2eat</HeadlineText>
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
