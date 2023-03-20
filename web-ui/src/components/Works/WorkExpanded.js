import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, Redirect } from 'react-router-dom';
import { ListContainer } from './WorkElements';
import { motion } from "framer-motion";
import MobileTopButton from '../MobileTopButton';
import { Container, Header, NavButtons, PrevWork, NextWork, Back, Content, FixedContent, Title, TagsContainer, Tag, Details, Images, PicContainer, Thumbnails, ThumbnailSelector, PicScroll, LeftSection, Controls, RightSection, Label, PicDesc } from './WorkExpandedElements';
import e from 'lax.js';
// import { load_defaults } from '../../api';
// import { restore_session } from '../../store';

// restore_session();
// load_defaults();

const WorkExpanded = ({ projects }) => {

    // useEffect(() => {
    //     window.addEventListener("beforeunload", alertUser);
    //     return () => {
    //       window.removeEventListener("beforeunload", window.location = "http://localhost:3000/works");
    //     };
    //   }, []);
    //   const alertUser = (e) => {
    //       console.log("redirect catch");
    //       window.location = "http://localhost:3000/works";
    //       <Redirect push to="/works"/>;
    //     e.preventDefault();
    //     // e.returnValue = "";
    //   };

    const location = useLocation();
    let work_id = location.pathname.split("/works")[0];
    // let work = get_project(work_id.substring(1, work_id.length));
    

    console.log("work viewed: " + work_id);
    // console.log(work_id.substring(1, work_id.length));
    // console.log("projects length: " + projects.length);
    // console.log("proj obj from api: " + JSON.stringify(work));
    
    let work = projects[work_id.substring(1, work_id.length) - 1];

    // let prev_id = work_id;
    var next_id;
    var prev_id;

    if (work.id == 16) {
        next_id = 1;
        prev_id = parseInt(work_id.substring(1, work_id.length)) - 1;
        console.log("caught max case");
    } else if (work.id == 1) {
        console.log("caught 0 case");
        next_id = parseInt(work_id.substring(1, work_id.length)) + 1; 
        prev_id = 16;
    } else {
        next_id = parseInt(work_id.substring(1, work_id.length)) + 1; 
        prev_id = parseInt(work_id.substring(1, work_id.length)) - 1;
    }

    // // let first = true;
    // if (work_id == 1) {
    //     prev_id = work_id;
    // } else {
    //     prev_id = work_id - 1;
    // }

    // var isLast = false;
    // if (work_id == projects.length) {
    //     isLast = true;
    // }
    
    //TODO triggers something when certain scroll level has been reached
    // const changeSelector = () => {
    //     if(window.scrollY >= 80) {
    //         setCurrImage(true);
    //     } else {
    //         setCurrImage(false);
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', changeSelector)
    // }, []);
    
    let totalImgs = work.imgs.length;
    let thumbHeight = ((36 / totalImgs) - 1) + "vh";
    // console.log("each thumb height: " + thumbHeight);
    // height -> 36 / work

    console.log("imgs: " + work.imgs);

    const imgVariants = {
        initial: {
            opacity: 0,
            y: "100vh",
            scale: 0.9,
        },
        in: {
            opacity: 1,
            y: '0',
            scale: 1,
        },
        out: {
            opacity: 0,
            // y: "-100vh",
            scale: 0.9,
            transition: {
                type: "tween",
                ease: [0.7, 0, 0.13, 1],
                duration: 0.7,
            }
        },  
    };

    function Picture_Displayed({picture, index}) {
        let index_int = index + 1; 
        let index_str = 'pic' + index_int;
        // console.log("does " + picture + " contain /: " + picture.includes("/"));

        let is_last = false;

        if (work.imgs.length == (1 + index)) {
            is_last = true;
        } 

        if (index == 0) {
            return (
                <></>
            )
        } else {
            if (picture.includes("/")) {
                return (
                    <PicContainer id={index_str}
                        index={index}
                        isLast={is_last}
                        as={motion.div}
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={imgVariants}
                        transition={{
                            type: "tween",
                            ease: [0.7, 0, 0.13, 1],
                            duration: 0.85,
                            delay: (index + 1) * 0.1,
                        }}
                        >
                        <img src={"/imgs/" + picture} alt={picture} id="project-img"></img>    
                    </PicContainer>
                );
            }
           else {
               return (
                   <PicDesc
                    index={index}
                    isLast={is_last}
                    as={motion.div}
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={imgVariants}
                    transition={{
                        type: "tween",
                        ease: [0.7, 0, 0.13, 1],
                        duration: 0.85,
                        delay: (index + 1) * 0.1,
                    }}
                   >
                       {picture}
                   </PicDesc>
               )
           }
        }
    }

    const [currImage, setCurrImage] = useState(1);

    const updateCurrImage = (img_index) => {
        console.log("curr img index: " + img_index);
        if (currImage != img_index) {
            setCurrImage(currImage);
        }
    };

    function Each_Thumbnail({picture, index}) {
        let index_int = index + 1; 
        let index_str = 'pic' + index_int;
        console.log("total: " + totalImgs);

        return (
            <PicScroll to={index_str} smooth={true} duration={500} spy={true} 
                offset={-80} exact="true" relHeight={thumbHeight}>
                <img src={"/imgs/" + picture} style={{maxHeight: '100%', maxWidth: '100%', border: '.5px solid black'}} id="project-img" alt={picture}></img>    
            </PicScroll>
        )
    };

    function Tags({tag}) {
        return (
            <Tag>{tag}</Tag>
        )
    };

    const pictures_displayed = work.imgs.map((picture, index) => (
        <Picture_Displayed picture={picture} key={picture.id} index={index} />
    ));

    const thumbnails_displayed = work.imgs.map((picture, index) => (
        <Each_Thumbnail picture={picture} key={picture.id} index={index} />
    ));

    const tags_displayed = work.tags.map((tag) => (
        <Tags tag={tag} key={tag.id} />
    ));

    const leftVariants = {
        initial: {
            opacity: 0,
            y: '0',
            // y: "-100vh",
            scale: 0.9,
        },
        in: {
            opacity: 1,
            // y: '2.5rem',
            scale: 1,
        },
        out: {
            opacity: 0,
            // y: "-100vh",
            scale: 1,
        },
    };

    const controlVariants = {
        initial: {
            opacity: 0,
            y: '0s',
            x: '1.5rem',
            // y: "-100vh",
            scale: 0.9,
        },
        in: {
            opacity: 1,
            x: 0,
            // y: '2.5rem',
            scale: 1,
        },
        out: {
            opacity: 0,
            // y: "-100vh",
            scale: 1,
        },
    };

    const leftTransition = {
        type: "tween",
        ease: [0.7, 0, 0.13, 1],
        duration: 0.6,
    }

    const rightTransition = {
        type: "tween",
        ease: [0.7, 0, 0.13, 1],
        duration: 0.85,
    }

    return (
        <Container id='head'
            as={motion.div}
            initial="initial"
            animate="in"
            exit="out">

            <LeftSection
                as={motion.div}
                initial="initial"
                animate="in"
                exit="out"
                variants={leftVariants}
                transition={leftTransition}>
                    {/* {work.id}  */}
                    <Title>{work.name}</Title>
                    <Label>OVERVIEW</Label>
                    <Details>{work.desc}</Details>
                    <Label>TOOLS</Label>
                    <TagsContainer>{tags_displayed}</TagsContainer>
            </LeftSection>

            <RightSection
                // as={motion.div}
                // initial="initial"
                // animate="in"
                // exit="out"
                // transition={leftTransition}
            >
                {pictures_displayed}
            </RightSection>

            <Controls
                as={motion.div}
                initial="initial"
                animate="in"
                exit="out"
            >
                    <Header as={motion.div}
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={controlVariants}
                        transition={{type: "tween",
                        ease: [0.7, 0, 0.13, 1],
                        duration: 0.6,
                        delay: 0.3}}
                    >
                        <Back to="/works">Back</Back>
                    </Header>
                    <NavButtons as={motion.div}
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={controlVariants}
                        transition={{type: "tween",
                        ease: [0.7, 0, 0.13, 1],
                        duration: 0.6,
                        delay: 0.3}}
                    >
                        <PrevWork to={"/" + prev_id + "/works"} currId={work.id}>Previous</PrevWork>
                        <NextWork to={"/" + next_id + "/works"} currId={work.id}>Next</NextWork>
                    </NavButtons>
            </Controls>

            {/* <MobileTopButton /> */}
        </Container>
    );
};
  
// load_defaults();

export default connect(({ projects }) => ({ projects }))(WorkExpanded);


