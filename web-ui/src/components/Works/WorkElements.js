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
  /* height: calc(100vh - 129px); */
  /* display: block; */

  /* background: red; */

  ::-webkit-scrollbar {
    display: none;
  }

  overflow-y: hidden;
  overflow-x: none;
  cursor: crosshair;
`;

// export const Divider = styled.div`
//   z-index: 999;
//   position: fixed; 
//   left: 31.5vw;
//   top: 0;
//   height: 100vh;

//   border-left: .5px solid #403F3F;
// `

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

export const HitMarker = styled.div`
  z-index: 0;
  position: fixed;
  left: 0;
  top: calc(50vh - 40px);
  /* top: 156px; */
  height: 40px;
  width: 31.5vw;
  /* width: 18px; */
  background: green;
  /* border-bottom: 1px solid #C6C6C6; */
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

export const Fake = styled.div`
  /* position: fixed; */
  /* display: none; */
`

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
  
  /* text-align: center; */
  /* justify-content: center; */

  scroll-margin-top: calc(48vh - 33px);

  /* scroll-margin-top: 125px; */
  /* scroll-margin-top: 250px; */
  /* scroll-margin-bottom: 70vh; */

  transition: 5s scale ease-in-out;

  &:hover {
    color: #AAAAAA;
    /* opacity: 1; */
  }

  @media screen and (max-width: 811px) {
    /* margin-left: 18px; */
    display: flex;
    grid-template-rows: unset;
    grid-template-columns: unset;
    height: 27%;
    /* padding: 0; */
    /* padding: .9rem .85rem .9rem .85rem; */
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
  /* padding-bottom: 16px; */

  /* ${WorkItem}:hover & {
    opacity: 0.4;
  } */
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
  grid-template-columns: 1fr 1fr 1fr;
  position: fixed;
  left: 16px;
  bottom: 16px;
  width: calc(31.5vw - 32px);
  height: 124px;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 18px;
  padding-bottom: 18px;

  border-radius: 7px;
  border: .5px solid #403F3F;
  background: rgba(55, 55, 55, 0.6);
  backdrop-filter: blur(12px);
`;

export const WorkName = styled.p`
  /* max-width: 66%; */
  /* width: calc(48% - 18px); */
  /* height: 100%; */
  /* margin-top: 5px; */
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
  font-size: 13px;
  font-family: "OpenSans"
`;

export const ProjectTag = styled.p`
  /* margin-top: -14px; */
  color: #999696;
  font-family: "Open Sans";
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
  /* padding-top: 16px; */
  /* display: inline-block; */
  position: fixed;
  left: calc(31.5vw - 120px);
  margin-top: 14px;
  padding: 4px;
  /* margin-right: calc(16px); */
  /* height: 20px; */
  /* width: 80px; */
  float: right;
  text-align: right;

  text-decoration: none;
  color: #FFFFFF;
  font-size: 14px;
  font-family: "OpenSans";

  &:hover {
    color: white;
    background: blue;
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
  top: 0;
  left: 31.5vw;
  height: calc(100vh);
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
  background: rgba(160, 160, 160, 0.4); // Make sure this color has an opacity of less than 1
  backdrop-filter: blur(25px); // This be the blur
`

export const WorkImageContainer = styled.div`
  position: fixed;
  height: calc(100vh);
  width: 68.5vw;
  top: 0;
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
  height: calc(100vh - 38px);
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
        max-width: 100%;
        max-width: calc(68.5vw - 50px);
        /* background-image: #201D17; */
        /* padding-left: 3.25rem; */
    }
`


























export const TopOfWorks = styled(LinkScroll)`
  /* height: ${(props) => props.relHeight}; */
  z-index: 999;
  width: 2rem;
  height: 2rem;
  position: fixed;

  bottom: 50%;
  right: 2rem;

  padding: 0.25rem;
  border: 1px solid blue;
  background: white;

  &:hover {
    color: white;
    background: blue;
  }
`;

