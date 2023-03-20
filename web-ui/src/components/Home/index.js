import React, { useState } from 'react';
import About from '../About';
import { homeObj1, homeObj2 } from '../About/Data';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import Navbar from '../Navbar';
import Topbar from '../Topbar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <Topbar isOpen={isOpen} toggle={toggle} /> */}
      <Navbar toggle={toggle} />
      <HeroSection />
      <About {...homeObj1}/>
      <About {...homeObj2}/>
      Austin Kim (home body)
      <Footer/>
    </>
  );
}

export default Home;