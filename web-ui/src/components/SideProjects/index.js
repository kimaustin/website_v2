import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useInView, inView, InView } from 'react-intersection-observer';
import { connect } from "react-redux";
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import { Link as LinkRouter } from 'react-router-dom';
import {
  Container,
  ImageContainer,
  WorkListContainer,
  ErrorImg,
  Marker,
  ClickableArea,
  WorkItem,
  Label,
  Version,
  CaseStudy,
  WorkActions,
  ScrollContainer,
  WorkName,
  TagsContainer,
  ProjectTag,
  Details,
  VisitLink
} from './SideProjectsElements';

const SideProjects = ({ projects, sideProjectsToggle }) => {

  const [projectValue, setProjectValue] = useState(0);

  // const location = useLocation();

  // const [isMain, setIsMain] = useState(false);

  // if (location.pathname === "") {
  //   setIsMain(true);
  // }

  const location = useLocation();
    
  let currPage = location.pathname.split("/").pop();

  const ListContainerRef = useRef();

  let observerOptions = {
    root: ListContainerRef.target,
    rootMargin: '0px -48% 0px -48%',
    // threshold: 0.1
  }

  // const proj1 = { name: 'June ggg ONE One GGG OOO ggg', class_short: 'June', val: 1, isCS: true, imgs: ["testProjCover1.png"], tags: ['UX Design', 'Figma', 'React.JS'], link: ['https://www.junehomes.com'] }
  // const proj2 = { name: 'Two', val: 2, isCS: false, imgs: ["test/pic1.png"], tags: ['2UX Design', 'Figma', 'React.JS'], link: [] }
  // const proj3 = { name: 'three', val: 3, isCS: false, imgs: ["test/pic2.png"], tags: ['3UX Design', 'Figma', 'React.JS'], link: [] }
  // const proj4 = { name: 'four', val: 4, isCS: true, imgs: ["testProjCover4.png"], tags: ['4UX Design', 'Figma', 'React.JS'], link: ['https://www.junehomes.com'] }
  // const proj5 = { name: 'five', val: 5, isCS: false, imgs: ["testProjCover5.png"], tags: ['5UX Design', 'Figma', 'React.JS'], link: [] }
  // const proj6 = { name: 'six', val: 6, isCS: false, imgs: ["testProjCover6.png"], tags: ['6UX Design', 'Figma', 'React.JS'], link: [] }
  // const proj7 = { name: 'seven', val: 7, isCS: true, imgs: ["testProjCover7.png"], tags: ['7UX Design', 'Figma', 'React.JS'], link: [] }
  // const proj8 = { name: 'eight', val: 8, isCS: false, imgs: ["testProjCover8.png"], tags: ['8UX Design', 'Figma', 'React.JS'], link: [] }
  // const proj9 = { name: 'nine', val: 9, isCS: false, imgs: ["testProjCover9.png", ""], tags: ['9UX Design', 'Figma', 'React.JS'], link: [] }
  
  // const myProjects = [ proj1, proj2, proj3, proj4, proj5, proj6, proj7, proj8, proj9 ];

  const myRefs = [];
  myRefs.push(useRef());
  myRefs.push(useRef());
  myRefs.push(useRef());
  myRefs.push(useRef());
  myRefs.push(useRef());
  myRefs.push(useRef());
  myRefs.push(useRef());
  myRefs.push(useRef());
  myRefs.push(useRef());
  myRefs.push(useRef());
  myRefs.push(useRef());
  myRefs.push(useRef());
  myRefs.push(useRef());
  myRefs.push(useRef());
  myRefs.push(useRef());

  // useEffect (() => {
  //     for (var i = 0; i < myRefs.length; i++) { 
  //         const observer = new IntersectionObserver((projectsList) => {
  //           if (projectsList[0].isIntersecting) {
  //             setProjectValue(projectsList[0].target.id);
  //             projectsList[0].target.style.opacity = 1.0;
  //           } else {
  //             projectsList[0].target.style.opacity = 0.5;
  //           }
  //         }, observerOptions)
  //         observer.observe(myRefs[i].current);
  //     }
  // }, [])

  const handleClick = (index) => {
    // console.log('proj clicked', index);
    // console.log('clicked - current proj index', projectValue);
    myRefs[index].current?.scrollIntoView({ behavior: 'smooth' });
    // await timeout(1000); //for 1 sec delay
    // setProjectValue(index);
  }

  let imgPreviews = projects.map((project, index) => {
  // let imgPreviews = projects.map((project, index) => {
    return (
      <ImageContainer to={'/' + index + '/works'}>
        <img src={'imgs/' + project.imgs[0]}></img>
        {/* <img src={project.imgs[0]}></img> */}
      </ImageContainer>
    )
  })


  //MAIN PROJECTS LIST
  // let projects_list = projects.map((project, index) => {
  //   if (project.isCS) {
  //     return (
  //       <WorkItem id={index} ref={myRefs[index]} onClick={()=> handleClick(index)} currProj={projectValue} thisProj={index}>
  //         {project.name}
  //         <CaseStudy>CASE STUDY</CaseStudy>
  //       </WorkItem>
  //     )
  //   } else {
  //     return (
  //       <WorkItem id={index} ref={myRefs[index]} onClick={()=> handleClick(index)} currProj={projectValue} thisProj={index}>
  //         {project.name}
  //       </WorkItem>
  //     )
  //   }
  // });

  // function ProjTags({ tag, key, index }) {
  //   if (index < 5) {
  //     return <ProjectTag>{tag} <br/></ProjectTag>;
  //   }
  // }

  // let tagsDisplayed = projects[projectValue].tags.map((tag, index) => (
  //   <ProjTags
  //     tag={tag}
  //     key={tag.id}
  //     index={index}
  //   />
  // ));

  // let visit_link = () => {
  //   if (projects[projectValue].link.length == 1) {
  //     return (
  //       <VisitLink href={projects[projectValue].link[0]} target="_blank">
  //         Visit ↗
  //       </VisitLink>
  //     )
  //   } else {
  //     return;
  //   }
  // }

  // let rightImageSource = "imgs/" + projects[projectValue].imgs[0];


  return (
    <Container
      as={motion.div} 
      initial={{ opacity: 1 }} 
      animate={(currPage == '') ? {  opacity: 0 } : { opacity: 1 }}
      transition={{
      type: "tween",
      ease: [0.28, 1.35, 1.5, .91],
      duration: 0.6,
      delay: 0.3,
      }}
    >
      <Label>Work Photo Index</Label>
      <Version>v2.13</Version>
      <ScrollContainer
        as={motion.div}
        initial={{ x: '100vw' }}
        animate={{ x: '0' }}
        exit={{ x: '100vw', transition: {
              type: "tween",
              ease: [0.7, 0, 0.13, 1],
              duration: 0.5,
          } }}
        transition={{
            type: "tween",
            ease: [0.7, 0, 0.13, 1],
            duration: 1.2,
            delay: 0.6
        }}
      >
        {imgPreviews}
        <ErrorImg>
          If images are not loading, please reload from <a href="http://www.austinkim.works/works">here</a>.
        </ErrorImg>
      </ScrollContainer>
    </Container>
  )
}

export default connect(({ projects, sideProjectsToggle }) => ({ projects, sideProjectsToggle }))(SideProjects);

