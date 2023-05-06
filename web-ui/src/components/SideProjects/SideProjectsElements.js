import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 30vw;
  height: 103px;
  width: 70vw;

  background: ${props => props.theme.bgSide}; // Make sure this color has an opacity of less than 1
  backdrop-filter: blur(14px); // This be the blur
  border-bottom: .5px solid ${props => props.theme.border};
  border-left: .5px solid ${props => props.theme.border};

  overflow: hidden;
  -webkit-overflow-scrolling: touch;

  @media screen and (max-width: 767px) {
    height: 120px;
    left: 0;
    width: 100vw;
    border-left: unset;
    backdrop-filter: blur(8px); // This be the blur
    border-bottom: 1px solid ${props => props.theme.border};
  }
`;

export const ScrollContainer = styled.div`
  padding-left: 20px;
  padding-top: 12px;
  height: 121px;
  width: 70vw;

  z-index: 999;

  align-items: start;
  justify-content: start;
  align-content: start;

  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: scroll;

  -webkit-overflow-scrolling: touch;

  @media screen and (max-width: 767px) {
    padding-top: 10px;
    height: 132px;
    width: 100vw;
    padding-left: 14px;
    /* padding-right: 20px; */
  }
`

export const ImageContainer = styled(LinkRouter)`
  // display: inline-grid;
  width: 7vw;
  height: 103px;
  align-items: start;
  justify-content: start;
  padding-right: 11px;
  // margin-top: 5.15px;
  opacity: 0.7;

  font-family: 'SS3';
  font-size: 14px;
  color: ${props => props.theme.secondary};
  text-decoration: none;

  img {
    max-width: 100%;
    max-height: calc(87% - 18px);
    align-content: start;
    object-fit: scale-down;
  }

  transition: all 0.1s ease-in-out;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 767px) {
    opacity: 1;
    height: 106px;
    padding-right: 10px;

    img {
      max-height: calc(78px);
    }
  }
`

export const Label = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    z-index: 999;
    position: fixed;
    left: 14px;
    top: 97.5px;
    text-align: left;

    font-family: "SS3";
    font-size: 12px;
    color: ${props => props.theme.secondary};
    opacity: 0.8;
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
    top: 97.5px;
    text-align: right;

    font-family: "SS3";
    font-size: 12px;
    color: ${props => props.theme.secondary};
    opacity: 0.8;
    // color: green;
  }
`

export const ErrorImg = styled.div`
  position: absolute;
  left: 18px;
  top: 17px;
  justify-content: start;
  opacity: 0.65;

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
    top: 10px;
    left: 14px;
    height: 90px;
    /* width: 80vw; */
    /* max-width: 50ch; */
  }
`








