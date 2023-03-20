import React from 'react';
import styled from 'styled-components';

const MobileToggle = ({isOpen, toggle}) => {
    return (
        <Mobile onClick={toggle}><Rotating isOpen={isOpen}>↑</Rotating></Mobile>
    );
}

export default MobileToggle;

const Mobile = styled.div`
    display: none;
    position: fixed;

    @media screen and (max-width: 768px) {
        z-index: 999;
        display: block;
        position: fixed;
        bottom: 0rem;
        left: 0;
        background: transparent;
        font-size: 5vh;
        /* cursor: pointer; */
        /* background: ${({toggle}) => (toggle ? 'white' : 'black')}; */
        background: white;
        padding-left: 2.5vw;
        padding-top: 4px;
        border: 1.5px solid black;
        height: 6vh;
        width: 11vw;
    }
`;

const Rotating = styled.div`
    width: 100%;
    height: 100%;
    transition: 0.3s all ease-in-out;
    align-items: center;
    transform: ${({isOpen}) => (isOpen ? 'rotate(0turn)' : 'translateX(-0.85rem) translateY(-0.1rem)  rotate(0.5turn)')};
    /* color: ${({isOpen}) => (isOpen ? 'black' : 'white')}; */
`