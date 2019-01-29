import React from "react";
import { FooterContainer, FooterText, FooterLink } from "./styles";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        Powered by{" "}
        <FooterLink href="https://spoonacular.com/" target="blank">
          @Spoonacular
        </FooterLink>
      </FooterText>
    </FooterContainer>
  );
}
