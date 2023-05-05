// import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Container, DarkWipe, LightWipe } from './WipeElements';

const Wipe = ({ isLightTheme }) => {
    // console.log('theme toggle status', isLightTheme);
    console.log('check');

    return (
        <Container
            isLight={isLightTheme}
            as={motion.div} 
            initial={{ x: '0', backgroundColor: 'rgba(242, 249, 256, 1)' }} 
            animate={( isLightTheme ) ? { x: '-150vw', backgroundColor: 'rgba(242, 249, 256, 1)' } : { x: '150vw', backgroundColor: 'rgba(30, 30, 31, 1)' }}
            transition={{
            type: "tween",
            ease: [0.28, 1.35, 1.5, .91],
            duration: 0.8 }}
            >
            {/* <DarkWipe
                as={motion.div} 
                initial={{ x: '-100vw', opacity: 0 }} 
                animate={(isLightTheme ) ? { x: '100vw' } : { x: '-100vw' }}
                transition={{
                type: "tween",
                ease: [0.28, 1.35, 1.5, .91],
                duration: 0.8
                }}
            >
            </DarkWipe>
            <LightWipe
                as={motion.div} 
                initial={{ x: '100vw' }} 
                animate={( isLightTheme ) ? { x: '-100vw' } : { x: '100vw' }}
                transition={{
                type: "tween",
                ease: [0.28, 1.35, 1.5, .91],
                duration: 0.8
                }}
            >
            </LightWipe> */}
        </Container>
    );
};

export default Wipe;
