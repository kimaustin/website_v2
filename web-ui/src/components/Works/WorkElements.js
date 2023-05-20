import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: fixed;
  /* left: 0; */
  left: 46px;
  // top: 103px;
  top: 0;
  z-index: 998;
  /* width: 100vw; */
  width: calc(100vw - 46px);
  height: calc(100vh);

  ::-webkit-scrollbar {
    display: none;
  }

  overflow-y: hidden;
  overflow-x: none;
  cursor: crosshair;

  /* background: ${props => props.theme.bg}; */
  /* background: green; */
`

export const Divider = styled.div`
  z-index: 999;
  position: fixed;
  left: calc(46px + 31vw);
  top: 0;
  height: 100vh;

  border-left: 1px solid ${props => props.theme.border};

  @media screen and (max-width: 767px) {
    opacity: 0;
    display: none;
  }
`

export const Marker = styled.div`
  position: fixed;
  /* left: 0; */
  left: 46px;
  top: calc(48vh);
  width: calc(32vw + 46px);
  /* width: calc(100vw); */
  border-bottom: 1.5px solid ${props => props.theme.primary};
  opacity: 0.3;

  @media screen and (max-width: 767px) {
    border-bottom: 1px solid ${props => props.theme.secondary};
    width: 100vw;
    top: calc(48vh + 0.5px);
    display: none;
  }
`;

export const MarkerL = styled.div`
  position: absolute;
  left: 14px;
  top: calc(48vh - 21px);
  width: 12px;
  /* border-bottom: 4px solid ${props => props.theme.primary}; */
  /* display: none; */

  color: ${props => props.theme.primary};
  font-family: 'SS3';
  font-size: 32px;
  /* font-weight: 500; */

  @media screen and (max-width: 767px) {
    display: grid;
    font-size: 12px;
    font-weight: 600;
    left: 4px;
    /* border-bottom: 4px solid ${props => props.theme.primary}; */
    top: calc(48vh - 8px);
    width: 8px;
  } 
`;

export const MarkerR = styled.div`
  position: fixed;
  left: calc(32vw + 46px - 12px);
  top: calc(48vh - 1.5px);
  width: 12px;
  border-bottom: 4px solid ${props => props.theme.primary};

  @media screen and (max-width: 767px) {
      left: unset;
      border-bottom: 4px solid ${props => props.theme.secondary};
      right: 0;
      top: calc(48vh - 1.5px);
      width: 7px;
      display: none;
  }
`;


export const ClickableArea = styled.div`
  z-index: 999;
  // display: inline-grid;
  // grid-template-columns: 1fr 1fr;
  position: fixed;
  // top: 103px;
  left: 30vw;
  bottom: 0;
  // padding-top: 2.8vh;
  // padding-top: calc(49vh - 103px);
  // margin-left: 30vw;
  height: 8vh;
  // height: calc(100vh - 103px);
  width: 70vw;
  border-top: 0.5px solid ${props => props.theme.border};
  background: ${props => props.theme.bgSide};
  // opacity: 0;
  backdrop-filter: blur(14px);

  // border: solid 1px green;
  
  text-decoration: none;
  /* color: black; */
  text-align: center;
  align-items: center;
  align-content: center;
  justify-content: center;

  color: ${props => props.theme.secondary};
  font-size: 19px;
  font-family: "OpenSans";

  &:hover {
    background: ${props => props.theme.bgPreview};
    backdrop-filter: blur(6px);
    color: ${props => props.theme.primary};
  }

  @media screen and (max-width: 767px) {
    left: unset;
    right: 16px;
    margin-bottom: 70px;
    width: calc(18vw - 16px);
    text-align: right;
    display: grid;

    // display: none;
    // width: 100vw;
    // height: 8vh;

    padding-top: unset;
    padding-bottom: unset;
    height: unset;
    background: unset;
    backdrop-filter: unset;

    display: none;
  }
`;


export const WorkListContainer = styled.div`
  position: fixed;
  top: 0;
  left: 46px;
  width: calc(100vw - 46px);
  height: calc(100vh - 103px + 103px);
  overflow-y: scroll;
  padding-bottom: calc(51vh - 62px + 0.8rem);
  // padding-top: calc(44vh - 94px);
  padding-top: calc(48vh - 128px - 1.8rem + 103px);
  padding-left: 14px;
  padding-right: calc(67vw - 48px);
  z-index: 999;

  overflow-x: hidden; 
  
  /* background: rgb(120, 120, 120, 0.5); */
  /* background: #1E1C1F; */

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  /* -webkit-overflow-scrolling: touch; */
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 767px) {
    z-index: 998;
    width: 100vw;
    left: 0;
    padding-left: 9.5px;
    padding-top: calc(48vh - 126px - 16px + 103px);
    padding-bottom: calc(50vh - 64px + 42px);
  }
