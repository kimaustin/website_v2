import React, { useState, useRef, useEffect, useCallBack} from 'react';
import { Container, Project } from './HomeElements.js';

const Home = () => {

  const ref = useRef(null);
  const [projectValue, setProjectValue] = useState(1);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const updateProjectValue = () => {
    console.log("got to on-scroll");
    setProjectValue(projectValue + 1);
  };

  console.log("test console");

  return (
    <Container onScroll={updateProjectValue}>
      <button onClick={handleClick} style={{ position: 'fixed', left: '50vw' }}>Click to scroll</button>
      <div style={{ height: '500px', backgroundColor: 'blue', }}></div>
      <Project ref={ref}>
        <p>scroll to me</p>
        <br />
        {projectValue}
      </Project>
      <div style={{ height: '1000px', backgroundColor: 'blue' }}></div>
    </Container>
  )
}

export default Home;