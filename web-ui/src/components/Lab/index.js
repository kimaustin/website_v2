import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Pics, Top, LabGrid, LabIndex, PrevSection, LabName, Labs, AddLab, PreviewContainer, Divider, NextSection, CursorPreview, LabContent, LabDesc, LabDetails, PicIndex, Label, TopSection, LabDetailName } from './LabElements';


const Lab = ({projects}) => {

    const [labPreviewId, setLabPreviewId] = useState(16);
    // const [labSelected, setLabSelected] = useState(false);
    const [imgIndex, setImgIndex] = useState(1);

    const nextLabPreview = () => {
        // var currHoverAllowed = hoverAllowed;
        // console.log("proj: " + projectDisplayed);

        if (labPreviewId == projects.length) {
            setLabPreviewId(19);
        } else {
            setLabPreviewId(labPreviewId + 1);
        }
    };

    const nextLabId = (index) => {
        // var currHoverAllowed = hoverAllowed;
        // console.log("proj: " + projectDisplayed);
        console.log("prev index: " + labPreviewId);
        // console.log("hover: " + hoverAllowed);
        setLabPreviewId(index);
        console.log("changing to: " + index);
        // if (labPreviewId == projects.length) {
        //     setLabPreviewId(18);
        // } else {
        //     setLabPreviewId(labPreviewId + 1);
        // }
    };

    // const toggleLabSelected = () => {
    //     setLabSelected(!labSelected);
    // };

    const updateImgIndex = (index) => {
        console.log("next img:" + index);
        console.log("curr proj id: " + labPreviewId);
        console.log("loprojects: " + projects.length);
        console.log("proj: " + projects[labPreviewId - 1]);
        console.log("proj imgs: " + projects[labPreviewId - 1].imgs);
        console.log("imgs length: " + projects[labPreviewId - 1].imgs.length);

        if (index > projects[labPreviewId - 1].imgs.length - 1) {
            setImgIndex(1);
        } else if (index < 1) {
            setImgIndex(projects[labPreviewId - 1].imgs.length - 1);
        } else {
            setImgIndex(index);
        }
    };

    const pageVariants = {
        initial: {
            y: '-71vh',
        //   scale: 0,
        //   opacity: 0
        },
        in: {
            y: 0,
        //   scale: 1,
        //   opacity: 1
        },
        out: {
            y: '-71vh',
        //   scale: 0,
        //   opacity: 0
        }
    }

    const pageTransition = {
        type: "tween",
        ease: [0.87, 0, 0.13, 1],
        duration: 0.75
    };

    let lab_names = projects.map((project, i) => {

        // means no content displayed
        var zerofilled = ('0' + (project.id - 15)).slice(-2);
        
        let index_str = 'proj' + project.id;
    
        if (project.id > 15) {
            return (
                <Pics onClick={() => (nextLabId(project.id), updateImgIndex(1))} currProj={project.id} currPreview={labPreviewId}>
                    <LabIndex>
                        {zerofilled}
                    </LabIndex>
                    <LabName>
                        {project.name}
                    </LabName>
                    {/* {pictures_displayed} */}
                </Pics>
            );
        }
    });

    let lab_pics = projects.map((project) => {
        // means no content displayed
    
        if (project.id == labPreviewId) {
            return (
                <PreviewContainer>
                    <LabDetailName>
                            {project.name}
                    </LabDetailName>
                    <PicIndex>
                        {imgIndex} of {(project.imgs.length) - 1}
                    </PicIndex>
                    <img src={"imgs/" + project.imgs[imgIndex]} onerror='this.style.display = "none"' alt={'picture'} style={{objectFit: 'contain', justifyContent: 'center', maxWidth: '95%', maxHeight: '92%'}}></img>
                </PreviewContainer>
            );
        } else {
            return (
                <></>
            );
        }
    });

    let lab_content = projects.map((project) => {
        // means no content displayed
        var zerofilled = ('0' + (project.id - 15)).slice(-2);
    
        if (project.id == labPreviewId) {
            return (
                <LabDetails>
                    <LabDesc>
                        {project.desc}
                    </LabDesc>
                </LabDetails>
                // <h1 style={{marginLeft: '1%', marginTop: '1%'}}>{labPreviewId}</h1>
            );
        } else {
            return (
                <></>
            );
        }
    });

    // function NextSectionArea() {
    //     // if (labSelected) {
    //         // return (
    //             // <NextSection onClick={() => (nextLabPreview())}/>
    //         // );
    //     // } else {
    //         return (
    //             <NextSection onClick={() => (updateImgIndex(imgIndex + 1))}/>
    //         );
    //     // }
    // }

    return (
        <Container id='head'>
            <Divider
                as={motion.div} initial={{ x: '88vw' }}
                animate={{ x: '0' }}
                exit={{  x: '88vw' }}
                transition={{type: "tween",
                ease: [0.87, 0, 0.13, 1],
                duration: .9}}
            >
                {/* <NextSectionArea /> */}
                <PrevSection onClick={() => (updateImgIndex(imgIndex - 1))}>prev</PrevSection>
                <NextSection onClick={() => (updateImgIndex(imgIndex + 1))}>next</NextSection>
                {lab_pics}
            </Divider>
            <TopSection
                as={motion.div} initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >
                <Label>Index</Label>
                <LabGrid>
                    {lab_names}
                    {/* <AddLab>+</AddLab> */}
                </LabGrid>
            </TopSection>
            <LabContent
                as={motion.div} initial={{ y: '31vh' }}
                animate={{ y: '0' }}
                exit={{  y: '31vh' }}
                transition={{type: "tween",
                ease: [0.87, 0, 0.13, 1],
                duration: .75}}
            >
                <Label>Info</Label>
                {lab_content}
            </LabContent>
            {/* <LabGrid>
                {lab_names}
                <AddLab>+</AddLab>
            </LabGrid> */}
            {/* <StartBg /> */}
            {/* <Top to='head' smooth={true} duration={800} spy={true} 
                      offset={-80} exact="true">top</Top> */}
        </Container>
    );
};

export default connect(({projects}) => ({projects}))(Lab);