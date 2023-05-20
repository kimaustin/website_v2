import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Versions = ({ drawerToggle, toggle }) => {

    return (
        <Container
            as={motion.div} 
            initial={{ x: '-200px' }} 
            animate={drawerToggle ? {  x: '6px' } : { x: '-200px' }}
            transition={{
              type: "tween",
              ease: [0.28, 1.35, 1.5, .91],
              duration: 0.25
            }}
        >
            {/* <Logo onClick={toggle}>
                <img src={"logo.png"} />
            </Logo> */}
            <Drawer>
                <Item><a href={"https://google.com"}>V 1.0</a></Item>
                <Item><a href={"https://google.com"}>V 2.0</a></Item>
                <Item><a href={"https://google.com"}>V 2.5</a></Item>
            </Drawer>
        </Container>
    );
};

export default Versions;

const Container = styled.div`
    z-index: 1001;
    position: fixed;
    left: 0;
    top: calc(30vh - 70px);
`

const Drawer = styled.div`
    z-index: 999;
    /* position: fixed; */
    /* left: -200px; */
    /* top: calc(50vh - 65px); */
    /* bottom: 0; */
    width: 130px;
    /* height: 180px; */
    padding-top: 10px;
    padding-bottom: 10px;
    
    border-radius: 7px;
    /* background: green; */
    /* border: 1px solid ${props => props.theme.border}; */
    background: ${props => props.theme.bgNav};
    backdrop-filter: blur(12px);
`

const Item = styled.div`
    padding-top: 6px;
    /* padding-bottom: 8px; */
    margin-bottom: 2px;
    padding-left: 12px;
    height: 32px;
    color: ${props => props.theme.secondary};
    transition: 0.075s all ease-in-out;    

    a {
        text-decoration: none;
        font-family: 'SS3';
        font-size: '14px';
        width: 100%;

        &:hover {
            color: ${props => props.theme.primary};
        }
    }

    &:hover {
        color: ${props => props.theme.primary};
        background: ${props => props.theme.bgNav};
        opacity: 1;
        cursor: pointer;
    }
`