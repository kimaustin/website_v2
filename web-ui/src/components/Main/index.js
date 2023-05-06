import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { motion } from "framer-motion";
import { ProgressiveImage } from "react-progressive-image";
import { useHistory } from 'react-router';
import { Container, Logo } from './MainElements';

const Main = ({ projects }) => {
        
  const history = useHistory();
  const [isStillLoading, setIsStillLoading] = useState(true);

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

    const pageVariants2 = {
        initial: {
            opacity: 0,
        },
        in: {
            opacity: 1,
        },
        out: {
            opacity: 0, transition: {
              type: "tween",
              ease: [0.87, 0, 0.13, 1],
              duration: 0.2
        }}
    };
    
    const pageTransition = {
        type: "tween",
        ease: [0.87, 0, 0.13, 1],
        duration: 0.4
    };

    return (
        <Container 
            // as={motion.div}
            // initial="initial"
            // animate="in"
            // exit="out"
            // variants={pageVariants2}
            // transition={pageTransition}
            >
            {/* <Logo 
              as={motion.div} 
              initial={{ scale: 1, opacity: 1 }} 
              animate={{scale: 1, opacity: 1}}
              exit={{ scale: 999, opacity: 1 }}
              transition={{
              type: "tween",
              ease: [0.28, 1.35, 1.5, .91],
              duration: 0.8 }}
            /> */}
        </Container>
    );
};

export default withRouter(connect(({ projects }) => ({ projects }))(Main));