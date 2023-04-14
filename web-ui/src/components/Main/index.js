import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import { ProgressiveImage } from "react-progressive-image";

import { Container, BodySection, WorksImageContainer, BasicTxt1, BasicTxt2, SelectedLabel, Divider, Divider2, MainBio, Name, Kim, DownButton, FilterPreview, FilterContent, SDTypeHover, SDContent, UXTypeHover, UXContent, TypeHover, Marquee, ImageContainer, Styled, HoverName, ArrowAnim, SelectedWorks, WorkItem, ItemIndex, ItemDetail, SelectedListContainer, ButtonContainer, Header, MainImg, MainDesc, lilMove } from './MainElements';

const Main = ({projects}) => {
        
    const [scrollName, setScrollName] = useState(false);

    const descVariants = {
        initial: {
            y: '50vh',
            x: 0,
            opacity: 0,
          },
          in: {
            y: '0vh',
            opacity: 1,
            x: 0,
            transition: {
              type: "tween",
              ease: [0.87, 0, 0.13, 1],
              duration: 1.2,
              delay: .2,
              }
          },
          out: {
            y: '50vh',
            x: '0'
          }
    }

    const imgVariants = {
        initial: {
          y: '0',
          x: 0,
          opacity: 0,
        },
        in: {
          y: '0vh',
          opacity: 1,
          x: 0,
          transition: {
            type: "tween",
            ease: [0.87, 0, 0.13, 1],
            duration: 1,
            delay: .5,
            }
        },
        out: {
          y: '0vh',
          x: '0',
          scale: 0,
          transition: {
            type: "tween",
            ease: [0.87, 0, 0.13, 1],
            duration: 1,
            delay: .5,
          }
        } 
    }

    const btnVariants = {
        initial: {
          y: '50vh',
          x: 0,
          opacity: 0,
        },
        in: {
          y: '0vh',
          opacity: 1,
          x: 0,
          transition: {
            type: "tween",
            ease: [0.87, 0, 0.13, 1],
            duration: .9,
            delay: .65,
            }
        },
        out: {
          y: '0',
          opacity: 0,
          x: '50vw'
        }
    }

    const headerVariants = {
        initial: {
          y: '-50vh',
          x: 0,
          opacity: 0,
        },
        in: {
          y: '0vh',
          opacity: 1,
          x: 0,
        },
        out: {
          y: '-50vh',
          x: '0'
        }
    }


    const pageVariants2 = {
        initial: {
            opacity: 0,
            // x: "-100vw",
            scale: 0.8
        },
        in: {
            opacity: 1,
            x: 0,
            scale: 1
        },
        out: {
            // scale: 0.2,
            opacity: 0
            // opacity: 0,
            // x: "-100vw",
            // scale: 1.2
        }
    };
    
    const pageTransition = {
        type: "tween",
        ease: [0.87, 0, 0.13, 1],
        duration: 0.85
    };

    return (
        <Container 
            as={motion.div}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants2}
            transition={pageTransition}
            >
            {/* <MainBio zVal={999}
                as={motion.div} initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                > */}
            <Header
                as={motion.div} initial="initial"
                animate="in"
                exit="out"
                variants={headerVariants}
                transition={pageTransition}
                >
                    {/* Austin Kim <span style={{fontFamily: "JejuMyeongjo", letterSpacing: "-1.1rem"}}>(호연)</span> */}
                    Hello,
            </Header>
            {/* <MainImg> */}
                {/* <ProgressiveImages
                    src={require("imgs/me2.jpeg")}
                > */}
            <img 
                as={motion.img} initial="initial"
                animate="in"
                exit="out"
                variants={imgVariants}
                transition={pageTransition}
                src={"imgs/me2.jpeg"} onerror='this.style.display = "none"' alt={'Me'}>
            </img>
                {/* </ProgressiveImage> */}
            {/* </MainImg> */}
            <MainDesc 
                as={motion.div} initial="initial"
                animate="in"
                exit="out"
                variants={descVariants}
                transition={pageTransition}
                >I'm Austin, a web/UX/UI/graphic <br />designer with a background in Computer <br />Science and Design.<br />
            </MainDesc>
            <ButtonContainer
                as={motion.div}
                initial="initial"
                animate="in"
                exit="out"
                variants={btnVariants}
                transition={pageTransition}>
                <DownButton to={"/works"}>
                  → View Projects ←
                  {/* <lilMove>→</lilMove> */}
                </DownButton>
            </ButtonContainer>
            {/* </MainBio> */}
        </Container>
    );
};

export default connect(({projects}) => ({projects}))(Main);