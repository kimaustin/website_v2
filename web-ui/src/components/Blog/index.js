import React, { useState, useEffect, useRef, useCallback } from 'react';
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { Link as LinkRouter } from 'react-router-dom';
import {
  Container,
} from "./BlogElements";

const Blog = ({ projects }) => {

  let items = projects.map((project, index) => {
  // let imgPreviews = projects.map((project, index) => {
    return (
        <img src={'imgs/' + project.imgs[0]} alt=""></img>
    )
  })

  return (
    <Container>
    </Container>
  );
};

export default connect(({ projects }) => ({ projects }))(Blog);
