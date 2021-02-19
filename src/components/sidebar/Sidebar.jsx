import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "react-bootstrap/Modal";

//Components
import Form from "../../components/general/Form";

//Styles
import styled from "styled-components";
import { anims, colors } from "../../utils/theme";
import CounterSidebar from "../section-form/CounterSidebar";

//Images
import WhatsappIcon from "../../images/icons/whatsapp.svg";
import PdfIcon from "../../images/icons/pdf.svg";
import Teacher from "../../images/teacher.png";
import ArrowPrevIcon from "../../images/icons/arrow-left.svg";
import ArrowNextIcon from "../../images/icons/arrow-right.svg";
import Close from "../../images/icons/close-gray.svg";

const Button = styled.button`
  border: none;
  background: ${colors.pColor};
  font-weight: 600;
  border-radius: 16px;
  color: white;
  padding: 1.5rem 2rem;
  min-width: 200px;
  ${anims.transition}
  font-size: 0.8em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  & span {
    font-weight: 800;
    font-size: 1em;
  }
  & img {
    width: 40px;
  }

  &:hover {
    background: rgb(73, 0, 125);
    background: -moz-linear-gradient(
      90deg,
      rgba(73, 0, 125, 1) 0%,
      rgba(132, 0, 232, 1) 87%,
      rgba(161, 45, 255, 1) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(73, 0, 125, 1) 0%,
      rgba(132, 0, 232, 1) 87%,
      rgba(161, 45, 255, 1) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(73, 0, 125, 1) 0%,
      rgba(132, 0, 232, 1) 87%,
      rgba(161, 45, 255, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#49007d",endColorstr="#a12dff",GradientType=1);
    color: white;
  }
`;

const Aside = styled.aside`
  min-height: 80vh;
  background: white;
  border-radius: 30px;
  padding: 2em;
  position: relative;
  display: block;
  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    border-bottom: 1px solid #e7e7e7;
    &-title {
      padding: 0.3em 0.6em;
      font-size: 1.2em;
      font-style: italic;
      text-transform: uppercase;
      color: white;
      font-weight: 600;
      background: ${colors.pColor};
      border-radius: 6px;
    }
    &-social {
    }
  }
  .content {
    padding: 1rem 0;
    &-title {
      text-align: center;
      font-weight: 700;
      margin: 1rem 0 2rem 0;
      color: #494949;
      font-size: 1.1em;
    }
    &-video {
      width: 100%;
      height: 220px;
      overflow: hidden;
      border-radius: 20px;
      margin-bottom: 2rem;
      position: relative;
      & .badge-video {
        padding: 10px 20px;
        border-radius: 10px;
        background: ${colors.pColor};
        position: absolute;
        bottom: 10px;
        color: white;
        font-size: 0.8em;
        &-teacher {
          & img {
            width: 30px;
            margin-right: 8px;
          }
          display: flex;
          align-items: center;
          left: 10px;
        }
        &-date {
          position: absolute;
          font-weight: 700;
          right: 10px;
        }
      }
      & iframe {
        width: 100%;
        height: 250px;
      }
    }
  }
  .bottom {
    & .links {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      padding-top: 1rem;
      &-button {
        border: none;
        border-radius: 10px;
        padding: 0.7rem 1.1rem;
        position: relative;
        display: inline-block;
        color: white;
        font-weight: 600;
        font-size: 0.8em;
        ${anims.transition};
        display: flex;
        align-items: center;
        margin: 0 0.1rem;
        &:hover {
          text-decoration: none;
        }
        &-icon {
          width: 20px;
          margin-right: 1em;
        }
        &--tematica {
          background: ${colors.pColor};
          &:hover {
            background: ${colors.pLight};
          }
        }
        &--whatsapp {
          background: #1bd741;
          &:hover {
            background: #3dff64;
          }
        }
      }
    }
  }
  @media (max-width: $screen-sm) {
    height: auto;
  }
`;

const ModalStyle = styled(Modal)`
  & .modal-content {
    background: transparent;
    border: none;
  }
  & .close {
    position: absolute;
    right: 40px;
    top: 40px;
    z-index: 100;
    width: 20px;
    height: 20px;
    background: url(${Close});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
`;

const LogosCarousel = styled(Slider)`
  position: relative;
  margin: 0 auto 1rem auto;
  padding: 0 1rem;
  width: 90%;
`;

const NextArrow = styled.div`
  background: url(${ArrowNextIcon}) no-repeat center / contain;
  top: 50% !important;
  right: -15px;
  z-index: 1000;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  overflow: hidden;
  transition: 0.5s ease-in;
  @media (max-width: 768px) {
    right: -10%;
    background: url(${ArrowNextIcon}) no-repeat center / contain;
  }
  &:hover {
    background: #f0f0f0 url(${ArrowNextIcon}) no-repeat center / contain;
  }
  &::before {
    display: none;
  }
`;

const PrevArrow = styled.div`
  background: url(${ArrowPrevIcon}) no-repeat center / contain;
  left: inherit;
  top: 50% !important;
  left: -15px;
  z-index: 1000;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  overflow: hidden;
  transition: 0.5s ease-in;
  @media (max-width: 768px) {
    left: -10%;
    background: url(${ArrowPrevIcon}) no-repeat center / contain;
  }
  &:hover {
    background: #f0f0f0 url(${ArrowPrevIcon}) no-repeat center / contain;
  }
  &::before {
    display: none;
  }
`;

const Sidebar = ({ trailer, infoMaster }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  console.log(infoMaster.logos);
  return (
    <>
      <Aside className="form-asesory">
        <div className="top">
          <h4 className="top-title">Master en:</h4>
        </div>
        <div className="content">
          <h2 className="content-title">{infoMaster.description.title}</h2>
          <div className="content-video">
            <div className="badge-video badge-video-teacher">
              <img src={Teacher} alt="" />
              <div className="info-teacher">
                <span style={{ fontWeight: "800" }}>Profesor:</span> <br></br>
                <span>Ricardo Díaz</span>
              </div>
            </div>
            <iframe
              src="https://www.youtube.com/embed/d05KvpHPF-M"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="badge-video badge-video-date">
              Inicia: 21 Abril 2021
            </div>
          </div>
          <CounterSidebar date={infoMaster.description.dateSystem} />
          <Button className="send-form" onClick={handleShow}>
            <span>Solicitar asesoría</span>
          </Button>
        </div>
        <LogosCarousel {...settings}>
          {infoMaster.logos.length > 0 ? (
            infoMaster.logos.map((logo) => <img src={logo.img} key={logo.id} />)
          ) : (
            <span> No hay logos</span>
          )}
        </LogosCarousel>

        <div className="bottom">
          <div className="links">
            <a
              className="links-button links-button--tematica"
              target="_blank"
              href="https://drive.google.com/file/d/1Eu0BsVRa0nD_g8qEHn15wrLWVB27IV6a/view"
            >
              <img src={PdfIcon} className="links-button-icon" alt="whatsapp" />
              <span>Temática</span>
            </a>
            <a
              href="http://bit.ly/3dnKVFU"
              target="_blank"
              className="links-button links-button--whatsapp"
            >
              <img
                src={WhatsappIcon}
                className="links-button-icon"
                alt="whatsapp"
              />
              <span>Whatsapp</span>
            </a>
          </div>
        </div>
      </Aside>
      <ModalStyle show={show} onHide={handleClose}>
        <Modal.Body>
          <button onClick={handleClose} className="close">
          </button>
          <Form />
        </Modal.Body>
      </ModalStyle>
    </>
  );
};

export default Sidebar;
