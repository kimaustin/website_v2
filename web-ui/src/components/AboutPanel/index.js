import React from 'react';
import { Container, Content, Logo, Name, ProfileContainer, Resume, ImageSide, ResumeDownload, Bottom, Social, Side, Loader, Desc, Styled1, Styled2, Close } from './AboutPanelElements';
import { ListContainer } from '../Works/WorkElements';
import { AboutContainer } from '../Navigation/NavigationElements';
import { motion } from "framer-motion";

const About = ({ toggle, aboutToggle }) => {
 
  return (
    // <AboutContainer>
      <Container showInfo={aboutToggle}
        as={motion.div} initial={{ x: '-100vw', y: '0' }} 
        animate={aboutToggle ? {  x: '0', y: 0 } : { x: '-100vw', y: '0' }}
        transition={{
          type: "tween",
          ease: [0.28, 1.35, 1.5, .91],
          duration: 0.4
        }}
      > 
        {/* <Loader /> */}
        {/* <Side>INFO</Side> */}
        {/* <ProfileContainer>
            <img src={"imgs/me3.jpeg"} style={{display: 'block'}} onerror='this.style.display = "none"' alt={'picture'} style={{height: '100%'}} id="me!"></img>
        </ProfileContainer> */}
        {/* <Close onClick={toggle}>close</Close> */}
        <Content>
          <Logo />
          <Name>Austin Kim <br />(호연)</Name>
          <Styled1>Currently based in <br /> Brooklyn, NY</Styled1>
          <Styled1 style={{ color: '#6C9EFF', paddingTop: '10px' }}>Open for work and collaboration</Styled1>
          <Styled2>
            I’m a multi-disciplinary designer, developer, artist with a passion for building meaningful, impactful, and engaging experiences.
          </Styled2>
          <Styled2 style={{ marginTop: '12px' }}>I love experimenting with new technologies, techniques, patterns, styles, and sounds.</Styled2>
        </Content>
        <Bottom>
          <Social onClick={() => window.open("imgs/ResumeFall2021.pdf")} target="_blank">Resume ↗</Social>
          <Social href="https://www.instagram.com/nektine/" target="_blank">Instagram ↗</Social>
          <Social href="mailto:nektinemedia@gmail.com" target="_blank">Email ↗</Social>
          <Styled1 style={{paddingTop: '30px' }}>Last Updated: Apr 2, 2023</Styled1>
          <Styled1 style={{paddingTop: '6px', paddingBottom: '40px'}}>Built by me in React (framer, styled-components) + Elixir.</Styled1>
          <Close onClick={toggle}>Close ✕</Close>
        </Bottom>
      </Container>
    // </AboutContainer>
  );
}

export default About;
