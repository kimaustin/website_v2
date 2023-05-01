import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useLocation, Redirect } from 'react-router-dom';
import { ListContainer } from './WorkElements';
import { motion } from "framer-motion";
import MobileTopButton from '../MobileTopButton';
import { Container, Header, TableOfContents, Visit, TopSticky, LeftTitle, CaseStudy, CaseStudy2, MobileTOCLabel, MobileTOCContainer, OverviewTag, MobileTOC, Subsection, InlineLink, Sub2, Fancy, NavButtons, PrevWork, NextWork, Back, Content, FixedContent, Title, TagsContainer, Tag, Details, Overview, PicContainer, Thumbnails, ThumbnailSelector, PicScroll, Controls, WorkContent, Label, Desc, DateClass, TOCItem, TOCItem2, Date, Class, InsideHeaderContainer, DividerTOC } from './WorkExpandedElements';
// import { Work } from './SingleWorkElements';
// import { load_defaults } from '../../api';
// import { restore_session } from '../../store';


// const WorkExpanded = () => {
const WorkExpanded = ({ projects }) => {

    const [showTOC, setShowTOC] = useState(false);
    const [currImage, setCurrImage] = useState(1);

    const location = useLocation();
    let work_id = location.pathname.split("/works")[0];
    
    let work = projects[work_id.substring(1, work_id.length)];

    console.log('selected work', work);


    const [mobileTOC, setMobileTOC] = useState(false);

    const toggleMobileTOC = () => {
        console.log("mobile about showing", mobileTOC);
        // setMobileTOC(true);
        setMobileTOC(!mobileTOC);
    };

    var isLast = false;

    if (work_id == projects.length) {
        isLast = true;
    }

    // console.log("imgs: " + work.imgs);

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
    
    // const handleClick = (index) => {
    //     console.log('index', index, myPicRefs);
    //     console.log('ref clicked', myPicRefs[index].current);
    //     myPicRefs[index].current?.scrollIntoView({ behavior: 'smooth' });
    // }

  const handleClick = async event => {
    // console.log('before');
    toggleMobileTOC();
    // await delay(300);
    myPicRefs[event].current?.scrollIntoView({ behavior: 'smooth' });
    // console.log('after');
  };


  let project_tags = work.tags.map((tag, index) => (
    <Tag>{tag}</Tag>
  ));
  
//   let case_study = <></>

    let is_cs = false;

    if (work.class_short == "June") {
        is_cs = true;
    }
//   if 

// MAIN CONTENT HANDLER --------->
    function Content_Displayed({picture, index}) {
        let index_int = index + 1; 
        let index_str = 'pic' + index_int;


        if (index == 0) {
            return (
                <Header>
                    <DateClass>
                        {/* <Fancy> &#123; </Fancy> */}
                            {/* <InsideHeaderContainer> */}
                                <Date>{work.semester} <CaseStudy isCS={is_cs}> Case Study</CaseStudy></Date>
                                <Class>{work.class}</Class>
                            {/* </InsideHeaderContainer> */}
                        {/* <Fancy> &#125; </Fancy> */}
                    </DateClass>
                    <Title>{work.name}</Title>
                    <Tag style={{ color: 'white', fontWeight: '600', paddingBottom: '6px' }}>Tags</Tag>
                    <TagsContainer>{project_tags}</TagsContainer>
                    <Overview>
                        <OverviewTag>Overview</OverviewTag>
                        {work.desc}
                        {/* A series of three self-promotional posters. Explored which traits are core to my identity, and what differentiates me from my peers. Intended to express my identity in a way that creates emotional resonance in a memorable, yet authentic manner.  */}
                    </Overview>
                </Header>
            );
        } else {
            if (picture.startsWith('LINK:')) {
                let link_url = picture.slice('5');

                return (
                    <InlineLink href={link_url} target="_blank">
                        {link_url}
                    </InlineLink>
                )
            } else if (picture.startsWith('SS2:')) {
                let sub_name = picture.slice('4');

                return (
                    <Sub2 ref={myPicRefs[index]}>
                        {sub_name}
                    </Sub2>
                )
            } else if (picture.includes("/")) {
                return (
                    <PicContainer id={index_str}
                        index={index}
                        // isLast={is_last}
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
            } else if (picture.startsWith('SS:')) {
                let header_name = picture.slice('3');

                return (
                    <Subsection ref={myPicRefs[index]}>
                        {header_name}
                    </Subsection>
                )
            } else {
               return (
                   <Desc
                    index={index}
                    // isLast={is_last}
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
                   </Desc>
               )
           }
        }
    }


    function ListofTOC({subsection, index}) {
        if (subsection.startsWith('SS:')) {
            setShowTOC(true);

            let header_name = subsection.slice(3);

            return (
                <TOCItem onClick={()=> handleClick(index)}>{header_name}</TOCItem>
            )
        } else if (subsection.startsWith('SS2:')) {
            let sub_name = subsection.slice(4);

            return (
                <TOCItem2 onClick={()=> handleClick(index)}>{sub_name}</TOCItem2>
            )
        } else {
            return (
                <></>
            )
        }
    }

    const updateCurrImage = (img_index) => {
        // console.log("curr img index: " + img_index);
        if (currImage != img_index) {
            setCurrImage(currImage);
        }
    };

    function Tags({tag}) {
        return (
            <Tag>{tag}</Tag>
        )
    };

    const content_displayed = work.imgs.map((picture, index) => (
        <Content_Displayed picture={picture} key={picture.id} index={index} />
    ));

    const table_of_contents = work.imgs.map((subsection, index) => (
        // <Get_TOC subsection={subsection} key={subsection.id} index={index}/>
        <ListofTOC subsection={subsection} key={subsection.id} index={index} />
        // <TOCItem>{subsection}</TOCItem>
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
            // as={motion.div}
            // initial="initial"
            // animate="in"
            // exit="out"
        >
            <TopSticky
                isCS={is_cs}
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    type: "tween",
                    ease: [0.7, 0, 0.13, 1],
                    duration: 0.5,
                }}
            >
                <Date>{work.semester}</Date>
                <Class>{work.class}</Class>
            </TopSticky>
            
            <WorkContent
                isCS={is_cs}
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
                {content_displayed}
            </WorkContent>

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
                <Back to="/works">← All Projects</Back>
                <CaseStudy2>Case Study</CaseStudy2>
                <LeftTitle>{work.name}</LeftTitle>
                {/* <Visit href={"https://www.junehomes.com"} target="_blank">Visit ↗</Visit> */}
            </Controls>

            <TableOfContents
                isCS={is_cs}
                as={motion.div}
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                exit={{ x: '100vw' }}
                transition={{
                    type: "tween",
                    ease: [0.7, 0, 0.13, 1],
                    duration: 0.6,
                }}
            >
                    <p style={{ paddingBottom: '6px' }}> {showTOC ? 'Table of Contents' : ''}</p>
                    {table_of_contents}
            </TableOfContents>

            <MobileTOCContainer
                as={motion.div} 
                initial={{ x: 0, y: '436px' }}
                animate={mobileTOC ? {  x: 0, y: '90px' } : { x: 0, y: '436px' }}
                transition={{
                type: "tween",
                ease: [0.28, 1.35, 1.5, .91],
                duration: 0.35  
                }}
            >
                <DividerTOC onClick={toggleMobileTOC}>
                    <MobileTOCLabel>Table of Contents ☰</MobileTOCLabel>
                </DividerTOC>
                <MobileTOC>
                    {table_of_contents}
                </MobileTOC>
            </MobileTOCContainer>
        </Container>
    );
};
  
export default connect(({ projects }) => ({ projects }))(WorkExpanded);