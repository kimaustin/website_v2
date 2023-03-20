import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    /* cursor: url("/imgs/cursor1.svg"), auto; */
  cursor: crosshair;

    overflow: hidden;
    z-index: 999;
    /* background: #FDFEF5; */

    @media screen and (max-width: 768px) {
        /* height: 94vh; */
    }

`

export const ExitArea = styled.div`
    position: fixed;
    left: 3.5rem;
    top: 0;
    height: 100vh;
    width: calc(6vw);
    background: #FDFEF5;
    /* opacity: 0; */
    z-index: 991;

    cursor: url("/imgs/c_close.svg"), auto;
    
    @media screen and (max-width: 768px) {
        width: 3.5rem;
    }
`

export const Work = styled.div`
    position: fixed;
    top: 0;
    width: calc(94vw - 7rem + 4px);
    height: 100vh;
    margin-left: calc(3.5rem - 1px);
    border-right: 1px solid black;
    background: #FDFEF5;
    /* overflow-y: scroll; */

    user-select: none;
    
    @media screen and (max-width: 768px) {
        display: block;
        /* position: relative; */
        /* margin-left: 0; */
        width: calc(5vw + 1px);
        /* margin-top: 6vh; */
        border-right: 1px solid black;

        display: none;
    }
`

export const Mobile = styled.div`
    display: none;
    user-select: none;
    background: #FDFEF5;

    @media screen and (max-width: 768px) {
        z-index: 999;
        display: block;
        /* user-select: unset; */
        /* position: fixed; */
        /* width: calc(100vw - 3.5rem); */
        width: calc(88.5vw + 4px);
        top: 0;
        /* padding-left: 3.5rem; */
        height: calc(88% + 1px);
        padding-bottom: 6rem;
        /* top: 6vh; */
        overflow-x: hidden;
        overflow-y: scroll;

        margin-left: 0;
        border-left: 1px solid black;    
        border-right: 1px solid black;
    }
`

export const Details = styled.div`
    /* z-index: -1; */
    /* left: calc(18% + 3.5rem); */
    z-index: 998;
    position: fixed;
    padding-left: 2rem;
    top: 1.75rem;
    width: 41%;
    border-left: 1px solid black;       
    margin-left: calc(3.5rem - 1px);
    background: #FDFEF5;

    /* overflow-y: scroll; */
    /* position: fixed; */
    /* left: 70%; */

    @media screen and (max-width: 768px) {
        /* z-index: 999; */
        position: relative;
        top: 0;
        left: 0;
        background: #FDFEF5;
        width: calc(88.5vw + 4px);
        height: auto;
        padding-left: .87rem;
        padding-right: .9rem;
        margin-left: 0;
        padding-top: calc(.55rem);
        /* padding-right: 57.5%; */
        border-bottom: 1px solid #201D17;
        border-right: 1px solid #201D17;
        border-left: 1px solid #201D17;
    }
`

export const Labels = styled.div`
    /* position: relative;  */
    /* display: inline; */
    z-index: -1;
    font-family: 'SharpGrotesk';
    font-size: 1rem;
    padding-top: 1.5rem;
    line-height: 280%;

    /* left: calc(18% + 3.5rem); */
    /* padding-left: 2rem;
    margin-bottom: 1rem; */
    width: 100%;
    /* position: fixed; */
    /* left: 70%; */

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const Label = styled.div`
/* position: relative; */
    display: inline;
    padding: .5rem;
    margin-bottom: 1.25rem;
    margin-right: .75rem;

    font-family: 'SharpGrotesk';
    font-size: 1rem;
    color: #FDFEF5;
    background: #201D17;
`

export const DescLabel = styled.div`
    font-family: 'SharpGrotesk';    
    /* position: fixed; */
    /* top: calc(35% + 6rem); */
    /* left: calc(50% - 2rem); */
    padding-bottom: .75rem;
    /* left: calc(59.25% - 1.5rem); */
    opacity: .85;
    font-size: 1rem;

    @media screen and (max-width: 768px) {
        padding-bottom: .25rem;
        padding-top: .25rem;
        /* display: inline; */
        /* left: -1.75rem; */
        /* padding-bottom: 0; */
        /* top: .25rem; */
        /* position: absolute; */
        /* transform: rotate(180deg); */
        /* text-orientation: mixed; */
        /* writing-mode: vertical-rl; */
    }
`

