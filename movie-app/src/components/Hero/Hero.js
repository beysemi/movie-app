import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import Input from "../Input";
import Button from "../Button/Button";
import { Add, Placeholder } from "../Icons";
const Section = styled.section`
  background-color: transparent;
  padding: 80px 0;
`;
const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.hero.titleColor};
`;

const HeroText = styled.p`
  color: ${({ theme }) => theme.hero.textColor};
`;

const Hero = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={6}>
            <HeroTitle>MaileHereko</HeroTitle>
            <HeroText>
              List of movies and TV Shows, I, Pramod Poudel have watched till
              date. Explore what I have watched and also feel free to make a
              suggestion. 😉
            </HeroText>
            <Input
              leftIcon={<Add />}
              labelText="Label"
              placeholder="Ag. Avengers"
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Hero;
