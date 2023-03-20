import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: fixed;
  z-index: 998;
  width: 100vw;
  height: calc(100vh + 1px);
  height: calc(100vh);
  display: block;

  ::-webkit-scrollbar {
    display: none;
  }

  overflow-y: hidden;
  overflow-x: none;
  /* cursor: url("/imgs/c_main.svg"), auto; */
  cursor: crosshair;

`;

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

export const FiltersContainer = styled.div`
  position: fixed;
  left: 0;
  left: calc(3.5vw + .25rem);
  
  top: 20rem;
  padding-top: .25rem;
  width: 3rem;

  overflow: hidden;
  display: flow-root;
  z-index: 999;

  /* overflow-x: hidden; */

  @media screen and (max-width: 811px) {
    display: flow-root;
    /* padding-left: 0.5rem; */
    top: calc(6vh + 1rem - 1px);
    /* width: calc((100vw * 2) / 3); */
    width: 3.5rem;
    /* height: 2rem; */
    overflow: hidden;
    left: unset;
    right: calc(0.9rem);
    /* left: calc((100vw / 3)); */
    height: calc(21%);
    border: 1px solid #201d17;
    /* display: none; */
  }
`;

export const Filter = styled.div`
  display: block;
  position: relative;
  /* width: 30rem; */
  /* z-index: 4; */
  /* display: inline; */
  width: 3rem;
  height: 2.9rem;
  text-align: center;
  font-size: 1.1rem;
  font-family: "JejuMyeongjo";
  letter-spacing: -0.1rem;
  color: black;
  /* padding-left: 1.4rem; */
  /* padding-right: 1.55rem; */
  padding-top: .9rem;

  cursor: ${({ fType }) => fType === 1 && '/imgs/c_1.svg' ||
    fType === 2 && '/imgs/c_2.svg' ||
    fType === 3 && '/imgs/c_3.svg'
  };

  /* transition: .2s all ease-in-out; */
  /* text-orientation: mixed; */
  /* writing-mode: vertical-rl; */
  /* height: 3.5vh; */
  /* border-radius: 3vh; */
  /* /* cursor: pointer; */
  margin-top: .9rem;
  /* margin-right: -0.5rem; */
  border: 1px solid #201d17;

  background: ${({ filterVal, fType }) =>
    ((filterVal === 1) & (fType === 1) && "black") ||
    ((filterVal === 2) & (fType === 2) && "black") ||
    ((filterVal === 3) & (fType === 3) && "black") ||
    (filterVal !== fType && "#FFFDFA")};
  color: ${({ filterVal, fType }) =>
    ((filterVal === 1) & (fType === 1) && "#FFFDFA") ||
    ((filterVal === 2) & (fType === 2) && "#FFFDFA") ||
    ((filterVal === 3) & (fType === 3) && "#FFFDFA")};

  /* font-weight: bold; */
  letter-spacing: -0.02rem;

  &:hover {
    /* transition: all 0.2s ease-in-out; */
    background: black;
    /* font-size: 2.8vh; */
    color: #fffdfa;
    /* text-shadow: 0 0 1px #000; */
    /* filter: blur(2x); */
    /* -webkit-filter: blur(1.5px); */
    /* transition: 0.1s all ease-in-out; */
    /* cursor: pointer; */
  }

  @media screen and (max-width: 811px) {
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

export const WorksContainer = styled.div`
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  /* grid-template-rows: 1fr 1fr 1fr 1fr;  */
  /* display: grid; */
  /* z-index: 5; */
  position: fixed;

  padding-top: 3vh;

  width: calc(100vw + 1rem);
  height: calc(100vh);
  /* height: 100vh; */
  /* text-align: justify; */
  /* max-height: 96vh; */
  
  overflow-y: scroll;
  overflow-x: hidden;
  /* left: 9.3vw; */
  /* margin-left: 1.7rem; */
  /* border-left: 1px solid #201D17; */
  padding-bottom: 1.5rem;
  /* border-right: 1px solid #201D17; */
  /* padding-top: .25rem; */
  /* top: 5rem; */
  /* top: calc(4.5rem - 1px); */
  /* left: calc(3.5rem - 1px); */
  padding-left: calc(3.5vw + 3rem + 3.35vw);
  left: 0;
  /* left: calc(7.15vw - 3.75rem + 6.25rem); */
  /* top: calc(3.5rem - 3px); */
  /* border: 5px solid blue; */
  z-index: ${(props) => props.zVal};
  /* z-index: 998; */

  @media screen and (max-width: 811px) {
    /* display: inline; */
    /* position: relative; */
    /* margin-top: 5vh; */
    /* width: calc(100vw + 1rem);
    height: calc(90.5vh + 4.5px);
    left: 0;
    top: 0;
    bottom: 0; */
  }
`;

export const Divider = styled.span`
  height: 10.75rem;
  border-left: 1px solid black;
  padding-top: 3.38rem;
  padding-bottom: 3.33rem;
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

export const WorkImageItem = styled.div`
  z-index: 999;
  width: calc(85.7vw - 6.3rem);
  height: 16.5vh;
  background: green;
`

export const WorkItem = styled.div`
  z-index: 3;
  width: 97%;
  width: calc(86.35vw - 5.9rem);

  opacity: ${({ filteredOut }) => (filteredOut ? "0.2" : "1")};
  /* user-select: ${({ filteredOut }) => (filteredOut ? "none" : "auto")}; */
  /* pointer-events: ${({ filteredOut }) => (filteredOut ? "none" : "auto")}; */
  text-decoration: none;

  // 6.85 + 3rem 13.7 + 6 96.3

  height: 16vh;

  border: 1px solid #201d17;

  /* ${({ noHover }) =>
    noHover &&
    `
        // cursor: default;
        // opacity: 0;
        // z-index: -1;
        color: red;
    `} */

  margin-bottom: 1.5rem;

  color: ${({ selected }) => (selected ? "#FFFDFA" : "#201D17")};

  font-size: 3.25rem;
  font-family: "SpaceMono";
  letter-spacing: -0.07rem;

  transition: .15s scale ease-in-out;

  &:hover {
    /* /* cursor: pointer; */
    /* cursor: url('../imgs/c1.svg'), auto; */
    /* cursor: url("/imgs/c_work.svg"), auto; */
    /* cursor: url("/imgs/c_open2.svg"), auto; */
    color: #fffdfa;
    background: #201d17;
    scale: 1.0125;
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

export const WorkName = styled.p`
  z-index: 1;
  max-width: 66%;
  padding-left: 3.75%;
  /* padding-top: 3.25vh; */
  padding-bottom: .2vw;

  font-family: "CG LI";
  font-size: 4rem;
  font-size: calc(16vh / 3);
  letter-spacing: -0.15vh;

  opacity: 1;
  text-decoration: none;
  white-space: nowrap;

  /* ${({ noHover }) =>
    noHover &&
    `
            // cursor: default;
            // opacity: 0;
            // z-index: -1;
            color: red;
    `} */

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

    /* ${WorkItem}:hover & {
            z-index: 999;
            color: ${({ selected }) => (selected ? "black" : "grey")};
            margin-left: 0;
            transition: all 0.3s ease-in-out;
        }; */
  } ;
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

export const DetailsContainer = styled.div`
  /* width: 100%; */
  /* height: 50%; */
  /* outline: 1px solid blue; */

  font-family: "SpaceMono";
  padding-left: 0;
  margin-left: 0;
  font-size: 1.3rem;
  line-height: 70%;
  letter-spacing: -0.05rem;
  font-style: normal;
  display: block;

  /* position: absolute; */
  padding-bottom: 1rem;
  padding-top: 0.5rem;

  /* color: #201D17; */
  @media screen and (max-width: 811px) {
    /* position: relative; */
    /* align-items: baseline; */
    /* bottom: 0; */
    /* height: 1rem; */
    /* display: flex; */
    padding-top: 0.45rem;
  }
`;

export const TagsContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
    right: 0;
  width: 27.5%;

  /* padding-left: 2.5rem; */
  padding-left: 3.3%;
  /* margin-left: 76%;
  margin-top: -9.4%; */

  /* border: 1px solid blue; */

  /* text-align: left; */

  ${WorkContents}:hover & {
    /* border-left: 1px solid #FFFDFA; */
    /* color: #201d17; */
    /* background: #FFFDFA; */
  }

  @media screen and (max-width: 811px) {
    /* outline: 1px solid blue; */
    width: 45%;
    height: 10%;
    padding-left: 0rem;
    padding-top: 0;
    text-align: left;

    vertical-align: bottom;
    margin-top: 6.5rem;
    position: absolute;
    left: 1rem;
    /* bottom: 1rem; */
    display: block;
    display: none;
  }
`;

export const ProjectTag = styled.p`
  opacity: 0.9;
  display: block;

  font-family: "JejuMyeongjo";
  font-size: 1.8vh;
  line-height: 138%;
  letter-spacing: -0.05rem;

  @media screen and (max-width: 811px) {
    bottom: 0;
    /* position: absolute; */
    display: grid;
    font-family: "SpaceMono";
    font-size: 1rem;
    line-height: 110%;
    letter-spacing: -0.05rem;
    text-align: left;
    /* display: none; */
  }
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

// Responsive Display Attribute in Image
export const Image = styled.div`
  user-select: none;
  position: fixed;
  display: grid;
  /* opacity: 0; */
  z-index: 999;
  /* height: 25vw; */
  /* height: 100%; */
  overflow: hidden;
  /* width: 25vw; */
  width: 100%;
  pointer-events: none;
  /* transform: translate(-46.5%, -52.5%); */
  /* top: 50%; */
  /* left: 50%; */
  /* right: 3rem; */
  /* bottom: 3.5rem; */
  color: #fffdfa;
  transition: 0.15s all ease-in-out;

  /* border: 2px solid blue; */

  user-select: none;
  position: fixed;
  display: grid;
  opacity: 0;

  z-index: 999;

  max-height: 62.5vh;
  overflow: hidden;
  max-width: 25vw;

  pointer-events: none;

  transform: translate(-46.5%, -50%);

  top: 50%;
  left: 50%;

  color: #FDFEF5;

  ${WorkImageItem}:hover & {
    display: grid;
    z-index: 999;
    opacity: 0.925;
    user-select: none;
  }

  &:hover {
        display: none; 
    }

  /* img {
    height: auto;
    max-height: 80%;
    top: 5%;
    left: 50%;
    width: auto;
    max-width: 20vw;
    position: relative;
  } */


  img {
        width: '100%';
        max-height: '100%';
        align-items: 'right';
        align-self: 'end';
    }

  @media screen and (max-width: 811px) {
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

//TODO: Get rid of Content BG, have Content Container push all the way to the left, but populate the left x% of this Container to be transp. and do what the contentBG did. this is so that the img zoom leemnt in the singleWork comp. can be most of the screen
export const ContentContainer = styled.div`
  /* display: ${({ showContent }) => (showContent ? "grid" : "none")}; */
  z-index: 999;
  height: calc(100vh);
  /* margin-top: 1.75rem; */
  /* height: 100vh; */
  /* width: calc(100vw - 7rem); */
  width: calc(100vw);
  /* width: calc(82vw - 4.4rem); */
  /* left: 20vw; */
  position: fixed;
  /* bottom: 0; */
  overflow-y: hidden;
  overflow-x: none;
  /* background: #FFFDFA; */
  /* width: 83.4vw; */
  /* top: 1.2rem; */
  /* bottom: 4rem; */
  /* height: 25vh; */
  /* margin-left: 12rem; */

  ::-webkit-scrollbar {
    display: none;
  }

  /* margin-top: 2rem;     */
  /* border: 1px solid black; */
  /* background: green; */
  /* opacity: .3; */
  /* overflow: hidden; */

  @media screen and (max-width: 811px) {
    /* width: calc(100vw - 3.5rem); */
    overflow: hidden;
    height: 100%;
    /* top: 6vh; */
    margin-top: 0.25rem;
    /* background: green; */
  }
`;

export const ContentBg = styled.div`
  position: fixed;
  /* top: 1.75rem; */
  top: 0;
  /* left: 3.5rem; */
  height: calc(100vh);
  border-left: 1px solid #201d17;
  width: calc(18vw + 1px);
  width: calc(6vw + 1px);
  background: #fffdfa;
  /* opacity: 0; */
  /* cursor: pointer; */
  /* opacity: 0.7; */
  /* border: 1px solid black; */
  z-index: ${({ isBehind }) => (isBehind ? 990 : 999)};

  @media screen and (max-width: 811px) {
    /* left: 0; */
    /* width: calc(3.5rem + 1px); */
    width: calc(3rem);
    margin-left: calc(3.5rem - 5.5vw + 1px);
    top: calc(6vh - 1px);
    height: calc(95vh);
    border-left: 1px solid #201d17;
  }
`;
// (94vw - 3.5rem - 1px)
// (88.5vw + 4px)

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
