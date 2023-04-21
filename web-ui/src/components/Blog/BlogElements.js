import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 998;
  width: 100vw;
  height: calc(100vh);

  ::-webkit-scrollbar {
    display: none;
  }

  overflow-y: hidden;
  overflow-x: none;
  cursor: crosshair;
`;

export const Divider = styled.div`
  z-index: 999;
  position: fixed;
  left: 31.5vw;
  top: 0;
  height: 100vh;

  border-left: .5px solid #403F3F;
`

export const WorkListContainer = styled.div`
//   position: relative;
  width: 100vw;
  height: calc(100vh - 103px);
  overflow-y: scroll;
  overflow-x: hidden;
  padding-bottom: calc(50vh - 40px);
  padding-top: calc(52vh - 24px);
  padding-left: 24px;
  padding-right: calc(68.5vw + 28px);
  z-index: 999;

  /* border: 8px solid red; */
  /* background: rgb(120, 120, 120, 0.5); */
  /* background: #1E1C1F; */

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 811px) {
  }
`;

export const ClickableArea = styled(LinkRouter)`
  z-index: 998;
  display: inline-block;
  position: fixed;
  top: 103px;
  left: 31.5vw;
  padding-top: calc(49vh - 103px);
  // margin-left: 31.5vw;
  height: calc(100vh - 103px);
  width: 68.5vw;
  background: rgba(140, 140, 140, 0.1);
  opacity: 0;
  backdrop-filter: blur(12px);
  
  color: black;
  text-align: center;
  font-size: 14px;
  font-family: 'OpenSans;

  &:hover {
    opacity: 1;
  }
`

export const Marker = styled.div`
  position: fixed;
  left: 0;
  top: calc(52vh);
  width: 31.5vw;
  border-bottom: 1px solid #C6C6C6;
