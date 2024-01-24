import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Container = styled.div`
    // display: flex;
    /* position: fixed; */
    /* margin: 1rem; */
    /* left: 0; */
    /* top: 0; */
    // top: 103px;
    width: calc(100vw);
    height: calc(100vh);
    z-index: 1;

    overflow: hidden;

    /* top: 6.6vh; */
    /* overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    } */

    // background: rgba(64, 63, 63, 0.3);
    background: ${props => props.theme.bg};

    /* cursor: crosshair; */

    @media screen and (max-width: 767px) {
    /* margin-left: 16px; */
    }
`;


export const WorkContent = styled.div`
    /* z-index: 990; */
    position: fixed;
    left: ${({ isCS }) => (isCS ? 'calc(18vw + 52px)' : '25vw')};
    /* left: 33vw; */
    /* left: calc(17vw + 52px); */
    top: 80px;
    // top: 103px;
    height: calc(100vh - 80px);
    // height: calc(100vh - 103px);
    // width: calc(72vw + 48px);
    /* width: ${({ isCS }) => (isCS ? 'calc(66.5vw - 40px)' : 'calc(81vw + 14px)')}; */
    width: ${({ isCS }) => (isCS ? 'calc(64vw)' : 'calc(70vw)')};
    /* width: 63vw; */

    align-items: left;
    padding-bottom: 100px;
    /* padding-top: calc(28px + 90px); */
    /* padding-top: calc(78px + 23px); */
    padding-top: 20px;
    padding-left: 3vw;
    /* padding-right: ${({ isCS }) => (isCS ? '32px' : 'calc(14px + 11vw)')}; */
    padding-right: 2.5vw;

    // background: rgba(64, 63, 63, 0.3);
    /* border: 1px solid blue; */
    /* background: ${props => props.theme.primary}; */

    /* border-left: 1px solid ${props => props.theme.border}; */
    /* border-top: 1px solid ${props => props.theme.border}; */

    overflow-y: scroll;
    overflow-x: hidden;

    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 767px) {
        position: fixed;
        left: 0;
        top: 100px;
        z-index: 2;
        width: 100vw;
        // height: calc(100vh - 124px - 90px);
        height: calc(100vh - 100px - 52px);
        padding-left: 14px;
        padding-right: 14px;
        padding-bottom: 130px;
        // padding-bottom: 90px;
        padding-top: 50px;
        border-left: unset;
    }
`

export const TopSticky = styled.div`
    /* z-index: 1; */
    position: fixed;
    top: 0;
    padding-top: 18px;
    /* left: ${({ isCS }) => (isCS ? 'calc(17vw + 20.5px)' : 'calc(21vw + 20px)')}; */
    left: calc(36vw);
    padding-left: 24px;
    padding-right: 24px;
    /* width:  ${({ isCS }) => (isCS ? 'calc(66.5vw - 60.5px)' : 'calc(75vw - 80px + 11.5px)')}; */
    width: calc(64vw - 128px);
    height: 78px;
    display: inline-grid;
    /* grid-template-columns: 74px 1fr 1fr; */
    grid-template-columns: auto auto;
    grid-template-rows: 26px 1fr;
    // 756px max
    overflow: hidden;

    background: ${props => props.theme.bgNav};
    backdrop-filter: blur(6px);
    /* border-left: 1px solid ${props => props.theme.border}; */
    /* border-bottom: 1px solid ${props => props.theme.border}; */

    display: none;

    // background: green;
    /* border: 1px solid blue; */

    @media screen and (max-width: 767px) {
        display: inline-grid;
        /* border-left: unset; */
        border-bottom: unset;
        grid-template-columns: 1fr 80px;
        grid-template-rows: unset;
        background: unset;
        backdrop-filter: unset;
        padding-right: unset;
        padding-left: unset;
        padding-top: unset;
        top: 111.5px;
        left: unset;
        right: 14px;
        width: fit-content;
        height: 18px;
        /* background: green; */
    }
`