export const StartBg = styled(motion.div)`
  position: fixed;
  /* top: -101vh; */
  /* top: 0; */
  width: 100vw;
  height: 100vh;
  opacity: 1;
  background: black;
  z-index: -1;
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0.1;
  background: blue;
  position: fixed;
  /* z-index: 4;
    ${({ projDisplayed }) =>
    projDisplayed &&
    `
            z-index: 6;
    `} */
`;

export const Loader = styled.div`
  z-index: 1;
  position: fixed;
  width: 7.7vw;
  height: 93.4vw;
  right: 0;
  top: 6.5vh;
  border-left: 1.5px solid black;
  background: #fffdfa;
  color: black;
  font-size: 6vw;
  /* transform: rotate(90deg); */

  @media screen and (max-width: 811px) {
    display: none;
  }
`;

export const Side = styled.div`
  z-index: 1;
  height: 7.5vw;
  width: 24.5vw;
  position: fixed;
  font-size: 8vw;
  letter-spacing: -0.3vw;
  bottom: 15vh;
  left: 83.9vw;
  /* border: 1px solid black; */
  transform: rotate(90deg);

  @media screen and (max-width: 811px) {
    display: none;
  }
`;

export const Header = styled.div`
  position: fixed;
  background: #fffdfa;
  /* top: 1rem; */
  z-index: 999;
  text-decoration: none;

  @media screen and (max-width: 811px) {
    top: 5vh;
    z-index: 11;
    padding-bottom: 9vh;
    width: 100vw;
    /* border-bottom: 1.5px solid grey; */
  }
`;

export const Label = styled.div`
  display: none;
  z-index: 999;

  @media screen and (max-width: 811px) {
    display: grid;
    z-index: 999;
    position: fixed;
    display: flex;
    left: 0;
    height: calc(6vh - 1px);
    width: calc(100vw / 3);
    top: 6vh;
    /* padding-left: 18px;
        padding-top: 18px; */

    justify-content: center;
    align-items: center;
    text-align: center;

    font-size: 1.1rem;
    font-family: "SharpGrotesk";
    /* background: #201D17; */
    /* color: #FFFDFA; */
    color: #201d17;
    border-bottom: 1.25px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;

    display: none;
  }
`;

export const ListContainer = styled.div`
  /* z-index: 999; */
  position: fixed;
  /* width: 50vw; */
  left: 49.96vw;
  top: 0;
  height: 100vh;
  border-left: 1.5px solid black;
`;

export const Indicator = styled.div`
  font-size: 5vw;
  /* position: fixed; */
  margin-top: 50vh;
  margin-left: -5vw;
  /* border: 1px solid black; */
`;

export const NameSort = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  opacity: 0.35;
  position: fixed;
  top: 4.3rem;
  left: 3.9rem;
  padding-bottom: 0.5rem;
  padding-top: 1rem;
`;

export const TypeSort = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  opacity: 0.35;
  position: fixed;
  top: 4.3rem;
  left: 63.2vw;
  padding-bottom: 0.5rem;
  padding-top: 1rem;
`;

export const DateSort = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  opacity: 0.35;
  position: fixed;
  top: 4.3rem;
  left: 85.4vw;
  padding-bottom: 0.5rem;
  padding-top: 1rem;
`;

export const WorksContainerMove = styled.div`
  position: fixed;
  /* left: calc(7.15vw + 3rem); */
  top: 0;
  width: calc(83.4vw - 6rem);
  height: calc(100vh);
  /* border: 1px solid blue; */

  overflow: hidden;
  /* left: calc(7.15vw - 3.75rem + 3rem); */
  /* border-top: 1px solid #201D17; */

  @media screen and (max-height: 811px) {
    width: 100vw;
    border-right: 1px solid #201d17;
    overflow-y: hidden;
  }
