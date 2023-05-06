import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";


const Background = () => {
    return (
        <Container
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                type: "tween",
                ease: [0.7, 0, 0.13, 1],
                duration: 0.5,
            }}
        />
    );
};

export default Background;

const Container = styled.div`
    z-index: -1;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background: ${props => props.theme.bg};
`
