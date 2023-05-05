import React, { useState, useEffect } from 'react';
import { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import { ProgressiveImage } from "react-progressive-image";
import { useHistory } from 'react-router';

import { Container, DownButton, MainImg } from './MainElements';

const Main = () => {
        
  const history = useHistory();

  useEffect(() => {
    const onPageLoad = () => {
      // alert("hi");
      // toggleLight;
      history.push('/works');
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  // console.log('initial projects', projects);
  
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

    const pageVariants2 = {
        initial: {
            opacity: 0,
            // x: "-100vw",
            // scale: 0.8
        },
        in: {
            opacity: 1,
            // x: 0,
            // scale: 1
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
            <DownButton to={"/works"}>
                  Click to enter site
            </DownButton>
            <MainImg>
                {/* <ProgressiveImage
                    src={require("/imgs/sample.jpeg")}
                > */}
                  <img 
                      as={motion.img} initial="initial"
                      animate="in"
                      exit="out"
                      variants={imgVariants}
                      transition={pageTransition}
                      src={"/imgs/sample.jpeg"} onerror='this.style.display = "none"' alt={''}>
                  </img>
                {/* </ProgressiveImage> */}
            </MainImg>
        </Container>
    );
};

export default Main;