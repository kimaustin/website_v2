import "./App.scss";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import GlobalFonts from './fonts/fonts';
import { motion, AnimatePresence } from "framer-motion";

import { ThemeProvider } from 'styled-components';

import Main from "./components/Main";
import Navigation from "./components/Navigation";
// import Status from "./components/Status";
import Works from "./components/Works";
import WorkExpanded from "./components/Works/WorkExpanded";
import Images from "./components/ImageZoom";
import AboutPanel from "./components/AboutPanel";
import NavBar from "./components/Navbar";
import Lab from "./components/Lab";
// import { Provider } from "react-redux";
import SideProjects from "./components/SideProjects";
// import Blog from "./components/Blog";
import CloseOverlay from "./components/CloseOverlay";
import Wipe from "./components/Wipe";
import Background from "./components/Background";
import Photography from "./components/Photography";
import Versions from "./components/Versions";

function App() {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    // console.log("mobile nav toggled", isOpen);
    setIsOpen(!isOpen);
  };

  const [versionDrawer, setVersionDrawer] = useState(false);

  const toggleDrawer = () => {
      console.log("drawer toggled to", versionDrawer);
      setVersionDrawer(!versionDrawer);
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
    bg: "rgba(245, 251, 255, 1)",
    bgBlur: "rgba(230, 228, 234, 0.78)",
    bgSide: "rgba(253, 252, 255, 0.9)",
    bgSide2: "rgba(252, 248, 251, 0.9)",
    bgNav: "rgba(250, 249, 251, 0.8)",
    bgPreview: "rgba(255, 255, 255, 0.83)",
    primary: "#000000",
    secondary: "#7D7D7D",
    cs: "#0047FD",
    border: "#D1D4D7",
    gradient: "linear-gradient(0deg, rgba(250, 246, 249, 1) 0%, rgba(250, 246, 249, 0) 100%);"
  };

  const darkTheme = {
    bg: "rgba(15, 12, 14, 1)",
    bgBlur: "rgba(35, 35, 35, .6)",
    bgSide: "rgba(18, 12, 25, 0.9)",
    bgSide2: "rgba(25, 25, 32, 0.7)",
    bgNav: "rgba(30, 30, 31, 0.78)",
    bgPreview: "rgba(8, 8, 8, 0.75)",
    primary: "rgba(245, 251, 255, 0.95)",
    secondary: "#BABABA",
    border: "#3E3E3E",
    cs: "#5685FF",
    gradient: "linear-gradient(0deg, rgba(20, 15, 30, 1) 0%, rgba(20, 15, 30, 0) 100%);"
  }

  const [colorTheme, setColorTheme] = useState(lightTheme);
  const [isLightTheme, setIsLightTheme] = useState(true);

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const toggleLight = async event => {
    if (!isLightTheme) {
      setIsLightTheme(true);
      await delay(150);
      setColorTheme(lightTheme);
    }
  }

  const toggleDark = async event => {
    if (isLightTheme) {
      setIsLightTheme(false);
      await delay(150);
      setColorTheme(darkTheme);
    }
  }

  return (
    <Router>
      <ThemeProvider theme={colorTheme}>
        <GlobalFonts />
        <Versions drawerToggle={versionDrawer} toggle={toggleDrawer} />
        <NavBar mobileToggle={toggle} isOpen={isOpen}/>
        <Navigation drawerStatus={versionDrawer} toggleDrawer={toggleDrawer} toggle={toggleAbout} aboutToggle={aboutToggle} mobileToggle={toggle} toggleLight={toggleLight} toggleDark={toggleDark} themeToggleStatus={isLightTheme}/>
        <SideProjects sideProjectsToggle={sideProjectsToggle} />
        <AboutPanel aboutToggle={aboutToggle} toggle={toggleAbout}></AboutPanel>
        <Wipe isLightTheme={isLightTheme}/>
        <CloseOverlay isOpen={isOpen} aboutToggle={aboutToggle} toggleAbout={toggleAbout} mobileToggle={toggle}/>
        {/* <ThemeToggle themeToggle={toggleTheme}/> */}
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Main} />
                <Route exact path="/index" component={Works} />
                {/* <Route exact path="/works" render={(props) => <Works theme={colorTheme} {...props} />}/> */}
                <Route exact path="/test" component={Lab} />
                {/* <Route exact path="/blog" component={Blog} />  */}
                {/* <Route exact path="/photo" component={Photography} /> */}
                <Route path="/:workId?/index" component={WorkExpanded} exact />
                <Route path="/:workId?/images" component={Images} />
              </Switch>
            </AnimatePresence>
          )}
        />
        {/* <Status /> */}
        {/* <WIP /> */}
        <Background />
      </ThemeProvider>
    </Router>
  );
}

export default App;