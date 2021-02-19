import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import { device } from "../../utils/breakpoints"

import CloseIcon from "../../images/icons/close.svg"

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  z-index: -999999;
  opacity: 1;
  & .modal-content {
    position: absolute;
    width: 90%;
    height: auto;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.5);
    border-radius: 20px;
    background: transparent;
    overflow: hidden;
    box-shadow: 0 0 40px rgba(112, 0, 112, 0.6);
    border: none;
    @media ${device.md} {
      width: 900px;
      height: auto;
    }
    & .close {
      position: absolute;
      top: 20px;
      right: 20px;
      border-radius: 50%;
      border: 2px solid white;
      z-index: 10;
      width: 40px;
      height: 40px;
      background: url(${CloseIcon});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 60%;
    }
    @keyframes inVideo {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    & video {
      width: 100%;
      min-height: 100%;
      animation-name: inVideo;
      animation-duration: 1s;
      opacity: 1;
    }
    & iframe {
      position: relative;
      display: block;
      margin: 0rem auto;
      width: 100%;
      height: 400px;
      border-radius: 10px;
      z-index: 1;
      &:focus {
        border: none;
        outline: none;
      }
      @media ${device.md} {
        border-radius: 30px;
        width: 100%;
        display: block;
        height: 500px;
        margin: 0 auto;
        display: block;
      }
    }
  }
  &.opened {
    @keyframes inOverlay {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    z-index: 999999;
    animation-name: inOverlay;
    animation-duration: 1s;
    opacity: 1;
    @keyframes in {
      0% {
        top: 100%;
        transform: translate(-50%, -50%) scale(0.5);
        box-shadow: 0 0 40px rgba(112, 0, 112, 0);
      }
      100% {
        top: 50%;
        transform: translate(-50%, -50%) scale(1);
        box-shadow: 0 0 40px rgba(112, 0, 112, 0.6);
      }
    }
    & .modal-content {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation-name: in;
      animation-duration: 1s;
    }
  }
  &.closed {
    @keyframes outOverlay {
      0% {
        opacity: 1;
        z-index: 999999;
      }
      100% {
        opacity: 0;
        z-index: -999999;
      }
    }
    animation-name: outOverlay !important;
    animation-duration: 1s !important;
    opacity: 0;
    z-index: -999999;
    @keyframes out {
      0% {
        top: 50%;
        transform: translate(-50%, -50%) scale(1);
        box-shadow: 0 0 40px rgba(112, 0, 112, 0.6);
      }
      100% {
        top: 100%;
        transform: translate(-50%, 0%) scale(0.5);
        box-shadow: 0 0 40px rgba(112, 0, 112, 0);
      }
    }
    & .modal-content {
      top: 100%;
      left: 50%;
      transform: translate(-50%, 0%);
      animation-name: out;
      animation-duration: 1s;
    }
  }
`

const ModalTrailer = ({ modalState, closeTrailer, closeModal, forwardRef }) => {

  return (
    <ModalOverlay
      className={modalState === null ? "" : modalState ? "opened" : "closed"}
      onClick={closeTrailer}
    >
      <div className="modal-content" ref={forwardRef}>
        <button onClick={closeModal} className="close"></button>
        <iframe
          src="https://www.youtube.com/embed/du9Cwj0yQxo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* <video ref={video} controls>
          <source src={VideoTrailer} type="video/mp4" />
        </video> */}
      </div>
    </ModalOverlay>
  )
}

export default ModalTrailer