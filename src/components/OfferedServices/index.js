import React from "react";

import {
  Container,
  Heading,
  Wrapper,
  Card,
  Icon,
  Title,
  SubTitle,
} from "./ServicesElements";

const Services = ({ services }) => {
  return (
    <Container id="services">
      <Services.Heading>Our Services</Services.Heading>
      <Services.Wrapper>
        {services.map((service) => {
          return (
            <Services.Card key={service.id}>
              <Services.Icon src={service.icon.default} alt={service.alt} />
              <Services.Title>{service.title}</Services.Title>
              <Services.SubTitle>{service.desc}</Services.SubTitle>
            </Services.Card>
          );
        })}
      </Services.Wrapper>
    </Container>
  );
};

Services.Heading = function ServicesHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

Services.Wrapper = function ServicesWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Services.Card = function ServicesCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

Services.Icon = function ServicesIcon({ ...restProps }) {
  return <Icon {...restProps} />;
};

Services.Title = function ServicesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Services.SubTitle = function ServicesSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

export default Services;