export const Header = styled.div`
    align-items: start;
    padding-bottom: 60px;
    // margin-left: 12%;
    width: 100%;

    margin-left: 0;
    // width: 100%;

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
    /* line-height: 145%; */
    /* margin-bottom: 16px;  */
    padding-top: 3px;
    letter-spacing: 0.15px;
    color: ${props => props.theme.secondary};
    /* float: right; */
    align-content: end;
    align-items: end;
    /* text-align: right; */
    /* margin-top: 6px; */

    /* border: 1px solid blue; */
    @media screen and (max-width: 767px) {
        margin-top: unset;
        float: right;
        text-align: right;
    }
`

export const Class = styled.div`
    // padding-bottom: 2px;
    font-family: "SS3";
    font-size: 12px;
    font-weight: 600;
    /* line-height: 145%; */
    color: ${props => props.theme.secondary};
    /* float: right; */
    /* text-align: right; */
    align-items: end;
    align-content: end;
    /* margin-top: -5px; */
    
    // border: 1px solid blue;
    @media screen and (max-width: 767px) {
        margin-top: 3px;
        font-family: "SS3";
        font-size: 12px;
        font-weight: 600;
        /* line-height: 145%; */
        color: ${props => props.theme.secondary};
        float: right;
        text-align: right;
    }
`

export const CaseStudy = styled.a`
    display: grid;
    oapcity: ${({ isCS }) => (isCS ? '1' : '0')};
    font-family: "SS3";
    font-size: 12px;
    color: ${props => props.theme.cs};
    text-transform: uppercase;
`

export const CaseStudy2 = styled.div`
    display: grid;
    oapcity: ${({ isCS }) => (isCS ? '1' : '0')};
    font-family: "SS3";
    font-size: 12px;
    color: ${props => props.theme.cs};
    text-transform: uppercase;

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
    /* width: 80%; */
    max-width: 756px;
    /* margin-left: 12px; */
    // border-bottom: 1px solid #757575;

    color: ${props => props.theme.secondary};
    font-family: "SS3";
    /* font-size: 25px; */
    font-size: 32px;
    line-height: 135%;
    /* font-weight: 500; */

    @media screen and (max-width: 767px) {
        font-size: 24px;
        width: 100%;
        line-height: 130%;
    }
`

export const OverviewTag = styled.p`
    color: ${props => props.theme.secondary};
    font-family: "SS3";
    font-size: 12px;
    text-transform: uppercase;
    margin-bottom: 8px;

    @media screen and (max-width: 767px) {
        margin-bottom: -4px;
    }
`

// calc(67vw - 20px + 31px)(width)  + 15vw (left) +  20px (pRight) +     18vw(toc)
// 23vw + 20px 

// 68vw -

export const PicContainer = styled.div`
    // top: 0;
    // width: calc(68vw - 20px + 12px);
    // height: calc(88vh - 103px);
    // padding-left: 12%;
    margin-bottom: ${({ isLast }) => isLast ? '3.6vh' : '26px'};
    margin-top: -4px;
    // height: calc(90vh);
    // border: 2px solid blue;
    align-items: start;
    text-align: left;
    position: relative;
    // position: ${({isLast}) => isLast ? 'sticky' : 'relative'};
    // overflow: hidden;
    /* border: 1px solid blue; */
    
    // padding-left: 20px;
    /* padding-right: 20px; */
    /* margin-right: 12px; */
    /* width: calc(68vw - 80px + 12px); */
    /* width: ${({ isCS }) => (isCS ? 'calc(66.5vw - 61px)' : 'calc(75vw - 80px + 12px)')}; */
    width: calc(63vw - 120px - 50px);
    /* 66.5vw - 81px */

    img {
        object-fit: scale-down;
        // max-height: 100%;
        // max-width: 100%;
        /* max-height: 83vh; */
        max-height: calc(100vh - 80px - 8vh);
        /* max-width: ${({ isCS }) => (isCS ? 'calc(66.5vw - 61px)' : 'calc(75vw - 80px + 12px)')}; */
        max-width: calc(63vw - 120px - 50px);
        // width: 80vw;
        z-index: -1;
        font-family: 'SS3';
        font-size: 11px;
        font-style: italic;
        color: ${props => props.theme.secondary};
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
    // margin-left: 12%;
    margin-left: 0;
    /* width: calc(62.1% - 4rem); */
    width: 76%;
    // top: 0;
    padding-top: 60px;
    padding-bottom: 18px;
    scroll-margin-top: -40px;

    /* border: 2px solid blue; */

    color: ${props => props.theme.primary};
    font-family: "SS3";
    font-size: 26px;
    letter-spacing: 1px;
    text-align: left;
    /* align-items: right; */

    @media screen and (max-width: 767px) {
        scroll-margin-top: 96px;
        width: 100%;
        margin-left: 0;
        // padding-top: 28px;
        font-size: 24px;
    }
`