`;

export const WorkContents = styled(LinkRouter)`
  /* position: fixed: */
  display: flex;
  /* top: 0; */
  /* left: 0; */
  /* width: calc(86vw - 7rem); */
  width: 100%;
  height: 100%;

  /* height: 17vh; */
  text-decoration: none;

  color: #201d17;
  font-size: 3.25rem;
  letter-spacing: -0.07rem;

  display: inline-grid;
  text-align: left;
  /* justify-content: center; */
  vertical-align: middle;
  align-items: center;

  /* border: 5px solid blue; */

  opacity: ${(filteredOut) => filteredOut ? 1 : 0.2};
  /* opacity: ${(filteredOut) => filteredOut ? 0.2 : 0.2}; */

  transition: 0.15s all ease-in-out;

  &:hover {
    color: #fffdfa;
    background: #201d17;
    /* cursor: url("/imgs/c_main.svg"), auto; */
    cursor: crosshair;

    /* cursor: crosshair; */
  }
`;

export const WorkIndex = styled.div`
  position: absolute;
  padding-left: .75%;
  /* padding-top: calc(16.5vh - 9.05rem); */
  /* padding-top: calc(4.05vh); */
  left: 0; 
  top: 50%;
  transform: translate(50%, calc(50% - .85rem));

  font-family: "JejuMyeongjo";
  font-size: 0.65rem;
  letter-spacing: 0.03rem;

  opacity: 0.8;

  grid-column: 1;
  grid-row: 1;

  ${WorkItem}:hover & {
    /* background: #FFFDFA; */
    /* color: #201D17; */
    /* border: 4.5px solid #FFFDFA; */
  }

  @media screen and (max-width: 811px) {
    /* display: none; */
    font-size: 1.1rem;
    font-family: "SharpGrotesk";
    position: absolute;
    display: block;
    vertical-align: bottom;
    align-items: end;
    /* bottom: 1.8rem; */
    margin-top: calc(19vh - 0.9rem);
    /* margin-top: 9rem; */
    /* margin-left: 0;
        font-weight: bold;
        padding: 0.25rem .5rem 0.25rem .5rem; */
    /* font-size: 1.1rem; */
  }
`;


export const WorkType = styled.p`
  /* position: absolute; */
  display: inline;
  /* left: 61.75vw; */
  /* margin-top: -2.8rem; */
  /* font-family: 'CG Medium Italic'; */
  /* outline: 1px solid blue; */
  font-family: "SpaceMono";
  /* font-weight: bold; */
  /* text-transform: uppercase; */
  text-align: right;
  align-items: right;
  /* font-size: 6.5rem; */
  /* font-size: 4rem; */

  /* border: 8px solid black;
    border-radius: 7rem;
    padding-right: 2.5rem;
    padding-left: 2.5rem;
    padding-top: .75rem;
    padding-bottom: .75rem; */

  /* margin-top: 1rem; */
  /* margin-bottom: 1rem; */
  /* font-size: 3rem; */
  opacity: 0.9;
  /* line-height: 120%; */
  /* color: #201D17; */
  /* letter-spacing: -.2rem; */
  /* grid-column: 8 / 13; */
  /* grid-row: 2; */

  @media screen and (max-width: 811px) {
    display: none;
    font-size: 1;
    text-align: left;
    vertical-align: bottom;
  } ;
`;

export const WorkDate = styled.p`
  /* position: absolute; */
  /* left: 84vw; */
  /* margin-top: -2.8rem; */
  /* outline: 1px solid blue; */
  /* font-family: 'CG Medium Italic'; */
  font-family: "SpaceMono";
  /* font-style: italic; */
  text-transform: uppercase;
  text-align: right;
  /* letter-spacing: -.25rem; */
  /* font-size: 4.75rem; */
  /* font-size: 3rem; */
  opacity: 0.9;
  /* line-height: 120%; */
  /* color: #201D17; */
  letter-spacing: -0.01rem;
  /* grid-column: 8 / 13; */
  /* grid-row: 1; */

  @media screen and (max-width: 811px) {
    /* display: none; */
    text-align: left;
    font-size: 0.8rem;
    text-transform: none;
    vertical-align: bottom;
  } ;
