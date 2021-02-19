import React, { useState } from "react";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Images
import ArrowPrevIcon from "../../images/icons/arrow-left.svg";
import ArrowNextIcon from "../../images/icons/arrow-right.svg";

//Styles
import styled from "styled-components";
import { anims, colors } from "../../utils/theme";
import { device } from "../../utils/breakpoints";
const Gallery = styled.section`
  background: #eeeeee;
  & .video {
    width: 100%;
    height: 500px;
    border-radius: 20px;
    @media ${device.lg} {
      transform: translateY(-30px);
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
    min-height: 250px;
    width: 100%;
    overflow: hidden;
  }
  .slick-slide {
    border-radius: 20px;
    padding: 10px;
    overflow: hidden;
    & .item-slick {
      height: 150px;
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      ${anims.transition};
      cursor: pointer;
      & img {
        width: 100%;
        transform: scale(1);
        ${anims.transition};
      }
      & .text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: white;
        z-index: 11;
        font-size: 1em;
        font-weight: 700;
        width: 100%;
        opacity: 0;
        ${anims.transition};
        & span {
          color: ${colors.sColor};
        }
      }
    }
  }
  .slick-slide-active {
  }

  .slick-center {
    & .item-slick {
      height: 210px;
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      ${anims.transition};
      & .text {
        opacity: 1;
        & span {
          color: ${colors.sColor};
        }
      }
      & img {
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
  top: 35% !important;
  right: -10%;
  z-index: 1000;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  overflow: hidden;
  transition: 0.5s ease-in;
  @media (max-width: 768px) {
    right: 0;
    background: ${colors.sColor} url(${ArrowNextIcon}) no-repeat center /
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
  top: 35% !important;
  left: -10%;
  z-index: 1000;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  overflow: hidden;
  transition: 0.5s ease-in;
  @media (max-width: 768px) {
    left: 0%;
    background: ${colors.sColor} url(${ArrowPrevIcon}) no-repeat center /
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

const GalleryVideo = ({ projects, trailer }) => {
  const [currentVideo, setCurrentVideo] = useState("");
  const [nextSlide, setNextSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      console.log(next);
      setNextSlide(next);
    },
    afterChange: (current) => {
      console.log(current);
      setCurrentSlide(current);
      const selectedProject = projects.filter((project) => {
        if (project.id === current) return project;
      });
      const [proj] = selectedProject;
      setCurrentVideo(proj.video);
    },
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
  return (
    <Gallery>
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <div className="video">
              <iframe
                src={currentVideo === "" ? projects[0].video : currentVideo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video"
              ></iframe>
            </div>
            <SliderSlick {...settings}>
              {projects.length > 0
                ? projects.map((project) => (
                    <div className="item-slick" key={project.id}>
                      <h5 className="text">
                        {project.text.name} <br />{" "}
                        <span>{project.text.level}</span>
                      </h5>
                      <img src={project.img} alt={project.name} />
                    </div>
                  ))
                : "No hay projectos"}
            </SliderSlick>
          </Col>
        </Row>
      </Container>
    </Gallery>
  );
};

export default GalleryVideo;
