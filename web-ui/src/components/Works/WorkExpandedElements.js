import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Container = styled.div`
  display: flex;
  position: fixed;
  /* margin: 1rem; */
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  /* top: 6.6vh; */
  /* overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    } */

  cursor: crosshair;

  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    /* margin-left: 16px; */
  }
`;

export const LeftSection = styled.div`
    position: absolute;
    z-index: -1;
    /* width: calc(83.4vw - 6rem); */
    width: calc(16.5vw);
    left: calc(3.5vw + 3rem + 3.35vw);
    /* left: calc(7.15vw + 3rem); */
    top: 2.5vh;

    /* 6.85 + 16.5 + 3rem + 3
    9.85 + 16.5 + 3rem
    26.35 + 3rem */

    padding-top: 4vh;
    /* border: 1px solid blue; */

    overflow-x: hidden;
`

export const RightSection = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    justify-content: center;
    padding-bottom: .1rem;
    padding-top: 3vh;

    z-index: 990;

    height: 100vh;
    width: calc(100vw + 1.5rem);
    /* width: calc(63.4vw - 10.5rem);
    left: calc(27.15vw + 6rem); */

    /* border: 1px solid #201D17; */

    overflow-y: scroll;
    overflow-x: hidden;
`

export const Images = styled.div`
    position: fixed;
    display: grid;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding-bottom: calc(50vh);
    padding-left: calc(27.15vw + 6rem);

    border: 10px solid blue;

    overflow-y: scroll;
    overflow-x: hidden;

    /* @media screen and (max-width: 768px) {
        position: relative;
        left: 9.5px;
        top: 10vh;
        display: grid;
        width: 89.5vw;
        padding-bottom: 3rem;
    } */
`

export const PicContainer = styled.div`
    top: 0;
    margin-bottom: ${({ isLast }) => isLast ? '3.6vh' : '2.5vh'};
    /* margin-bottom: 2.45rem; */
    /* margin-left: calc(25.15vw + 6.5rem); */
    margin-left: calc(27vw + 3rem);

    /* border: 2px solid blue; */
    align-items: center;
    text-align: center;
    position: ${({isLast}) => isLast ? 'sticky' : 'relative'};
    /* width: calc(62.1% - 4rem); */
    /* 100 - (7.1 + 3rem + 27 + 3rem) */
    width: calc(66vw - 6rem);

    
    img {
        object-fit: scale-down;
        max-height: 90vh;
        max-width: 100%;
        /* border: 1px solid #201D17; */
    }
`

export const PicDesc = styled.p`
    position: relative;
    width: calc(62.1% - 4rem);
    top: 0;

    /* border: 2px solid blue; */

    margin-left: calc(25.15vw + 6.5rem);
    padding-bottom: ${({ isLast }) => isLast ? '3.6vh' : '2.5vh'};
    /* padding-top: 2rem; */
    padding-left: 10%;
    padding-right: 10%;

    font-family: "JejuMyeongjo";
    font-size: 1rem;
    text-align: center;
    align-items: center;
`

export const Controls = styled.div`
    z-index: 999;
    
    position: fixed;
    top: 3.1vh;
    /* width: calc(20vw - 1rem); */
    height: 96.9vh;
    left: calc(7.15vw + 3rem);

    /* border: 1px solid blue; */
`

export const Header = styled.div`
    position: absolute;
    top: 0;
    /* left: calc(7.15vw + 3rem); */
    z-index: 999;
    text-decoration: none;

    @media screen and (max-width: 768px) {
        /* top: -.6rem;
        z-index: 9;
        padding-top: 5rem;
        padding-bottom: 1.25rem;
        width: 100%;
        overflow-x: hidden; */
    }
`

export const Back = styled(LinkRouter)`
    /* position: fixed; */
    /* width: 6.5rem; */
    height: 2.8vw;
    /* margin-left: 50.8vw; */
    /* margin-left: 1.6vw; */
    /* margin-top: .35vh; */
    /* padding-left: .5rem; */
    /* padding-right: .5rem; */
    /* padding: .4vw; */
    /* padding-right: 1.1vw; */
    /* padding-left: 1.1vw; */

    /* border: 1px solid #201D17; */
    /* border-radius: 70px; */
    font-size: 1rem;
    font-family: "JejuMyeongjo";

    color: #201D17;;
    /* background: white; */
    text-decoration: none;
    transition: all 0.1s ease-in-out;

    &:hover {
        /* background: black; */
        /* color: white; */
        opacity: 0.6;
    }

    @media screen and (max-width: 768px) {
        /* margin-left: -.255px; */
        /* height: 5vh;
        margin-top: -.4vh;
        margin-left: 8px;
        padding: .75vh;
        padding-right: 2vw;
        padding-left: 2vw;
        font-size: 3vh; */
    }
`

export const Content = styled.div`
    /* padding-left: 50.8vw; */
    /* margin-left: 3vw; */
    width: 49vw;
    position: relative;
    overflow-wrap: word-break;

    @media screen and (max-width: 768px) {
        /* display: grid;
        padding-left: 0;
        padding-top: 4rem;
        width: 96vw;
        padding-bottom: 4rem; */
        /* font-size: 3.5rem; */
        /* overflow-wrap: word-break; */
        /* overflow-x: hidden; */
    }