export const Sub2 = styled.div`
    position: relative;
    // margin-left: 12%;
    /* width: calc(62.1% - 4rem); */
    width: 76%;
    // width: 100%;
    margin-left: 0;
    // max-width: 80ch;
    // top: 0;
    padding-top: 8px;
    padding-bottom: ${({ isLast }) => isLast ? '3.6vh' : '18px'};
    // scroll-margin-top: calc(103px + 20px);
    scroll-margin-top: 18px;

    /* border: 2px solid blue; */

    color: ${props => props.theme.primary};
    font-family: "SS3";
    /* font-weight: 500; */
    text-transform: uppercase;
    font-size: 14px;
    text-align: left;
    /* align-items: right; */

    @media screen and (max-width: 767px) {
        padding-top: unset;
        width: 100%;
        scroll-margin-top: 96px;
        margin-left: 0;
    }
`

export const InlineLink = styled.a`
    position: relative;
    display: block;
    // margin-left: 12%;
    margin-left: 0;
    /* width: calc(62.1% - 4rem); */
    // width: 100%;
    // width: 76%;
    max-width: 75ch;
    top: 0;
    padding-bottom: ${({ isLast }) => isLast ? '3.6vh' : '16px'};
    scroll-margin-top: 93.5px;

    opacity: 0.65;

    border: 1px solid ${props => props.theme.border};
    background: ${props => props.theme.bgSide2};
    padding: 8px 9px 8px 9px;
    margin-bottom: 16px;

    /* opacity: 0.7; */
    color: ${props => props.theme.cs};
    text-decoration: none;
    font-family: "SS3";
    font-size: 12px;
    /* line-height: 132%; */
    text-align: left;
    /* align-items: right; */

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:hover {
        opacity: .8;
        /* text-decoration: underline; */
        border: 1px solid ${props => props.theme.secondary};
        cursor: alias;
    }

    @media screen and (max-width: 767px) {
        scroll-margin-top: 178px;
        margin-left: 0;
        /* width: 100%; */
    }
`

export const Desc = styled.p`
    position: relative;
    /* margin-left: 12px; */
    /* margin-left: 0; */
    margin-top: -9px;
    /* width: calc(62.1% - 4rem); */
    // width: 76%;
    max-width: 80ch;
    // max-width: 600px;
    // top: 0;
    padding-bottom: ${({ isLast }) => isLast ? '3.6vh' : '27px'};
    /* border: 2px solid blue; */

    color: ${props => props.theme.secondary};
    font-family: "SS3";
    font-size: 16px;
    text-align: left;
    line-height: 153%;
    /* opactiy: 0.7; */
    /* align-items: right; */

    @media screen and (max-width: 767px) {
        margin-top: -6px;
        margin-left: 0;
        width: 100%;
    }
`

