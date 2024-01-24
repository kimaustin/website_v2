import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: fixed;
  /* left: 0; */
  left: 45px;
  // top: 103px;
  top: 0;
  z-index: 1;
  /* width: 100vw; */
  width: calc(100vw - 45px);
  height: calc(100vh);

  ::-webkit-scrollbar {
    display: none;
  }

  overflow-y: hidden;
  overflow-x: none;
  /* cursor: crosshair; */

  background: ${props => props.theme.bg};
  /* background: green; */

  @media screen and (max-width: 767px) {
    left: 0;
    width: 100vw;
    /* overflow: unset; */
  }
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
  z-index: 999;
  position: fixed;
  /* left: 0; */
  left: 45px;
  top: calc(47.25vh);
  width: calc(49vw - 45px);
  /* width: calc(100vw); */
  border-bottom: 1px solid ${props => props.theme.secondary};
  /* opacity: 0.2; */

  @media screen and (max-width: 767px) {
    border-bottom: 1px solid ${props => props.theme.secondary};
    width: 100vw;
    left: 0;
    opacity: 0.5;
    top: calc(44.5vh);
    /* display: none; */
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
    top: calc(46vh - 8px);
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

export const MarkerC = styled.div`
  /* z-index: 1004; */
  width: 38px;
  height: 38px;
  /* top: calc(50vh - 19px); */
  /* left: calc(68vw); */
  /* background: ${props => props.theme.primary}; */
  background: green;
  border: 2px solid ${props => props.theme.secondary};
  opacity: 0.7;
  border-radius: 38px;

  &:hover {
    opacity: 1;
  }
`

export const ClickableArea = styled.div`
  z-index: -1;
  // display: inline-grid;
  // grid-template-columns: 1fr 1fr;
  position: fixed;
  // top: 103px;
  /* left: 30vw; */

  /* right: 120px;
  top:0;
  height: 100vh;
  width: 160px; */
  left: 0;
  left: 50vw;
  bottom: 0;
  /* width: calc(64vw - 130px); */
  width: 50vw;
  height: 78px;

  // padding-top: 2.8vh;
  // padding-top: calc(49vh - 103px);
  // margin-left: 30vw;
  padding-left: 16px;
  padding-top: 12px;
  padding-bottom: 16px;
  padding-right: 16px;
  
  /* border-left: 1px solid ${props => props.theme.border}; */
  border-top: 1px solid ${props => props.theme.border};
  /* background: ${props => props.theme.bgSide}; */
  // opacity: 0;
  backdrop-filter: blur(14px);

  // border: solid 1px green;
  
  text-decoration: none;
  /* color: black; */
  /* text-align: center; */
  /* align-items: center; */
  /* align-content: center; */
  /* justify-content: center; */

  color: ${props => props.theme.secondary};
  font-size: 19px;
  font-family: "SS3";

  /* &:hover {
    background: ${props => props.theme.bgPreview};
    backdrop-filter: blur(6px);
    color: ${props => props.theme.primary};
  } */

  @media screen and (max-width: 767px) {
    opacity: 0;
    display: none;
  }
`;


export const WorkListContainer = styled.div`
  /* background: ${props => props.theme.background}; */
  position: fixed;
  top: 0;
  left: 52px;
  /* width: calc(100vw - 45px); */
  width: calc(49vw - 52px);
  height: calc(100vh);
  overflow-y: scroll;
  /* align-items: center; */
  /* justify-content: center; */
  /* align-content: center; */

  /* padding-bottom: calc(51vh - 62px + 0.8rem); */
  // padding-top: calc(44vh - 94px);
  /* padding-top: calc(48vh - 128px - 1.8rem + 103px); */
  padding-top: calc(44vh);
  padding-left: 2.5vw;
  /* padding-left: calc(24.5vw - 26px - 16.75vw); */
  /* padding-right: calc(24.5vw - 26px - 16.75vw); */
  /* padding-left: 7.75vw; */
  padding-right: 5.5vw;
  /* padding-right: calc(50vw + 100px); */
  /* padding-right: calc(64vw + 24px + 1vw - 128px); */
  /* padding-right: calc(64vw + 26px + 1vw); */
  padding-bottom: calc(48vh);
  z-index: 999;
  /* border-right: 3px solid ${props => props.theme.border}; // Make sure this color has an opacity of less than 1 */

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
    padding-left: 8px;
    padding-right: 5vw;
    /* padding-top: calc(48vh - 126px - 16px + 103px); */
    padding-top: calc(45vh - 38px);
    padding-bottom: calc(53vh - 12px);
    border-right: unset;
  }
`;

export const WorkItem = styled.div`
  // display: grid;
  // grid-template-rows: 24px 1fr;
  margin-bottom: 1.2vw;
  /* scroll-margin-top: calc(48vh - 128px - 1.8rem + 103px); */
  scroll-margin-top: calc(44vh);
  /* calc(48vh - 128px - 2rem + 103px); */
  /* padding-top: calc(48vh - 128px - 1.7rem + 103px); */

  transition: 5s scale ease-in-out;

  // color: #FFFFFF;
  // padding: 0 .25rem;

  &:hover {
    /* opacity: 1; */
    /* color: ${props => props.theme.secondary}; */
    /* scale: 0.85; */
  }

  user-select: none;

  @media screen and (max-width: 767px) {
    width: calc(100vw - 32px);
    /* scroll-margin-top: calc(48vh - 2px - 36px); */
    scroll-margin-top: calc(45vh - 38px);
    margin-bottom: 6px;    
  }
`;

export const DeskWorkItem = styled.div`
  display: grid;
  transition: .225s all ease-in-out;

  color: ${props => props.theme.primary};
  padding: 0 4px;

  &:hover {
    /* border-radius: 12px; */
    /* transform: translateX( 6px ); */
    /* background: green; */
    opacity: 1;
    cursor: pointer;
    /* padding-left: 20px; */
    /* color: ${props => props.theme.secondary}; */
    /* text-decoration: underline; */
  }

  @media screen and (max-width: 767px) {
    display: none;

    /* transition: 5s scale ease-in-out; */

    color: ${props => props.theme.primary};
    padding: 0 4px;

    /* display: grid; */
    /* grid-template-rows: 1fr 1fr; */

    width: calc(100vw - 32px);
    margin-bottom: 13px;  
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
    margin-bottom: 13px;   
  }
`

export const TopLine = styled.div`
  /* display: inline-block;
  width: 100%;
  margin-bottom: 1px; */
  // grid-template-columns: 20px 1fr 6fr;
  // grid-template-rows: 1fr;
  // height: 8px;
  align-items: start;
  text-align: left;
  display: none;
  /* border: 1px solid pink; */
  
  @media screen and (max-width: 767px) {
    display: inline-block;
    /* margin-top: 1px; */
    /* align-items: start; */
    text-align: left;
    width: fit-content;
    height: fit-content;
    /* height: 12px; */
    /* margin-top: -8px; */
    margin-bottom: 3px;
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

    /* border: 1px solid white; */
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
  /* padding: 2px 8px 1px 8px; */
  /* opacity: 0.9; */
  /* background: ${props => props.theme.cs}; */
  /* padding-left: 2px; */
  /* padding-top: 2px; */
  padding-bottom: 1px;

  color: ${props => props.theme.cs};
  /* color: ${props => props.theme.bg}; */
  font-family: "SS3";
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: left;
  text-transform: uppercase;
  margin-right: 14px;
  /* margin-top: 4px; */
  border-radius: 100px;

  // border: 1px solid green;
  @media screen and (max-width: 767px) {
    /* padding-left: 1px; */
    /* padding-right: 10px; */
    /* padding: 3px 8px 2px 8px; */
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
  /* position: relative; */
  /* left: 8%; */
  /* float: center; */
  /* text-align: center; */
  /* align-items: center; */
  // margin-top: 20px;

  font-family: "SS3";
  /* font-size: 46px; */
  font-size: 3.2vw;
  line-height: 115%;
  /* color: ${props => props.theme.primary}; */
  /* max-width: 33vw; */
  /* max-width: 24ch; */

  /* border: 1px solid blue; */
  transition: 0.07s all ease-in-out;

  &:hover {
    /* opacity: 0.5; */
    /* scale: 0.99; */
    /* color: ${props => props.theme.cs}; */
    /* border-bottom: 3px solid ${props => props.theme.secondary}; */
  }

  @media screen and (max-width: 767px) {
    font-size: 22px;
    /* line-height: 35px; */
    float: left;
    line-height: 124%;
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

export const WorkMobilePreview = styled.div`
  z-index: 1000;
  display: grid;
  // grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 1fr 1fr;

  position: fixed;
  overflow: hidden;
  height: 48px;
  width: 120px;
  top: ${props => (props.heightVar)};
  right: 120px;
  /* right: 62vw; */
  /* left: 36vw; */
  align-content: center;
  text-align: left;

  padding: 7.5px 4px 4px 8px;
  /* border-radius: 5px; */
  border-top: 1px solid ${props => props.theme.border};
  border-left: 1px solid ${props => props.theme.secondary};
  border-bottom: 1px solid ${props => props.theme.secondary};

  transition: 0.1s all ease-in-out;
  user-select: none;
  pointer-events: none;

  background: ${props => props.theme.bgPreview};
  /* backdrop-filter: blur(14px); */

  img {
    display: none;
  }

  display: none;

  @media screen and (max-width: 767px) {
    top: ${props => (props.mobileHVar)};
    grid-template-rows: 15vh 18px 10px;
    // grid-template-rows: 15vh 1.75vh 1.25vh;
    // z-index: 999;
    // height: 44px;
    height: 18vh;
    width: calc(21vw);
    left: unset;
    right: 14px;
    padding: 0;
    // border: 1px solid blue;
    display: grid;

    border-top: unset;
    border-bottom: unset;
    border-left: unset;
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
      padding-bottom: 14px;
    }
  }
