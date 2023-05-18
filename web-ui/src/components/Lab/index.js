import Sketch from "react-p5";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { connect } from "react-redux";
import { motion } from "framer-motion";
import {
  Container
} from "./LabElements";

let x = 50;
let y = 50;

export default () => {

    // useScript('/src/p5.sound.js');

    // let mySound;

    function preload() {
        // soundFormats('mp3', 'ogg', 'aif');
        // mySound = loadSound('Centrifuge.aif');
    }

    const setup = (p5, canvasParentRef) => {
        // const newLocal = 'Centrifuge.aif';
        // mySound = loadSound(newLocal);
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p5.createCanvas(1000, 1000).parent(canvasParentRef);
    };

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    const draw = (p5) => {
        p5.background(0);
        p5.ellipse(x, y, 70, 70);
        // NOTE: Do not use setState in the draw function or in functions that are executed in the draw function...
        x = x + 3;
        if (x > getRandomInt(500, 1000)) {
            x = getRandomInt(0, 500);
        }
    };

    return (
        <Container>
            <Sketch setup={setup} draw={draw} preload={preload} />
        </Container>
    )
};