export const Controls = styled.div`
    /* z-index: 999; */
    display: grid;
    /* grid-template-rows: calc(40vh - 78px - 22px) 18px 60px 16px; */

    // FULL HEIGHT IS 100vh - 80px - 21px(top)
    /* grid-template-rows: 14vh auto auto 126px; */
    /* grid-template-rows: 5% 35% 60%; */
    grid-template-rows: auto auto 1fr;
    position: fixed;
    top: 80px;
    left: 52px;
    /* height: ${({ isCS }) => (isCS ? 'calc(45vh - 60px)' : 'calc(100vh - 60px)')}; */
    height: calc(100vh - 80px);
    /* width: ${({ isCS }) => (isCS ? '12vw' : '36vw')}; */
    /* width: calc(33vw - 96px - 22px); */
    width: calc(16vw);

    // padding-left: 20px;
    padding-left: 22px;
    padding-right: 24px;
    padding-top: 21px;
    padding-bottom: 150px;
    /* align-items: right; */
    // text-align: right;
    border-right: 1px solid ${props => props.theme.border}; // Make sure this color has an opacity of less than 1
    background: ${props => props.theme.bgNav}; // Make sure this color has an opacity of less than 1


    /* border: 2px solid red; */
    // background: rgba(64, 63, 63, 0.3);
    /* background: green; */

    @media screen and (max-width: 767px) {
        left: 0;
        z-index: 3;
        display: grid;
        grid-template-rows: 1fr;
        top: 112px;
        background: none;
        padding-left: 14px;
        padding-bottom: 0;
        border-right: unset;
        padding-top: 0;
        height: fit-content;
        width: fit-content;
        overflow: hidden;
        /* border: 1px solid green; */
    }   
`

export const NonCSPreview = styled.div`
    /* position: fixed; */
    /* left: 0; */
    /* top: calc(3.7vw + 60px + 8vh); */

    display: grid;
    /* padding-top: 18px; */
    /* margin-bottom: 8vh; */
    /* height: 100%; */
    height: fit-content;
    /* max-height: 45vh; */
    /* display: ${({ isCS }) => (isCS ? 'none' : 'block')}; */
    /* width: 100%; */
    width: calc(16vw - 22px - 28px);

    /* height: 52vh; */
    /* border: 3px solid green; */

    img {
        object-fit: scale-down;
        align-content: start;
        align-items: start;
        position: relative;
        top: 0;
        left: 0;
        /* width: calc(100% - 23px); */
        /* height: fit-content; */
        /* height: 100%; */
        max-width: calc(16vw - 22px - 28px);
        /* max-height: 45vh; */

        /* max-height: 50vh; */
        /* max-height: 83vh; */
        /* max-height: calc(100vh - 80px - 50px); */
        /* max-width: ${({ isCS }) => (isCS ? 'calc(66.5vw - 61px)' : 'calc(75vw - 80px + 12px)')}; */
        /* max-width: calc(63vw - 120px - 50px); */
        // width: 80vw;
        border: 0.5px solid ${props => props.theme.border};
        z-index: -1;
    }

    @media screen and (max-width: 767px) {
        z-index: -1;
        display: none;
        height: 0;
        /* opacity: 0; */

        img {
            display: none;
        }
    }    
`

export const TopControls = styled.div`
    display: grid;
    /* grid-template-rows: 20px auto; */
    /* padding-top: 2px; */
    /* height: fit-content; */
    /* align-items: end; */
    /* align-content: end; */
    /* justify-items: end; */


    /* grid-template-rows: 12vh 16px 36px 12px; */
    grid-template-rows: auto 1fr;
    height: fit-content;
    /* border: 1px solid pink; */

    @media screen and (max-width: 767px) {
        display: none;
        z-index: -1;
    }
`

export const LeftTitle = styled.div`
    text-align: left;
    /* display: flex; */
    /* align-items: start; */
    margin-bottom: 13px;
    /* padding-top: 28px; */
    height: fit-content;
    font-size: 16px;
    color: ${props => props.theme.primary};
    line-height: 145%; 
    /* margin-right: 1vw; */
    /* border: 1px solid green; */

    display: inline-grid;

    @media screen and (max-width: 767px) {
        display: none;
        /* opacity: 0; */
    }
`