`;

export const WorkItem = styled.div`
  margin-bottom: 20px;

  font-family: "SS3";
  font-size: 46px;
  line-height: 50px;
  font-weight: 400;
  text-decoration: none;
  color: #FFFFFF;
  
  /* text-align: center; */
  /* justify-content: center; */

  scroll-margin-top: calc(48vh - 33px);

  &:hover {
    color: #AAAAAA;
    /* opacity: 1; */
  }

  @media screen and (max-width: 811px) {
    // display: flex;
    // grid-template-rows: unset;
    // grid-template-columns: unset;

    &:hover {
      // color: unset;
      // background: unset;
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

// Responsive Display Attribute in Image
export const ImageHover = styled.div`
  position: fixed;
  /* display: grid; */
  z-index: 0;
  overflow: hidden;
  height: 20vh;
  width: 16vw;
  max-height: 20vh;
  max-width: 16vw;
  // ADD variability based on Project Number (from prop)
  //    between 0% - 80%
  top: 0%;
  top: ${props => (props.heightVar)};
  right: 51.25%;
  align-content: start;
  text-align: left;

  transition: 0.1s all ease-in-out;
  user-select: none;
  pointer-events: none;
  /* border: 2px solid blue; */
  opacity: 0;

  color: #FDFEF5;

  ${WorkItem}:hover & {
    z-index: 999;
    opacity: 0.85;
  }

  &:hover {
    display: none; 
  }

  img {
    align-content: start;
    text-align: left;
    object-fit: scale-down;
    /* height: 100%; */
    /* width: 100%; */
    max-height:100%;
    max-width: 100%;
  }

  /* @media screen and (max-width: 811px) {
    z-index: 999;
    position: static;
    transform: none;
    opacity: 1;
    margin-left: 1rem;

    right: 0;
    height: unset;
    width: unset;
    max-width: calc(48% - 1rem);
    max-height: 96%;
    margin-top: 0.75%;

    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
      position: unset;
      top: unset;
      left: unset;
      height: unset;
      width: unset;

      object-fit: cover;
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      transform: unset;
    }

    ${WorkItem}:hover & {
      display: flex;
      z-index: 999;
      opacity: 1;
      user-select: none;
    }

    &:hover {
      display: grid;
    }
  } */

`;

export const WorkActions = styled.div`
  z-index: 1000;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 88px;

  position: fixed;
  left: 14px;
  top: 114px;
  width: calc(31.5vw - 28px);
  height: 92px;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 16px;
  padding-bottom: 18px;
  overflow: hidden;

  border-radius: 7px;
  border: .5px solid #403F3F;
  background: rgba(44, 43, 45, 0.5);
  backdrop-filter: blur(14px);
`;

export const WorkName = styled.p`
  padding-bottom: 14px;

  color: #DBDBDB;
  /* border: 2px solid white; */
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  font-family: "OpenSans";
  letter-spacing: 4px;

  @media screen and (max-width: 811px) {
    /* width: 90vw; */
    width: calc(50% - 0.6rem);
    padding-right: 0.5rem;
    padding-top: 1.35rem;
    display: inline;
    /* left: 16px; */
    /* font-size: 2rem; */
    /* hyphens: auto; */
    word-break: keep-all;
    white-space: normal;
    line-height: 105%;
    z-index: 999;
    font-size: 1.5rem;
  } ;
`;

export const TagsContainer = styled.div`
  color: #C0C0C0;
  // font-size: 13px;
  // font-family: "OpenSans"
`;

export const ProjectTag = styled.p`
  /* margin-top: -14px; */
  color: #999696;
  font-family: "OpenSans";
  font-size: 14px;
  padding-bottom: 4px;

`;

export const WorkDesc = styled.div`
  color: #B6B6B6;
  width: 65%;
  height: 60px;
  overflow: hidden;

  /* text-decoration: none; */
  white-space: normal;
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: "OpenSans";
  line-height: 19.1px;
`

export const Details = styled(LinkRouter)`
  float: right;
  text-align: right;

  text-decoration: none;
  color: #FFFFFF;
  font-size: 14px;
  font-family: "OpenSans";

  &:hover {
    // color: white;
    text-decoration: underline;
    // opacity: 0.7;
    // background: blue;
  }  
`

export const VisitLink = styled.a`
  /* padding-top: 16px; */
  position: fixed;
  /* bottom: 28px; */
  /* padding-right: calc(20px); */
  align-content: right;
  text-align: right;
  padding: 4px;
  left: calc(31.5vw - 94px);
  margin-top: 82px;
  float: right;

  text-decoration: none;
  color: #FFFFFF;
  /* background: green; */
  font-size: 14px;
  font-family: "OpenSans";

  &:hover {
    color: white;
    background: blue;
  }  
`

export const ContentBg = styled.div`
  /* z-index: -1; */
  position: fixed;
  top: 103px;
  left: 31.5vw;
  height: calc(100vh - 103px);
  width: 68.5vw;
  /* align-items: center; */

  /* background-image: ${(bgFileName) => 'url(bgFileName)'}; */
  /* background-image: url("bg2.png"); */
  /* background-image: url("testProjCover3.png"); */
  /* background-size: cover; */
  /* backdrop-filter: blur(30px); */
  /* filter: blur(25px); */
  /* opacity: 0.65; */
  /* background: green; */
  /* border: 8px solid orange; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`

export const BgBlur = styled.div`
  /* z-index: 900; */
  position: fixed;
  top: -15vh;
  left: 31.5vw;
  height: 130vh;
	width: 68.5vw;
  /* overflow: hidden; */
  background: rgba(120, 120, 120, 0.75); // Make sure this color has an opacity of less than 1
  backdrop-filter: blur(25px); // This be the blur
`

export const WorkImageContainer = styled.div`
  position: fixed;
  height: calc(100vh - 103px);
  width: 68.5vw;
  top: 103px;
  margin-left: 31.5vw;
  align-items: center;
`

export const WorkImage = styled.div`
  z-index: 999;
  /* padding: 22px; */
  margin-top: 19px;
  margin-left: 25px;
  width: calc(68.5vw - 50px);
  /* height: calc(100vh - 130px - 5rem); */
  height: calc(100vh - 38px - 103px);
  text-align: center;
  align-items: center;
  /* justify-content: center; */
  /* object-fit: contain; */

  /* width: calc(85.7vw - 6.3rem); */
  /* height: 16.5vh; */
  /* background: url("testProjCover.png"); */
  /* border: 4px solid pink; */
  /* background: red; */

  img {
        /* display: block; */
        object-fit: scale-down;
        height: 100%;
        /* max-height: calc(100vh - 38px); */
        // max-width: 100%;
        max-width: calc(68.5vw - 50px);
        /* background-image: #201D17; */
        /* padding-left: 3.25rem; */
    }
`























