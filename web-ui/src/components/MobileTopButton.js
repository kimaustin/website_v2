import React from 'react';
import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

const MobileTopButton = () => {
    return (
        <div>
            <Top to='head' smooth={true} duration={800} spy={true} 
                    offset={-80} exact="true">TOP</Top>
        </div>
    );
};

const Top = styled(LinkScroll)`
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
        padding-top: 1.7rem;
        border-radius: 2.5rem;
        border: 1px solid black;
    }

    &:hover {
        background: black;
        color: white;        
    }
`

export default MobileTopButton;
