import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    cursor: url("/imgs/cursor1.svg"), auto;
    overflow: hidden;
    z-index: 999;
    /* background: #FDFEF5; */

    @media screen and (max-width: 768px) {
        /* height: 94vh; */
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
        margin-top: calc(6vh - 1.75px);
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