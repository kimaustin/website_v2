import styled from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.div`
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    z-index: 1000;
    position: fixed;
    top: 22px;
    left: 8vw;
    overflow: hidden;

    border-radius: 20px;
    background: ${props => props.theme.bgBlur};
    border: 1px solid ${props => props.theme.border};

    // z-index: 999;
    // position: fixed;
    // left: 0;
    // top: 0;
    // width: 100vw;
    // height: 100vh; 
    @media screen and (max-width: 767px) {
        position: fixed;
        left: 50vw;
        top: unset;
        bottom: 6px;
        /* width: 10vw; */
        height: 40px;
    }
`