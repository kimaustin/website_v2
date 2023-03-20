import styled from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh; 
    cursor: crosshair;

    /* @media screen and (max-width: 768px) {
        left: 0;
        width: 100vw;
        height: calc(3.5vh + 1px);
        bottom: 0;
        overflow-x: hidden;     
        border-right: 1px solid #201D17;
        border-bottom: 1px solid #201D17;
        border-top: 1px solid #201D17;
        
        display: none;
        opacity: 0;
    } */
`

export const BotSection = styled.div`
    display: flex;
    position: fixed;
    bottom: 2.5rem;
    right: calc(7.15vw - 2.55rem);

    height: 25vh;
    width: 3.5rem;

    background: #FFFDFA;
    border: 1px solid #201D17;
   
    overflow: hidden;
    cursor: url("/imgs/c_main.svg"), auto;

    writing-mode: vertical-rl;
    text-orientation: mixed;

    font-family: "JejuMyeongjo";
    font-size: 1.2rem;
    padding-right: .95rem;
    padding-top: 1rem;
    letter-spacing: -.015rem;
`

export const TopSection = styled.div`
    display: flex;
    position: fixed;
    top: 3vh;
    right: calc(7.15vw - 2.55rem);
    right: calc(3.55vw);

    height: 45vh;
    width: 3rem;

    background: #FFFDFA;
    border: 1px solid #201D17;
   
    overflow: hidden;
    cursor: url("/imgs/c_main.svg"), auto;
    cursor: crosshair;


    writing-mode: vertical-rl;
    text-orientation: mixed;

    font-family: "JejuMyeongjo";
    font-size: 1.17rem;
    padding-right: .77rem;
    padding-top: 1.15rem;
    letter-spacing: -.015rem;
`

export const HoverContainer = styled.div`
    /* position: fixed;
    display: none;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20vw;
    height: 20vw;
    background: green; */

    position: absolute;
    white-space: nowrap;
    will-change: transform;
    animation: marquee 10s linear infinite;
`

const linearText1 = keyframes`
    from {
        transform: translateY(100%);
    }
    to {
        transform: translateY(-100%);
    };
` 

const marquee1 = keyframes`
    0% {
        top: 100%;
    }
    100% {
        top: -100%
    }
`

const marquee2 = keyframes`
    0% {
        left: 100%;
    }
    100% {
        left: -150%
    }
`

export const Marquee = styled.span`
    position: fixed;
    display: inline;
    padding-right: 1.2rem;
    right: calc(3vw);
    top: 2rem;

    font-family: 'Iskoola';
    font-family: 'JejuMyeongjo';
    font-size: 1.4rem;
    color: #201D17;
    letter-spacing: -.01rem;
    white-space: nowrap;
    
    writing-mode: vertical-rl;
    text-orientation: mixed;

    cursor: url("/imgs/c_main.svg"), auto;

    animation: ${marquee1} 20s linear infinite;
    /* animation-delay: ${({starter}) => (starter ? '0s' : '20s')}; */
    
    @media screen and (max-width: 768px) {
        /* top: 0; */
        top: calc(96vh + .4rem);
        /* margin-top: 0; */
        margin-right: unset;
        bottom: 0;
        height: 100%;
        width: 100vw;
        /* margin-left: 0rem; */
        right: unset;
        left: 100vw;
        /* left: -50vw; */
        postion: fixed;
        display: grid;

        writing-mode: horizontal-tb;
        text-orientation: mixed;
        font-size: .85rem; /* right: 0; */
        
        /* padding-left: ${({starter}) => (starter ? '0' : '10px')}; */
        /* letter-spacing: -.01rem; */
        animation: ${marquee2} 15s linear infinite;
        /* animation: ${({starter}) => (starter ? linearText3 : linearText4)} 20s linear infinite; */
        /* animation-delay: ${({starter}) => (starter ? '0s' : '15s')}; */
    }
`

const linearText2 = keyframes`
    from {
        transform: translateY(0%);
    }
    to {
        transform: translateY(-200%);
    };
` 

const linearText3 = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    };
` 

const linearText4 = keyframes`
    from {
        transform: translateX(-200%);
    }
    to {
        transform: translateX(0%);
    };
` 