export const ControlDetails1 = styled.div`
    display: grid;
    grid-template-rows: auto auto;

    align-items: end;
    align-content: end;
    width: 100%;
    height: fit-content;
    margin-bottom: 2vh;

    /* border: 1px solid blue; */

    @media screen and (max-width: 767px) {
        display: none;
    }
`

export const NavButtons = styled.div`
    /* z-index: 999; */
    position: fixed;
    /* bottom: ${({ isCS }) => (isCS ? '22px' : '40px')}; */
    bottom: 28px;
    left: 74px;
    
    width: calc(16vw - 22px - 24px);
    /* align-items: end; */
    /* align-content: end; */
    /* justify-content: end; */
    /* bottom: ${({ isCS }) => (isCS ? 'calc(58vh + 16px)' : 'calc(60px)')}; */
    /* width: calc(100% - 26px); */
    // cursor: pointer;
    /* border: 1.5px solid black; */

    @media screen and (max-width: 767px) {
        left: 100vw;
        bottom: 100vh;
        display: none;
        z-index: -1;
        /* position: unset; */
    }
`

export const NavLabel = styled.div`
    // padding-bottom: 2px;
    font-family: "SS3";
    font-size: 12px;
    line-height: 140%;
    letter-spacing: 0.15px;
    color: ${props => props.theme.cs};
    opacity: 0.8;
`

export const WorkNav = styled(LinkRouter)`
    // width: 3vw;  
    // height: 3vw;
    // padding-right: 1rem;
    /* font-size: 15px;
    font-family: "SS3";
    padding-bottom: 8px;
    padding-top: 4px; */

    /* width: 10vw; */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-decoration: none; */

    /* color: ${props => props.theme.primary};
    text-decoration: none; */
    /* transition: all 0.2s ease-in-out; */    
`

export const WorkNavName = styled.p`
    display: block;
    max-width: calc(33vw - 100px - 40px);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    padding-top: 3px;
    /* border: 1px solid blue; */
    font-size: 16px;
    font-family: "SS3";

    color: ${props => props.theme.primary};
    text-decoration: none;

    &:hover {
        opacity: 0.6;
    }
`

export const MobileWorkNav = styled(LinkRouter)`
    display: none;
    
    @media screen and (max-width: 767px) {
        font-size: 14px;
        font-family: "SS3";
        padding-bottom: 6px;

        color: ${props => props.theme.primary};
        text-decoration: none;
        transition: all 0.2s ease-in-out;

        &:hover {
            opacity: 0.6;
        }
    }
`

export const Back = styled(LinkRouter)`
    /* height: 2.8vw; */
    height: fit-content;
    width: fit-content;
    color: ${props => props.theme.primary};
    font-family: "SS3";
    /* font-size: 14px; */
    font-size: 16px;
    margin-bottom: 6vh;
    /* margin-right: 1.5vw; */

    text-decoration: none;
    transition: all 0.1s ease-in-out;

    &:hover {
        /* background: black; */
        /* color: white; */
        opacity: 0.5;
    }

    @media screen and (max-width: 767px) {
        /* margin-left: -.255px; */
        margin-bottom: 0;
    }
`

export const Visit = styled.div`
    color: ${props => props.theme.primary};
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

    /* z-index: 999; */
    position fixed;
    /* right: -18px; */
    /* right: calc(63vw - 0.5px); */
    right: 0;
    /* top: 70px; */
    top: calc(90px);
    /* width: calc(33.5vw - 100px); */
    width: calc(20vw - 45px);
    /* height: calc(100vh - 80px); */
    height: calc(100vh - 80px);

    padding-top: 42px;
    padding-left: 22px;
    padding-bottom: 40px;
    padding-right: 26px;
    
    overflow-x: hidden;
    overflow-y: scroll;

    /* text-align: right; */

    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar {
        display: none;
    }

    /* background: ${props => props.theme.bg}; */
    /* border-top: 1px solid ${props => props.theme.border}; */
    /* border-bottom: 1px solid ${props => props.theme.border}; */
    /* border-right: 1px solid ${props => props.theme.border}; */

    p {
        color: ${props => props.theme.primary};
        opacity: 0.9;
        font-family: "OpenSans";
        font-weight: 600;
        font-size: 19px;
    }

    @media screen and (max-width: 767px) {
        display: none;
    }
`

