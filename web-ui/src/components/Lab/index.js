import Sketch, { stroke, resizeCanvas, windowWidth, windowHeight } from "react-p5";
import hull from "hull.js";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import {
  Container
} from "./LabElements";

let x = 50;
let y = 50;

export default () => {

    const {} = useLoadScript(
        { googleMapsApiKey: "AIzaSyBf8sQ4RXHflig_CyLPimVqm7kUgJhpfGQ"  }
        );

    // useScript('/src/p5.sound.js');

    // let mySound;

    // test link: https://www.google.com/maps/place/The+Keep/data=!4m2!3m1!1s0x89c25ea73da74ed3:0xc47e92163d650c0e

    const [mapPoints, setMapPoints] = useState([]);

    useEffect(() => {
        fetch('https://maps.googleapis.com/maps/api/geocode/json?address=Washington&key=AIzaSyBf8sQ4RXHflig_CyLPimVqm7kUgJhpfGQ')
            .then((response) => response.json())
            .then((data) => {
            console.log(data);
            // console.log("points api:", mapPoints);
            setMapPoints(data);
            })
            .catch((err) => {
            console.log(err.message);
            });
    }, []);

    console.log("points api:", mapPoints);

    var points = [ [236, 126], [234, 115], [238, 109], [247, 102] ];
    // hull(points, 50); // returns points of the hull (in clockwise order)
    var pts = hull(points, 10);

    // console.log('pts', pts);
    // console.log('window W', windowWidth);

    function preload() {
        // soundFormats('mp3', 'ogg', 'aif');
        // mySound = loadSound('Centrifuge.aif');
        console.log("points api:", mapPoints);
    }

    const setup = (p5, canvasParentRef) => {
        // const newLocal = 'Centrifuge.aif';
        // mySound = loadSound(newLocal);
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        // p5.createCanvas(1000, 1000).parent(canvasParentRef);
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
    };

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
    }

    const draw = (p5) => {
        p5.background(230);
        p5.ellipse(x, y, 70, 70);
        // NOTE: Do not use setState in the draw function or in functions that are executed in the draw function...
        x = x + 3;
        if (x > getRandomInt(500, 1000)) {
            x = getRandomInt(0, 500);
        }

        if (y > getRandomInt(500, 1000)) {
            y = getRandomInt(0, 500);
        }

        p5.line(100, 100, 300, 300);
        // p5.line(pts[0][0], pts[0][1], pts[1][0], pts[1][1]);
        // p5.stroke(255);

        for (let i = 0; i < pts.length - 1; i++) {
            p5.line(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1]);
        }
    };

    // console.log("points long / lat:", mapPoints.results[1].geometry.location);


    return (
        <Container>
            <Sketch setup={setup} draw={draw} preload={preload} />
        </Container>
    )
};