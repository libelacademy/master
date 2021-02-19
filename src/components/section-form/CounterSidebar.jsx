import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../utils/theme";

const CounterDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 2px solid ${colors.pColor};
  border-radius: 10px;
  padding: 0.8rem 0.5rem 0.8rem 0.5rem;
  margin: 1rem 0 0 0;
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
    font-size: .8em;
    font-weight: 600;
    color: gray;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      height: 60%;
      width: 2px;
      background: #ececec;
    }
  }
  & .hours {
    position: relative;
    font-size: .8em;
    font-weight: 600;
    color: gray;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      height: 60%;
      width: 2px;
      background: #ececec;
    }
  }
  & .minutes {
    position: relative;
    font-size: .8em;
    font-weight: 600;
    color: gray;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      height: 60%;
      width: 2px;
      background: #ececec;
    }
  }
  & .seconds {
    font-size: .8em;
    font-weight: 600;
    color: gray;
  }
  & .title-counter {
    position: absolute;
    top: -17px;
    left: 7%;
    padding: 5px 10px;
    background: white;
    font-size: 1em;
    font-weight: 800;
    color: #1a1a1a
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
    font-size: 1.7em;
    color: #777777;
  }
`;
const CounterSidebar = ({ date }) => {
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
      <span className="title-counter"> Empieza en: </span>
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
    </CounterDiv>
  );
};

export default CounterSidebar;
