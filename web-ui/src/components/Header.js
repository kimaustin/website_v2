import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

const HeaderStyled = styled.h1`
    font-size: ${({scrollName}) => (scrollName ? '2em' : '12em')};
    letter-spacing: -10px;
    line-height: 83%;
    position: sticky;
    top: 0;

    @media screen and (max-width: 960px) {
        transition: 1s all ease;
    }
`

const Header = () => {
    const [scrollName, setScrollName] = useState(false);

    const changeName = () => {
        if(window.scrollY >= 60) {
            setScrollName(true);
        } else {
            setScrollName(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeName)
    }, []);

    return (
        <HeaderStyled scrollName={scrollName}>Austin Kim</HeaderStyled>
    );
}

export default Header;