`;

export const WorkName = styled.div`
  position: relative;
  bottom: 0;
  /* margin-top: 2.5px; */
  // width: 80%;
  /* align-content: end; */

  color: ${props => props.theme.primary};
  opacity: 0.9;
  text-decoration: none;
  // text-transform: uppercase;
  font-size: 12px;
  font-family: "SS3";

  @media screen and (max-width: 767px) {
    /* align-content: end; */
    float: right;
    text-align: right;
    font-size: 11px;
    margin-top: 120px;
    /* padding-bottom: 2px; */
  }
`;

export const WorkSem = styled.p`
  /* margin-top: 5px; */
  /* margin-left: 0.5px; */
  // width: 80%;
  /* align-content: end; */
  /* text-align: right; */
  text-align: center;
  align-items: center;
  align-content: center;
  color: ${props => props.theme.secondary};
  // opacity: 0.9;
  padding-top: 4px;
  text-decoration: none;
  // text-transform: uppercase;
  letter-spacing: 0.25px;
  font-size: 16px;
  font-family: "SS3";
  user-select: none;

  @media screen and (max-width: 767px) {
    margin-top: 2px;
    margin-bottom: 3px;
    // padding-top: 6px;
    align-content: end;
    float: right;
    text-align: right;
    font-size: 9px;
  }
