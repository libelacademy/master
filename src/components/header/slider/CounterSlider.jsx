import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { anims, colors } from "../../../utils/theme";

//Images
import PlayIcon from "../../../images/icons/play-icon.svg";
import WhatsappIcon from "../../../images/icons/whatsapp.svg";
import PdfIcon from "../../../images/icons/pdf.svg";

const CounterDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 2px solid #00ffff;
  border-radius: 20px;
  padding: 0.5rem 0.5rem 0.3rem 0.5rem;
  margin: 1rem 0 0 0;
  position: relative;
  max-width: 430px;
  color: white;
  position: relative;
  background: rgba(0, 0, 0, 0);
  z-index: 10;
  @media (max-width: 900px) {
    padding: 0.5rem 0.5rem;
    margin: 0;
    position: relative;
    left: inherit;
    top: inherit;
  }
  @media (max-width: 600px) {
    padding: 0.5rem 0.5rem;
    margin: 2rem 0 0 0;
    position: relative;
    left: inherit;
    top: inherit;
  }
  & .days {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      height: 60%;
      width: 2px;
      background: #ffffff;
    }
  }
  & .hours {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      height: 60%;
      width: 2px;
      background: #ffffff;
    }
  }
  & .minutes {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      height: 60%;
      width: 2px;
      background: #ffffff;
    }
  }
  & .title-counter {
    position: absolute;
    top: -17px;
    left: 50%;
    transform: translateX(-50%);
    padding: 5px 10px;
    background: #5827b6;
    font-size: 0.8em;
    font-weight: 600;
  }
  & .col-counter {
    width: 33.3%;
    padding: 0.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  & .value {
    font-weight: 700;
    font-size: 1.5em;
  }
  & .play-trailer {
    position: absolute;
    border: none;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: ${colors.pLight};
    background-image: url(${PlayIcon});
    background-repeat: no-repeat;
    background-size: 50% auto;
    background-position: center;
    left: 50%;
    bottom: -45px;
    transform: translateX(-50%);
    box-shadow: 0 0 9px #3c009c;
    z-index: 1;
    ${anims.transition};
    &:hover {
      background-color: ${colors.pDark};
    }
  }
  & .links {
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
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
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
`;
const CounterSlider = ({ date, handleTrailer }) => {
  const [days, setDays] = useState(12);
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(12);
  const [seconds, setSeconds] = useState(12);

  // Set the date we're counting down to "Apr 21, 2021 0:0:0"
  var countDownDate = new Date(date).getTime();

  // Update the count down every 1 second
  const counter = () =>
    setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      //Poner valores
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(counter);
        console.log("Curso ya empezó");
        // $('.counter').html(`<span style="width: 100%; text-align:center; display: block">EL CURSO YA EMPEZÓ</span>`);
      }
    }, 1000);

  useEffect(() => {
    counter();
  }, []);

  return (
    <CounterDiv>
      <span className="title-counter"> Faltan: </span>
      <div className="col-counter days">
        <span> Días </span>
        <span className="value" id="value-days">
          {days}
        </span>
      </div>
      <div className="col-counter hours">
        <span> Horas </span>
        <span className="value" id="value-hours">
          {hours}
        </span>
      </div>
      <div className="col-counter minutes">
        <span> Min </span>
        <span className="value" id="value-minutes">
          {minutes}
        </span>
      </div>
      <div className="col-counter seconds">
        <span> Segs </span>
        <span className="value" id="value-seconds">
          {seconds}
        </span>
      </div>
      <button className="play-trailer" onClick={handleTrailer} />
      <div className="links">
        <button className="links-button links-button--tematica">
          <img src={PdfIcon} className="links-button-icon" alt="whatsapp" />
          <span>Temática</span>
        </button>
        <button className="links-button links-button--whatsapp">
          <img src={WhatsappIcon} className="links-button-icon" alt="whatsapp" />
          <span>Whatsapp</span>
        </button>
      </div>
    </CounterDiv>
  );
};

export default CounterSlider;
