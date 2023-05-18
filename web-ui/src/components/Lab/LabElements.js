import styled from 'styled-components'
import { Link } from 'react-scroll';

export const Container = styled.div`
    z-index: 998;
    position: fixed;
    
    width: calc(100vw);
    left: 0;
    top: 0;
    height: calc(100vh - 103px);
    padding-top: 103px;

    cursor: url("../imgs/cursor1.svg"), crosshair;
    overflow-y: hidden;
    overflow-x: hidden;
    
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 768px) {
        width: 100vw;
        left: 0;
    }
`