`

export const Overview = styled.div`
  color: ${props => props.theme.secondary};
  text-decoration: none;
  font-size: 12px;
  font-weight: bold;
  font-family: "SS3";

  /* margin-top: 30px; */
`

export const OverviewContainer = styled.div`
  /* height: calc(49.5vh - 38px - 70px); */
  /* margin-right: 15px; */
  overflow: hidden;
  /* position: absolute; */
  /* bottom: calc(50.5vh + 38px); */

  /* border: 1px solid pink; */
`

export const OverviewGradient = styled.div`
  z-index: 999;
  background: ${props => props.theme.gradient};
  width: 100%;
  height: 5vh;
  /* float: end; */
  position: absolute;
  /* bottom: calc(51vh + 20px); */
  bottom: 0;
`

export const WorkOverview = styled.div`
  /* align-content: start; */

  color: ${props => props.theme.primary};
  // opacity: 0.9;
  text-decoration: none;
  // text-transform: uppercase;
  /* margin-top: 5px; */
  font-size: 16px;
  font-family: "SS3";
  line-height: 150%;
  /* max-width: 80ch; */
  padding-left: 25%;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 25%;

  user-select: none;

  text-align: center;
  align-items: center;
  align-content: center;
  /* max-height: 20vh; */
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
  /* white-space: pre; */
  /* width:150px; */

  /* max-height: calc(35vh); */
  /* border-bottom: 1px solid green; */

  @media screen and (max-width: 767px) {
    margin-top: 2px;
    margin-bottom: 3px;
    // padding-top: 6px;
    align-content: end;
    float: right;
    text-align: right;
    font-size: 9px;
  }
