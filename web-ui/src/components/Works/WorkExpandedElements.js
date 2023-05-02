import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Container = styled.div`
    // display: flex;
    position: fixed;
    /* margin: 1rem; */
    left: 0;
    top: 103px;
    width: 100vw;
    height: calc(100vh - 103px);

    /* top: 6.6vh; */
    /* overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    } */

    // background: rgba(64, 63, 63, 0.3);
    background: black;

    cursor: crosshair;

    overflow-x: hidden;
    overflow-y: hidden;

    @media screen and (max-width: 767px) {
    /* margin-left: 16px; */
    }
`;

export const WorkContent = styled.div`
    z-index: 990;
    position: fixed;
    left: ${({ isCS }) => (isCS ? '16vw' : '24vw')};
    top: 103px;
    height: calc(100vh - 103px);
    // width: calc(72vw + 48px);
    width: calc(68vw - 20px + 12px);

    align-items: left;
    padding-bottom: 100px;
    padding-top: 0px;
    padding-left: 20px;
    padding-right: 32px;

    // background: rgba(64, 63, 63, 0.3);
    // border: 1px solid blue;
    background: black;

    overflow-y: scroll;
    overflow-x: hidden;

    @media screen and (max-width: 767px) {
        left: 0;
        top: 128px;
        width: calc(100vw + 14px);
        height: calc(100vh - 124px - 90px);
        padding-left: 14px;
        padding-right: 28px;
    }
`

export const TopSticky = styled.div`
    z-index: 999;
    position: fixed;
    top: 125px;
    left: ${({ isCS }) => (isCS ? 'calc(16vw + 20px)' : 'calc(24vw + 20px)')};
    width: calc(68vw - 80px + 12px);
    height: 18px;
    display: inline-grid;
    grid-template-columns: 1fr 1fr;

    // background: green;
    // border: 1px solid white;

    @media screen and (max-width: 767px) {
        // display: none;
        top: 146px;
        padding-top: 1px;
        left: unset;
        right: 14px;
        width: 70vw;
    }
`

export const Header = styled.div`
    align-items: start;
    padding-top: 0px;
    padding-bottom: 40px;
    margin-left: 12%;
    width: 76%;

    // border: 1px solid blue;

    @media screen and (max-width: 767px) {
        margin-left: 0;
        width: 100%;
        padding-top: 64px;
        padding-bottom: 38px;
    }
`

export const DateClass = styled.div`
    text-align: left;
    display: flex;
    align-items: start;
    margin-left: calc(12% - 4px);
    // padding-bottom: 26px;
    // border: 1px solid blue;

    display: none;

    @media screen and (max-width: 767px) {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-left: unset;
        align-items: unset;
        overflow: hidden;
    }
`

export const Date = styled.div`
    // padding-bottom: 2px;
    font-family: "SS3";
    font-size: 12px;
    color: #9E9E9E;

    // border: 1px solid blue;
    @media screen and (max-width: 767px) {
        float: right;
        text-align: right;
    }
`

export const Class = styled.div`
    // padding-bottom: 2px;
    font-family: "SS3";
    font-size: 12px;
    font-weight: 600;
    color: #9E9E9E;
    float: right;
    text-align: right;
    
    // border: 1px solid blue;
`

export const CaseStudy = styled.a`
    display: ${({ isCS }) => (isCS ? 'inline-grid' : 'none')};
    font-family: "SS3";
    font-size: 12px;
    color: #95ACFF;
    text-transform: uppercase;
`

export const CaseStudy2 = styled.a`
    display: inline-grid;;
    font-family: "SS3";
    font-size: 12px;
    color: #95ACFF;
    text-transform: uppercase;

    @media screen and (max-width: 767px) {
        display: none;
    }
`

export const LeftTitle = styled.div`
    text-align: left;
    display: flex;
    align-items: start;
    font-size: 14px;
    color: white;
    line-height: 133%; 

    display: inline-grid;

    @media screen and (max-width: 767px) {
        display: none;
    }
`

export const Fancy = styled.div`
    color: #4A4A4A;
    font-size: 50px;
    font-family: 'Iskoola';
    /* border: 2px solid blue; */
` 

export const InsideHeaderContainer = styled.div`
    padding-left: 8px;
    padding-right: 10px;
    padding-top: 17px;
`

export const Overview = styled.div`
    text-align: left;
    /* padding-left: 12%; */
    // padding-bottom: 38px;

    // border-bottom: 1px solid #757575;

    color: #F6F6F6;
    font-family: "SS3";
    font-size: 30px;
    line-height: 121%;
    font-weight: 500;

    @media screen and (max-width: 767px) {
        font-size: 24px;
    }
`

export const OverviewTag = styled.p`
    color: #B5B5B5;
    font-family: "SS3";
    font-size: 12px;
    text-transform: uppercase;
`