export const ShortDesc = styled.p`
    /* z-index: 999; */
    position: relative;
    width: calc(60%);
    width: calc(40% - 1rem);
    /* height: calc(25% - 1rem); */
    /* left: 64vw; */
    /* padding-left: .15rem; */
    margin-top: 22vh;
    /* top: calc(35% + 8rem); */
    /* top: calc(55%); */
    /* bottom: 2.rem; */
    /* border: 1px solid black; */
    /* right: 2.2rem; */
    left: calc(18% + 3.1rem);
    left: calc(2.5rem);
    /* overflow-y: scroll; */
    /* left: calc(59.25% - 1.5rem); */
    /* overflow-y: scroll;  */
    /* left: calc(22vw + 6rem); */
    /* cursor: default; */
    font-size: 1rem;
    line-height: 120%;
    font-family: 'SpaceMono';
    padding-bottom: 1.5rem;
    /* padding-top: 2.5rem; */
    /* line-height: 102%; */
    letter-spacing: -.02rem;
    /* overflow-wrap: break-word; */
    /* hyphens: auto; */

    @media screen and (max-width: 768px) {
        /* left: 16px; */
        position: relative;
        /* top: calc(6vh + 9rem); */
        margin-top: 0vh;
        top: 0;
        padding-top: .5rem;
        padding-bottom: .75rem;
        /* left: calc(6.5rem); */
        left: 0;
        padding-left: .9rem;
        /* width: calc(100% - 5.5rem - 31px); */
        width: calc(100% - 1rem);
    }
`

export const DownButton = styled.p`
    position: fixed;
    z-index: 999;
    /* background: black; */
    color: black;
    padding: 1rem;
    left: 50%;
    top: 50%;
    border: 3px solid black;
    border-radius: 1rem;
    cursor: url("/imgs/c_down.svg"), auto;
  cursor: crosshair;

    transition: 0.2s all ease-in-out;

    &:hover {
        /* opacity: .5; */
        background: black;
        color: white;
    }
`

export const Class = styled.p`
    /* position: fixed; */
    /* top: 35%; */
    font-size: 3.25rem;
    /* font-family: 'CG Italic'; */
    /* letter-spacing: -.2rem; */
    /* left: 1.8rem; */
    /* left: calc(50% - 2rem); */
    /* left: calc(59.25% - 1.5rem); */
    /* width: calc(28% - 1rem); */

    /* opacity: 0.8; */
    /* background: black; */
    /* border-radius: 2.5rem; */
    /* color: black; */
`

export const Semester = styled.p`
    position: fixed;
    top: calc(35% + .55rem);
    /* right: 3rem; */
    left: calc(85% - 1rem);
    left: calc(89% - 1rem);
    /* line-height: 94%; */
    font-size: 2.75rem;
    letter-spacing: -.075rem;
    opacity: .8;
    /* transform: skew(-10deg); */
`

export const TitleText = styled.div`
    /* font-family: ${({ oddItem }) => (oddItem ? 'CG Italic' : 'Helvetica')}; */
    /* position: fixed; */
    /* left: calc(68% - 3.25rem); */
    /* left: calc(59.25% - 1.5rem); */
    /* width: 33.5%; */
    overflow-wrap: break-all;
    /* white-space: nowrap; */
    hyphens: auto;
    /* left: 1.2rem; */
    /* top: 8rem; */
    /* top: 1.5rem; */

    /* font-size: ${({ oddItem }) => (oddItem ? '5.25vw' : '5vw')}; */
    font-size: 3.5rem;
    letter-spacing: -.1rem;
    text-decoration: none;
    font-family: 'SharpGrotesk';
    color: black;
    /* height: 90vh; */
    line-height: 100%;
    z-index: 999;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
        padding-bottom: .8rem;
    }
`

export const IndexNum = styled.span`
    /* opacity: 0.4; */
    position: fixed;
    /* left: 2.5rem; */
    /* left: calc(59.25% - 1.5rem); */
    top: 1.5rem;
    left: 2rem;
    left: calc(6% + 2.2rem);
    left: calc(5.5rem);
    /* top: 1.7rem; */
    font-family: 'SpaceMono';
    font-family: 'Helvetica Neue';
    font-size: 1.6rem;
    /* font-size: 4.75rem; */
    background: #201D17;
    color: #FDFEF5;
    padding-left: .6rem;
    padding-top: .25rem;
    padding-bottom: .25rem;
    padding-right: .6rem;
    /* letter-spacing: -0.025rem; */

    border-radius: 0rem;
    border: 4px solid #201D17;
`

export const ProjectTags = styled.div`
    position: relative;
    /* right: 2rem; */
    width: 9%;
    left: calc(85% - 1rem);
    left: calc(2.5rem);
    /* top: calc(85%); */
    /* border-bottom: 1px solid black; */

    @media screen and (max-width: 768px) {
        position: relative;
        /* top: calc(6vh + 9rem); */
        top: 0;
        /* padding-top: 1rem; */
        /* left: calc(6.5rem); */
        left: 0;
        padding-left: .9rem;
        margin-bottom: 1.5rem;
        /* width: calc(100% - 5.5rem - 31px); */
        width: calc(100% - 1rem);
    }
`

export const TagsLabel = styled.div`
    font-family: 'SharpGrotesk';
    padding-bottom: .75rem;
    /* position: fixed; */
    /* top: calc(35% + 6rem); */
    /* right: 2rem; */
    /* left: calc(85% - 1rem); */
    /* left: calc(89% - 1rem); */
    opacity: .85;
    font-size: 1rem;

    @media screen and (max-width: 768px) {
        padding-bottom: .25rem;
        padding-top: .25rem;
        /* display: inline;
        left: -1.75rem;
        padding-bottom: 0;
        top: .25rem;
        position: absolute;
        transform: rotate(180deg);
        text-orientation: mixed;
        writing-mode: vertical-rl; */
    }
`