`;

export const WorkItem = styled.div`
  // display: grid;
  // grid-template-rows: 24px 1fr;

  margin-bottom: 24px;

  scroll-margin-top: calc(48vh - 128px - 1.8rem + 103px);
  /* calc(48vh - 128px - 2rem + 103px); */

  /* padding-top: calc(48vh - 128px - 1.7rem + 103px); */


  transition: 5s scale ease-in-out;

  // color: #FFFFFF;
  // padding: 0 .25rem;

  &:hover {
    /* opacity: 1; */
    /* cursor: pointer;
    color: ${props => props.theme.secondary}; */
  }

  @media screen and (max-width: 767px) {
    width: calc(100vw - 32px);
    scroll-margin-top: calc(48vh - 2px - 36px);
    margin-bottom: 16px;    
  }
`;

export const DeskWorkItem = styled.div`
  display: grid;
  /* grid-template-rows: 1fr; */

  // margin-bottom: 38px;
  // scroll-margin-top: calc(48vh - 128px - 21px + 103px);

  transition: .1s all ease-in-out;

  color: ${props => props.theme.primary};
  padding: 0 4px;

  &:hover {
    opacity: 1;
    cursor: pointer;
    /* padding-left: 20px; */
    /* color: ${props => props.theme.secondary}; */
    /* text-decoration: underline; */
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const MobileWorkItem = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    transition: 5s scale ease-in-out;

    color: ${props => props.theme.primary};
    padding: 0 4px;

    display: grid;
    /* grid-template-rows: 1fr 1fr; */

    width: calc(100vw - 32px);
    margin-bottom: 18px;   
  }
`

export const TopLine = styled.div`
  display: inline-block;
  width: 100%;
  margin-bottom: 1px;
  // grid-template-columns: 20px 1fr 6fr;
  // grid-template-rows: 1fr;
  // height: 8px;
  align-items: start;
  text-align: left;

  // border: 1px solid pink;
  
  @media screen and (max-width: 767px) {
    align-items: start;
    text-align: left;
    margin-bottom: 5px;
  }
`

export const Indicator = styled.div`
    // position: fixed;
    width: 8px;
    height: 8px;
    // margin-right: 6px;  
    // padding-top: -20px;
    // padding-bottom: -17px;
 
    // top: 78px;

    // border: 1px solid green;

    background: #FFFFFF;
    // opacity: 0.8;
`

export const IndicatorLong = styled.div`
    width: calc(8px + 2vw);
    height: 8px;
 
    box-shadow: inset 0 0 0 0 #FFFFFF;

    border: 1px solid white;
    // background: #FFFFFF;
    transition: box-shadow .7s ease-in-out;

    ${WorkItem}:hover & {
      box-shadow: inset 28vw 0 0 0 #FFFFFF;
    }

    ${({ currProj, thisProj }) => (currProj === thisProj) && "boxShadow: 'inset 28vw 0 0 0 #FFFFFF;'"}
`

export const CaseStudy = styled.a`
  // margin-top: -26px;
  // margin-left: 20px;
  // margin-bottom: -17px;
  // float: right;
  padding: 2px 8px 1px 8px;
  opacity: 0.9;
  background: ${props => props.theme.cs};
  /* padding-left: 2px; */
  /* padding-top: 2px; */
  /* padding-bottom: 1px; */

  color: ${props => props.theme.cs};
  color: ${props => props.theme.bg};
  font-family: "SS3";
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: left;
  text-transform: uppercase;
  margin-right: 10px;
  /* margin-top: 4px; */
  border-radius: 100px;

  // border: 1px solid green;
  @media screen and (max-width: 767px) {
    /* padding-left: 1px; */
    /* padding-right: 10px; */
    padding: 3px 8px 2px 8px;
    font-size: 11px;
    margin-right: 10px;
    text-align: left;
  }
`;

export const BottomWork = styled.div`
  display: inline-grid;
  width: 100%;
  grid-template-columns: 1fr;
  // grid-template-rows: 1fr;
  // height: 8px;
  // align-items: end;

  // border: 1px solid pink;

  @media screen and (max-width: 767px) {
    grid-template-columns: 11fr 1fr;
  }