export const PicContainer = styled.div`
    // top: 0;
    // width: calc(68vw - 20px + 12px);
    // height: calc(88vh - 103px);
    // padding-left: 12%;
    margin-bottom: ${({ isLast }) => isLast ? '3.6vh' : '30px'};
    margin-top: 12px;
    // height: calc(90vh);
    // border: 2px solid blue;
    align-items: center;
    text-align: center;
    position: relative;
    // position: ${({isLast}) => isLast ? 'sticky' : 'relative'};
    // overflow: hidden;
    
    // padding-left: 20px;
    padding-right: 20px;
    margin-right: 12px;
    width: calc(68vw - 80px + 12px);

    img {
        object-fit: scale-down;
        // max-height: 100%;
        // max-width: 100%;
        max-height: 84vh;
        max-width: calc(68vw - 80px + 12px);
        // width: 80vw;
        z-index: -1;
        /* border: 1px solid #201D17; */
    }

    @media screen and (max-width: 767px) {
        width: calc(100vw - 28px);
        padding-left: 0;
        padding-right: unset;
        margin-right: unset;

        img {
            max-width: 100%;
            max-height: calc(100vh - 300px);
        }
    }
`

export const Subsection = styled.div`
    position: relative;
    margin-left: 12%;
    /* width: calc(62.1% - 4rem); */
    width: 76%;
    // top: 0;
    padding-top: 28px;
    padding-bottom: ${({ isLast }) => isLast ? '3.6vh' : '16px'};
    scroll-margin-top: 20px;

    /* border: 2px solid blue; */

    color: #FFFFFF;
    font-family: "SS3";
    font-size: 26px;
    text-align: left;
    /* align-items: right; */

    @media screen and (max-width: 767px) {
        width: 100%;
        margin-left: 0;
        // padding-top: 28px;
        font-size: 24px;
    }
`

export const Sub2 = styled.div`
    position: relative;
    margin-left: 12%;
    /* width: calc(62.1% - 4rem); */
    width: 76%;
    // max-width: 80ch;
    // top: 0;
    padding-bottom: ${({ isLast }) => isLast ? '3.6vh' : '16px'};
    scroll-margin-top: 20px;

    /* border: 2px solid blue; */

    color: #A1A1A1;
    font-family: "SS3";
    font-weight: 500;
    font-size: 19px;
    text-align: left;
    /* align-items: right; */

    @media screen and (max-width: 767px) {
        width: 100%;
        margin-left: 0;
    }
`

export const InlineLink = styled.div`
    position: relative;
    margin-left: 12%;
    /* width: calc(62.1% - 4rem); */
    width: 76%;
    // max-width: 80ch;
    top: 0;
    padding-bottom: ${({ isLast }) => isLast ? '3.6vh' : '16px'};
    scroll-margin-top: 18px;

    /* border: 2px solid blue; */

    opacity: 0.7;
    color: #FFFFFF;
    text-decoration: underline;
    font-family: "SS3";
    font-size: 19px;
    text-align: left;
    /* align-items: right; */

    &:hover {
        opacity: 1;
    }

    @media screen and (max-width: 767px) {
        margin-left: 0;
        width: 100%;
    }
`

export const Desc = styled.p`
    position: relative;
    margin-left: 12%;
    margin-top: -10px;
    /* width: calc(62.1% - 4rem); */
    width: 76%;
    // max-width: 80ch;
    // max-width: 600px;
    // top: 0;
    padding-bottom: ${({ isLast }) => isLast ? '3.6vh' : '24px'};
    /* border: 2px solid blue; */

    color: #FFFFFF;
    font-family: "SS3";
    font-size: 19px;
    text-align: left;
    line-height: 140%;
    /* align-items: right; */

    @media screen and (max-width: 767px) {
        margin-top: -6px;
        margin-left: 0;
        width: 100%;
    }
`

export const Controls = styled.div`
    z-index: 999;
    display: inline-grid;
    grid-template-rows: 50px 20px 60px 16px;
    position: fixed;
    top: 103px;
    left: 20px;
    height: calc(100vh - 103px);
    width: 16vw;

    // padding-left: 20px;
    padding-right: 20px;
    padding-top: 22px;
    /* align-items: right; */
    // text-align: right;

    // background: rgba(64, 63, 63, 0.3);

    /* background: green; */

    @media screen and (max-width: 767px) {
        left: 0;
        display: inline-grid;
        grid-template-rows: unset;
        grid-template-columns: 1fr 1fr;
        top: 146px;
        padding-left: 14px;
        padding-top: 0;
        height: 40px;
        width: 100vw;
        overflow: hidden;
        // border: 1px solid green;
    }   
`

export const Back = styled(LinkRouter)`
    /* height: 2.8vw; */
    color: #FFFFFF;
    font-family: "SS3";
    font-size: 14px;

    text-decoration: none;
    transition: all 0.1s ease-in-out;

    &:hover {
        /* background: black; */
        /* color: white; */
        opacity: 0.6;
    }

    @media screen and (max-width: 767px) {
        /* margin-left: -.255px; */
        // padding-left: 14px;
    }
`

