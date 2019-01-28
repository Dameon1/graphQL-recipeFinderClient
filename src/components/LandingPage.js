import React from "react";
import { Link } from "@reach/router";

import { Landing } from "./styles";
import { LandingHeader } from "./styles";
import { LandingSmallPrint } from "./styles";
import { LandingText } from "./styles";
import { LandingButton } from "./styles";
import "./styles/landingPage.css";

export default function LandingPage() {
  return (
    <Landing>
      <LandingHeader>You Have Ingredients?</LandingHeader>

      <LandingSmallPrint> (Find recipes for those ingredients!) </LandingSmallPrint>

      <LandingText>Sign up today to enjoy full features</LandingText>

      <Link to="/signUp">
        <LandingButton>SignUp</LandingButton>
      </Link>

      <LandingText>or preview the experience</LandingText>

      <Link to="/dashboard">
        <LandingButton>Preview</LandingButton>
      </Link>
    </Landing>
  );
}
