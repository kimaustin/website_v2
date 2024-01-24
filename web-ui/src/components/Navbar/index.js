import React, { useState, useEffect } from 'react';
import { Container, Nav, NavbarContainer, NavLogo, Styled1, Styled2, Styled3, Social, About, Menu, Details1, MobileAboutContainer, Logo, NavHome, Close, NavMenu, NavItem, NavLinksDOM, NavLinksDOM2, NavLinks, CloseBtn, NavBtnLink } from './NavbarElements';
import { motion } from "framer-motion";

const Navbar = ({mobileToggle, isOpen}) => {

    const [mobileAbout, setMobileAbout] = useState(false);
    
    const toggleMobileAbout = () => {
        // console.log("mobile about showing", mobileAbout);
        setMobileAbout(true);
    };

    const toggleMobileAbout2 = () => {
        // console.log("mobile menu showing", mobileAbout);
        setMobileAbout(false);
    };

    return (
        <Container
            example_var={mobileAbout}
            as={motion.div} initial={{ x: 0, y: '430px' }} 
            animate={isOpen ? {  x: 0, y: 0 } : { x: 0, y: '430px' }}
            transition={{
            type: "tween",
            ease: [0.28, 1.35, 1.5, .91],
            duration: 0.35
            }}
        >
            <NavHome><Logo /><a style={{ marginLeft: '8px', marginTop: '1px' }}>호연</a></NavHome>
            <NavMenu
                as={motion.div} initial={{ x: '0vw', y: 0 }} 
                animate={mobileAbout ? {  x: '-100vw', y: 0 } : { x: '0vw', y: 0 }}
                transition={{
                type: "tween",
                ease: [0.28, 1.35, 1.5, .91],
                duration: 0.35
                }}
            >
                <NavLinksDOM onClick={mobileToggle} to="/index">Index</NavLinksDOM>
                {/* <NavLinksDOM onClick={mobileToggle} to="/test">The Lab</NavLinksDOM>
                <NavLinksDOM onClick={mobileToggle} to="/blog">Blog</NavLinksDOM> */}
                {/* <NavLinksDOM2>The Lab</NavLinksDOM2> */}
                {/* <NavLinksDOM2>Blog</NavLinksDOM2> */}
                <NavLinksDOM2>(Blog coming Soon)</NavLinksDOM2>
                {/* <NavLinksDOM2>(Lab coming Soon)</NavLinksDOM2> */}
                {/* <NavLinksDOM onClick={mobileToggle} to="/photo">Photography</NavLinksDOM> */}
                {/* <NavLinksDOM2>(Photos coming Soon)</NavLinksDOM2> */}
                <Details1>Built by me in React + Elixir<br />Last Updated: Aug 20, 2023</Details1>
            </NavMenu>
            <MobileAboutContainer
                as={motion.div} initial={{ x: '100vw', y: 0 }} 
                animate={mobileAbout ? {  x: '0vw', y: 0 } : { x: '100vw', y: 0 }}
                transition={{
                type: "tween",
                ease: [0.28, 1.35, 1.5, .91],
                duration: 0.35
                }}
            >
                Austin Kim
                <Styled1>Currently in Brooklyn, NY</Styled1>
                <Styled2>I’m a multi-disciplinary designer, developer, artist with a passion for building meaningful, impactful, and engaging experiences. I love experimenting with new technologies, techniques, patterns, styles, and sounds.</Styled2>
                <Styled3>Open for work and collaboration</Styled3>
                <Social onClick={() => window.open("/imgs/akim_cv.pdf")} target="_blank">Resume ↗</Social>
                <Social href="https://www.instagram.com/nektine/" target="_blank">Instagram ↗</Social>
                <Social href="mailto:nektinemedia@gmail.com" target="_blank">Email ↗</Social>
            </MobileAboutContainer>
            <Close onClick={mobileToggle}>Close</Close>
            <Menu 
                onClick={toggleMobileAbout2}
                as={motion.div} initial={{ x: '60vw', opacity: 0, zIndex: -1 }} 
                animate={mobileAbout ? {  x: '0vw', opacity: 1, zIndex: 1 } : { x: '60vw', opacity: 0, zIndex: -1 }}
                transition={{
                type: "tween",
                ease: [0.28, 1.35, 1.5, .91],
                duration: 0.3
                }}
            >Menu</Menu>
            <About 
                onClick={toggleMobileAbout} 
                as={motion.div} initial={{ x: '0vw', opacity: 1, zIndex: 1 }} 
                animate={mobileAbout ? {  x: '-50vw', opacity: 0, zIndex: -1 } : { x: '0vw', opacity: 1, zIndex: 1 }}
                transition={{
                type: "tween",
                ease: [0.28, 1.35, 1.5, .91],
                duration: 0.3
                }}
            >About</About>
            <CloseBtn onClick={mobileToggle}>✕</CloseBtn>
        </Container>
    );
};

export default Navbar;