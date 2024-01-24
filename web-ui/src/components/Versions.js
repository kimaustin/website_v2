import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Versions = ({ drawerToggle, toggle }) => {

    const currPage = window.location.href.slice(7);
    console.log("page location: ", currPage);

    return (
        <Container>
            <Drawer
                as={motion.div} 
                initial={{ x: 0, y: 'calc(100% - 44px)'}} 
                animate={drawerToggle ? {  x: 0, y: 0 } : { x: 0, y: 'calc(100% - 44px)' }}
                transition={{
                type: "tween",
                ease: [0.28, 1.35, 1.5, .91],
                duration: 0.185
                }}
            >
                <Label onClick={toggle}>version history
                    {/* {(currPage.startsWith("archive")) ? " - 3" : "- 3"} */}
                </Label>
                <Item onClick={() => window.location='http://v1.austinkim.works'} target="blank">V1.0 (2020)</Item>
                <Item onClick={() => window.location='http://archive.austinkim.works'} target="blank">V3.0 (2023)</Item>
                {/* <Item selected={true}>Archive_0</Item> */}
            </Drawer>
            
        </Container>
    );
};

export default Versions;

const Container = styled.div`
    z-index: 1002;
    position: fixed;
    /* left: 0; */
    bottom: -1px;
    /* left: 63vw; */
    /* left: 13px; */
    right: 18px;
    /* right: 18vw; */
    /* bottom: 18px; */
    /* width: auto-contain; */
    /* bottom: -1px; */
    /* background: blue; */
    /* border: 1px solid green; */

    @media screen and (max-width: 767px) {
        bottom: -50vh;
        display: none;
    }
`

const Drawer = styled.div`
    z-index: 999;
    opacity: 1;
    display: inline-grid;
    width: 100%;
    height: fit-content;
    /* position: fixed; */
    /* left: -200px; */
    /* top: calc(50vh - 65px); */
    /* bottom: 0; */
    /* width: 130px; */
    /* height: 180px; */
    /* padding-top: 10px; */
    padding-bottom: 16px;
    /* border-radius: 7px; */
    /* background: ${props => props.theme.bg}; */
    /* border: 1px solid ${props => props.theme.border}; */
    /* background: ${props => props.theme.bg}; */
    /* backdrop-filter: blur(12px); */
    border: 1px solid ${props => props.theme.secondary};
    /* &:hover {
        border: 3px solid green;
    } */
`

const Item = styled.div`
    display: grid;
    padding-left: 8px;
    /* padding-bottom: 8px; */
    height: 34px;
    color: ${props => props.theme.primary};
    padding: 9px 12px 5px 12px;
    /* margin-top: -1px; */
    border-bottom: 1px solid ${props => props.theme.secondary};
    background: ${props => props.theme.bg};
    font-size: 15px;
    font-family: "Times New Roman";

    /* color: ${({ selected }) => ((selected) ? '18px' : 'none')}; */
    /* background:  ${({ selected }) => ((selected) ? 'grey' : '')}; */
    user-select: ${({ selected }) => ((selected) ? 'none' : 'none')};
    /* opacity: ${({ selected }) => ((selected) ? '0.2' : '1')}; */
    
    &:hover {
        color: ${props => props.theme.bg};

        background: ${props => props.theme.primary};
        a {
            color: ${props => props.theme.bg};
        }
        cursor: pointer;
    }
`

const Label = styled.div`
    z-index: 1000;
    background: blue;
    /* width: 32px; */
    height: 44px;
    /* width: 100%; */
    /* height: 32px; */
    /* opacity: 0.8; */
    /* border-radius: 16px; */
    color: ${props => props.theme.primary};
    font-size: 15px;
    font-family: "Times New Roman";
    /* padding: 9px 12px 9px 12px; */
    padding-top: 12px;
    padding-left: 12px;
    padding-right: 12px;
    text-align: center;
    border-bottom: 1px solid ${props => props.theme.secondary};
    background: ${props => props.theme.bg};

    a { 
        /* margin-top: 2px; */
        /* font-size: 20px; */
    }

    &:hover {
        /* opacity: 1; */
        cursor: pointer;
        background: ${props => props.theme.primary};
        color: ${props => props.theme.bg};
        cursor: pointer;
    }
` 