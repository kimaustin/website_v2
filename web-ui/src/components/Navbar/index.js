import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinksDOM, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);
    
    //TODO triggers something when certain scroll level has been reached
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff '}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/">N</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinksDOM to="/main">Landing</NavLinksDOM>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="about">About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="work">Work</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="nektine">Nektine</NavLinks>
                            </NavItem>
                            <NavBtn>
                                <NavBtnLink to='/signIn'>Sign In</NavBtnLink>
                            </NavBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;