`

export const PreviewTag = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  /* width: 8px; */
  width: 120px;
  height: 4px;
  /* height: 48px; */
  background: ${props => props.theme.primary};
`

export const TagsContainer = styled.div`
  // padding-left: 12%;
  // width: 88%;
  // color: #C0C0C0;
  // font-size: 13px;
  // font-family: "OpenSans"
  /* display: inline-block; */
  /* display: inline-grid; */
  /* position: absolute; */
  /* bottom: 14px; */
  /* left: 16px; */
  /* max-height: 40vh; */

  // position: relative;
  // bottom: 0;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 767px) {
    // margin-top: -20px;
    // display: none;
  }
`;

export const ProjectTag = styled.a`
  color: ${props => props.theme.secondary};
  font-family: "OpenSans";
  // height: 26px;
  font-size: 16px;
  // writing-mode: vertical-rl;
  padding-right: 10px;
  /* padding-right: 14px; */
  /* padding-top: 5px; */
  user-select: none;
  // overflow: hidden; 
  // text-overflow: ellipsis;

  @media screen and (max-width: 767px) {
    font-size: 11px;
    padding-left: 0;
    padding-right: 8px;
  }
`;

export const TopStickyIndex = styled.div`
    z-index: 0;
    position: fixed;
    top: 0;
    padding-top: 14px;
    left: calc(50vw);
    padding-left: 16px;
    padding-right: 16px;
    /* width: calc(64vw - 130px); */
    width: calc(50vw);
    height: 60px;
    display: inline-grid;
    grid-template-columns: auto auto;
    grid-template-rows: 26px 1fr;
    overflow: hidden;

    background: ${props => props.theme.bgNav};
    backdrop-filter: blur(6px);
    border-bottom: 1px solid ${props => props.theme.border};

    @media screen and (max-width: 767px) {
        opacity: 0;
        display: none;
    }
`

export const DetailsContainer = styled.div`
    /* margin-top: -6px; */
    position: fixed;
    /* left: calc(49vw + 0.5px); */
    left: 0;
    top: 80px;
    z-index: 1000;
    /* width: calc(51vw + 1px); */
    width: 50vw;
    height: calc(100vh - 80px);
    overflow: hidden;
    align-content: center;
    text-align: center;

    opacity: 0;

    transition: 0.075s all ease-in-out;
    background: ${props => props.theme.bg}; // Make sure this color has an opacity of less than 1
    backdrop-filter: blur(22px); // This be the blur

    /* background: green; */

    &:hover {
      opacity: 0.92;
      cursor: pointer;
    }

    @media screen and (max-width: 767px) {
        z-index: -1;
        opacity: 0;
        display: none;
    }
`

export const DetailsBG = styled(LinkRouter)`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-content: center;
    text-align: center;
    text-decoration: none;
    display: grid;
  /* background: ${props => props.theme.cs}; // Make sure this color has an opacity of less than 1 */
`

export const DetailsBlur = styled.div`
  /* z-index: 900; */
  z-index: -1;
  position: fixed;
  top: 8vh;
  left: 49vw;
  width: 51vw;
  height: 92vh;
  background: ${props => props.theme.bgPreview}; // Make sure this color has an opacity of less than 1
  border-left: .5px solid ${props => props.theme.border}; // Make sure this color has an opacity of less than 1
  backdrop-filter: blur(22px); // This be the blur

  @media screen and (max-width: 767px) {
    left: 0;
    top: 84px;
    width: 100vw;
    height: 18vh;
    display: none;
  }
`