`;

export const TagsDivider = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 27.5%;
  height: 100%;

  border-left: 1px solid #201d17;
`;

export const TagsContainer2 = styled.div`
    /* outline: 1px solid blue; */
    padding-top: .525rem;
    display: inline;
    text-align: left;
    padding-right: 1rem;

    grid-column: 8 / 17; */
    /* grid-row: 1;

    font-family: 'Iskoola';
    font-size: 1.25rem;
    line-height: 103%;
    letter-spacing: -.05rem;

    @media screen and (max-width: 811px) {
        /* outline: 1px solid blue; */
        width: 50%;
        height: 10%;
        positon: absolute;
        padding-left: unset;
        padding-right: unset;
        padding-top: unset;
        text-align: left;

        vertical-align: bottom;
        /* margin-top: calc(20vh - 2.5rem); */
        position: absolute;
        left: 1rem;
        /* bottom: 1rem; */
        display: block;
        /* display: none; */
        /* align-items: end; */
        /* display: grid; */
        /* grid-row: 2; */
        /* grid-column: 1; */
        /* display: none; */
    }
`;

export const Close = styled.p`
  position: fixed;
  font-family: "SpaceMono";
  /* font-weight: lighter; */
  right: 5rem;
  top: 1.4rem;
  color: #201d17;
  /* cursor: pointer; */
  font-size: 1.2em;
  letter-spacing: -0.1rem;
  opacity: 1;
  /* border-bottom: 1px solid #201D17; */
  padding-left: 0.75rem;
  padding-right: 0.85rem;
  padding-top: 0.25rem;
  padding-bottom: 0.4rem;

  border-left: 1px solid #201d17;
  border-right: 1px solid #201d17;
  border-bottom: 1px solid #201d17;
  border-top: 1px solid #201d17;
  cursor: url("/imgs/c_close2.svg"), auto;
  cursor: crosshair;

  /* transition: 0.15s all ease-in-out; */

  &:hover {
    background: #201d17;
    color: #fffdfa;
  }

  @media screen and (max-width: 811px) {
    display: none;
  }
`;

export const TestButton = styled(LinkScroll)`
  z-index: 999;
  position: fixed;
  left: 5rem;
  bottom: 5rem;
  font-size: 3rem;
  background: black;
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  /* cursor: pointer; */
`;

export const AllProjs = styled.p`
  z-index: 999;
  width: calc(6vw + 1px);
  height: 4rem;
  font-family: "SpaceMono";
  /* font-size: 1.5vw; */
  font-size: 1.6rem;
  /* padding-left: 2.75vw; */
  padding-top: 1.1vh;
  align-items: center;
  text-align: center;
  /* background: blue; */
  border-bottom: 1px solid #201d17;
  cursor: url("/imgs/c_close2.svg"), auto;

  &:hover {
    color: #fffdfa;
    background: #201d17;
  }

  @media screen and (max-width: 811px) {
    font-size: 1.5rem;
    padding-top: 1.5vh;
    padding-left: 20px;
    height: 3.5rem;
  }
`;

export const NextProj = styled.div`
  width: 100%;
  height: calc(50% - 2rem);
  /* background: yellow; */
  border-bottom: 1px solid #201d17;
  cursor: url("/imgs/c_right.svg"), auto;

  &:hover {
    color: #fffdfa;
    background: #201d17;
  }
`;

export const NextProjLabel = styled.div`
  /* position: absolute; */
  position: fixed;
  bottom: calc(50% - 0.5rem);
  /* right: calc(-5vw + 1.85rem); */
  width: 10%;
  height: calc(50% - 2rem);
  padding-left: 5rem;
  padding-bottom: 5rem;
  margin-left: 24.5%;
  /* text-align: center; */
  /* justify-content: center; */
  text-orientation: mixed;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  pointer-events: none;

  font-family: "SpaceMono";
  font-size: 1.6rem;

  @media screen and (max-width: 811px) {
    /* position: absolute;
        height: calc(50% - 2rem);

        font-size: 1.1rem;
        bottom: calc(50% - .25rem);
        padding-left: 5rem;
        right: .75rem; */

    width: 100%;
    position: absolute;
    font-size: 1.1rem;
    padding-left: 1.55rem;
    bottom: calc(50%);
    right: 0.75rem;
  }
`;

