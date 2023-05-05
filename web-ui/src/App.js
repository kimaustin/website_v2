import "./App.scss";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import GlobalFonts from './fonts/fonts';
import { motion, AnimatePresence } from "framer-motion";

import { ThemeProvider } from 'styled-components';

import Home from "./components/Home";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Status from "./components/Status";
import MobileBar from "./components/MobileBar";
import { Button2 } from "./components/ButtonElement";
import DarkModeButton from "./components/DarkModeButton";
import Works from "./components/Works";
import WorkExpanded from "./components/Works/WorkExpanded";
import Images from "./components/ImageZoom";
import About from "./components/About";
import AboutPanel from "./components/AboutPanel";
import NavBar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Lab from "./components/Lab";
import Close from "./components/About";
import MobileToggle from "./components/MobileToggle";
import WIP from "./components/WIP";
import { Provider } from "react-redux";
import SideProjects from "./components/SideProjects";
import Blog from "./components/Blog";
import CloseOverlay from "./components/CloseOverlay";
import ThemeToggle from "./components/ThemeToggle";
import Wipe from "./components/Wipe";

//Our App Components
function App() {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log("mobile nav toggled", isOpen);
    setIsOpen(!isOpen);
  };

  const [aboutToggle, setAboutToggle] = useState(false);
  
  const toggleAbout = (currPage) => {
    if (currPage == 'info') {
      console.log("about toggled");
      setAboutToggle(!aboutToggle);
    } else {
      setAboutToggle(false);
    }
  }

  // const toggleAbout = () => {
  //   console.log("about toggled");
  //   setAboutToggle(!setAboutToggle);
  // };

  const [sideProjectsToggle, setSideProjectsToggle] = useState(false);

  // const location = useLocation();
  //TODO: make 2 Styled Component Themes, declare state that is one Theme.
  //----- ON dark/mode press, change state to other theme. Pass in state to each component.

  const lightTheme = {
    name: 'light',
    bg: "rgba(245, 251, 255, 1)",
    bgBlur: "rgba(222, 220, 226, 0.65)",
    bgSide: "rgba(242, 240, 244, 0.8)",
    bgNav: "rgba(247, 246, 251, 0.65)",
    bgPreview: "rgba(255, 255, 255, 0.7)",
    primary: "#000000",
    secondary: "#7D7D7D",
    cs: "#0047FD",
    border: "#D1D4D7"
  };

  const darkTheme = {
    name: 'dark',
    bg: "black",
    bgBlur: "rgba(100, 100, 100, 0.35)",
    bgSide: "rgba(51, 49, 52, 0.8)",
    bgNav: "rgba(30, 30, 31, 0.65)",
    bgPreview: "rgba(8, 8, 8, 0.85)",
    primary: "rgba(245, 251, 255, 0.95)",
    secondary: "#BABABA",
    border: "#3E3E3E",
    cs: "#5685FF",
  }

  const [colorTheme, setColorTheme] = useState(lightTheme);
  const [isLightTheme, setIsLightTheme] = useState(true);

  // const toggleTheme = () => {
  //   if (colorTheme == lightTheme) {
  //   console.log("toggling to light");
  //     setColorTheme(darkTheme);
  //   } else {
  //     console.log("toggling to dark");
  //     setColorTheme(lightTheme);
  //   }
  // };

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const toggleLight = async event => {
    if (!isLightTheme) {
      setIsLightTheme(lightTheme);
    }
    await delay(150);
    setColorTheme(lightTheme);
  }

  const toggleDark = async event => {
    setIsLightTheme(false);
    await delay(150);
    setColorTheme(darkTheme);
  }

  const pageTransition = {
    type: "tween",
    ease: [0.7, 0.1, 0.4, 1],
    duration: 0.5
  };

  return (
    <Router>
      <ThemeProvider theme={colorTheme}>
        <GlobalFonts />
        <NavBar mobileToggle={toggle} isOpen={isOpen}/>
        <Navigation toggle={toggleAbout} aboutToggle={aboutToggle} mobileToggle={toggle} toggleLight={toggleLight} toggleDark={toggleDark} themeToggleStatus={isLightTheme}/>
        <AboutPanel aboutToggle={aboutToggle} toggle={toggleAbout}></AboutPanel>
        <SideProjects sideProjectsToggle={sideProjectsToggle} />
        <Wipe isLightTheme={isLightTheme}/>
        <CloseOverlay isOpen={isOpen} aboutToggle={aboutToggle} toggleAbout={toggleAbout} mobileToggle={toggle}/>
        {/* <ThemeToggle themeToggle={toggleTheme}/> */}
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Main} />
                <Route exact path="/works" component={Works} />
                {/* <Route exact path="/works" render={(props) => <Works theme={colorTheme} {...props} />}/> */}
                {/* <Route exact path="/test" component={Home} /> */}
                {/* <Route exact path="/blog" component={Blog} />  */}
                {/* <Route exact path="/info" component={About} /> */}
                <Route path="/:workId?/works" component={WorkExpanded} exact />
                <Route path="/:workId?/images" component={Images} />
              </Switch>
            </AnimatePresence>
          )}
        />
        {/* <Status /> */}
        {/* <WIP /> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;