export const Visit = styled.div`
    color: #FFFFFF;
    font-family: "SS3";
    font-size: 14px;

    text-decoration: none;
    transition: all 0.1s ease-in-out;

    &:hover {
        /* background: black; */
        /* color: white; */
        opacity: 0.6;
    }

    @media screen and (max-width: 767px) {
        // position: absolute;
        // top: 0;
        // right: 0;
        // margin-right: 14px;
        float: right;
        text-align: right;
        // border: 1px solid green;
    }
`

export const TableOfContents = styled.div`
    display: ${({ isCS }) => (isCS ? 'block' : 'none')};

    z-index: 999;
    position fixed;
    right: 28px;
    top: 103px;
    // width: calc(100vw -);
    width: 16vw;
    height: calc(100vh - 103px);

    padding-top: 20px;
    padding-left: 20px;
    // padding-bottom: 20px;
    padding-right: 26px;
    
    overflow-x: hidden;
    overflow-y: scroll;

    background: black;
    // border: 1px solid orange;

    p {
        color: #FFFFFF;
        font-family: "OpenSans";
        font-weight: 600;
        font-size: 14px;
    }

    @media screen and (max-width: 767px) {
        margin-left: 100vw;
        display: none;
    }
`

export const MobileTOCContainer = styled.div`
    display: none;

    @media screen and (max-width: 767px) {
        position: fixed;
        display: grid;
        width: 100vw;
        height: 60vh;
        // height: 100vh;
        // height: calc(100vh + 180px);
        // top: 0;
        left: 0;
        // top: 100vh;
        // bottom: 50px;
        z-index: 999;
        // padding: 8px 14px 118px 14px;
        border-top: 1px solid #313131;

        background: rgba(50, 50, 50, 0.65);
        backdrop-filter: blur(12px);
        // overflow-x: hidden;
        // overflow-y: scroll;
        overflow-y: hidden;

        // background: blue;

    }
`

export const MobileTOC = styled.div`
    position: absolute;
    top: -24px;
    left: 0;
    overflow-y: auto;
    height: 100%;
    // width: calc(100vw) - 28px;
    width: 100%;
    padding-left: 14px;
    padding-right: 14px;
    padding-bottom: 90px;
    padding-top: 16px;
`

export const MobileTOCToggle = styled.div`
    display: none;    

    @media screen and (max-width: 767px) {
        display: block;
        z-index: 1000;
        position: fixed;
        left: 0;
        bottom: 50px;
        height: 40px;
        width: 100vw;
        background: rgba(38, 38, 40, 0.6);
        backdrop-filter: blur(12px);
        border-top: 1px solid #313131;
    }
    
`

export const CloseTOC = styled.div`
    z-index: 999;
    position: absolute;
    right: 14px;
    top: 16px;

    font-family: 'SS3';
    font-size: 14px;
    color: white;
`

export const DividerTOC = styled.div`
    z-index: 1000;
    position: absolute;
    left: 0;
    top: 0;
    padding: 10px 14px 0px 14px;
    height: 40px;
    width: 100vw;
    border-bottom: .5px solid #313131;
`

export const MobileTOCLabel = styled.div`
    // padding-bottom: 12px;
    color: #FFFFFF;
    font-family: "SS3";
    font-size: 14px;
`

export const TOCItem = styled.div`
    padding-top: 20px;
    color: #A3A3A3;
    font-family: "SS3";
    font-size: 14px;

    &:hover {
        /* background: black; */
        /* color: white; */
        opacity: 0.6;
        text-decoration: underline;
    }

    @media screen and (max-width: 767px) {
        opacity: 0.9;
        color: white;
        padding-top: 24px;
        font-size: 19px;
    }
`

export const TOCItem2 = styled.div`
    padding-top: 10px;
    margin-left: 14px;
    color: #A3A3A3;
    font-family: "SS3";
    font-size: 12px;
    line-height: 17px;
    opacity: 0.7;

    &:hover {
        /* background: black; */
        /* color: white; */
        opacity: 1;
    }

    @media screen and (max-width: 767px) {
        opacity: 1;
        padding-top: 14px;
        font-size: 14px;
        margin-left: 16px;
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
    color: white;
    font-family: "SS3";
    font-size: 32px;
    line-height: 38px;

    @media screen and (max-width: 767px) {
        // margin-top: -14px;
        // margin-bottom: -6px;
        margin-top: 4px;
        margin-bottom: 10px;
    }
`

export const TagsContainer = styled.div`
    display: inline-grid;
    padding-top: 2px;
    padding-bottom: 32px;

    @media screen and (max-width: 767px) {
        display: grid;
        padding-top: 4px;
        // grid-template-columns: unset;
    }
`

export const Tag = styled.p`
    padding-bottom: 4px;

    color: #949494;
    font-family: "SS3";
    font-size: 14px;
`

export const Details = styled.div`
    margin-top: -6px;
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

    @media screen and (max-width: 767px) {
        margin-top: -6px;
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
