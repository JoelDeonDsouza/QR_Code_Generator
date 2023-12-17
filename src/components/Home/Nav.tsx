import React from "react";
// Styled components //
import { NavContainer, NavContent, NavList, Logo } from "../../styles/home";

const Nav = () => {
  return (
    <NavContainer>
      <NavContent>
        <NavList>
          <Logo>QR_Generator</Logo>
        </NavList>
      </NavContent>
    </NavContainer>
  );
};

export default Nav;
