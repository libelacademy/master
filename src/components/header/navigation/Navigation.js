import React from "react"
import styled from "styled-components"
import {
  Link as LinkScroll,
  animateScroll as scroll,
} from "react-scroll"

//Responsive
import { device } from "../../../utils/breakpoints"
import { colors, borders, anims } from "../../../utils/theme"

const Nav = styled.nav`
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    & li {
      padding: 0;
      margin-left: 2rem;
      & a {
        color: white !important;
        font-size: 0.9rem;
        cursor: pointer;
        &.current {
        }
      }
      & .asesory {
        border: none;
        padding: 0.5rem 1rem;
        border-radius: ${borders.bRadius};
        background: ${colors.pColor};
        color: white;
        font-size: 0.9rem;
        ${anims.transition};
        font-weight: 700;
        text-decoration: none;
        &:hover {
          text-decoration: none;
          background: ${colors.sColor};
          color: ${colors.pColor};
        }
      }
    }
  }
`

const Navigation = () => {
  return (
    <Nav>
      <ul>
        {/* <li>
          <LinkScroll onClick={() => scroll.scrollTo(0)}>Inicio</LinkScroll>
        </li>
        <li>
          <LinkScroll to="gallery" smooth={true} duration={1000}>
            Galería
          </LinkScroll>
        </li>
        <li>
          <LinkScroll to="temario" smooth={true} duration={1000}>
            Temario
          </LinkScroll>
        </li> */}
        <li>
          <LinkScroll
            className="asesory"
            to="form-asesory"
            smooth={true}
            duration={1000}
          >
            Solicitar asesoria
          </LinkScroll>
        </li>
      </ul>
    </Nav>
  )
}

export default Navigation