export const DesktopTableHeader = styled.div`
    display: ${({ isCS }) => (isCS ? 'grid' : 'none')};
    /* display: grid; */
    /* Z-index: 999; */
    position: fixed;
    /* z-index: 1000; */
    left: calc(80vw + 45px + 21px);
    /* right: 2vw; */
    top: calc(80px + 20px);
    width: fit-content;
    /* height: 10vh; */
    /* width: 10vw; */
    /* width: calc(33.5vw - 100px); */

    /* padding-left: 22px; */

    padding: 9px; 
    /* top: 0; */
    font-family: "SS3";
    font-size: 12px;
    /* line-height: 145%; */
    letter-spacing: 1px;
    color: ${props => props.theme.secondary};
    opacity: 1;
    text-transform: uppercase;
    /* padding-bottom: 8.5px; */
    /* padding-top: 9px; */

    background: ${props => props.theme.bgSide2};
    border: 1px solid ${props => props.theme.border};
    /* border-right: 1px solid ${props => props.theme.border}; */

    @media screen and (max-width: 767px) {
        display: none;
        z-index: -1;
    }
`

export const MobileTOCContainer = styled.div`
    display: none;

    @media screen and (max-width: 767px) {
        position: fixed;
        display: grid;
        width: 100vw;
        height: 70vh;
        // height: 100vh;
        align-items: start;
        align-content: start;
        // height: calc(100vh + 180px);
        top: 100vh;
        left: 0;
        // top: 100vh;
        // bottom: 50px;
        z-index: 2;
        // padding: 8px 14px 118px 14px;
        border-top: 1px solid ${props => props.theme.border};
        /* padding-top: 18px; */
        padding-left: 18px;

        background: ${props => props.theme.bgNav};
        backdrop-filter: blur(22px);
        // overflow-x: hidden;
        // overflow-y: scroll;
        overflow-y: hidden;

        // background: blue;

    }
`

export const MobileTOC = styled.div`
    /* position: absolute; */
    /* top: 0; */
    /* left: 0; */
    overflow-y: auto;
    height: 100%;
    // width: calc(100vw) - 28px;
    width: 100%;
    /* padding-left: 16px; */
    padding-right: 20px;
    padding-bottom: 210px;
    /* padding-top: 0px; */

    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    /* -webkit-overflow-scrolling: touch; */
    ::-webkit-scrollbar {
        display: none;
    }
`

export const MobileTOCToggle = styled.div`
    display: none;    

    @media screen and (max-width: 767px) {
        display: ${({ isCS }) => (isCS ? 'block' : 'none')};
        z-index: 2;
        position: fixed;
        left: 0;
        bottom: 52px;
        height: 40px;
        width: 100vw;
        background: ${props => props.theme.bgNav};
        backdrop-filter: blur(12px);
        border-top: 1px solid ${props => props.theme.border};
    }
    
`

export const CloseTOC = styled.div`
    z-index: 2;
    position: absolute;
    right: 24px;
    top: 20px;

    font-family: 'SS3';
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.theme.primary};
`

export const DividerTOC = styled.div`
    z-index: 1000;
    position: absolute;
    left: 0;
    top: 0;
    padding: 10px 14px 0px 14px;
    height: 40px;
    width: 100vw;
    /* border-bottom: .5px solid ${props => props.theme.border}; */
`

export const MobileTOCLabel = styled.div`
    // padding-bottom: 12px;
    color: ${props => props.theme.primary};
    font-family: "SS3";
    font-size: 14px;
    padding-top: 1px;

    text-align: center;
    align-items: center;
`

