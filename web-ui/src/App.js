import "./App.scss";
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import GlobalFonts from './fonts/fonts';
import { motion, AnimatePresence } from "framer-motion";

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
import Topbar from "./components/Topbar";
import Lab from "./components/Lab";
import Close from "./components/About";
import MobileToggle from "./components/MobileToggle";
import WIP from "./components/WIP";
import { Provider } from "react-redux";

//Our App Components
function App() {

  
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [aboutToggle, setAboutToggle] = useState(false);
  
  const toggleAbout = (currPage) => {
    console.log("about toggled");
    if(currPage == 'info') {
      setAboutToggle(!aboutToggle);
    } else {
      setAboutToggle(false);
    }
  }

  // const location = useLocation();
  //TODO: make 2 Styled Component Themes, declare state that is one Theme.
  //----- ON dark/mode press, change state to other theme. Pass in state to each component.

  const pageTransition = {
    type: "tween",
    ease: [0.7, 0.1, 0.4, 1],
    duration: 0.5
  };

  return (
    <Router>
      <GlobalFonts />
      {/* <Navigation toggle={toggleAbout} aboutToggle={aboutToggle}/> */}
      <Navigation />
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Main} />
              <Route exact path="/works" component={Works} />
              <Route exact path="/info" component={About} />
              <Route path="/:workId?/works" component={WorkExpanded} exact />
              <Route path="/:workId?/images" component={Images} />
            </Switch>
          </AnimatePresence>
        )}
      />
      <Status />
      <WIP />
    </Router>
  );
}

export default App;