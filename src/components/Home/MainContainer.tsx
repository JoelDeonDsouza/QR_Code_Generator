import React, { useState } from "react";
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
// QR //
import QRCode from "qrcode.react";

const MainContainer = () => {
  const [url, setUrl] = useState("");

  return (
    <Main>
      <MainWrapper>
        <TextWrapper>
          <HeaderText>Enter your link</HeaderText>
          <InputText
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="enter your URL"
          />
        </TextWrapper>
        <QrWrapper>
          <ImgCode src={"https://i.ibb.co/kBTf0fZ/qrcode.png"} />
        </QrWrapper>
      </MainWrapper>
    </Main>
  );
};

export default MainContainer;
