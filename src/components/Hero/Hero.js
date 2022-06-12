import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { up, down, between, only } from 'styled-breakpoints';

import Input from "../Input";
import { SearchNormal } from "../Icons";

const Section = styled.section`
  background-color: transparent;
  padding: 48px 0;
  text-align: center;
  ${up('lg')} {
    padding: 96px 0;
  }
`;
const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.hero.titleColor};
  margin-bottom: 16px;
  ${up('lg')} {
    margin-bottom: 24px;
  }
`;

const HeroText = styled.p`
  color: ${({ theme }) => theme.hero.textColor};
`;

const Hero = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={6} className="mx-auto">
            <HeroTitle>Movie App</HeroTitle>
            <HeroText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </HeroText>
            <Input
              leftIcon={<SearchNormal />}
              labelText="Search Movies or TV Shows"
              placeholder="Ag. Avengers"
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Hero;
