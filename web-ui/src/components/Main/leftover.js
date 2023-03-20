import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button2 } from '../ButtonElement';
import Navigation from '../Navigation';
import SideBar from '../SideBar';
import ReactTooltip from 'react-tooltip';
import { theme1, theme2 } from '../Themes';
import Status from '../Status';
import { Container, BodySection, HeaderX, MainBio, SDHover, UEHover, ButtonWrapper } from './MainElements';

const Main = () => {
        
    const [scrollName, setScrollName] = useState(false);
    const [colorThemeInvert, setColorThemeInvert] = useState(false);

    const changeName = () => {
        if(window.scrollY >= 60) {
            setScrollName(true);
        } else {
            setScrollName(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeName)
    }, []);

    const invertColors = () => {
        setColorThemeInvert(!colorThemeInvert);
        // console.log("got here");
        // console.log(colorThemeInvert);
    }

    return (
        <ThemeProvider theme={colorThemeInvert ? theme1 : theme2}>
            <Container>
                <HeaderX scrollName={scrollName}>Austin Kim
                </HeaderX>
                <BodySection>
                    <ButtonWrapper>
                        <Button2 onClick={invertColors} primary="true" dark="false" 
                            smooth={true} duration={500}>INVERT</Button2>
                    </ButtonWrapper>
                    <MainBio>
                        <a data-tip data-for='overridePosition'>( •̀д•́) override</a>
                        <ReactTooltip
                            id='overridePosition'
                            overridePosition={ (
                                { left, top },
                                currentEvent, currentTarget, node) => {
                            const d = document.documentElement;
                            left = Math.min(d.clientWidth - node.clientWidth, left);
                            top = Math.min(d.clientHeight - node.clientHeight, top);
                            left = Math.max(0, left);
                            top = Math.max(0, top);
                            return { top, left }
                            } }>
                            <img src="imgs/Selected/Narco.png" alt="lorem image 100x1500" />
                        </ReactTooltip>
                    </MainBio>
                    <MainBio>I’m a designer with passions in </MainBio>
                    <SDHover>Software Development, and</SDHover><br></br>
                    <UEHover>User Experience</UEHover>
                    <MainBio>And this is a little bit more about me, but also to just 
                        test out scrolling. Hopefully I can finish this website soon.</MainBio>
                </BodySection>
            {/* <SideBar /> */}
            </Container>
            <Status />
        </ThemeProvider>
    );
};

export default Main;
