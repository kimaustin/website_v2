import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Pics, Top, LabGrid, LabIndex, PrevSection, LabName, Labs, AddLab, PreviewContainer, Divider, NextSection, CursorPreview, LabContent, LabDesc, LabDetails, PicIndex, Label, TopSection } from './LabElements';


const Lab = ({projects}) => {

    const [labPreviewId, setLabPreviewId] = useState(18);
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
        } else if (index < 0) {
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

    let lab_names = projects.map((project) => {

        // means no content displayed
        var zerofilled = ('0' + (project.id - 17)).slice(-2);
        
        let index_str = 'proj' + project.id;
    
        if (project.id > 17) {
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
        var zerofilled = ('0' + (project.id - 18)).slice(-2);
    
        if (project.id == labPreviewId) {
            return (
                <PreviewContainer>
                    <PicIndex>{imgIndex} of {project.imgs.length}</PicIndex>
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
        var zerofilled = ('0' + (project.id - 17)).slice(-2);
    
        if (project.id == labPreviewId) {
            return (
                <LabDetails>
                    <LabDesc>
                        Info: {project.desc}
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
                <PrevSection onClick={() => (updateImgIndex(imgIndex - 1))} />
                <NextSection onClick={() => (updateImgIndex(imgIndex + 1))} />
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


import styled from 'styled-components'
import { Link } from 'react-scroll';

export const Container = styled.div`
    display: block;
    position: fixed;
    
    width: calc(100vw - 7rem + 5px);
    /* width: calc(20vw); */
    left: calc(3.5rem - 1.75px);
    /* padding-right: 5rem; */
    height: 100vh;

    cursor: url("../imgs/cursor1.svg"), crosshair;
    overflow-y: scroll;
    overflow-x: hidden;
    
    ::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 768px) {
        width: 100vw;
        height: 88vh;
        top: 6vh;
        left: 0;
    }
`

export const TopSection = styled.div`
    position: fixed;
    width: calc((100% / 3) + 4.5px);
    top: 0;
    height: 70%;

    @media screen and (max-width: 768px) {
        height: calc(88vh + 1.75px);
        top: 6vh;
        width: 3.5rem;
    }
`

export const LabGrid = styled.div`
    z-index: 990;
    display: grid;
    /* position: fixed; */
    grid-template-columns: 1fr;
    /* grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;  */
    /* grid-column-gap: -1.75px; */
    overflow-x: hidden;
    overflow-y: scroll;
    /* border-top: 1.75px solid #201D17; */
    border-bottom: 1.75px solid #201D17;
    border-right: 1.75px solid #201D17;
    /* grid-row-gap: -1.75px; */
    /* background-color: black; */
    width: calc(50% + 1.75px);
    width: calc((100% / 3) + 4.5px);
    width: 100%;
    /* top: 0; */
    background: #201D17;
    height: calc(100% - 2.45rem);

    ::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 768px) {
        /* position: fixed; */
        /* top: 0; */
        border-left: 1.75px solid #201D17;
        border-bottom: 0;
        width: calc(3.5rem + 2.1px);
        height: 100%;
    }
`

export const LabContent = styled.div`
    display: grid;
    position: fixed;
    z-index: 999;
    width: calc((100% / 3) + 1.75px);
    /* width: calc(10rem); */
    height: calc(30% + 1.75px);
    top: calc(70% - 1.75px);
    /* left: calc(100% / 3 - 7rem); */
    left: 3.5rem;
    overflow: hidden;
    border-top: 1.75px solid #201D17;
    border-right: 1.75px solid #201D17;
    background: #FDFEF5;
    color: #201D17;

    @media screen and (max-width: 768px) {
        /* display: none; */
        width: calc(100vw - 3.5rem);
        height: calc(12vh + 1.75px);
        top: calc(82vh);
        border-bottom: 1.75px solid #201D17;
        border-left: 1.75px solid #201D17;
        /* opacity: 0; */
    }
`

export const Labs = styled.div`
    position: fixed;
    display: grid;
    /* left: calc(50% - 1.25rem); */
    border-top: 1.75px solid #201D17;
    left: 0;
    top: calc(50%);
    /* height: calc(50% - 1.25em); */
    width: calc(50% + 1.75px);
    height: 50%;
    /* grid-template-columns: 1fr; */
    /* grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; */
    overflow-y: scroll;
`

export const Pics = styled.div`
    /* width: 96vw; */
    /* height: 89vh; */
    /* width: 5rem; */
    height: 100%;
    width: calc(100% + 1.75px);
    /* width: calc(100% + 1rem); */
    z-index: 999;
    /* padding-top: calc(50% - 1.75rem); */
    /* padding-left: calc(50% - 1.3rem); */
    padding-left: 1.25rem;
    padding-top: 1vh;
    /* align-items: center; */
    /* text-align: center; */
    /* justify-content: center; */
    border-right: 1.75px solid #201D17;
    /* border-top: 1.75px solid #201D17; */
    border-bottom: 1.75px solid #201D17;
    /* transition: .15s all ease-in-out; */
    /* scale: (1); */
    /* overflow-x: hidden; */

    color:  ${({ currProj, currPreview }) => (currProj === currPreview ? '#FDFEF5' : '#201D17')};
    background:  ${({ currProj, currPreview }) => (currProj === currPreview ? '#201D17' : '#FDFEF5')};
    
    cursor: url("../imgs/cursor1.svg"), crosshair;

    &:hover {
        /* width: 100%; */
        color: #FDFEF5;
        background: #201D17;
        /* border-bottom: none; */
        /* transform: translate3d(30px, 30px, 30px);  */
        /* transform: translate3d(50px, 50px, 50px) scale(3);  */
    }

    @media screen and (max-width: 768px) {
        /* width: 100%; */
        padding: 0;
    }
`

export const Divider = styled.div`  
    z-index: 999;
    position: fixed;
    display: grid;
    border-left: 1.75px solid #201D17;
    /* width: calc(50%); */
    width: calc(((100% * 2) / 3));
    /* left: calc(50% + 1.75px); */
    left: calc((100% / 3) + 3.5rem);
    top: 0;
    height: 100%;

    @media screen and (max-width: 768px) {
        left: 3.5rem;
        top: 6vh;
        border-bottom: 1.75px solid #201D17;
        border-right: 1.75px solid #201D17;
        height: calc(76vh + 1.75px);
        width: calc(100vw - 3.5rem);
    }
`

export const NextSection = styled.div`
    position: fixed;
    z-index: 1;
    width: 55%;
    top: 0;
    right: 0;
    /* margin-top: -50%; */
    /* margin-left: 50%; */
    height: 200%;
    background: yellow;
    opacity: 0;
    cursor: url("../imgs/c_next.svg"), crosshair;

    &:hover {
        opacity: .05;
    }

    @media screen and (max-width: 768px) {
        width: 50%;
        height: 100%;
    }
`

export const PrevSection = styled.div`
    z-index: 2;
    width: 45%;
    /* margin-left: 0%; */
    /* margin-left: 50%; */
    height: 100%;
    background: yellow;
    opacity: 0;
    cursor: url("../imgs/c_prev.svg"), crosshair;

    &:hover {
        opacity: .05;
    }

    @media screen and (max-width: 768px) {
        width: 50%;
    }
`

export const PreviewContainer = styled.div`
    z-index: -1;
    overflow: hidden;
    position: fixed;
    display: flex;
    /* left: calc(50% + 1.75px); */
    /* left: calc((100% / 3)); */
    justify-content: center;
    top: 0;
    width: calc(((100% * 2) / 3) - 3.5rem);
    width: calc(100% - 7rem);
    padding-top: 2%;
    /* padding-left: 2%; */
    height: 92.5%;
    height: 100%;
    /* background: #201D17; */
    opacity: 1;
    /* border-left: 1.75px solid #201D17; */
    /* border-bottom: 1.75px solid #201D17; */

    @media screen and (max-width: 768px) {
        width: 100%;
        padding-top: 3%;
    }
`

export const PicIndex = styled.div`
    position: fixed;
    top: calc(92.5% + 1rem);
    /* left: calc((100% / 3) + 8.5rem); */
    text-align: center;
    align-items: center;
    height: 5%;
    /* width: calc(((100% * 2) / 3) - 7rem); */
    width: 100%;
    font-family: 'SpaceMono';
    font-size: 1.6rem;
    letter-spacing: -.15rem;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
        top: unset;
        bottom: 1%;
    }   
`

export const AddLab = styled.div`
    /* position: fixed; */
    z-index: 999;
    width: 4rem;
    height: 4rem;
    padding-left: 1.25rem;
    padding-top: .5rem;
    font-size: 2rem;
    border-right: 1.75px solid #201D17;
    border-bottom: 1.75px solid #201D17;
    /* transition: .1s all ease-in-out; */

    &:hover {
        color: #FDFEF5;
        background: #201D17;
    }
`

export const LabIndex = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: grid;
        /* padding: auto; */
        /* padding-right: 2rem; */
        font-family: 'SpaceMono';
        font-size: 2.25rem;
        font-size: 1rem;

        text-align: center;
        align-items: center;
        justify-content: center;

        display: flex;
        padding-top: calc(50% + .35rem);
    }
`

export const Label = styled.div`
    display: grid;
    padding-left: 1.25rem;
    padding-top: .75rem;
    padding-bottom: .5rem;
    width: 100%;
    height: 3rem;
    font-family: 'SharpGrotesk';
    font-size: 1.2rem;
    /* border-bottom: 1.75px solid #201D17; */
    color: #FDFEF5;
    background: #201D17;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const LabDetails = styled.div`
    padding-left: 1.25rem;
    /* padding-right: 2rem; */
    width: calc(100% - 2rem);
    height: 100%;
    /* overflow-y: scroll; */
    overflow: hidden;
    /* text-orientation: mixed; */
    /* writing-mode: vertical-rl; */
`

export const LabName = styled.div`
    display: grid;
    /* position: relative; */
    /* padding-top: 1.5rem; */
    padding: auto;
    padding-top: 1.5vh;
    /* left: 2rem; */
    /* border-bottom: 1.75px solid #201D17; */
    /* top: 1rem; */
    line-height: 85%;
    /* justify-content: center; */
    /* width: 100%;     */
    word-wrap: break-word;

    font-family: 'SpaceMono';
    /* transform: translate(-50%, -50%); */
    /* justify-content: center; */
    /* align-items: left; */
    font-size: 2.25rem;
    /* text-orientation: mixed; */
    /* writing-mode: vertical-rl; */

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const LabDesc = styled.div`
    position: relative;
    /* left: 2rem; */
    /* top: 5rem; */
    width: 100%;
    /* overflow-y: scroll; */
    font-family: 'SpaceMono';
    font-size: 1.25rem;
    padding-top: 1.5rem;
    line-height: 90%;
    /* height: calc(100% - 6rem); */
    /* text-orientation: mixed; */
    /* writing-mode: vertical-rl; */
`

export const Top = styled(Link)`
    position: fixed;
    display: flex;
    z-index: 990;
    /* cursor: pointer; */
    background: white;
    bottom: 8vh;
    right: 16px;
    /* width: 4rem; */
    /* height: 2rem; */
    /* transition: all 0.2s ease-in-out; */
    /* padding-left: .85rem; */
    /* padding-right: .85rem; */
    padding: .85rem;
    border: 1px solid black;
    border-radius: 70px;
    font-size: 2rem;

    color: black;
    text-decoration: none;

    &:hover {
        background: black;
        color: white;        
    }

    @media screen and (min-width: 768px) {
        bottom: 3vh;
    }
`

export const CursorPreview = styled.div`
    position: fixed;
    top: ${props => (props.topVal)};
    left: ${props => (props.leftVal)};
    max-width: 8rem;
    opacity: 0;
    /* height */

    ${LabIndex}:hover {
        opacity: 1;
    }
`

///////////////////////////////

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Images } from '../Works/SingleWorkElements';
import { Container, Pics, Top, LabGrid, LabIndex, PrevSection, LabName, Labs, AddLab, PreviewContainer, Divider, NextSection, CursorPreview, LabContent, LabDesc, LabDetails, PicIndex, Label, TopSection, ItemContainer } from './LabElements';


const Lab = ({projects}) => {

    const [labPreviewId, setLabPreviewId] = useState(18);
    const [imgIndex, setImgIndex] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    const nextLabPreview = () => {
        if (labPreviewId == projects.length) {
            setLabPreviewId(19);
        } else {
            setLabPreviewId(labPreviewId + 1);
        }
    };

    const nextLabId = (index) => {
        console.log("prev index: " + labPreviewId);
        setLabPreviewId(index);
        console.log("changing to: " + index);
    };

    const updateImgIndex = (index) => {
        console.log("next img:" + index);
        console.log("curr proj id: " + labPreviewId);
        console.log("loprojects: " + projects.length);
        console.log("proj: " + projects[labPreviewId - 1]);
        console.log("proj imgs: " + projects[labPreviewId - 1].imgs);
        console.log("imgs length: " + projects[labPreviewId - 1].imgs.length);

        if (index > projects[labPreviewId - 1].imgs.length - 1) {
            setImgIndex(1);
        } else if (index < 0) {
            setImgIndex(projects[labPreviewId - 1].imgs.length - 1);
        } else {
            setImgIndex(index);
        }
    };

    const pageTransition = {
        type: "tween",
        ease: [0.87, 0, 0.13, 1],
        duration: 1,
        // delay: .9
    };

    const childVariants = {
        initial: {
            opacity: 0,
            transition: {duration: .6}
        },
        in: {
            opacity: 1,
        }
    }

    const lab_size = (100 / projects.length);

    let lab_names = projects.map((project, i) => {

        let other_pics = project.imgs.map((image, i) => {
            if (i > 0) {
                return(
                    <img src={"imgs/" + image} style={{width: '33%'}}></img>
                )
            }
        });

        var zerofilled = ('0' + (project.id - 17)).slice(-2);

        if (project.id > 17) {
            return (
                // <Pics onClick={() => (nextLabId(project.id), updateImgIndex(1))} currProj={project.id} currPreview={labPreviewId}
                //     as={motion.div} initial="initial"
                //     variants={childVariants}
                // >
                //     <LabIndex>
                //         {zerofilled}
                //     </LabIndex>
                //     <LabName>
                //         {project.name}
                //     </LabName>
                //     {/* {pictures_displayed} */}
                // </Pics>
                <Pics 
                    onClick={() => (setIsOpen(!isOpen), nextLabId(project.id))} 
                    labSize={lab_size}
                    isOpen={isOpen}
                    labSelected={labPreviewId}
                    currLab={project.id}
                    as={motion.div} 
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{ duration: .3, delay: (i - 1) * 0.075}}
                >   
                    <ItemContainer 
                        as={motion.div}
                        initial={{width: '100%'}}
                        // animate={(isOpen && (project.id == labPreviewId)) ? {position: 'fixed', y: 0} : {position: 'unset', y: 'unset'}}
                        animate={(isOpen && (project.id == labPreviewId)) ? {width: '15vw'} : {width: '100%'}}
                        transition={{duration: .5}}
                    >
                        <img src={"imgs/" + project.imgs[0]} onerror='this.style.display = "none"' alt={'picture'}></img>
                        <Images
                            as={motion.div}
                            initial={{display: 'none'}}
                            animate={(isOpen && (project.id == labPreviewId)) ? {display: 'block'} : {display: 'none'}}
                            transition={{duration: .5}}
                        >
                            {other_pics}
                        </Images>
                        {/* <img src={"imgs/" + project.imgs[0]} onerror='this.style.display = "none"' alt={'picture'} style={{objectFit: 'contain', justifyContent: 'center', maxWidth: 'calc(100% - 1.25rem)', maxHeight: '92%'}}></img> */}
                        <LabName>
                            {project.name}
                        </LabName>
                    </ItemContainer>
                </Pics>
            );
        }
    });

    let lab_pics = projects.map((project) => {
        var zerofilled = ('0' + (project.id - 18)).slice(-2);
    
        if (project.id == labPreviewId) {
            return (
                <PreviewContainer>
                    <PicIndex>{imgIndex} of {project.imgs.length}</PicIndex>
                    <img src={"imgs/" + project.imgs[imgIndex]} onerror='this.style.display = "none"' alt={'picture'} style={{objectFit: 'contain', justifyContent: 'center', maxWidth: '95%', maxHeight: '92%'}}></img>
                </PreviewContainer>
            );
        } else {
            return (
                <></>
            );
        }
    });

    const pageVariants = {
        initial: {
            width: '50vw',
            transition: { staggerChildren: 0.1, duration: .6 }
        //   scale: 0,
        //   opacity: 0
        },
        in: {
            width: '5rem',
            transition: { staggerChildren: 0.1, staggerDirection: -1, duration: .6 },
        //   scale: 1,
        //   opacity: 1
        },
    }

    return (
        <Container id='head'
            // as={motion.div} initial={{ x: '88vw' }}
            // animate={{ x: '0' }}
            // exit={{  x: '88vw' }}
            // transition={{type: "tween",
            // ease: [0.87, 0, 0.13, 1],
            // duration: .9}}
        >
            {/* <Label>Index</Label> */}
            {/* <Divider
                as={motion.div} initial={{ x: '100vw' }}
                animate={{ x: '0' }}
                exit={{  x: '100vw' }}
                transition={{type: "tween",
                ease: [0.87, 0, 0.13, 1],
                duration: .9}}
            >
                <PrevSection onClick={() => (updateImgIndex(imgIndex - 1))} />
                <NextSection onClick={() => (updateImgIndex(imgIndex + 1))} />
                {lab_pics}
            </Divider> */}
            <LabGrid
                // as={motion.div} 
                // variants={pageVariants}
                // initial="initial"
                // animate={ isOpen ? 'initial' : 'in' }
            >
                {lab_names}
                {/* {projects.map(project => {
                        <motion.div 
                            as={motion.div} 
                            initial="initial"
                            variants={childVariants}
                        >
                            test
                            <LabName>
                                {project.name}
                            </LabName>
                        </motion.div>
                })} */}
            </LabGrid>
        </Container>
    );
};

export default connect(({projects}) => ({projects}))(Lab);


import styled from 'styled-components'
import { Link } from 'react-scroll';

export const Container = styled.div`
    display: block;
    position: fixed;
    
    width: calc(100vw - 7rem + 5px);
    /* width: calc(20vw); */
    left: calc(3.5rem - 1.75px);
    /* padding-right: 5rem; */
    height: 100vh;

    cursor: url("../imgs/cursor1.svg"), crosshair;
    overflow-y: scroll;
    overflow-x: hidden;
    
    ::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 768px) {
        width: 100vw;
        height: 88vh;
        top: 6vh;
        left: 0;
    }
`

export const TopSection = styled.div`
    position: fixed;
    width: calc((100% / 3) + 4.5px);
    top: 0;
    height: 70%;

    @media screen and (max-width: 768px) {
        height: calc(88vh + 1.75px);
        top: 6vh;
        width: 3.5rem;
    }
`

export const LabGrid = styled.div`
    z-index: 990;
    display: grid;
    /* position: fixed; */
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    /* grid-template-rows: 1fr; */
    /* grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;  */
    /* grid-column-gap: -1.75px; */
    overflow-x: hidden;
    overflow-y: scroll;
    /* border-top: 1.75px solid #201D17; */
    /* border-right: 1.75px solid #201D17; */
    /* grid-row-gap: -1.75px; */
    /* background-color: black; */
    /* width: calc(50% + 1.75px); */
    /* width: calc((100% / 3) + 4.5px); */
    width: calc(100%);
    height: 100%;
    position: fixed;
    left: 3.5rem;
    top: 0rem;
    /* background: #201D17; */

    ::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 768px) {
        /* position: fixed; */
        /* top: 0; */
        grid-template-columns: 1fr;
        grid-template-row: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        border-left: 1.75px solid #201D17;
        border-bottom: 0;
        top: calc(6vh - 1.75px);
        left: 0;
        width: calc(3.5rem + 2.1px);
        height: 100%;
        width: 100vw;
    }
`

export const LabContent = styled.div`
    display: grid;
    position: fixed;
    z-index: 999;
    width: calc((100% / 3) + 1.75px);
    /* width: calc(10rem); */
    height: calc(30% + 1.75px);
    top: calc(70% - 1.75px);
    /* left: calc(100% / 3 - 7rem); */
    left: 3.5rem;
    overflow: hidden;
    border-top: 1.75px solid #201D17;
    border-right: 1.75px solid #201D17;
    background: #FDFEF5;
    color: #201D17;

    @media screen and (max-width: 768px) {
        /* display: none; */
        width: calc(100vw - 3.5rem);
        height: calc(12vh + 1.75px);
        top: calc(82vh);
        border-bottom: 1.75px solid #201D17;
        border-left: 1.75px solid #201D17;
        /* opacity: 0; */
    }
`

export const Labs = styled.div`
    position: fixed;
    display: grid;
    /* left: calc(50% - 1.25rem); */
    border-top: 1.75px solid #201D17;
    left: 0;
    top: calc(50%);
    /* height: calc(50% - 1.25em); */
    width: calc(50% + 1.75px);
    height: 50%;
    /* grid-template-columns: 1fr; */
    /* grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; */
    overflow-y: scroll;
`

export const Pics = styled.div`
    /* width: 96vw; */
    /* height: 89vh; */
    /* width: 5rem; */
    /* display: grid; */
    /* height: 100%; */
    /* width: calc(100% + 1.75px); */
    /* width: calc(100% + 1rem); */
    z-index: 999;
    /* padding-top: calc(50% - 1.75rem); */
    /* padding-left: calc(50% - 1.3rem); */
    padding-left: 1.25rem;
    padding-top: 1rem;
    /* align-items: center; */
    /* text-align: center; */
    /* justify-content: center; */
    border-right: 1.75px solid #201D17;
    /* border-top: 1.75px solid #201D17; */
    /* border-bottom: 1.75px solid #201D17; */
    /* transition: .15s all ease-in-out; */
    /* scale: (1); */
    /* overflow-x: hidden; */
    color: #201D17;
    background: #FDFEF5;
    /* color:  ${({ currProj, currPreview }) => (currProj === currPreview ? '#FDFEF5' : '#201D17')}; */
    /* background:  ${({ currProj, currPreview }) => (currProj === currPreview ? '#201D17' : '#FDFEF5')}; */
     
    transition: 0.2s all ease-in-out;
    
    /* ${({ currLab, labSelected, isOpen }) => ((currLab == labSelected) && isOpen) && `
            width: 50vw;
    `} */

    cursor: url("../imgs/cursor1.svg"), crosshair;

    &:hover {
        color: #FDFEF5;
        background: #201D17;
        cursor: url("../imgs/cursor2.svg"), crosshair;
    }

    @media screen and (max-width: 768px) {
        /* width: 100%; */
        border-bottom: 1.75px solid #201D17;
        padding: 1rem;
    }
`

export const ItemContainer = styled.div`
    width: 100%;
    height: 100%;

    img {
        object-fit: contain;
        justify-content: center;
        max-width: calc(11% - 1.25rem);
        max-width: 100%;
        padding-right: 1.25rem;
        /* max-height: 92%; */
        /* width: 'calc(10% - 1.25rem)'; */
    }

    @media screen and (max-width: 768px) {
        img {
            object-fit: unset;
            justify-content: unset;
            max-width: unset;
            max-height: unset;

            width: 100%;
        }
    }
`

export const Images = styled.div`
    width: 100%;
    height: 100%;

`

export const Divider = styled.div`  
    z-index: 999;
    position: fixed;
    display: grid;
    border-left: 1.75px solid #201D17;
    /* width: calc(50%); */
    /* width: calc(((100% * 2) / 3)); */
    width: 50%;
    /* left: calc(50% + 1.75px); */
    left: calc((100% / 3) + 3.5rem);
    left: calc(50% + 1.75px);
    top: 0;
    height: 100%;

    @media screen and (max-width: 768px) {
        left: 3.5rem;
        top: 6vh;
        border-bottom: 1.75px solid #201D17;
        border-right: 1.75px solid #201D17;
        height: calc(76vh + 1.75px);
        width: calc(100vw - 3.5rem);
        display: none;
    }
`

export const NextSection = styled.div`
    position: fixed;
    z-index: 1;
    width: 55%;
    top: 0;
    right: 0;
    /* margin-top: -50%; */
    /* margin-left: 50%; */
    height: 200%;
    background: yellow;
    opacity: 0;
    cursor: url("../imgs/c_next.svg"), crosshair;

    &:hover {
        opacity: .05;
    }

    @media screen and (max-width: 768px) {
        width: 50%;
        height: 100%;
    }
`

export const PrevSection = styled.div`
    z-index: 2;
    width: 45%;
    /* margin-left: 0%; */
    /* margin-left: 50%; */
    height: 100%;
    background: yellow;
    opacity: 0;
    cursor: url("../imgs/c_prev.svg"), crosshair;

    &:hover {
        opacity: .05;
    }

    @media screen and (max-width: 768px) {
        width: 50%;
    }
`

export const PreviewContainer = styled.div`
    z-index: -1;
    overflow: hidden;
    position: fixed;
    display: flex;
    /* left: calc(50% + 1.75px); */
    /* left: calc((100% / 3)); */
    justify-content: center;
    top: 0;
    width: calc(((100% * 2) / 3) - 3.5rem);
    width: calc(100% - 7rem);
    padding-top: 2%;
    /* padding-left: 2%; */
    height: 92.5%;
    height: 100%;
    /* background: #201D17; */
    opacity: 1;
    /* border-left: 1.75px solid #201D17; */
    /* border-bottom: 1.75px solid #201D17; */

    @media screen and (max-width: 768px) {
        width: 100%;
        padding-top: 3%;
    }
`

export const PicIndex = styled.div`
    position: fixed;
    top: calc(92.5% + 1rem);
    /* left: calc((100% / 3) + 8.5rem); */
    text-align: center;
    align-items: center;
    height: 5%;
    /* width: calc(((100% * 2) / 3) - 7rem); */
    width: 100%;
    font-family: 'SpaceMono';
    font-size: 1.6rem;
    letter-spacing: -.15rem;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
        top: unset;
        bottom: 1%;
    }   
`

export const AddLab = styled.div`
    /* position: fixed; */
    z-index: 999;
    width: 4rem;
    height: 4rem;
    padding-left: 1.25rem;
    padding-top: .5rem;
    font-size: 2rem;
    border-right: 1.75px solid #201D17;
    border-bottom: 1.75px solid #201D17;
    /* transition: .1s all ease-in-out; */

    &:hover {
        color: #FDFEF5;
        background: #201D17;
    }
`

export const LabIndex = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: grid;
        /* padding: auto; */
        /* padding-right: 2rem; */
        font-family: 'SpaceMono';
        font-size: 2.25rem;
        font-size: 1rem;

        text-align: center;
        align-items: center;
        justify-content: center;

        display: flex;
        padding-top: calc(50% + .35rem);
    }
`

export const Label = styled.div`
    display: grid;
    padding-left: 1.25rem;
    padding-top: .75rem;
    padding-bottom: .5rem;
    width: 100%;
    height: 3rem;
    font-family: 'SharpGrotesk';
    font-size: 1.2rem;
    border-bottom: 1.75px solid #201D17;
    border-right: 1.75px solid #201D17;
    color: #FDFEF5;
    background: #201D17;
    position: fixed;
    left: 3.5rem;
    top: 0;

    &:hover {
        background: #FDFEF5;
        color: #201D17;
        cursor: url("../imgs/cursor2.svg"), crosshair;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const LabDetails = styled.div`
    padding-left: 1.25rem;
    /* padding-right: 2rem; */
    width: calc(100% - 2rem);
    height: 100%;
    /* overflow-y: scroll; */
    overflow: hidden;
    /* text-orientation: mixed; */
    /* writing-mode: vertical-rl; */
`

export const LabName = styled.div`
    display: grid;
    /* position: relative; */
    /* padding-top: 1.5rem; */
    padding: auto;
    padding-top: 1.5vh;
    /* left: 2rem; */
    /* border-bottom: 1.75px solid #201D17; */
    /* top: 1rem; */
    line-height: 85%;
    /* justify-content: center; */
    /* width: 100%;     */
    word-wrap: break-word;

    font-family: 'SpaceMono';
    /* transform: translate(-50%, -50%); */
    /* justify-content: center; */
    /* align-items: left; */
    font-size: 2.25rem;
    text-orientation: mixed;
    writing-mode: vertical-rl;

    @media screen and (max-width: 768px) {
        /* display: none; */
        font-size: 1.1rem;
        writing-mode: horizontal-tb;
    }
`

export const LabDesc = styled.div`
    position: relative;
    /* left: 2rem; */
    /* top: 5rem; */
    width: 100%;
    /* overflow-y: scroll; */
    font-family: 'SpaceMono';
    font-size: 1.25rem;
    padding-top: 1.5rem;
    line-height: 90%;
    /* height: calc(100% - 6rem); */
    /* text-orientation: mixed; */
    /* writing-mode: vertical-rl; */
`

export const Top = styled(Link)`
    position: fixed;
    display: flex;
    z-index: 990;
    /* cursor: pointer; */
    background: white;
    bottom: 8vh;
    right: 16px;
    /* width: 4rem; */
    /* height: 2rem; */
    /* transition: all 0.2s ease-in-out; */
    /* padding-left: .85rem; */
    /* padding-right: .85rem; */
    padding: .85rem;
    border: 1px solid black;
    border-radius: 70px;
    font-size: 2rem;

    color: black;
    text-decoration: none;

    &:hover {
        background: black;
        color: white;        
    }

    @media screen and (min-width: 768px) {
        bottom: 3vh;
    }
`

export const CursorPreview = styled.div`
    position: fixed;
    top: ${props => (props.topVal)};
    left: ${props => (props.leftVal)};
    max-width: 8rem;
    opacity: 0;
    /* height */

    ${LabIndex}:hover {
        opacity: 1;
    }
`  