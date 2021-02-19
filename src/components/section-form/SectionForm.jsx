import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

//Components
import Faqs from "../faqs/Faqs";
import Sidebar from '../sidebar/Sidebar';

const Section = styled.section`
  background: #eeeeee;
  padding: 3rem 0;
`;

const SectionForm = ({infoMaster}) => {
  return (
    <Section>
      <Container>
        <Row>
          <Col lg={7}>
            <Faqs />
          </Col>
          <Col lg={5}>
            <Sidebar infoMaster={infoMaster}/>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default SectionForm;
