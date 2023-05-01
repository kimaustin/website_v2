import styled from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.div`
    // z-index: 999;
    // position: fixed;
    // left: 0;
    // top: 0;
    // width: 100vw;
    // height: 100vh; 
`

export const Overlay = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh; 
    // border: 5px solid green;

    background: rgba(8, 8, 8, 0.4);
    // background: blue;
    backdrop-filter: blur(13px);
`