import React from 'react';
import { Container, Content, Logo, Name, ProfileContainer, Resume, ImageSide, ResumeDownload, Bottom, Social, Side, Loader, Desc, Styled1, Styled2, Close } from './AboutPanelElements';
import { ListContainer } from '../Works/WorkElements';
import { AboutContainer } from '../Navigation/NavigationElements';
import { motion } from "framer-motion";

const About = ({ toggle, aboutToggle }) => {
 
  return (
    // <AboutContainer>
      <Container showInfo={aboutToggle}
        as={motion.div} initial={{ x: '-32vw', y: '0' }} 
        animate={aboutToggle ? {  x: '0', y: 0 } : { x: '-32vw', y: '0' }}
        transition={{
          type: "tween",
          ease: [0.28, 1.35, 1.5, .91],
          duration: 0.3
        }}
      >
        {/* <Loader /> */}
        {/* <Side>INFO</Side> */}
        {/* <ProfileContainer>
            <img src={"imgs/me3.jpeg"} style={{display: 'block'}} onerror='this.style.display = "none"' alt={'picture'} style={{height: '100%'}} id="me!"></img>
        </ProfileContainer> */}
        {/* <Close onClick={toggle}>close</Close> */}
        <Content>
          {/* <ListContainer /> */}
          {/* <p onClick={() => props.showInfo = !props.showInfo}>x</p> */}
          <Logo />
          <Name>Austin Kim <br />(호연)</Name>
          <Styled1>Currently based in <br /> Brooklyn, NY</Styled1>
          {/* <Styled2 style={{ paddingTop: '.5rem' }}>
            Designer
          </Styled2> */}
          <Styled2>
            I’m a multi-disciplinary designer, developer, artist with a passion for creating meaningful and beautiful experiences. I graduated from Northeastern University in May of 2021 with a bachelors of Computer Science and Design, and since then, have been working on multiple web and graphic design projects in varying fields. 
            <br /><br />
            I love building engaging and meaningful experiences , and am always on the lookout for new and unique web technologies, patterns, and visual styles.
            <br /><br />
            Since childhood, I’ve loved all things creative, hobbies stretching from photography, music, and fashion. I still love learning new things every day, and am always on the lookout new creative outlets.
          </Styled2>
          {/* <Styled2 style={{ paddingTop: '1.5rem' }}>Last Updated: Sep. 30, 2021</Styled2> */}
          {/* <Styled2>Built with React, Elixir.</Styled2> */}
        </Content>
        <Bottom>
          <Styled1>Last Updated: Apr 2, 2023</Styled1>
          <Styled1 style={{paddingTop: '3px'}}>Built by me in React (framer, styled-components) + Elixir.</Styled1>
          {/* <Social onClick={() => window.open("imgs/ResumeFall2021.pdf")} target="_blank">Resume</Social>
          <Social href="https://www.linkedin.com/in/austinkim072775/" target="_blank">LinkedIn</Social>
          <Social href="https://www.instagram.com/nektine/" target="_blank">Instagram</Social>
          <Social href="mailto:nektinemedia@gmail.com" target="_blank">Email</Social>
          <Social href="tel:+17705954256" target="_blank">+1 770.595.4256</Social>
          <Close onClick={toggle}>close</Close> */}
        </Bottom>
      </Container>
    // </AboutContainer>
  );
}

export default About;
