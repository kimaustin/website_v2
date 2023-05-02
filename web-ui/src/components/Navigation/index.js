import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';
import AboutPanel from '../AboutPanel';
import { Container, NavContainer, MobileMenuToggle, Indicator, OpenMenu, NavDOMLink3, Logo, NavHome, NonMobile, NonMobile1, PhotoIndexContainer, NavDOMLink, NavDOMLink2, NavDOMLinkAbout, InfoLink, Mobile, AboutContainer, Kim, InfoWrapper, Rotating, NonMobile2, Filter, Divider} from './NavigationElements';

const Navigation = ({toggle, aboutToggle, mobileToggle}) => {

    const location = useLocation();
    
    let currPage = location.pathname.split("/").pop();

    const [showInfo, setShowInfo] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [filterType, setFilterType] = useState(0);
    // const [currPage, setCurrPage] = useState(0);

    const toggleShowInfo = () => {
        var tempShowInfo = showInfo;
        setShowInfo(!tempShowInfo);
        console.log("Toggle Info: " + showInfo);
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
        <Container>
            {/* <Divider /> */}
            <Indicator currpage={currPage}
                as={motion.div} 
                initial={{ x: '24px' }}
                animate={(currPage == '') ? { x: '24px'} : (currPage == 'test' ? { x: '24px' } : (currPage == '' ? { x: 'calc(24px)' } : { x: '24px'}))}
                transition={pageTransition}
            />
            {/* <AboutContainer as={motion.div} initial={{ x: '20.5rem', y: '105vh' }} 
                            animate={showInfo ? {  x: '20.5rem', y: -18 } : { x: '20.5rem', y: '-105vh' }}
                            transition={pageTransition} showInfo={showInfo}>
                <AboutPanel />
            </AboutContainer> */}
            <NonMobile>
                <NavHome currpage={currPage} thispage={'works'} to="/works"><Logo /><a style={{ marginLeft: '8px', marginTop: '0' }}>호연</a></NavHome>
                <MobileMenuToggle onClick={mobileToggle}>Menu</MobileMenuToggle>
            </NonMobile>
            <NonMobile1>
                <NavDOMLinkAbout currpage={aboutToggle} thispage={true} onClick={() => toggle('info')}>About/Contact</NavDOMLinkAbout>
            </NonMobile1>
            <NonMobile2 
                // as={motion.div} 
                // initial="initial"
                // animate="in"
                // exit="out"
                // variants={filtersVariants}
                // transition={{
                //     type: "tween",
                //     ease: [0.7, 0, 0.13, 1],
                //     duration: 0.8,
                //     delay: 1 * 0.12,
                // }}
            >
                <NavDOMLink2 currpage={currPage} thispage={'works'} to="/">
                    Work
                </NavDOMLink2>
                {/* <NavDOMLink3 currpage={currPage} thispage={'test'} to="/test">
                    The Lab
                </NavDOMLink3> */}
                {/* <NavDOMLink2 currpage={currPage} thispage={''} to="/">
                    Photography
                </NavDOMLink2>
                <NavDOMLink2 currpage={currPage} thispage={'blog'} to="/blog">
                    Blog
                </NavDOMLink2> */}
                <NavDOMLink3>The Lab</NavDOMLink3>
                <NavDOMLink3>Photography</NavDOMLink3>
                <NavDOMLink3>Blog</NavDOMLink3>

            </NonMobile2>
        </Container>
    );
};

export default Navigation;