`

export const WorkTitle = styled.div`
  // width: 100%;
  float: left;
  text-align: start;
  align-items: start;
  // margin-top: 20px;

  font-family: "SS3";
  font-size: 3.2rem;
  line-height: 3.8rem;
  color: ${props => props.theme.primary};

  @media screen and (max-width: 767px) {
    font-size: 28px;
    line-height: 35px;
    float: left;
    text-align: left;
    align-items: start;
    width: 100%;
  }
`

export const WorkArrow = styled(LinkRouter)`
  display: none;

  @media screen and (max-width: 767px) {
    display: grid;
    font-family: "SS3";
    color: ${props => props.theme.primary};
    font-size: 14px;
    
    padding-top: 8px;
    float: right;
    text-align: right;
    align-items: start;
  }
`

export const WorkClass = styled.div`
    position: relative;
    bottom: 0;
    left: 0;
    align-items: start;
    text-align: left;
    font-family: "SS3";
    color: ${props => props.theme.primary};
    font-size: 12px;
    writing-mode: vertical-rl;
`

export const TextHover = styled.div`
  z-index: 1000;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 88px;

  position: fixed;
  overflow: hidden;
  height: 7vh;
  width: 8vw;
  top: ${props => (props.heightVar)};
  left: calc(30vw + 10px);
  align-content: start;
  text-align: left;

  padding: 12px;
  border-radius: 6px;

  transition: 0.1s all ease-in-out;
  user-select: none;
  pointer-events: none;

  background: rgba(44, 43, 45, 0.6);
  backdrop-filter: blur(14px);

  opacity: 0;

  ${WorkItem}:hover & {
    z-index: 999;
    opacity: 1;
  }

  &:hover {
    display: none; 
  }
`

// Responsive Display Attribute in Image
export const ImageHover = styled.div`
  position: fixed;
  display: grid;
  grid-template-rows: 1fr 1fr;
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

export const WorkPreview = styled.div`
  z-index: 1000;
  display: grid;
  // grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 1fr 1fr;

  position: fixed;
  overflow: hidden;
  height: 50px;
  width: 130px;
  top: ${props => (props.heightVar)};
  right: 16px;
  /* left: calc(31vw + 54px); */
  align-content: center;
  text-align: left;

  padding: 5px 7px 4px 12px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.bg};

  transition: 0.1s all ease-in-out;
  user-select: none;
  pointer-events: none;

  background: ${props => props.theme.bgPreview};
  backdrop-filter: blur(14px);

  img {
    display: none;
  }

  @media screen and (max-width: 767px) {
    top: ${props => (props.mobileHVar)};
    grid-template-rows: 15vh 14px 10px;
    // grid-template-rows: 15vh 1.75vh 1.25vh;
    // z-index: 999;
    // height: 44px;
    height: 18vh;
    width: calc(21vw);
    left: unset;
    right: 14px;
    padding: 0;
    // border: 1px solid blue;

    border: unset;
    background: unset;
    backdrop-filter: unset;

    text-align: right;
    align-items: flex-end;
    align-content: end;
    float: right;

    img {
      display: block;
      text-align: right;
      align-content: end;
      float: right;
      // position: absolute;
      // bottom: 0;
      // right: 0;

      object-fit: scale-down;
      width: 21vw;
      max-height: calc(18vh - 30px);
      // height: calc(22vw - 28px);
      // max-width: 21vw;
      padding-bottom: 10px;
    }
  }
`;

export const WorkName = styled.div`
  position: relative;
  bottom: 0;
  padding-top: 6px;
  // width: 80%;
  align-content: end;

  color: ${props => props.theme.primary};
  /* opacity: 0.9; */
  text-decoration: none;
  // text-transform: uppercase;
  font-size: 12px;
  font-family: "SS3";

  @media screen and (max-width: 767px) {
    align-content: end;
    float: right;
    text-align: right;
    font-size: 11px;
    padding-top: unset;
    padding-bottom: 2px;
  }
`;

export const WorkDesc = styled.p`
  margin-top: 2px;
  // width: 80%;
  align-content: start;

  color: ${props => props.theme.secondary};
  // opacity: 0.9;
  text-decoration: none;
  // text-transform: uppercase;
  font-size: 10px;
  font-family: "SS3";

  @media screen and (max-width: 767px) {
    margin-top: unset;
    // padding-top: 6px;
    align-content: end;
    float: right;
    text-align: right;
    font-size: 9px;
  }
`

