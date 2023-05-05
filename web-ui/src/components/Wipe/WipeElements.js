// haha funny file name

import styled from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.div`
    /* left: 150; */

    position: fixed;
    top: 0;
    z-index: 1000;
    width: 150vw;
    height: 100vh;
    /* background: blak; */
    
    /* background: ${({ isLightTheme }) => (isLightTheme ? 'rgba(242, 249, 256, 1)' : 'rgba(30, 30, 31, 1)')}; */
`

export const DarkWipe = styled.div`
    position: fixed;
    /* left: 0; */
    top: 0;
    z-index: 1000;
    width: 150vw;
    height: 100vh;
    background: rgba(242, 249, 256, 1);
`

export const LightWipe = styled.div`
    position: fixed;
    /* left: 0; */
    top: 0;
    z-index: 1000;
    width: 150vw;
    height: 100vh;
    background: rgba(30, 30, 31, 1);
`