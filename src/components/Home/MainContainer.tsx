import React from "react";
// styled components //
import {
  Main,
  MainWrapper,
  TextWrapper,
  QrWrapper,
  HeaderText,
  InputText,
  ImgCode,
} from "../../styles/home";

const MainContainer = () => {
  return (
    <Main>
      <MainWrapper>
        <TextWrapper>
          <HeaderText>Enter your link</HeaderText>
          <InputText placeholder="enter your URL" />
        </TextWrapper>
        <QrWrapper>
          <ImgCode src={"https://i.ibb.co/kBTf0fZ/qrcode.png"} />
        </QrWrapper>
      </MainWrapper>
    </Main>
  );
};

export default MainContainer;
