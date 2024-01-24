import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useLocation, Redirect } from 'react-router-dom';
import { ListContainer } from './WorkElements';
import { withRouter } from 'react-router';
import { motion } from "framer-motion";
import MobileTopButton from '../MobileTopButton';
import { Container, Header, ContentBg, BgBlur, TableOfContents, Visit, CloseTOC, MobileTags, MobileTOCToggle, TopSticky, LeftTitle, CaseStudy, CaseStudy2, MobileTOCLabel, MobileTOCContainer, OverviewTag, MobileTOC, Subsection, InlineLink, Sub2, Fancy, NavButtons, WorkNav, NextWork, Back, Content, FixedContent, MobileTitle, TagsContainer, Tag, Details, Overview, PicContainer, Thumbnails, ThumbnailSelector, PicScroll, Controls, WorkContent, Label, Desc, DateClass, TOCItem, TOCItem2, Date, Class, InsideHeaderContainer, DividerTOC, DesktopTitle, NavLabel, DesktopTableHeader, TopControls, ProjDetails, LinkIcon, ControlDetails1, ControlDetails2, NonCSPreview, WorkNavName } from './WorkExpandedElements';
// import { Work } from './SingleWorkElements';
// import { load_defaults } from '../../api';
// import { restore_session } from '../../store';
// const WorkExpanded = () => {
const WorkExpanded = ({ projects }) => {

    const [showTOC, setShowTOC] = useState(false);
    // const [currImage, setCurrImage] = useState(1);

    const location = useLocation();
    let work_id = location.pathname.split("/index")[0];
    let work_id_trunc = work_id.substring(1, work_id.length);
    
    // console.log('this work_id: ', work_id);
    // console.log('this work id: ', work.id);
    // console.log('truncated work id: ', work_id_trunc);

    let work = projects[work_id_trunc];
    // let work = projects[work.id];

    // console.log('selected work', work.name);

    // console.log('selected work id', work.id);

    var next_id;
    var prev_id;

    if (work_id_trunc == 13) {
        next_id = 0;
        prev_id = parseInt(work_id.substring(1, work_id.length)) - 1;
        // console.log("caught max case");
    } else if (work_id_trunc == 0) {
        // console.log("caught 0 case");
        next_id = parseInt(work_id.substring(1, work_id.length)) + 1; 
        prev_id = 13;
    } else {
        next_id = parseInt(work_id.substring(1, work_id.length)) + 1; 
        prev_id = parseInt(work_id.substring(1, work_id.length)) - 1;
    }

    // console.log("prev id", prev_id);
    // console.log("next id", next_id);

    var next_proj = projects[next_id];
    var prev_proj = projects[prev_id];

    // console.log("next id name", next_proj.name);
    // console.log("prev id name", prev_proj.name);

    
    const [mobileTOC, setMobileTOC] = useState(false);

    const toggleMobileTOC = () => {
        // console.log("mobile about showing", mobileTOC);
        // setMobileTOC(true);
        setMobileTOC(!mobileTOC);
    };

    var isLast = false;

    if (work_id == projects.length) {
        isLast = true;
    }

    // console.log("imgs: " + work.imgs);


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
                <Header id={-1}>
                    <DateClass>
                        {/* <Fancy> &#123; </Fancy> */}
                            {/* <InsideHeaderContainer> */}
                                <CaseStudy isCS={is_cs}> Case Study</CaseStudy>
                                {/* <Class>{work.class}</Class> */}
                            {/* </InsideHeaderContainer> */}
                        {/* <Fancy> &#125; </Fancy> */}
                    </DateClass>
                    <MobileTitle>{work.name}</MobileTitle>
                    {/* <Tag style={{ color: 'white', fontWeight: '600', paddingBottom: '6px' }}>Tags</Tag> */}
                    <MobileTags>{project_tags}</MobileTags>
                    {/* <OverviewTag>Intro</OverviewTag> */}
                    <Overview>
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
                        isCS={is_cs}
                        // isLast={is_last}
                        // as={motion.div}
                        // initial="initial"
                        // animate="in"
                        // exit="out"
                        // variants={imgVariants}
                        // transition={{
                        //     type: "tween",
                        //     ease: [0.7, 0, 0.13, 1],
                        //     duration: 0.85,
                        //     delay: (index + 1) * 0.1,
                        // }}
                        >
                        <img src={"/imgs/" + picture} alt={picture} id="project-img"></img>   
                        {/* <img src={"imgs/testProjCover3.png"} id="project-img"></img>    */}
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
                    // as={motion.div}
                    // initial="initial"
                    // animate="in"
                    // exit="out"
                    // variants={imgVariants}
                    // transition={{
                    //     type: "tween",
                    //     ease: [0.7, 0, 0.13, 1],
                    //     duration: 0.85,
                    //     delay: (index + 1) * 0.1,
                    // }}
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

    const content_displayed = work.imgs.map((picture, index) => (
        <Content_Displayed picture={picture} key={picture.id} index={index} />
    ));

    const table_of_contents = work.imgs.map((subsection, index) => (
        // <Get_TOC subsection={subsection} key={subsection.id} index={index}/>
        <ListofTOC subsection={subsection} key={subsection.id} index={index} />
        // <TOCItem>{subsection}</TOCItem>
    ));

    return (
        <Container id='head'
            // as={motion.div}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0, transition: {
            // type: "tween",
            // ease: [0.7, 0, 0.13, 1],
            // duration: 0.2,
            // } }}
            // transition={{
            //     type: "tween",
            //     ease: [0.7, 0, 0.13, 1],
            //     duration: 0.5,
            // }}
        >
            <TopSticky
                isCS={is_cs}
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, 
                    transition: {
                    type: "tween",
                    ease: [0.7, 0, 0.13, 1],
                    duration: 0.4,
                    delay: 0
                } }}
                transition={{
                    type: "tween",
                    ease: [0.7, 0, 0.13, 1],
                    duration: 0.6,
                    delay: 0.4
                }}
            >
                {/* <DesktopTitle>{work.name}</DesktopTitle> */}
                <Date>{work.semester}</Date>
                {/* <TagsContainer>{project_tags}</TagsContainer> */}
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
                    duration: .5}
                }}
                transition={{
                    type: "tween",
                    ease: [0.7, 0, 0.13, 1],
                    duration: .9,
                }}
            >
                <DesktopTitle>{work.name}</DesktopTitle>
                <TagsContainer>{project_tags}</TagsContainer>
                {content_displayed}
            </WorkContent>

            <Controls
                isCS={is_cs}
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
                <Back to="/index">← All Projects</Back>
                <TopControls>
                    <ControlDetails1>
                        <Class>{work.class}</Class>
                        <Date>{work.semester}</Date>
                    </ControlDetails1>
                    <LeftTitle>{work.name}</LeftTitle>
                </TopControls>
                <NonCSPreview>
                    <img src={"/imgs/" + work.imgs[0]} id="project-img"></img>   
                    {/* <img src={"imgs/testProjCover3.png"} id="project-img"></img>    */}
                </NonCSPreview>
            </Controls>

            <NavButtons
                isCS={is_cs}
                as={motion.div}
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                exit={{ x: '-100vw',
                    transition: {
                        type: "tween",
                        ease: [0.7, 0, 0.13, 1],
                        duration: 0.4,
                } }}
                transition={{
                    type: "tween",
                    ease: [0.7, 0, 0.13, 1],
                    duration: 0.4,
                    delay: 0.3
                }}
            >
                <NavLabel>Next</NavLabel>
                <WorkNav to={"/" + next_id + "/index"} currId={work.id}><WorkNavName>{next_proj.name}</WorkNavName></WorkNav>
                <NavLabel style={{ paddingTop: '22px' }}>Previous</NavLabel>
                <WorkNav to={"/" + prev_id + "/index"} currId={work.id}><WorkNavName>{prev_proj.name}</WorkNavName></WorkNav>
            </NavButtons>

            <DesktopTableHeader
                isCS={is_cs}
                as={motion.div}
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                exit={{ x: '20vw' }}
                transition={{
                    type: "tween",
                    ease: [0.7, 0, 0.13, 1],
                    duration: 0.6,
                    // delay: 0.4
                }}
            >
                Table of Contents
            </DesktopTableHeader>

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
                    // delay: 0.4
                }}
            >
                {/* <Date style={{ textAlign: 'left', textTransform: 'uppercase', marginTop: '0px', marginBottom: '-14px', opacity: '0.55' }}> {showTOC ? 'Table of Contents' : ''}</Date> */}
                {table_of_contents}
            </TableOfContents>

            <MobileTOCContainer
                as={motion.div}
                initial={{ x: 0, y: '100vh' }}
                animate={mobileTOC ? {  x: 0, y: '-70vh' } : { x: 0, y: '100vh' }}
                transition={{
                type: "tween",
                ease: [0.28, 1.35, 1.5, .91],
                duration: 0.35  
                }}
            >
                {/* Table of Contents */}
                <MobileTOC>
                    {/* <TOCItem onClick={()=> handleClick(0)}>Intro</TOCItem> */}
                    {table_of_contents}
                </MobileTOC>
                <CloseTOC onClick={toggleMobileTOC}>✕</CloseTOC>
            </MobileTOCContainer>

            <MobileTOCToggle 
                isCS={is_cs}
                as={motion.div}
                initial={{ y: '100vh' }}
                animate={{ y: '0vh' }}
                exit={{ y: '100vh', transition: {
                    type: "tween",
                    ease: [0.28, 1.35, 1.5, .91],
                    duration: 0.4
                    }
                 }}
                transition={{
                type: "tween",
                ease: [0.28, 1.35, 1.5, .91],
                duration: 0.5,
                delay: 0.2
                }}
            >
                <DividerTOC onClick={toggleMobileTOC}>
                    <MobileTOCLabel>Table of Contents ☰</MobileTOCLabel>
                </DividerTOC>
            </MobileTOCToggle>

            <ContentBg
                as={motion.div}
                initial={{ opacity: '0' }}
                animate={{ opacity: '1' }}
                exit={{ opacity: '0', transition: {
                    type: "tween",
                    ease: [0.7, 0, 0.13, 1],
                    duration: 0.3
                } }}
                transition={{
                type: "tween",
                ease: [0.7, 0, 0.13, 1],
                duration: .3,
                }}
            >
                <img src={"imgs/testProjCover3.png"} id="project-img"></img>   
                <BgBlur />
            </ContentBg>
            
        </Container>
    );
};
  
export default withRouter(connect(({ projects }) => ({ projects }))(WorkExpanded));