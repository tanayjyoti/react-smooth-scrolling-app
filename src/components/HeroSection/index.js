import React, { useState } from "react";

import Button from "../ButtonElement";
import {
  Container,
  Bg,
  VideoBg,
  Content,
  Title,
  SubTitle,
  BtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Video from "../../video/video.mp4";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover((prev) => !prev);
  };

  return (
    <Container id="top">
      <HeroSection.Bg>
        <HeroSection.VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroSection.Bg>
      <HeroSection.Content>
        <HeroSection.Title>Virtual Banking Made Easy</HeroSection.Title>
        <HeroSection.Subtitle>
          Sign up for a new account today and recieve $250 in credit towards
          your next payment.
        </HeroSection.Subtitle>
        <HeroSection.BtnWrapper>
          <Button
            to="signup"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroSection.BtnWrapper>
      </HeroSection.Content>
    </Container>
  );
};

HeroSection.Bg = function HeroSectionBg({ children, ...restProps }) {
  return <Bg {...restProps}>{children}</Bg>;
};

HeroSection.VideoBg = function HeroSectionVideoBg({ ...restProps }) {
  return <VideoBg {...restProps} />;
};

HeroSection.Content = function HeroSectionContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

HeroSection.Title = function HeroSectionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

HeroSection.Subtitle = function HeroSectionSubTitle({
  children,
  ...restProps
}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

HeroSection.BtnWrapper = function HeroSectionBtnWrapper({
  children,
  ...restProps
}) {
  return <BtnWrapper {...restProps}>{children}</BtnWrapper>;
};

export default HeroSection;
