import React from 'react';
import styled from "styled-components";
import { keyframes } from "styled-components";

const WIP = () => {
    return (
        // <SimpleBox>Work In Progress</SimpleBox>
        <SimpleBox>
            Under Construction
            <p style={{fontSize: '1.75vh', fontFamily: 'JejuMyeongjo'}}>Please use the desktop version for the full experience.</p>
        </SimpleBox>
        // <Container>
        //     <Marquee starter={true}>WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS</Marquee>
        // </Container>
    );
};

export default WIP;


const Container = styled.div`
    /* transform: rotateX(17deg); */
    overflow: hidden;
    background: yellow;
    height: 100vh;
    height: 1.75rem;
    width: 2.4rem;
    /* width: 5rem; */
    /* width: 130vw; */
    width: 100vw;
    z-index: 999;
    cursor: default;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    /* border-left: 1px solid black; */
    display: flex;
    position: fixed;
    /* bottom: 51vh; */
    opacity: 1;
    /* right: -28%; */
    top: 0;
    left: 0;
    /* left: -11vw; */
    /* top: 50%; */
    pointer-events: none;
    overflow-x: hidden;

    /* transform: rotate(90deg); */

    @media screen and (max-width: 768px) {
        opacity: 1;
        /* left: unset; */
        top: calc(49% - .875rem);
        top: unset;
        bottom: calc(3.5vh);
        bottom: 0;
        height: calc(3.5vh + 1px);
        width: 100vw;
        left: 0;
        border-left: 1px solid #201D17;
        border-right: 1px solid #201D17;
        /* height: 4vh; */
        /* height: 1.75rem; */
        /* top: 94vh; */
        transform: unset;
        overflow-x: hidden;     

        /* display: none; */
    }
`

const Marquee = styled.div`
    /* writing-mode: vertical-rl; */
    /* text-orientation: mixed; */
    display: grid;
    white-space: nowrap;
    font-family: 'SpaceMono';
    /* font-size: 1.2rem; */
    font-size: 1rem;
    color: black;
    /* background: black; */
    /* margin-top: .3rem; */
    cursor: default;
    /* margin-top: .75rem; */
    position: relative;

    /* &:hover { */
    animation: ${({starter}) => (starter ? linearText1 : linearText2)} 25s linear infinite;
        /* animation-delay: ${({starter}) => (starter ? '0s' : '20s')}; */
    /* } */

    @media screen and (max-width: 768px) {
        /* padding-top: .15rem; */
        justify-content: center;
        align-items: center;
        font-size: .7rem;
    }
`

const linearText1 = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    };
` 

const linearText2 = keyframes`
    from {
        transform: translateX(-200%);
    }
    to {
        transform: translateX(0%);
    };
` 

const SimpleBox = styled.div `
    /* padding-top: 40%;
    padding-bottom: 40%;
    background: #FFFDFA;

    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    font-family: "JejuMyeongjo";
    font-size: 3.5vh;

    align-items: center;
    text-align: center; */

    display: none;

    /* right: 2.25vh;
    bottom: 3vh;
    height: 5vh;
    padding-left: 1.25vh;
    padding-right: 1.25vh;

    text-align: center;
    align-items: center;
    font-size: 3.5vh;
    font-family: 'SpaceMono';
    letter-spacing: -.25vh;

    border: 3px solid #201D17;
    background: yellow;
    color: #201D17; */

    @media screen and (max-width: 768px) {
        display: grid;
        padding-top: 40%;
        padding-bottom: 40%;
        background: #FFFDFA;

        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;

        width: 100vw;
        height: 100vh;

        font-family: "JejuMyeongjo";
        font-size: 3.5vh;

        align-items: center;
        text-align: center;
    }
`