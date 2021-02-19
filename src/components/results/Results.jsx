import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ModalResult from "../general/ModalResult";
import playIcon from "../../images/icons/play-icon.svg";

//Styles
import { anims, colors } from "../../utils/theme";
import styled from "styled-components";

//Responsive
import { device } from "../../utils/breakpoints";

import ArrowNextIcon from "../../images/icons/next-arrow.svg";
import ArrowPrevIcon from "../../images/icons/prev-arrow.svg";

const ResultsSection = styled.section`
  background: #1a1a1a;
  padding: 0 0 5rem 0rem;
  & .call-to-action {
    padding: 8rem 0;
    background: ${colors.pColor};
    h3 {
      color: white;
      font-weight: 800;
    }
    p {
      color: white;
    }
  }
`;

const SliderSlick = styled(Slider)`
  width: 100%;
  margin: 0 auto;
  @media ${device.lg} {
    transform: translateY(-30px);
  }
  .slick-track {
    min-height: 450px;
    width: 100%;
    overflow: hidden;
  }
  .slick-slide {
    overflow: hidden;
    & .item-slick {
      height: 350px;
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      ${anims.transition};
      cursor: pointer;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0.7;
        z-index: 1;
      }
      & .play-trailer-modal {
        width: 80px;
        height: 80px;
        border: 1px solid white;
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
        transform-origin: center;
        ${anims.transition};
        z-index: 11;
        &:hover {
          transform: translate(-50%, -50%) scale(1.2);
        transform-origin: center;
        }
      }
      & .back {
        width: 100%;
        transform: scale(1);
        ${anims.transition};
      }
      & .text {
        position: absolute;
        bottom: 0%;
        left: 0%;
        text-align: center;
        color: white;
        z-index: 11;
        font-size: 1em;
        font-weight: 700;
        width: 100%;
        opacity: 1;
        ${anims.transition};
        display: flex;
        align-items: center;
        padding: 1em 2em;
        & .avatar {
          overflow: hidden;
          border-radius: 50%;
          width: 60px;
          margin-right: 10px;
        }
        & .data-user {
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          & span {
            color: white;
            font-weight: 700;
            font-size: 0.8em;
            display: block;
            margin: 0.2em 0;
          }
        }
      }
    }
  }
  .slick-slide-active {
  }

  .slick-center {
    & .item-slick {
      height: 380px;
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      ${anims.transition};
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;
      & .text {
        opacity: 1;
        & span {
          color: ${colors.sColor};
        }
      }
      & .back {
        width: 100%;
        transform: scale(1.3);
      }
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${colors.pColor};
        opacity: 0.7;
        z-index: 1;
      }
    }
  }
`;

const NextArrow = styled.div`
  background: url(${ArrowNextIcon}) no-repeat center / contain;
  top: 50% !important;
  right: 10px;
  z-index: 1000;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  overflow: hidden;
  transition: 0.5s ease-in;
  @media (max-width: 768px) {
    right: 0;
    background: url(${ArrowNextIcon}) no-repeat center /
      contain;
  }
  &:hover {
    background: ${colors.sColor} url(${ArrowNextIcon}) no-repeat center /
      contain;
  }
  &::before {
    display: none;
  }
`;

const PrevArrow = styled.div`
  background: url(${ArrowPrevIcon}) no-repeat center / contain;
  left: inherit;
  top: 50% !important;
  left: 10px;
  z-index: 1000;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  overflow: hidden;
  transition: 0.5s ease-in;
  @media (max-width: 768px) {
    left: 0%;
    background: url(${ArrowPrevIcon}) no-repeat center /
      contain;
  }
  &:hover {
    background: ${colors.sColor} url(${ArrowPrevIcon}) no-repeat center /
      contain;
  }
  &::before {
    display: none;
  }
`;

const Results = ({ results }) => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    speed: 500,
    dots: false,
    arrows: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
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
    <ResultsSection>
      <div className="call-to-action">
        <Container fluid={true} className="p-0">
          <Row noGutters={true} className="justify-content-center">
            <Col lg={12} className="text-center">
              <h3>
                Resultados de nuestros <br /> estudiantes
              </h3>
              <p>Los mejores proyectos</p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid={true} className="p-0">
        <Row noGutters={true}>
          <Col lg={12}>
            <SliderSlick {...settings}>
              {results.length > 0
                ? results.map((project) => (
                    <div className="item-slick" key={project.id}>
                      <button
                        onClick={handleTrailer}
                        className="play-trailer-modal"
                      ></button>
                      <h5 className="text">
                        <img
                          src={project.avatar}
                          alt={project.name}
                          className="avatar"
                        />
                        <div className="data-user">
                          <span>{project.name}</span>
                          <span>{project.from}</span>
                        </div>
                      </h5>
                      <img
                        src={project.img}
                        alt={project.name}
                        className="back"
                      />
                    </div>
                  ))
                : "No hay projectos"}
            </SliderSlick>
          </Col>
        </Row>
      </Container>
      <ModalResult
        modalState={openTrailer}
        closeTrailer={handleCloseModal}
        closeModal={closeModal}
        forwardRef={modalContent}
      />
    </ResultsSection>
  );
};

export default Results;
