import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 31.5vw;
  padding-left: 22px;
  // padding-left: 22px;
  padding-top: 8px;
  height: 103px;
  width: 68.5vw;
  // background: rgba(70, 70, 70, 0.60);
  background: rgba(55, 55, 55, 0.7); // Make sure this color has an opacity of less than 1
  backdrop-filter: blur(20px); // This be the blur
  border-bottom: .5px solid #403F3F;
  border-left: .5px solid #403F3F;

  z-index: 999;

  align-items: start;
  justify-content: start;
  align-content: start;

  white-space: nowrap;
  // overflow: auto;
  overflow-y: hidden;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
`;

export const ImageContainer = styled(LinkRouter)`
  // display: inline-grid;
  width: 7vw;
  height: 103px;
  align-items: start;
  justify-content: start;
  padding-right: 14px;
  // margin-top: 5.15px;
  opacity: 0.75;

  img {
    max-width: 100%;
    max-height: 90%;
    align-content: start;
    object-fit: scale-down;
  }

  &:hover {
    opacity: 1;
  }
`












export const WorkListContainer = styled.div`
  /* margin-top: 275px; */
  position: relative;
  /* left: 0; */
  width: 100vw;
  /* height: 100vh; */
  height: calc(100vh);
  overflow-y: scroll;
  overflow-x: hidden;
  /* padding-bottom: calc(140px + 1.5rem); */
  padding-bottom: calc(50vh - 40px);
  /* padding-bottom: calc(100vh - 199px); */
  padding-top: calc(48vh - 33px);
  /* padding-top: 124px; */
  padding-left: 24px;
  padding-right: calc(68.5vw + 28px);
  z-index: 999;
  /* border-right: .75px solid #403F3F; */

  /* border: 8px solid red; */
  /* opacity: 0.5; */
  /* background: rgb(120, 120, 120, 0.5); */
  /* background: #1E1C1F; */

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 811px) {
  }
`;

export const ClickableArea = styled(LinkRouter)`
  // display: none;
  position: fixed;
  top: 0;
  left: 31.5vw;
  // margin-left: 31.5vw;
  height: 100vh;
  width: 68.5vw;
  background: rgba(150, 150, 150, 0.50);
  opacity: 0;
  backdrop-filter: blur(20px);

  color: black;
  justify-content: center;
  align-items: center;
  padding: auto;
  text-align: center;
  font-size: 14px;
  font-family: "OpenSans";

  &:hover {
    opacity: 1;
    // display: inline-block;
  }
`
export const Marker = styled.div`
  /* height: 10.75rem; */
  position: fixed;
  left: 0;
  /* top: calc(50vh - 20px); */
  top: calc(48vh);
  /* top: 156px; */
  width: 31.5vw;
  /* width: 18px; */
  border-bottom: 1px solid #C6C6C6;
`;

export const WorkItem = styled.div`
  /* opacity: 0.4; */
  /* opacity: ${({currProj, thisProj}) => 
    (currProj === thisProj ? '1' : '0.4')}; */

  margin-bottom: 30px;

  font-family: "SS3";
  font-size: 54px;
  line-height: 64px;
  font-weight: 400;
  text-decoration: none;
  color: #FFFFFF;
  
  scroll-margin-top: calc(48vh - 33px);

  transition: 5s scale ease-in-out;

  &:hover {
    color: #AAAAAA;
    /* opacity: 1; */
  }

  @media screen and (max-width: 811px) {
    display: flex;
    grid-template-rows: unset;
    grid-template-columns: unset;
    height: 27%;
    padding: 0.9rem;
    font-size: 1.75rem;
    cursor: url("/imgs/c_open2.svg"), auto;

    &:hover {
      color: unset;
      background: unset;
    }
  }
`;

export const CaseStudy = styled.p`
  margin-top: -20px;
  color: #B6B6B6;
  font-family: "SS3";
  font-size: 12px;
  letter-spacing: .25px;
  margin-bottom: -17px;
`;


export const WorkActions = styled.div`
  z-index: 1000;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 88px;
  position: fixed;
  left: 16px;
  bottom: 16px;
  width: calc(31.5vw - 32px);
  height: 124px;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 18px;
  padding-bottom: 18px;
  overflow: hidden;

  border-radius: 7px;
  border: .5px solid #403F3F;
  background: rgba(55, 55, 55, 0.6);
  backdrop-filter: blur(12px);
`;

export const WorkName = styled.p`
  padding-bottom: 14px;

  color: #DBDBDB;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  font-family: "OpenSans";
  letter-spacing: 4px;

  @media screen and (max-width: 811px) {
    width: calc(50% - 0.6rem);
    padding-right: 0.5rem;
    padding-top: 1.35rem;
    display: inline;
    word-break: keep-all;
    white-space: normal;
    line-height: 105%;
    z-index: 999;
    font-size: 1.5rem;
  } ;
`;

export const TagsContainer = styled.div`
  color: #C0C0C0;
`;

export const ProjectTag = styled.p`
  /* margin-top: -14px; */
  color: #999696;
  font-family: "OpenSans";
  font-size: 14px;
  padding-bottom: 4px;
`;

export const Details = styled(LinkRouter)`
  float: right;
  text-align: right;

  text-decoration: none;
  color: #FFFFFF;
  font-size: 14px;
  font-family: "OpenSans";

  &:hover {
    opacity: 0.7;
  }  
`

export const VisitLink = styled.a`
  position: fixed;
  align-content: right;
  text-align: right;
  padding: 4px;
  left: calc(31.5vw - 94px);
  margin-top: 82px;
  float: right;

  text-decoration: none;
  color: #FFFFFF;
  font-size: 14px;
  font-family: "OpenSans";

  &:hover {
    color: white;
    background: blue;
  }  
`