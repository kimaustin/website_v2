import styled from 'styled-components';
import { keyframes } from "styled-components";
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Container = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    overflow: hidden;

    /* background: ${props => props.theme.bg}; */

    /* text-align: center; */
    /* justify-content: center; */
    /* align-content: center; */
    /* align-items: center; */

    /* cursor: url("../imgs/c_main.svg"), crosshair; */
    cursor: crosshair;

    img {
        /* max-height: 35vh; */
        position: absolute;
        left: 42.5%;
        top: 50%;
        transform: translate(0, -52%);
        width: 15vw;

        max-height: 37vh;
        /* max-width: 17.5vw; */
        /* width: 18vw; */
        object-fit: cover;
        /* border: 1px solid #201D17; */
    }

`;


export const Logo = styled.div`
    position: fixed;
    left: calc(50vw - 9px);
    top: calc(50vh - 9px);
    width: 18px;
    height: 18px;
    background-image: url("logo.png");
    background-size: cover;
    border: 1px solid ${props => props.theme.border};
`