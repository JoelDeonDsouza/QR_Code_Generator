import styled from "styled-components";

// Nav //
export const NavContainer = styled.nav`
  margin: 0;
  width: 100%;
  min-width: 320px;
  height: 56px;
  max-height: 50px;
  font-size: 17px;
  position: fixed;
`;

export const NavContent = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
  max-width: 1024px;
  padding: 0;
  @media screen and (max-width: 960px) {
    padding: 0 15px;
  }
`;

export const NavList = styled.div`
  cursor: default;
  margin: 0;
  width: auto;
  height: 56px;
  display: flex;
  list-style: none;
  align-items: center;
`;

export const Logo = styled.span`
  font-size: 24px;
  @media screen and (max-width: 960px) {
    font-size: 16px;
  }
`;
// Nav //