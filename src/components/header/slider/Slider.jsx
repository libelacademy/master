import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Components
import CounterSlider from "./CounterSlider";
import ModalTrailer from "../../general/ModalTrailer";

//Animations
import { gsap } from "gsap";

//Styles
import { colors } from "../../../utils/theme";
import styled from "styled-components";

//Responsive
import { device } from "../../../utils/breakpoints";

//Images
import DateIcon from "../../../images/icons/date.svg";


const SliderDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  @media ${device.lg} {
    height: 90vh;
  }
  & .info-slider {
    position: relative;
    z-index: 1;
    & .title {
      color: white;
      font-weight: 800;
      text-transform: uppercase;
      line-height: 1.3em;
      font-size: 2em;
      width: 100%;
      @media ${device.md} {
        font-size: 2.7em;
      }
      &-badge {
        color: ${colors.pColor};
        border-radius: 10px;
        padding: 0.3rem 0.8rem;
        background: ${colors.sColor};
        box-shadow: 2px 2px 10px rgba(0, 255, 255, 0.3);
        text-transform: uppercase;
        font-weight: 800;
        font-style: italic;
        font-size: 0.7em;
        display: inline-block;
        margin: 0.5rem 0;
      }
      &-text1 {
        display: block;
        text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
      }
      &-text2 {
        display: block;
        text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.32);
        font-size: 1.3em;
      }
    }
    & .subtitle {
      font-size: 1.3em;
      color: white;
      font-weight: 200;
      & strong {
        background: ${colors.sColor};
        padding: 0 0.5rem;
        margin-right: 0.3rem;
        color: ${colors.pColor};
        font-weight: 800;
      }
    }
    & .date {
      font-size: 1.3em;
      font-weight: 800;
      color: white;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 1rem;
      &-icon {
        display: inline-block;
        width: 30px;
        margin-right: 0.5rem;
      }
    }
  }

  & .slide {
    width: 100%;
    height: 100%;
    background-color: ${colors.pDark};
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    display: none;
    z-index: 0;
    @media ${device.lg} {
      height: 90vh;
      background-color: ${colors.pDark};
      background-position: center bottom;
      background-size: cover;
      background-repeat: no-repeat;
    }
    &--active {
      opacity: 1;
      display: block;
    }
    &-character {
      width: 80%;
      position: absolute;
      top: 0;
      right: 10%;
      z-index: 10;
      @media ${device.lg} {
        width: 50%;
      }
    }
  }
`;

export default function Slider({ infoSlider, slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  //Modal
  const [openTrailer, setOpenTrailer] = useState(null)
  const handleTrailer = () => {
    setOpenTrailer(true)
  }
  const handleCloseModal = e => {
    if( modalContent.current && !modalContent.current.contains(e.target)){
      setOpenTrailer(false);
    }
  }
  const closeModal = e => {
    setOpenTrailer(false);
  }

  let modalContent = useRef(null);

  //Elements
  let badge = useRef(null);
  let title = useRef(null);
  let title2 = useRef(null);
  let subtitle = useRef(null);
  let character = useRef(null);
  let date = useRef(null);
  let counter = useRef(null);

  useEffect(() => {
    gsap.from(badge, {
      x: -300,
      duration: 1,
      opacity: 0,
      ease: "power3.out",
    });
    gsap.from(title, {
      x: -300,
      duration: 1,
      opacity: 0,
      delay: 0.2,
      ease: "power3.out",
    });
    gsap.from(title2, {
      x: -300,
      duration: 1,
      opacity: 0,
      delay: 0.25,
      ease: "power3.out",
    });
    gsap.from(subtitle, {
      x: -300,
      duration: 1,
      opacity: 0,
      delay: 0.3,
      ease: "power3.out",
    });
    gsap.from(character, {
      x: 500,
      duration: 2,
      opacity: 0,
      delay: 0.3,
      ease: "power3.out",
    });
    gsap.from(date, {
      x: -500,
      duration: 2,
      opacity: 0,
      delay: 0.4,
      ease: "power3.out",
    });
    gsap.from(counter, {
      x: -500,
      duration: 2,
      opacity: 0,
      delay: 0.4,
      ease: "power3.out",
    });
  }, []);

  const divideTitle = (title, part) => {
    const findPart = title.indexOf("/");
    if (part === 1) {
      const part1 = title.substring(0, findPart);
      return part1;
    } else {
      const part2 = title.substring(findPart + 1, title.length);
      return part2;
    }
  };

  return (
    <>
      <SliderDiv className="slider">
        <Container className="h-100 info-slider">
          <Row className="align-items-center h-100">
            <Col lg={6}>
              <Row>
                <Col lg={12}>
                  <h1 className="title">
                    <span
                      className="title-badge"
                      ref={(el) => {
                        badge = el;
                      }}
                    >
                      {infoSlider.typeCourse}
                    </span>
                    <br />
                    <span
                      className="title-text1"
                      ref={(el) => {
                        title = el;
                      }}
                    >
                      {divideTitle(infoSlider.title, 1)}
                    </span>
                    <span
                      className="title-text2"
                      ref={(el) => {
                        title2 = el;
                      }}
                    >
                      {divideTitle(infoSlider.title, 2)}
                    </span>
                  </h1>
                  <h2
                    className="subtitle"
                    ref={(el) => {
                      subtitle = el;
                    }}
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: infoSlider.desc }}
                    />
                  </h2>
                  <h3
                    className="date"
                    ref={(el) => {
                      date = el;
                    }}
                  >
                    <img src={DateIcon} className="date-icon" />
                    <span>Inicia: {infoSlider.date}</span>
                  </h3>
                </Col>
                <Col
                  lg={12}
                  ref={(el) => {
                    counter = el;
                  }}
                >
                  <CounterSlider 
                    date={infoSlider.dateSystem} 
                    handleTrailer={handleTrailer}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        {slides.length > 0 &&
          slides.map((slide, i) =>
            i === 0 ? (
              <div
                className="slide slide--active"
                style={{ backgroundImage: `url(${slide.background})` }}
                key={slide.id}
              >
                <img
                  src={slide.character}
                  ref={(el) => {
                    character = el;
                  }}
                  className="slide-character"
                ></img>
              </div>
            ) : (
              <div
                className="slide"
                style={{ backgroundImage: `url(${slide.background})` }}
                key={slide.id}
              >
                <img src={slide.character} className="slide-character"></img>
              </div>
            )
          )}
      </SliderDiv>
      <ModalTrailer 
        modalState={openTrailer} 
        closeTrailer={handleCloseModal} 
        closeModal={closeModal} 
        forwardRef={modalContent} 
      />
    </>
  );
}
