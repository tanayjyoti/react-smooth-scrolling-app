import React from "react";

import {
  Container,
  Wrapper,
  Row,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";
import Button from "../ButtonElement";

const InfoSection = ({
  id,
  lightBg,
  lightText,
  topLine,
  headline,
  description,
  buttonLabel,
  to,
  imgStart,
  img,
  alt,
  dark,
  dark2,
  primary,
  darkText,
}) => {
  return (
    <React.Fragment>
      <Container id={id} lightBg={lightBg}>
        <InfoSection.Wrapper>
          <InfoSection.Row imgStart={imgStart}>
            <InfoSection.Column1>
              <InfoSection.TextWrapper>
                <InfoSection.TopLine>{topLine}</InfoSection.TopLine>
                <InfoSection.Heading lightText={lightText}>
                  {headline}
                </InfoSection.Heading>
                <InfoSection.SubTitle darkText={darkText}>
                  {description}
                </InfoSection.SubTitle>
                <InfoSection.BtnWrap>
                  <Button
                    to={to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </InfoSection.BtnWrap>
              </InfoSection.TextWrapper>
            </InfoSection.Column1>
            <InfoSection.Column2>
              <InfoSection.ImgWrap>
                <InfoSection.Img src={img.default} alt={alt} />
                {/** the svg image contains in the "default" property of the img object  */}
              </InfoSection.ImgWrap>
            </InfoSection.Column2>
          </InfoSection.Row>
        </InfoSection.Wrapper>
      </Container>
    </React.Fragment>
  );
};

InfoSection.Wrapper = function InfoSectionWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

InfoSection.Row = function InfoSectionRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

InfoSection.Column1 = function InfoSectionColumn1({ children, ...restProps }) {
  return <Column1 {...restProps}>{children}</Column1>;
};

InfoSection.Column2 = function InfoSectionColumn2({ children, ...restProps }) {
  return <Column2 {...restProps}>{children}</Column2>;
};

InfoSection.TextWrapper = function InfoSectionTextWrapper({
  children,
  ...restProps
}) {
  return <TextWrapper {...restProps}>{children}</TextWrapper>;
};

InfoSection.TopLine = function InfoSectionTopLine({ children, ...restProps }) {
  return <TopLine {...restProps}>{children}</TopLine>;
};

InfoSection.Heading = function InfoSectionHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

InfoSection.SubTitle = function InfoSectionSubTitle({
  children,
  ...restProps
}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

InfoSection.BtnWrap = function InfoSectionBtnWrap({ children, ...restProps }) {
  return <BtnWrap {...restProps}>{children}</BtnWrap>;
};

InfoSection.ImgWrap = function InfoSectionImgWrap({ children, ...restProps }) {
  return <ImgWrap {...restProps}>{children}</ImgWrap>;
};

InfoSection.Img = function InfoSectionImg({ ...restProps }) {
  return <Img {...restProps} />;
};

export default InfoSection;
