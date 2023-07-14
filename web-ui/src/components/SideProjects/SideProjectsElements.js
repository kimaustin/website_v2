import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";
import { keyframes } from "styled-components";

export const Container = styled(motion.div)`
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  /* left: 30vw; */
  /* width: calc(50vw + 12px); */
  width: 120px;
  height: 100vh;
  /* height: 80px; */
  /* width: 70vw; */

  background: ${props => props.theme.bgSide2}; // Make sure this color has an opacity of less than 1
  /* background: green; */
  /* backdrop-filter: blur(14px); // This be the blur */
  /* border-bottom: 1px solid ${props => props.theme.border}; */
  border-left: 1px solid ${props => props.theme.border};

  overflow: hidden;
  -webkit-overflow-scrolling: touch;

  @media screen and (max-width: 767px) {
    height: 100px;
    left: 0;
    width: 100vw;
    border-left: unset;
    background: ${props => props.theme.bgSide}; // Make sure this color has an opacity of less than 1
    backdrop-filter: blur(7px); // This be the blur
    border-bottom: 1px solid ${props => props.theme.border};
  }
`;

export const ScrollContainer = styled.div`
  padding-left: 14px;
  padding-top: 32px;
  /* height: 96px; */
  /* width: 100vw; */
  /* width: 100%; */
  z-index: 999;
  /* display: grid; */

  align-items: start;
  justify-content: start;
  align-content: start;

  white-space: nowrap;
  overflow-y: scroll;
  overflow-x: hidden;

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 767px) {
    padding-top: 7px;
    height: 100px;
    overflow-y: hidden;
    overflow-x: scroll;
    width: 100vw;
    padding-left: 14px;
    /* padding-right: 20px; */
  }
`

export const ImageContainer = styled(LinkRouter)`
  display: grid;
  /* width: 7vw; */
  width: 98px;
  height: 124px;
  align-items: start;
  justify-content: start;
  /* padding-right: 8px; */
  padding-top: 1px;
  // margin-top: 5.15px;
  opacity: 0.6;

  font-family: 'SS3';
  font-size: 14px;
  color: ${props => props.theme.secondary};
  text-decoration: none;

  img {
    max-width: 100%;
    max-height: calc(85% - 16px);
    align-content: start;
    object-fit: scale-down;
  }

  transition: all 0.1s ease-in-out;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 767px) {
    display: inline-grid;
    opacity: 1;
    height: 88px;
    padding-top: unset;
    padding-right: 10px;

    img {
      max-height: calc(62px);
    }
  }
`

export const Label = styled.div`
  position: fixed;
  display: block;
  z-index: 999;

  /* left: -10px;
  top: 30px;
  transform: rotate(90deg); */
  left: calc(100vw - 120px + 14px);
  top: 14px;

  font-family: "SS3";
  font-size: 12px;
  color: ${props => props.theme.secondary};
  opacity: 0.7;

  @media screen and (max-width: 767px) {
    position: fixed;
    left: 14px;
    top: 79px;
    text-align: left;
    font-size: 12px;
    transform: unset;
    // color: green;
  }
`

export const Version = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    z-index: 999;
    position: fixed;
    right: 14px;
    top: 79px;
    text-align: right;

    font-family: "SS3";
    font-size: 12px;
    color: ${props => props.theme.secondary};
    opacity: 0.7;
    // color: green;
  }
`

export const ErrorImg = styled.div`
  position: absolute;
  left: 14px;
  top: 38px;
  justify-content: start;
  opacity: 0.65;
  padding-right: 18px;

  font-family: 'SS3';
  font-size: 14px;
  line-height: 140%;
  color: ${props => props.theme.secondary};
  text-decoration: none;

  /* border: 1px solid ${props => props.theme.border}; */
  /* background: ${props => props.theme.border}; */

  @media screen and (max-width: 767px) {
    /* position: unset; */
    display: flex;
    width: 90%;
    top: 10px;
    left: 14px;
    height: 90px;
    /* width: 80vw; */
    /* max-width: 50ch; */
  }
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
    top: 0;
    left: 0;
    width: 100vw;
    /* height: 80px; */
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