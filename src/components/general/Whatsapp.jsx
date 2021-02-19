import React from 'react';
import styled from 'styled-components';
import Icon from '../../images/whatsapp-link.svg';

const ButtonWhatsapp = styled.a`
    position: fixed;
    width: 50px;
    height: 50px;
    bottom: 30px;
    right: 30px;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .7s ease-in-out;
    & img{
        width: 100%;
        display: block;
    }
    &:hover{
        width: 60px;
        height: 60px;
    }
    @media (max-width: 768px) {
        width: 50px;
        height: 50px;
        &:hover{
            width: 70px;
            height: 70px;
        }
    }
`;

const Whatsapp = () => {
    return (
        <ButtonWhatsapp
            href="http://bit.ly/3dnKVFU" 
            target="_blank"
        >
            <img src={Icon} alt="" />
        </ButtonWhatsapp>
    );
}

export default Whatsapp;