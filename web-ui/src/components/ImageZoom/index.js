import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Container } from './ImageZoomElements';

const ImageZoom = ({ projects }) => {

    const location = useLocation();
    let work_id = location.pathname.split("/works")[0];
    console.log(work_id);
    console.log(work_id.substring(1, work_id.length));
    let work = projects[work_id.substring(1, work_id.length) - 1];

    return (
        <Container>
            
        </Container>
    )
}

export default connect(({projects}) => ({projects}))(ImageZoom);

