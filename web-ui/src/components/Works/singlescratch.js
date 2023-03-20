import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

// export const Container = styled.div`
//     width: 100%;
//     height: 100%;
//     /* overflow-x: hidden; */
//     /* overflow-y: hidden; */
//     /* margin-bottom: 1rem; */
//     /* display: ${({ selected }) => (selected ? 'none' : 'block')}; */

//     @media screen and (max-width: 768px) {
//         margin-bottom: .5rem;
//     }
// `

export const Container = styled.div`
    /* position: relative; */
    position: fixed;
    overflow-y: scroll;
    overflow-x: hidden;

    height: 100%;
    width: 100%;
    /* height: 98vh; */
    /* width: 85vw; */
    /* bottom: 2rem; */
    /* top: .75rem; */
    border-left: 1px solid black;
    /* border-top: 0.5px solid black; */
    /* border-bottom: 0.5px solid black; */
    /* border-right: 0.5px solid black; */
    /* border-radius: 65px; */

    /* border-right: 1px solid black; */
    /* right: 12rem; */
    
    /* position: fixed; */
    display: grid;
    /* font-size: 3vh; */
    /* overflow: hidden; */
    ::-webkit-scrollbar {
        display: none;
    }
`

export const Details = styled.div`
    z-index: -1;
`

export const IndexNum = styled.p`
    opacity: 0.4;
    position: fixed;
    left: 2.1rem;
    top: 10rem;
    font-family: 'Helvetica';
    font-size: 1rem;
    letter-spacing: -0.02rem;
`

export const ShortDesc = styled.p`
    /* z-index: 999; */
    position: fixed;
    width: 22.5vw;
    /* left: 64vw; */
    /* padding-top: 20rem; */
    top: 17.55rem;
    /* border: 1px solid black; */
    right: 2.2rem;
    /* left: calc(22vw + 6rem); */
    /* cursor: default; */
    font-size: 1.6rem;
    line-height: 102%;
    letter-spacing: -.05rem;

    @media screen and (max-width: 768px) {
        /* left: 16px; */
        left: 3rem;
    }
`

export const Class = styled.p`
    position: fixed;
    top: 2rem;
    font-size: 6rem;
    font-family: 'CG Italic';
    letter-spacing: -.4rem;
    left: 1.8rem;
    opacity: 0.8;
    /* background: black; */
    /* border-radius: 2.5rem; */
    color: black;
`

export const Semester = styled.p`
    position: fixed;
    top: 12rem;
    right: 3rem;
    line-height: 94%;
    font-size: 4rem;
    letter-spacing: -.15rem;
    transform: skew(-10deg);
`

export const TitleText = styled.div`
    /* font-family: ${({ oddItem }) => (oddItem ? 'CG Italic' : 'Helvetica')}; */
    position: fixed;
    left: 2rem;
    /* left: 1.2rem; */
    top: 12rem;
    /* font-size: ${({ oddItem }) => (oddItem ? '5.25vw' : '5vw')}; */
    font-size: 4rem;
    letter-spacing: -.1rem;
    text-decoration: none;
    font-family: 'SpaceMono';
    color: black;
    /* height: 90vh; */
    line-height: 94%;
    z-index: 999;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
`

export const ProjectTag = styled.div`

`

export const ImgZoom = styled.div`
    position: fixed;
    left: 20vw;
    top: 6vh;
    background: white;

    width: 40vw;
    height: 88vh;

    z-index: 999;
    /* opacity: ${({ isVisible }) => isVisible ? 1 : 0}; */
`

export const ImgCaption = styled.p`
    position: relative;
    width: 100%;

    font-size: 1.6rem;
    line-height: 102%;
    letter-spacing: -.05rem;
`

export const Images = styled.div`
    text-align: left;
    align-items: left;
    position: relative;
    display: grid;
    /* left: 18rem; */
    padding-top: 17.75rem;
    /* padding-top: 17.75rem; */
    /* margin-left: 2rem; */
    margin-left: 2rem;
    /* border-right: 0.75px solid black; */
    // desc = 22.5vw + 2.2rem
    margin-right: calc(35vw + 3.8rem);
    margin-right: calc(3rem);
    /* border-right: 1px solid black; */
    /* margin-left: 12rem; */
    overflow-y: scroll;
    overflow-x: hidden;
    /* top: 9vh; */
    /* width: 40vw; */
    /* overflow-y: scroll; */
    /* height: 80vh; */
    /* top: 30vh; */
    /* margin-left: 13.75rem; */
    /* margin-right: auto; */
    /* top: 50%; */
    /* transform: translate(-50%); */
    ::-webkit-scrollbar {
        display: none;
    }

    /* padding-bottom: .5rem; */

    @media screen and (max-width: 768px) {
        position: relative;
        left: 9.5px;
        top: 2.8rem;
        display: grid;
        width: 89.5vw;
        padding-bottom: 3rem;
    }
`

export const PicContainer = styled.div`
    /* margin-top: 4.1rem; */
    /* text-align: center; */
    /* position: sticky; */
    /* top: 0; */
    /* border-bottom: 0.75px solid black; */
    align-items: left;
    /* margin-left: 12rem; */
    margin-bottom: 2rem;
    overflow-x: none;
    /* position: relative; */
    /* height: 90vh; */
    
    // desc = 22.5vw + 2.2rem
    /* width: calc(57.5vw - 8rem); */
    /* text-align: left; */
`