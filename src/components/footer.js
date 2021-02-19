import React from 'react';
import styled from 'styled-components';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import LogoIcon from '../images/logo-libel.png';
import Face from '../images/icons/facebook.svg';
import Inst from '../images/icons/instagram.svg';
import Yout from '../images/icons/youtube.svg';
import Link from '../images/icons/indeed.svg';


//Responsive
import { device } from "../utils/breakpoints"
import { anims, colors } from "../utils/theme"

const FooterBar = styled.footer`
    background: #1a1a1a;
    padding: 2rem 0;
    color: white;
    & img{
        @media (max-width: 768px) {
            margin: 0 auto;
            display: block;
        }
    }
    @media (max-width: 768px) {
        & .text-right{
            text-align: center !important;
        }
        & a{
            display: inline-block;
        }
        & .logo-link{
            display: block;
            padding: 1rem 0;
        }
    }
    
    & .social-media-icon{
        width: 23px;
        height: 23px;
        margin: 0 .3em;
        
    }
    & .social{
        text-align: right;
        @media (max-width: 768px) {
            text-align: center;
        }
    }
`;

const Logo = styled.img`
    width: 160px;
    height: auto;
    margin: 0 auto;
`;

const Footer = () => {
    return (
        <FooterBar>
            <Container>
                <Row>
                    <Col md={3}>
                        <Logo src={LogoIcon}>
                        </Logo>
                    </Col>
                    <Col md={9} className="social">
                        <span>Siguenos: </span>
                        <a href="https://www.facebook.com/libelacademy" target="_blank">
                                <img src={Face} alt="" className="social-media-icon" />
                            </a>
                            <a href="https://www.instagram.com/libelacademy/" target="_blank">
                                <img src={Inst} alt="" className="social-media-icon" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCUgle_FMVoBU75h0Vx8L7xA" target="_blank" >
                                <img src={Yout} alt="" className="social-media-icon"/>
                            </a>
                            <a href="https://co.linkedin.com/company/libelstudios" target="_blank">
                                <img src={Link} alt="" className="social-media-icon"/>
                            </a>
                    </Col>
                </Row>
            </Container>
        </FooterBar>
    );
}

export default Footer;