import styled from 'styled-components';
import React from 'react';

const ButtonContainer = styled.div`
    position: fixed;
    z-index: 999;
    display: flex;
    height: 2em;
    bottom: .75em;
    margin: 1em;
    padding: 0 24px;
    font-size: 1rem;
    right: 2.5em;
    width: .2em;

    @media screen and (max-width: 768px) {
        right: 2em;
        bottom: .5em
    }
`
const Button2 = styled.div`
    position: absolute;
    z-index: 999;
    height: 100%;
    width: 100%;
    border-radius: 70px;
    /* white-space: nowrap; */
    background: ${({primary}) => (primary ? '#01BF71' : '#10606')};
    /* padding: ${({big}) => (big ? '14px 48px' : '11.5px 30px')}; */
    color: ${({dark}) => (dark ? '#fff' : '#010606')};
    /* cursor: pointer; */
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.1s ease-in-out;

    &:hover {
        transition: all 0.1s ease-in-out;
        background: ${({primary}) => (primary ? 'yellow' : '#fff')};
        color: ${({dark}) => (dark ? '#010606' : '#fff')};
    }
`
const DarkModeButton = () => {
    return (
        <ButtonContainer>
            <Button2 primary="true" dark="false" smooth={true} duration={300}>◉</Button2>
        </ButtonContainer>
    );
};

export default DarkModeButton;

