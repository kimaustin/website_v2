// import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Container, LightIcon, DarkIcon } from './ThemeToggleElements';

const ThemeToggle = ({ themeToggle }) => {
    return (
        <Container onClick={themeToggle}>
            {/* <Switcher> */}
                {/* <div onClick={themeToggle}>test</div> */}
                {/* <LightIcon>☀</LightIcon> */}
                {/* <DarkIcon>☁</DarkIcon> */}
            {/* </Switcher> */}
        </Container>
    );
};

export default ThemeToggle;
 