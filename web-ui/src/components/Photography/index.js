import React, { useState, useEffect, useRef, useCallback } from 'react';
import { connect } from "react-redux";
import { motion } from "framer-motion";
import {
  Container,
  ImageContainer,
  Label
} from "./PhotographyElements";
import WIP from '../WIP';

const Photography = ({ projects }) => {

  const [viewId, setViewId] = useState(0);

  let my_photos = Array(33).fill(0);

  let handleImgClick = (i) => {
    if (i != viewId) {
      setViewId(i);
    }
  }

  let all_imgs = my_photos.map((photo, index) => {
    return (
      <ImageContainer
        // onClick={handleImgClick(index)}

      >
        <img 
          src={'film/film' + index + '.jpg'} 
          alt={index}
          as={motion.div} 
          initial={{ scale: 1 }} 
          animate={(viewId == index) ? {  scale: 2 } : { scale: 1 }}
          transition={{
          type: "tween",
          ease: [0.28, 1.35, 1.5, .91],
          duration: 0.6,
          delay: 0.3,
          }}
        ></img>
        <Label>{index}</Label>
      </ImageContainer>
    );
  })

  return (
    <Container>
      <WIP />
      {all_imgs}
      {/* <img src={'film/film1.jpeg'} alt={1}></img> */}
    </Container>
  );
};

export default connect(({ projects }) => ({ projects }))(Photography);