export const Details = styled.div`
  z-index: 1000;
  /* position: fixed; */
  /* left: calc(100vw - 280px + 15px); */
  /* bottom: 50.5vh; */
  /* width: 70vw; */
  /* margin-top: calc(50vh - 14px); */
  /* width: 50vw; */
  text-align: center;
  /* height: 8vh; */
  /* width: fit-content; */
  margin-top: 10vh;
  // padding-right: 48%;
  
  transition: 0.05s all ease-in-out;
  /* text-align: center; */
  /* align-items: center; */
  /* justify-content: center; */

  opacity: 0.7;
  text-decoration: none;
  color: ${props => props.theme.cs};
  font-weight: bold;
  letter-spacing: 0.3px;
  font-size: 16px;
  font-family: "SS3";


  &:hover {
      opacity: 1;
      cursor: pointer;
    }

  @media screen and (max-width: 767px) {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.bg};
    left: unset;
    bottom: 75px;
    right: 14px;
    height: 32px;
    /* width: 80px; */
    padding: 8px 12px 0px 12px;
    opacity: 1;
    font-size: 14px;
    float: right;
    text-align: right;
    /* border: 1px solid ${props => props.theme.bg}; */
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
  top: 0;
  /* left: 50vw; */
  left: -5vw;
  height: calc(100vh);
  width: 110vw;
  /* width: calc(50vw); */
  /* background: ${props => props.theme.bg}; */
  /* background: green; */
  /* top: 80px; */
  align-items: center;
  /* border: 8px solid orange; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  @media screen and (max-width: 767px) {
    /* z-index: 999; */
    top: 0;
    left: 0;
    width: 100vw;
    /* height: 18vh; */
    /* display: none; */
  }
`

export const BgBlur = styled.div`
  /* z-index: 900; */
  position: fixed;
  top: 0;
  left: 49vw;
  width: 51vw;
  /* left: calc(31vw + 46px); */
  height: 100vh;
  /* width: calc(69vw - 46px); */
  /* overflow: hidden; */
  background: ${props => props.theme.bgPreview}; // Make sure this color has an opacity of less than 1
  /* border-left: .5px solid ${props => props.theme.border}; // Make sure this color has an opacity of less than 1 */
  backdrop-filter: blur(18px); // This be the blur

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const BlurCutoff = styled.div`
  z-index: 0;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 49vw;
  background: ${props => props.theme.bgSide}; // Make sure this color has an opacity of less than 1
  backdrop-filter: blur(20px); // This be the blur

  @media screen and (max-width: 767px) {
    width: 100vw;
  }
`

export const WorkImageContainer = styled.div`
  position: fixed;
  /* height: calc(100vh - 80px); */
  height: calc(100vh);
  /* width: calc(63vw - 120px - 160.5px); */
  width: 51vw;
  /* top: 80px; */
  top: 0;
  left: 49vw;
  align-items: center;
  border-left: 1px solid ${props => props.theme.border}; // Make sure this color has an opacity of less than 1
  /* border: 1px solid green; */
  /* background: green; */

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
  margin-top: calc(3vh + 80px);
  margin-left: 2vw;
  /* padding-bottom: 2vh; */
  /* width: calc(69vw - 92px - 5vw); */
  /* width: calc(63vw - 120px - 160px); */
  width: calc(51vw - 4vw);

  /* height: 88.5vh; */
  height: calc(100vh - 6.2vh - 80px);

  text-align: center;
  align-items: center;
  /* justify-content: center; */
  /* object-fit: contain; */

  /* width: calc(85.7vw - 6.3rem); */
  /* height: 16.5vh; */
  /* background: url("testProjCover.png"); */
  /* border: 4px solid pink; */
  /* background: red; */
  /* border: 0.5px solid ${props => props.theme.border}; */

  img {
        /* display: block; */
        object-fit: scale-down;
        height: 100%;
        /* max-height: calc(100vh); */
        // max-width: 100%;
        /* max-width: calc(69vw - 92px - 5vw); */
        /* max-width: calc(63vw - 120px - 160px - 50px); */
        max-width: calc(50vw - 4vw);

        /* border: 0.5px solid ${props => props.theme.border}; */

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
























