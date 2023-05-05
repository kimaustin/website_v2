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

    background: ${props => props.theme.bg};;

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


export const MainImg = styled.div`
    z-index: -1;
    position: absolute;
    /* top: 2.5rem; */
    /* left: 0; */
    /* left: calc(7.15vw - 3.75rem + 3rem); */

    /* border: 1px solid green; */
    /* position: absolute; */
    /* left: 0; */
    /* top: 0; */
    left: 0;
    top: 0;
    // transform: translate(0, -50%); */
    display: block;
    width: 100%;
    height: 100%;

    opacity: 0.4;

    justify-content: center;
    align-items: center;
    text-align: center;

    img {
        /* max-height: 35vh; */
        max-height: 90vh;
        max-width: 90vw;
        /* max-width: 17.5vw; */
        /* width: 18vw; */
        object-fit: cover;
        /* border: 1px solid #201D17; */
    }
`


export const DownButton = styled(LinkRouter)`
    /* position: absolute; */
    /* position: fixed; */
    /* left: 0; */
    /* top: 0; */
    width: 24vw;
    /* height: 10vh; */
    /* left: 0; */
    /* top: 0; */
    /* width: 100; */
    /* bottom: 42vh; */
    /* margin-top: 2rem; */
    // padding-left: .95rem;
    margin-top: 47.5vh;
    margin-left: 38vw;
    display: flex;
    padding-top: 12px;
    padding-bottom: 12px;
    padding: 12px 22px 12px 22px;
    // padding-right: .95rem;
    // padding-bottom: .5rem;
    // padding: auto;

    color: ${props => props.theme.secondary};
    font-size: 19px;
    font-family: 'SS3';
    /* letter-spacing: -.01rem; */
    /* border-bottom: 1px solid #201D17; */
    // text-transform: uppercase;
    text-decoration: none;

    border: 1px solid ${props => props.theme.border};
    border-radius: 5vh;
    background: ${props => props.theme.bgSide};
    text-align: center;
    justify-content: center;
    align-items: center;

    /* opacity: 1; */
    transition: .15s all ease-in-out;
    /* background: #FFFDFA; */

    &:hover {
        /* text-decoration: underline; */
        /* opacity: 0.5; */
    }

    @media screen and (max-width: 767px) {
        font-size: 14px;
    }
`;
