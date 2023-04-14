import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useLocation, Redirect } from 'react-router-dom';
import { ListContainer } from './WorkElements';
import { motion } from "framer-motion";
import MobileTopButton from '../MobileTopButton';
import { Container, Header, TableOfContents, Subsection, Fancy, NavButtons, PrevWork, NextWork, Back, Content, FixedContent, Title, TagsContainer, Tag, Details, Overview, PicContainer, Thumbnails, ThumbnailSelector, PicScroll, LeftSection, Controls, RightSection, Label, PicDesc, HeaderDecorated, TOCItem, InsideHeaderLine, InsideHeaderContainer } from './WorkExpandedElements';
import { Work } from './SingleWorkElements';
// import { load_defaults } from '../../api';
// import { restore_session } from '../../store';

// restore_session();
// load_defaults();

const WorkExpanded = () => {
// const WorkExpanded = ({ projects }) => {

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

    const [currImage, setCurrImage] = useState(1);

    // const ref = useRef();


    // const location = useLocation();
    // let work_id = location.pathname.split("/works")[0];
    // // let work = get_project(work_id.substring(1, work_id.length));
    

    // // console.log("work viewed: " + work_id);
    // // console.log(work_id.substring(1, work_id.length));
    // // console.log("projects length: " + projects.length);
    // // console.log("proj obj from api: " + JSON.stringify(work));
    
    // let work = projects[work_id.substring(1, work_id.length) - 1];

    // // let prev_id = work_id;
    // var next_id;
    // var prev_id;

    // if (work.id == 16) {
    //     next_id = 1;
    //     prev_id = parseInt(work_id.substring(1, work_id.length)) - 1;
    //     console.log("caught max case");
    // } else if (work.id == 1) {
    //     console.log("caught 0 case");
    //     next_id = parseInt(work_id.substring(1, work_id.length)) + 1; 
    //     prev_id = 16;
    // } else {
    //     next_id = parseInt(work_id.substring(1, work_id.length)) + 1; 
    //     prev_id = parseInt(work_id.substring(1, work_id.length)) - 1;
    // }

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
    
    // TODO triggers something when certain scroll level has been reached
    // const changeSelector = () => {
    //     // if scroll = project number * divided value
    //     if(window.scrollY >= 80) {
    //         // setCurrImage(true);

    //     } else {
    //         // setCurrImage(false);
    //     }
    // };
    
    // useEffect(() => {
    //     window.addEventListener('scroll', changeSelector)
    // }, []);
    
    let work = { id: '1', content: ['', 'SS:Introduction', 'THIS IS THE INTRODUCTION', '/test/pic1.png', '/test/pic2.png', 'THIS IS A DESCRIPTION', 'SS:Section 2', '/test/pic3.png',  '/test/pic4.png', 'SS:Last Section', 'THIS IS A DESCRIPTION', '/test/pic3.png'], tags: ['tag 1', 'tag 2', 'tag 3'], name: 'project 1 name', desc: 'work description', isCS: false, date: 'March 2022' };
    
    let totalImgs = work.content.length;
    let thumbHeight = ((36 / totalImgs) - 1) + "vh";
    // console.log("each thumb height: " + thumbHeight);
    // height -> 36 / work

    console.log("imgs: " + work.content);

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

    const myPicRefs = [];
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    myPicRefs.push(useRef());
    
    const handleClick = (index) => {
        console.log('index', index, myPicRefs);
        console.log('ref clicked', myPicRefs[index].current);

        myPicRefs[index].current?.scrollIntoView({ behavior: 'smooth' });
    }
    

    // MAIN CONTENT HANDLER --------->
    function Picture_Displayed({picture, index}) {
        let index_int = index + 1; 
        let index_str = 'pic' + index_int;
        // console.log("does " + picture + " contain /: " + picture.includes("/"));
        console.log('content', picture, index);        

        let is_last = false;

        if (work.content.length == (1 + index)) {
            is_last = true;
        } 

        if (index == 0) {
            return (
                <Header>
                    <HeaderDecorated>
                        <Fancy> &#123; </Fancy>
                            <InsideHeaderContainer>
                                <InsideHeaderLine>{work.date}</InsideHeaderLine>
                                <InsideHeaderLine>{work.name}</InsideHeaderLine>
                            </InsideHeaderContainer>
                        <Fancy> &#125; </Fancy>
                    </HeaderDecorated>
                    <Overview>
                        A series of three self-promotional posters. Explored which traits are core to my identity, and what differentiates me from my peers. Intended to express my identity in a way that creates emotional resonance in a memorable, yet authentic manner. 
                    </Overview>
                </Header>
            );
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
                        {/* <img src={"/imgs/" + picture} alt={picture} id="project-img"></img>    */}
                        <img src={picture}/>
                    </PicContainer>
                );
            } else if (picture.startsWith('SS:')) {
                let header_name = picture.slice('3');

                return (
                    <Subsection ref={myPicRefs[index]}>
                        {header_name}
                    </Subsection>
                )
            } else {
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


    function ListofTOC({subsection, index}) {

        if (subsection.startsWith('SS:')) {
            // let header_name = subsection.split(':');
            let header_name = subsection.slice(3);
            // console.log('got to recognize subsection');
            // ref={myRefs[index]} onClick={()=> handleClick(index)}
            return (
                <TOCItem  onClick={()=> handleClick(index)}>{header_name}</TOCItem>
            )
        } else {
            return (
                <></>
            )
        }
    }

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

    const pictures_displayed = work.content.map((picture, index) => (
        <Picture_Displayed picture={picture} key={picture.id} index={index} />
    ));

    const table_of_contents = work.content.map((subsection, index) => (
        // <Get_TOC subsection={subsection} key={subsection.id} index={index}/>
        <ListofTOC subsection={subsection} key={subsection.id} index={index} />
        // <TOCItem>{subsection}</TOCItem>
    ));

    // const thumbnails_displayed = work.content.map((picture, index) => (
    //     <Each_Thumbnail picture={picture} key={picture.id} index={index} />
    // ));

    // const tags_displayed = work.tags.map((tag) => (
    //     <Tags tag={tag} key={tag.id} />
    // ));






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
            // as={motion.div}
            // initial="initial"
            // animate="in"
            // exit="out"
        >
            {/* <LeftSection
                // as={motion.div}
                // initial="initial"
                // animate="in"
                // exit="out"
                // variants={leftVariants}
                // transition={leftTransition}
            >
                    {work.id} 
                    <Title>{work.name}</Title>
                    <Label>OVERVIEW</Label>
                    <Details>{work.desc}</Details>
                    <Label>TOOLS</Label>
                    <TagsContainer>{tags_displayed}</TagsContainer>
            </LeftSection> */}

            <RightSection
                as={motion.div}
                initial={{ y: '100vh' }}
                animate={{ y: 0 }}
                exit={{ y: '-100vh', transition: {
                    type: "tween",
                    ease: [0.7, 0, 0.13, 1],
                    duration: .7}
                }}
                transition={{
                    type: "tween",
                    ease: [0.7, 0, 0.13, 1],
                    duration: 1.2,
                }}
            >
                {pictures_displayed}
            </RightSection>

            <Controls
                as={motion.div}
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                exit={{ x: '-100vw' }}
                transition={{
                    type: "tween",
                    ease: [0.7, 0, 0.13, 1],
                    duration: 0.7,
                }}
            >
                <Back to="/works">Back</Back>
                <TableOfContents>
                    {/* <TOCItem style={{ fontSize: '20px' }}>Study Overview</TOCItem> */}
                    <p style={{ paddingBottom: '6px' }}> Study Overview</p>
                    {table_of_contents}
                </TableOfContents>
                <Back href={"https://www.junehomes.com"} target="_blank">Visit</Back>
            </Controls>


            {/* <MobileTopButton /> */}
        </Container>
    );
};
  
// load_defaults();

export default WorkExpanded;
// export default connect(({ projects }) => ({ projects }))(WorkExpanded);