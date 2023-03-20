import React from 'react';
import { Container, Content, Name, ProfileContainer, Resume, ImageSide, ResumeDownload, Links, Social, Side, Loader, Desc, Styled1, Styled2, Close } from './AboutElements';
import { motion } from "framer-motion";

const About = ({ toggle, aboutToggle }) => {

  const nameVariants = {
    initial: {
      y: '-15vh',
      x: 0,
      opacity: 0,
    },
    in: {
      y: '0vh',
      opacity: 1,
      x: 0
    },
    out: {
      y: '-15vh',
    }
  }

  const linksVariants = {
    initial: {
      y: '100vh',
      x: 0,
      opacity: 0,
    },
    in: {
      y: '0vh',
      opacity: 1,
    },
    out: {
      opacity: 0,
      transition: {
        type: "tween",
        ease: [0.87, 0, 0.13, 1],
        duration: 0.8,
        }
    }
  }

  const imgVariants = {
    initial: {
      y: '100vh',
      x: 0,
      opacity: 0,
    },
    in: {
      y: '0vh',
      opacity: 1,
      x: 0
    },
    out: {
      y: '100vh',
    }
  }

  const descVariants = {
    initial: {
      y: '0',
      x: '-20vw',
      opacity: 0,
    },
    in: {
      y: '0vh',
      opacity: 1,
      x: 0
    },
    out: {
      y: '0vh',
      opacity: 0,
      transition: {
        type: "tween",
        ease: [0.87, 0, 0.13, 1],
        duration: 0.7,
        // delay: .5,
        }
    }
  }


  const styledVariants = {
    initial: {
      y: '20vh',
      x: '0',
      opacity: 0,
    },
    in: {
      y: '0vh',
      opacity: 1,
      x: 0
    },
    out: {
      y: '20vh',
      opacity: 0,
      transition: {
        type: "tween",
        ease: [0.87, 0, 0.13, 1],
        duration: 0.7,
        // delay: .5,
        }
    }
  }

  

  const pageTransition = {
      type: "tween",
      ease: [0.87, 0, 0.13, 1],
      duration: 0.9
  };


  return (
      <Container showInfo={aboutToggle}
        as={motion.div}
        initial="initial"
        animate="in"
        exit="out"
        // variants={pageVariants}
        // transition={pageTransition}
      >
        
        <Name
          as={motion.div}
          initial="initial"
          animate="in"
          exit="out"
          variants={nameVariants}
          transition={{
            type: "tween",
            ease: [0.87, 0, 0.13, 1],
            duration: 0.95,
            delay: 0.2
          }}
          >Austin Kim <span style={{fontFamily: "JejuMyeongjo", letterSpacing: "-.25rem"}}>(호연)</span></Name>

        <Styled2 style={{ paddingTop: '1.5rem' }}
          as={motion.div}
          initial="initial"
          animate="in"
          exit="out"
          variants={styledVariants}
          transition={{
            type: "tween",
            ease: [0.87, 0, 0.13, 1],
            duration: 0.8,
            delay: 1.1
          }}
        >
          Built with React + Elixir. <br />
          Last Updated 12/20/21.
        </Styled2>

        <Content>
          <Desc
            as={motion.div}
            initial="initial"
            animate="in"
            exit="out"
            variants={descVariants}
            transition={{
              type: "tween",
              ease: [0.87, 0, 0.13, 1],
              duration: 0.9,
              delay: 0.2
            }}
            >
            Hi, I’m a multi-disciplinary designer and developer with a passion for creating meaningful and beautiful experiences. I graduated from Northeastern University in May of 2021 with a bachelors of Computer Science and Design, and since then, have been working on multiple web and graphic design projects in varying fields. 
          </Desc>
          <Desc
            as={motion.div}
            initial="initial"
            animate="in"
            exit="out"
            variants={descVariants}
            transition={{
              type: "tween",
              ease: [0.87, 0, 0.13, 1],
              duration: 0.9,
              delay: 0.25
            }}
            >
            My experience in both design and software development allows me to use my visual intuition and development skills to build engaging experiences, and I’m always looking for new and unique web technologies, patterns, and visual styles to try out myself.
          </Desc>
          <Desc
            as={motion.div}
            initial="initial"
            animate="in"
            exit="out"
            variants={descVariants}
            transition={{
              type: "tween",
              ease: [0.87, 0, 0.13, 1],
              duration: 0.9,
              delay: 0.3
            }}
          >
            Ever since I was little, I’ve loved creating things with my hands and digitally, with hobbies stretching from photography, music, and fashion. I'm still constantly on the lookout for different creative outlets, and love learning new things every day.
          </Desc>
          <Links
            as={motion.div}
            initial="initial"
            animate="in"
            exit="out"
            variants={linksVariants}
            transition={{
              type: "tween",
              ease: [0.87, 0, 0.13, 1],
              duration: 0.9,
              delay: .85
            }}
            >
            <Social onClick={() => window.open("imgs/ResumeFall2021.pdf")} target="_blank">Resume</Social>
            <Social onClick={() => window.open("https://www.linkedin.com/in/austinkim072775/")} target="_blank">LinkedIn</Social>
            <Social onClick={() => window.open("https://www.instagram.com/nektine/")} target="_blank">Instagram</Social>
            <Social onClick={() => window.open("https://open.spotify.com/user/122352291?si=4d4715d1bbe74146")} target="_blank">Spotify</Social>
            <Social onClick={() => window.open("mailto:nektinemedia@gmail.com")} target="_blank">Email</Social>
            <Social onClick={() => window.open("tel:+17705954256")} target="_blank">Phone</Social>
          </Links>
        </Content>

        <ProfileContainer
          as={motion.div}
          initial="initial"
          animate="in"
          exit="out"
          variants={imgVariants}
          transition={pageTransition}
          >
            <img src={"imgs/me.jpeg"} style={{display: 'block'}} onerror='this.style.display = "none"' alt={'picture'} id="me!"></img>
        </ProfileContainer>
      </Container>
  );
}

export default About;