export const PrevProj = styled.div`
  width: 100%;
  height: calc(50% - 2rem);
  cursor: url("/imgs/c_left.svg"), auto;
  /* margin-top: 50%; */
  /* background: Green; */

  &:hover {
    color: #fffdfa;
    background: #201d17;
  }
`;

export const PrevProjLabel = styled.div`
  position: absolute;
  bottom: calc(1.25rem);
  /* left: 0; */
  right: calc(-5vw + 1.85rem);
  width: 100%;
  height: calc(50% - 2rem);
  text-orientation: mixed;
  transform: rotate(180deg);
  writing-mode: vertical-rl;
  /* text-align: center; */
  /* justify-content: center; */
  pointer-events: none;

  font-family: "SpaceMono";
  font-size: 1.6rem;

  @media screen and (max-width: 811px) {
    font-size: 1.1rem;
    padding-left: 1.55rem;
    bottom: calc(1.4rem);
    right: 0.75rem;
    /* left: .75rem; */
  }
`;

export const WorkList = styled.div`
  padding-left: 7.15vw;
  position: relative;
  z-index: 10;
  display: grid;
  width: 83.4vw;
  height: 93.4vh;
  top: 2.9vh;
  /* margin-bottom: 4rem; */

  @media screen and (max-width: 811px) {
    padding-left: 1.75vw;
    padding-top: 0.25rem;
    bottom: 5rem;
    top: 8vh;
  }
`;

export const ProjectItem = styled.div`
  display: grid;
  margin-bottom: 1rem;
  width: 100%;

  @media screen and (max-width: 811px) {
    margin-left: 16px;
    margin-bottom: 0.5rem;
    width: 90vw;
    padding-top: 0;
    padding-bottom: 0.75rem;
    /* border-bottom: 0.75px solid black; */
  }
`;

export const Top = styled(LinkScroll)`
    display: none;

    @media screen and (max-width: 811px) {
        position: fixed;
        display: flex;
        z-index: 990;
        /* /* cursor: pointer; */ */
        font-size: 1.5rem;
        background: #FFFDFA;
        color: black;
        text-decoration: none;

        bottom: 8vh;
        right: 25px;
        width: 5rem;
        height: 5rem;
        padding-left: 1rem;
        padding-top: 1.5rem;
        border-radius: 2.5rem;
        border: 1px solid black;

        /* left: 45vw;
        width: 20vw;
        height: 5vh;
        bottom: 8vh;
        padding-left: 1.5rem;
        padding-top: .5rem; */
    }

    &:hover {
        background: black;
        color: #FFFDFA;        
    }
`;

// export const NavDOMLink = styled(LinkRouter)`
//     height: 100%;
//     color: black;
//     padding-left: 1rem;
//     /* cursor: pointer; */
//     display: flex;
//     align-items: center;
//     text-decoration: none;
//     float: none;
//     letter-spacing: -0.5px;
//     font-family: 'AG';
//     color: black;

//     filter: ${({currpage, thispage}) =>
//         currpage === thispage && 'blur(2x);'
//     };

//     -webkit-filter: ${({currpage, thispage}) =>
//         currpage === thispage && 'blur(2x);'
//     };

//     &:hover {
//         transition: all 0.1s ease-in-out;
//         /* background: black;
//         color: #FFFDFA; */
//         /* text-shadow: 0 0 1px #000; */
//         filter: blur(2x);
//         -webkit-filter: blur(1.5px);
//     }

//     @media screen and (max-width: 811px) {
//         /* margin-left: 16px; */
//         left: 16px;
//         font-size: 1.5rem;
//     }
// `;