`

export const FixedContent = styled.div`
    /* left: 50.8vw; */
    position: fixed;
    top: 7.75vh;
    left: 14.4vw;
    width: 33.6vw;
    /* background: white; */

    @media screen and (max-width: 768px) {
        top: 8vh;
        left: 1.5vw;
        width: 97vw;
        position: relative;
        /* overflow-x: hidden; */
    }
`

export const Title = styled.h1`
    /* width: 30%; */
    position: relative;
    text-decoration: none;
    /* font-weight: bold; */
    /* font-style: light italic; */
    color: black;
    line-height: 88%;
    margin-bottom: 1vh;

    font-family: 'CG LI';
    /* font-family: "Baskerville"; */
    /* font-family: "JejuMyeongjo"; */
    font-size: 5.2vh;
    letter-spacing: -.1vh;

    @media screen and (max-width: 768px) {
        /* margin-top: 0rem;
        font-size: 4rem;
        position: relative; */
    }
`

export const TagsContainer = styled.div`
    position: relative;
    /* margin-top: 1.25rem; */

    @media screen and (max-width: 768px) {
        /* margin-top: 1rem;   
        position: relative;     */
    }
`

export const Tag = styled.p`
    padding-left: .1vw;

    font-family: "JejuMyeongjo";

    font-size: 1rem;
    letter-spacing: -.01rem;
    line-height: 125%;

    @media screen and (max-width: 768px) {
        /* padding-left: .5rem;        */
    }
`

export const Details = styled.div`
    /* padding-top: 4vh; */
    padding-left: .1vw;
    padding-right: 1.5vw;
    width: calc(100% + 1rem);

    font-family: "GoudyBookletter";
    font-family: "Cardo";
    font-family: "FrenchCanon";
    font-family: "JejuMyeongjo";
    /* font-family: "Orpheus"; */

    max-height: 47.5vh;
    overflow-y: scroll;
    overflow-x: hidden;

    font-size: 1rem;
    letter-spacing: -.01rem;
    line-height: 130%;

    @media screen and (max-width: 768px) {
        /* padding-top: 1rem;
        padding-left: .5vw;
        width: 94%; */
    }
`

export const Label = styled.p`
    font-family: "Helvetica Neue";
    /* font-family: "AGHelvetica"; */
    /* font-family: "GoudyBookletter"; */
    font-weight: bold;
    font-size: .75rem;
    letter-spacing: .01rem;
    text-transform: uppercase;

    padding-bottom: .8vh;
    padding-top: 2.5vh;
`

export const ThumbnailSelector = styled.div`
    z-index: 999;
    position: fixed;
    width: 6.5vw;
    height: 4vh;
    /* top: ${props => (props.level)}; */
    top: 48vh;
    right: 2.25vw;
    border: 1px solid black;

    @media screen and (max-width: 768px) {
        /* display: none; */
    }
`

export const Thumbnails = styled.div`
    position: fixed;
    right: 3vw;
    top: 32vh;
    display: grid;
    width: 5vw;
    height: 36vh;
    z-index: 999;
    cursor: default;
  cursor: crosshair;

    text-align: center;

    /* background: grey; */
    opacity: 0.7;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const PicScroll = styled(LinkScroll)`
    /* position: relative; */
    height: ${props => (props.relHeight)};
    width: 100%;
    /* cursor: pointer; */
    cursor: crosshair;
    margin-top: .25vh;
    margin-bottom: .25vh;
`

export const Top = styled(LinkScroll)`
    display: none;

    @media screen and (max-width: 768px) {
        position: fixed;
        display: flex;
        z-index: 990;
        /* cursor: pointer; */
        font-size: 1.5rem;
        background: white;
        color: black;
        text-decoration: none;

        bottom: 8vh;
        right: 25px;
        width: 5rem;
        height: 5rem;
        padding-left: 1rem;
        padding-top: 1.6rem;
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
        color: white;        
    }
`

export const NavButtons = styled.div`
    z-index: 998;
    position: absolute;
    left: 0;
    bottom: calc(4vh);
    cursor: pointer;
    /* border: 1.5px solid black; */
`

export const PrevWork = styled(LinkRouter)`
    width: 3vw;
    height: 3vw;
    padding-right: 1rem;

    font-size: 1rem;
    font-family: "JejuMyeongjo";

    color: #201D17;
    text-decoration: none;
    /* opacity: ${({ first }) => (first ? '0.4' : '1')}; */
    /* pointer-events: ${({ first }) => (first ? 'none' : 'auto')}; */
    transition: all 0.1s ease-in-out;

    /* opacity: ${({ currId }) => currId === 1 && 0.4};
    user-select: ${({ currId }) => currId === 1 && 'none'};
    pointer-events: ${({ currId }) => currId === 1 && 'none'}; */

    &:hover {
        /* background: black; */
        /* color: white; */
        opacity: 0.6;
    }
`

export const NextWork = styled(LinkRouter)`
    width: 3vw;
    height: 3vw;

    font-size: 1rem;
    font-family: "JejuMyeongjo";

    color: #201D17;
    text-decoration: none;

    cursor: pointer;
    /* opacity: ${({isLast}) => (isLast ? '0.4' : '1')}; */
    /* pointer-events: ${({ isLast }) => (isLast ? 'none' : 'auto')}; */
    transition: all 0.1s ease-in-out;

    &:hover {
        /* background: black; */
        /* color: white; */
        opacity: 0.6;
    }
`
