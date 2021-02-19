import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Images
import LogoIcon from "../images/logo-libel.png";

//Parts
import Navigation from "./header/navigation/Navigation";

//Responsive
import { device } from "../utils/breakpoints";
import { anims, colors } from "../utils/theme";

const HeaderBar = styled.header`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  padding: 1rem 0;
  ${anims.transition};
  background-color: ${colors.pColor};
  &.active {
    background-color: ${colors.pColor};
    @media ${device.md} {
      background-color: ${colors.pColor};
      padding: 1.5rem 0;
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
    }
    & .asesory {
      background-color: ${colors.sColor};
      color: ${colors.pColor} !important;
    }
  }
  @media ${device.md} {
    &.active {
      position: fixed;
      @media ${device.md} {
        background-color: ${colors.pColor};
        padding: 1.5rem 0;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
      }
      & .asesory {
        background-color: ${colors.sColor};
        color: ${colors.pColor} !important;
      }
    }
    background-color: transparent;
    padding: 1rem 0;
  }
  & .col-nav {
    display: none;
    @media ${device.md} {
      display: block;
      padding: 0.7rem auto;
    }
  }
`;
const Logo = styled.img`
  width: 160px;
  height: auto;
  margin: 0 auto;
  display: block;
  @media ${device.md} {
    margin: inherit;
  }
`;

const Header = ({ siteTitle }) => {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const handleScroll = (e) => {
    window.scrollY > 100 ? setHeaderScrolled(true) : setHeaderScrolled(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <HeaderBar className={headerScrolled ? "active" : ""}>
      <Container>
        <Row className="justify-content-md-space-between align-items-center">
          <Col md={3} className="col-logo">
            <Logo src={LogoIcon} />
          </Col>
          <Col md={9} className="col-nav text-right">
            <Navigation />{" "}
          </Col>
        </Row>
      </Container>
    </HeaderBar>
  );
};

export default Header;