export const TagsContainer = styled.div`
  // padding-left: 12%;
  // width: 88%;
  // color: #C0C0C0;
  // font-size: 13px;
  // font-family: "OpenSans"
  display: inline-block;
  // position: relative;
  // bottom: 0;
  align-items: start;
  text-align: left;

  @media screen and (max-width: 767px) {
    // margin-top: -20px;
    // display: none;
  }
`;

export const ProjectTag = styled.a`
  color: ${props => props.theme.secondary};
  font-family: "OpenSans";
  // height: 26px;
  font-size: 12px;
  // writing-mode: vertical-rl;
  padding-right: 12px;
  // overflow: hidden; 
  // text-overflow: ellipsis;

  @media screen and (max-width: 767px) {
    font-size: 11px;
    padding-left: 0;
    padding-right: 8px;
  }
`;

export const Details = styled(LinkRouter)`
  z-index: 1000;
  position: absolute;
  left: 0;
  bottom: 0;
  opacity: 0.9;
  width: 70vw;
  height: 8vh;
  padding-top: 2.7vh;
  // padding-right: 48%;
  
  text-align: center;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: ${props => props.theme.primary};
  font-size: 19px;
  font-family: "OpenSans";

  @media screen and (max-width: 767px) {
    // background: blue;
    // opacity: 1;
    // font-size: 14px;
    // float: right;
    // text-align: right;
    display: none;
  }
`

export const DetailsExpanded = styled.div`
    display: none;
`

export const VisitLink = styled.a`
  /* padding-top: 16px; */
  // position: fixed;
  /* bottom: 28px; */
  padding-right: calc(20px);
  // align-content: right;
  // margin-left: 4px;

  text-align: right;
  // padding: 4px;
  // left: calc(30vw - 94px);
  // margin-top: 82px;
  // float: right;

  text-decoration: none;
  color: ${props => props.theme.primary};
  opacity: 0.8;
  /* background: green; */
  font-size: 14px;
  font-family: "OpenSans";

  &:hover {
    opacity: 1;
  }  

  @media screen and (max-width: 767px) {
    float: right;
    padding-right: unset;
    padding-bottom: 22px;
    opacity: 1;
  }
`

export const ContentBg = styled.div`
  z-index: -1;
  position: fixed;
  // top: 103px;
  top: 0;
  /* left: calc(31vw + 40px); */
  left: 0;
  height: calc(100vh);
  /* width: calc(69vw - 40px); */
  width: 100vw;
  /* align-items: center; */
  background: ${props => props.theme.bg};
  /* background: blue; */

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

  @media screen and (max-width: 767px) {
    z-index: 999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 18vh;
    display: none;
  }
`

export const BgBlur = styled.div`
  /* z-index: 900; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  /* left: calc(31vw + 46px); */
  height: 100vh;
  /* width: calc(69vw - 46px); */
  /* overflow: hidden; */
  background: ${props => props.theme.bgPreview}; // Make sure this color has an opacity of less than 1
  backdrop-filter: blur(22px); // This be the blur

  @media screen and (max-width: 767px) {
    left: 0;
    top: 84px;
    width: 100vw;
    height: 18vh;
  }
`

export const WorkImageContainer = styled.div`
  position: fixed;
  height: calc(100vh - 80px);
  width: calc(69vw - 92px);
  top: 80px;
  margin-left: calc(46px + 33vw);
  align-items: center;
  
  /* border: 1px solid green; */

  @media screen and (max-width: 767px) {
    // z-index: 999;
    // top: 84px;
    // width: 100vw;
    // margin-left: 0;
    // height: 18vh;
    display: none;
  }
`

export const WorkImage = styled.div`
  z-index: 999;
  /* padding: 22px; */
  margin-top: 2.25vh;
  /* margin-left: 28px; */
  width: calc(69vw - 92px - 5vw);
  /* height: calc(100vh - 130px - 5rem); */
  height: calc(100vh - 80px - 6.5vh);
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
        max-width: calc(69vw - 92px - 5vw);
        /* background-image: #201D17; */
        /* padding-left: 3.25rem; */
    }

    @media screen and (max-width: 767px) {
      margin-top: 1.5vh;
      margin-left: 14px;
      width: calc(100vw - 36px);
      height: calc(15vh);

      img {
        max-width: calc(100vw - 36px);
      }
    }
`
























