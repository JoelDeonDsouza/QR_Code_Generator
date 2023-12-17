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
  padding: 0 15px;
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

// Main Container //
export const Main = styled.div`
  padding: 50px 0px;
  width: 100%;
  height: 600px;
  position: fixed;
  @media screen and (max-width: 960px) {
    padding: 100px 0px;
    width: 100%;
    height: 400px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 500px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 400px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderText = styled.span`
  font-size: 18px;
  margin-bottom: 15px;
`;

export const InputText = styled.input`
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: #f5f5f5;
  font-size: 16px;
  width: 80%;
  &::placeholder {
    opacity: 0.5;
  }
`;

export const QrWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;

export const ImgCode = styled.img`
  width: 60%;
  height: 80%;
  border-radius: 20px;
  @media screen and (max-width: 960px) {
    width: 80%;
    height: 90%;
  }
`;
// Main Container //
