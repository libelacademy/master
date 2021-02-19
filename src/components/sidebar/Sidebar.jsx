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
    justify-content: space-between;
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
    &-title{
      text-align: center;
      font-weight: 700;
      margin: 1rem 0 2rem 0;
      color: #494949;
    }
    &-video {
      width: 100%;
      height: 220px;
      background: red;
      overflow: hidden;
      border-radius: 20px;
      margin-bottom: 2rem;
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
        padding: 0.7rem 1.6rem;
        position: relative;
        display: inline-block;
        color: white;
        font-weight: 600;
        font-size: 0.8em;
        ${anims.transition};
        display: flex;
        align-items: center;
        &-icon {
          width: 30px;
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
`;

const LogosCarousel = styled(Slider)`
  position: relative;
  margin: 2rem auto 1rem auto ;
  padding: 0 1rem;
  width: 90%;
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
    autoPlay: true,
  };
  console.log(infoMaster.logos);
  return (
    <>
      <Aside>
        <div className="top">
          <h4 className="top-title">Master en:</h4>
        </div>
        <div className="content">
          <h2 className="content-title">{infoMaster.description.title}</h2>
          <div className="content-video">
            <iframe
              src="https://www.youtube.com/embed/d05KvpHPF-M"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <CounterSidebar date={infoMaster.description.dateSystem} />
          <LogosCarousel {...settings}>
            {infoMaster.logos.length > 0 ? (
              infoMaster.logos.map((logo) => (
                <img src={logo.img} key={logo.id} />
              ))
            ) : (
              <span> No hay logos</span>
            )}
          </LogosCarousel>
        </div>
        <Button className="send-form" onClick={handleShow}>
          <span>Solicitar asesoría</span>
        </Button>
        <div className="bottom">
          <div className="links">
            <button className="links-button links-button--tematica">
              <img
                src={PdfIcon}
                className="links-button-icon"
                alt="whatsapp"
              />
              <span>Temática</span>
            </button>
            <button className="links-button links-button--whatsapp">
              <img src={WhatsappIcon} className="links-button-icon" alt="whatsapp" />
              <span>Whatsapp</span>
            </button>
          </div>
        </div>
      </Aside>
      <ModalStyle show={show} onHide={handleClose}>
        <Modal.Body>
          <Form />
        </Modal.Body>
      </ModalStyle>
    </>
  );
};

export default Sidebar;
