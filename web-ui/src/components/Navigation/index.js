import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';
import AboutPanel from '../AboutPanel';
import { Container, NavContainer, MobileAbout, DrawerToggle, Switcher, ThemeIndicator, DarkWipe, DarkIcon, LightIcon, MobileMenuToggle, Indicator, NavDOMLink3, Logo, NavHome, NonMobile, NonMobile1, PhotoIndexContainer, NavDOMLink, NavDOMLink2, NavDOMLinkAbout, InfoLink, Mobile, AboutContainer, Kim, InfoWrapper, Rotating, NonMobile2, Filter, Divider, LightLabel, IconContainer, IndicatorContainer, SimpleNav, VersionLabel, Marker} from './NavigationElements';
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { MarkerL } from '../Works/WorkElements';
const Navigation = ({drawerStatus, toggleDrawer, toggle, aboutToggle, mobileToggle, toggleLight, toggleDark, themeToggleStatus}) => {

    const location = useLocation();
    
    let currPage = location.pathname.split("/").pop();

    const [showInfo, setShowInfo] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [filterType, setFilterType] = useState(0);
    // const [currPage, setCurrPage] = useState(0);

    const toggleShowInfo = () => {
        var tempShowInfo = showInfo;
        setShowInfo(!tempShowInfo);
        // console.log("Toggle Info: " + showInfo);
    };

    // function toggleMobileMenu() {
    //     if (mobileMenu) {
    //         {toggle};
    //     }
    // }

    // const toggleDotOpened = () => {
    //     var tempShowInfo = showInfo;
    //     setDotOpened(!dotOpened);
    //     console.log("dot open status" + dotOpened);
    // };
    
    //TODO: Cases for when clicking on other tabs or things UNDER Info Card
    const pageTransition = {
        type: "tween",
        ease: [0.7, 0.1, 0.4, 1],
        duration: 0.5
    };
 
    let infoDrop = null;

    if (showInfo) {
        infoDrop = (
            <AboutContainer as={motion.div} initial={{ scale: 0.9, opacity: 0.2 }} 
                            animate={{ scale: 1, opacity: 1}} exit={{ scale: 0.9, opacity: 0.2 }}
                            transition={{ type: "tween", ease: [0.87, 0, 0.13, 1], duration: 0.7 }}>
                <AboutPanel />
            </AboutContainer>
        )
    }

    const filtersVariants = {
        initial: {
          x: "-12rem",
          // opacity: 0
        },
        in: {
          x: "0vh",
          // opacity: 1
        },
        out: {
          x: "-12rem",
          transition: {
              type: "tween",
              ease: [0.7, 0, 0.13, 1],
              duration: 0.85,
          }
          // opacity: 0
        },
      };

    const toggleWithType = (filter) => {
        console.log("filter type: " + filterType);
        if (filterType != filter) {
        setFilterType(filter);
        } else {
        setFilterType(0);
        }
    };

    return (
        // <Container currPage={currPage} as={motion.div} initial={{ x: '0', y: '0' }} 
        //     animate={aboutToggle ? {  x: '25vw', y: 0 } : { x: '0', y: '0' }}
        //     transition={pageTransition}>
        <Container
            // as={motion.div} 
            // initial={{ opacity: 1 }} 
            // // animate={((location.pathname.charAt(2) == "n") != '') ? {  x: 'calc(50vw - 36px)' } : { x: 'calc(18vw - 36px)' }}
            // animate={(currPage == '') ? {  opacity: 0 } : { opacity: 1 }}
            // transition={{
            // type: "tween",
            // ease: [0.28, 1.35, 1.1, .8],
            // duration: 0.55,
            // delay: 0.35,
            // }}
        >
            {/* <Divider /> */}
            {/* <Indicator currpage={currPage}
                as={motion.div} 
                initial={{ x: '24px' }}
                animate={(currPage == '') ? { x: '22px'} : (currPage == 'test' ? { x: '22px' } : (currPage == '' ? { x: 'calc(24px)' } : { x: '22.5px'}))}
                transition={pageTransition}
            /> */}
            {/* <AboutContainer as={motion.div} initial={{ x: '20.5rem', y: '105vh' }} 
                            animate={showInfo ? {  x: '20.5rem', y: -18 } : { x: '20.5rem', y: '-105vh' }}
                            transition={pageTransition} showInfo={showInfo}>
                <AboutPanel />
            </AboutContainer> */}
            {/* <NonMobile>
                <NavHome currpage={currPage} thispage={'works'} to="/works"><Logo /><a style={{ marginLeft: '8px', marginTop: '-1px' }}>호연</a></NavHome>
                <NavDOMLinkAbout currpage={aboutToggle} thispage={true} onClick={() => toggle('info')}>About/Contact</NavDOMLinkAbout>
                <Switcher>
                        <LightIcon onClick={toggleLight}><IoSunnySharp /></LightIcon>
                        <LightIcon onClick={toggleLight}>*</LightIcon>
                        <ThemeIndicator 
                            isLight={themeToggleStatus}
                            as={motion.div} 
                            initial={{ marginLeft: '-100%' }} 
                            animate={( themeToggleStatus ) ? { marginLeft: '-100%' } : { marginLeft: '50%' }}
                            transition={{
                            type: "tween",
                            ease: [0.28, 1.35, 1.5, .91],
                            duration: 0.4 }}
                        />
                        <DarkIcon onClick={toggleDark}><FaMoon /></DarkIcon>
                        <DarkIcon onClick={toggleDark}>)</DarkIcon>
                </Switcher>
                <MobileMenuToggle onClick={mobileToggle}>Menu/About</MobileMenuToggle>
            </NonMobile> */}
            {/* <MarkerL>&gt;</MarkerL> */}
            {/* <Marker /> */}
            <SimpleNav>
                {/* <DrawerToggle onClick={toggleDrawer} isOpen={drawerStatus}>
                    <img src={"logo2.png"} />
                    <VersionLabel>V 2.5</VersionLabel>
                </DrawerToggle> */}
                <Switcher>
                    <LightIcon onClick={toggleLight}>*</LightIcon>
                    <ThemeIndicator 
                        isLight={themeToggleStatus}
                        as={motion.div} 
                        initial={{ marginLeft: '-105%' }} 
                        animate={( themeToggleStatus ) ? { marginLeft: '-105%' } : { marginLeft: '45%' }}
                        transition={{
                        type: "tween",
                        ease: [0.28, 1.35, 1.5, .91],
                        duration: 0.35 }}
                    />
                    <DarkIcon onClick={toggleDark}>)</DarkIcon>
                </Switcher>
                <NavDOMLink currpage={currPage} thispage={'index'} to="/index">Index</NavDOMLink>
                <NavDOMLinkAbout currpage={aboutToggle} thispage={true} onClick={() => toggle('info')}>Contact</NavDOMLinkAbout>
                <MobileMenuToggle onClick={mobileToggle}>Menu • Contact</MobileMenuToggle>
                <NavHome>
                    <Logo /> 
                    v2_austinkim_호연
                </NavHome>
            </SimpleNav>
        </Container>
    );
};

export default Navigation;
