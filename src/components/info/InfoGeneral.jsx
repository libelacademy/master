import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Tabs & Nav
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

//Components
import CounterDescription from "../general/CounterDescription";
import ItemMethod from "./ItemMethod";

//Styles
import styled from "styled-components";
import { anims, colors } from "../../utils/theme";

//Images
import DateIcon from "../../images/icons/date.svg";
import ModalTrailer from "../general/ModalTrailer";
import playIcon from "../../images/icons/play-icon.svg"

const InfoTabs = styled.div`
  background: ${colors.pColor};
  z-index: 10;
  & .infotabs {
    position: relative;
    &-nav {
      padding-top: 2rem;
      background: ${colors.pDark};
      & .nav-item {
        & a {
          color: white;
          padding: 1rem 2rem;
          font-size: 1em;
          ${anims.transition};
          position: relative;
          &:hover {
            background: ${colors.pLight};
          }
          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: transparent;
            ${anims.transition};
          }
          &.active {
            background: ${colors.pColor};
            box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
            font-weight: 600;
            padding: 1rem 3rem;
            &::after {
              width: 100%;
              background: ${colors.sColor};
            }
          }
        }
      }
    }
    &-content {
      background: ${colors.pColor};
      & .content {
        padding: 2rem 0;
        &-trailer {
          & .play-trailer-modal {
            width: 100px;
            height: 100px;
            border: 2px solid white;
            background: url(${playIcon});
            background-size: 50%;
            background-position: center;
            background-repeat: no-repeat;
            position: absolute;
            border-radius: 50%;
            left: 50%;
            right: 50%;
            top: 50%;
            transform: translate(-50%, -50%) scale(1);
            ${anims.transition};
            &:hover{
              transform: translate(-50%, -50%) scale(1.3);
            }
          }
        }
        &-description {
          & img {
            width: 100%;
          }
          & h2.title {
            color: white;
            font-weight: 700;
          }
          & p {
            color: white;
          }
          & .date {
            background: #1a1a1a;
            display: flex;
            align-items: center;
            border-radius: 20px;
            padding: 1rem 1rem;
            max-width: 330px;
            & img {
              width: 40px;
              height: auto;
              margin: 0 2rem 0 1rem;
            }
            &-info {
              & .initial {
                font-weight: 700;
                color: white;
              }
              & .day {
                font-weight: 800;
                font-size: 1.4em;
                color: white;
              }
            }
          }
        }
        &-method {
          padding: 2rem 0;
        }
      }
    }
  }
`;

function InfoGeneral({ infoMaster }) {
  //Modal
  const [openTrailer, setOpenTrailer] = useState(null);
  const handleTrailer = () => {
    setOpenTrailer(true);
  };
  const handleCloseModal = (e) => {
    if (modalContent.current && !modalContent.current.contains(e.target)) {
      setOpenTrailer(false);
    }
  };
  const closeModal = (e) => {
    setOpenTrailer(false);
  };

  let modalContent = useRef(null);

  return (
    <>
      <InfoTabs>
        <Tab.Container defaultActiveKey="desc" className="infotabs">
          <div className="infotabs-nav">
            <Container>
              <Row>
                <Col sm={12}>
                  <Nav>
                    <Nav.Item className="item">
                      <Nav.Link eventKey="desc">Descripción</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="trailer">Trailer</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="method">Método de estudio</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="infotabs-content">
            <Container>
              <Row>
                <Col sm={12}>
                  <Tab.Content className="content">
                    <Tab.Pane eventKey="desc" className="content-description">
                      <Row className="align-items-center">
                        <Col lg={7}>
                          <img src={infoMaster.trailer.img} />
                        </Col>
                        <Col lg={5}>
                          <h2 className="title">
                            {infoMaster.description.title}
                          </h2>
                          <p>{infoMaster.description.desc}</p>
                          <div className="date">
                            <img src={DateIcon} alt="" className="icon" />
                            <div className="date-info">
                              <span className="initial">Inicio de clases</span>
                              <br />
                              <span className="day">
                                {infoMaster.description.date}
                              </span>
                            </div>
                          </div>
                          <CounterDescription
                            date={infoMaster.description.dateSystem}
                          />
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="trailer" className="content-trailer">
                      <Row className="justify-content-center">
                        <Col lg={6}>
                          <button
                            onClick={handleTrailer}
                            className="play-trailer-modal"
                          ></button>
                          <img src={infoMaster.trailer.img} style={{width: '100%'}} />
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="method" className="content-method">
                      <Row>
                        {infoMaster.studyMethod.length > 0 ? (
                          infoMaster.studyMethod.map((item) => (
                            <Col lg={4} key={item.id}>
                              <ItemMethod
                                icon={item.icon}
                                title={item.title}
                                desc={item.desc}
                              />
                            </Col>
                          ))
                        ) : (
                          <p>No hay métodos de estudio</p>
                        )}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Container>
          </div>
        </Tab.Container>
      </InfoTabs>
      <ModalTrailer
        modalState={openTrailer}
        closeTrailer={handleCloseModal}
        closeModal={closeModal}
        forwardRef={modalContent}
      />
    </>
  );
}

export default InfoGeneral;