export const Tag = styled.p`
    font-family: 'SpaceMono';
    line-height: 120%;
    font-size: 1rem;
`

export const ImgCaption = styled.p`
    position: relative;
    width: 100%;

    font-size: 1.6rem;
    line-height: 102%;
    letter-spacing: -.05rem;
`

export const Images = styled.div`
    /* text-align: left; */
    /* align-items: left; */
    position: fixed;
    top: 0;
    padding-left: calc(44% - 2.5rem);
    display: grid;
    width: 100%;
    height: 100%;
    /* left: 18rem; */
    /* padding-top: 17.75rem; */
    padding-top: 2rem;
    padding-bottom: 150vh;

    /* margin-left: 2rem; */
    /* margin-left: calc(45% + 1.5rem); */
    /* margin-right: calc(20% + 1.75rem); */

    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 768px) {
        /* position: relative; */
        position: relative;

        /* left: calc(16px + 3.5rem); */
        left: 0;
        top: 0;
        padding-left: 0;
        /* top: calc(6vh + 8rem); */

        display: grid;
        width: calc(100vw - 16px - 3.5rem);
        padding-bottom: 11rem;

        overflow-y: visible;
        /* display: none; */
    }
`

export const PicIndex = styled.div`
    /* display: none; */
    z-index: 998;
    display: grid;
    position: absolute;
    border: 1px solid #201D17;

    font-family: 'SpaceMono';
    font-family: 'Helvetica Neue';
    /* font-weight: bold; */
    font-size: 1.1rem;

    color: #201D17;
    background: #FDFEF5;
    padding: .25rem;
    padding-left: .28rem;
    /* padding-left: calc(-8rem); */

    @media screen and (max-width: 768px) {
        /* top: 3.5rem; */
        top: 0;
        /* left: 3.5rem; */
        left: .8rem;
        font-size: 1rem;
        /* padding-left: 18px;    */
    }
`

export const PicContainer = styled.div`
    /* margin-top: 4.1rem; */
    text-align: center;
    /* position: sticky; */
    position: ${({isLast}) => isLast ? 'sticky' : 'relative'};
    /* top: 1.75rem; */
    /* border-bottom: 0.75px solid black; */
    /* border: 1px solid blue; */
    /* border: 1px solid #201D17; */
    align-items: center;
    /* margin-left: 12rem; */
    margin-bottom: 1.6rem;
    overflow-x: none;
    /* position: relative; */
    width: calc(77%);
    /* height: 85vh; */
    cursor: url("/imgs/c_zoomIn.svg"), auto;
  cursor: crosshair;

    
    /* position: relative; */
    top: 0;
    // desc = 22.5vw + 2.2rem
    /* width: calc(57.5vw - 8rem); */
    /* text-align: left; */

    img {
        /* display: block; */
        object-fit: scale-down;
        /* height: 100%; */
        max-height: 85vh;
        max-width: 100%;
        /* background-image: #201D17; */
        /* padding-left: 3.25rem; */
    }

    @media screen and (max-width: 768px) {
        width: calc(94.5%);
        position: sticky;
        top: 1rem;
        /* height: calc(88vh); */
        margin-bottom: 1rem;
        /* height: 100%; */
        /* padding-left:0rem; */

        img {
            display: block;
            padding-left: .9rem;
            /* border: 1px solid #201D17; */
        }
    }
`

export const ImgZoom = styled.div`
    position: fixed;
    /* left: 20vw; */
    /* top: 6vh; */
    width: calc(100vw - 7rem);
    height: 100%;
    /* height: 0; */
    /* padding-bottom: 56.25%; */
    /* width: 40vw;
    height: 88vh; */
    z-index: 999;

    @media screen and (max-width: 768px) {
        /* display: inline; */
        position: fixed;
        width: 100vw;
        height: calc(100vh - 12vh);
        margin-top: calc(6vh - 1px);
    }
`

export const ZoomedImgsContainer = styled.div`
    position: fixed;
    z-index: 999;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    /* border: 1px solid #201D17; */
    overflow: hidden;
    /* max-width: 93%; */
    /* max-height: 93%; */
  cursor: crosshair;
    width: 90%;
    height: 95%;
    display: flex;
    justify-content: center;
    /* background: blue; */
    /* align-items: center; */
    cursor: url("/imgs/c_zoomOut.svg"), auto;

    img {
        display: block;
    }

    @media screen and (max-width: 768px) {
        position: absolute;
        margin-top: 6vh;
    }
`

export const ImgCloseArea = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 3.5rem;
    z-index: 1;
    background: #FDFEF5;
    opacity: .75;
    cursor: url("/imgs/c_zoomOut.svg"), auto;

    @media screen and (max-width: 768px) {
        /* position: absolute; */
        margin-top: 6vh;
    }
`