export const TOCItem = styled.div`
    margin-top: 35px;
    padding-bottom: 5px;
    color: ${props => props.theme.primary};
    font-family: "SS3";
    font-weight: 500;
    letter-spacing: 0.2px;
    font-size: 15px;

    &:hover {
        /* background: black; */
        /* color: white; */
        opacity: 0.8;
        text-decoration: underline;
        cursor: pointer;
    }

    @media screen and (max-width: 767px) {
        opacity: 0.9;
        margin-top: 40px;
        color: ${props => props.theme.primary};
        /* padding-top: 40px; */
        padding-bottom: 1px;
        font-size: 18px;
    }
`

export const TOCItem2 = styled.div`
    padding-top: 6px;
    // margin-left: 14px;
    color: ${props => props.theme.secondary};
    font-family: "SS3";
    font-size: 15px;
    line-height: 19px;
    // opacity: 0.7;

    &:hover {
        /* background: black; */
        /* color: white; */
        opacity: 0.8;
        text-decoration: underline;
        cursor: pointer;
    }

    @media screen and (max-width: 767px) {
        color: ${props => props.theme.primary};
        opacity: 0.75;
        padding-top: 11px;
        font-size: 14px;
        // margin-left: 16px;
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

export const MobileTitle = styled.h1`
    display: none;

    @media screen and (max-width: 767px) {
        display: grid;
        color: ${props => props.theme.primary};
        font-family: "SS3";
        font-size: 38px;
        line-height: 126%;
        margin-bottom: 40px;
        max-width: 756px;
        margin-top: 3px;
        margin-bottom: 8px;
    }
`

export const DesktopTitle = styled.div`
    display: grid;
    color: ${props => props.theme.primary};
    font-family: "SS3";
    font-size: 60px;
    font-weight: bold;
    line-height: 112%;
    letter-spacing: -0.15px;
    margin-bottom: 12px;
    max-width: 20ch;

    @media screen and (max-width: 767px) {
        // margin-top: -14px;
        // margin-bottom: -6px;
        display: none;
    }
`


export const TagsContainer = styled.div`
    /* display: inline-block; */
    /* display: flex; */
    /* float: left; */
    /* text-align: left; */
    width: 100%;
    /* text-align: right; */
    /* align-content: end; */
    /* justify-content: space-between; */
    /* width: 80%; */

    /* border: 1px solid blue; */
    // padding-top: 2px;
    margin-bottom: 90px;

    @media screen and (max-width: 767px) {
        // width: unset;
        // justify-content: unset;
        // display: grid;
        // padding-top: 4px;
        // grid-template-columns: unset;
        display: none;
    }
`

export const MobileTags = styled.div`
    display: none;

    @media screen and (max-width: 767px) {
        width: 100%;
        display: grid;
        padding-top: 0px;
        padding-bottom: 38px;
    }
`

export const Tag = styled.p`
    // padding-bottom: 4px;
    padding-right: 10px;
    /* padding-right: 2px; */

    color: ${props => props.theme.secondary};
    font-family: "SS3";
    font-size: 12px;
    line-height: 145%;

    float: left;
    text-align: left;

    @media screen and (max-width: 767px) {
        font-size: 14px;
        padding-left: 0;
        padding-top: 6px;

        padding-right; unset;
        line-height: unset;
        float: unset;
        text-align: unset;
    }
`

export const Details = styled.div`
    font-family: "GoudyBookletter";
    font-family: "Cardo";
    font-family: "FrenchCanon";
    font-family: "JejuMyeongjo";
    /* font-family: "Orpheus"; */

    font-size: 1rem;
    letter-spacing: -.01rem;
    line-height: 130%;
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
    /* z-index: 999; */
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
        /* z-index: 990; */
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

export const ContentBg = styled.div`
  z-index: -1;
  position: fixed;
  top: 0;
  /* left: 50vw; */
  left: 0;
  height: calc(100vh);
  width: 100vw;
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
    /* z-index: 999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 18vh;
    display: none; */
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
  background: ${props => props.theme.bgSide}; // Make sure this color has an opacity of less than 1
  backdrop-filter: blur(22px); // This be the blur

  @media screen and (max-width: 767px) {
    /* left: 0;
    top: 84px;
    width: 100vw;
    height: 18vh; */
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


