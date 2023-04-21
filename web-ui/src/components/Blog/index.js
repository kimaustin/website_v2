import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useInView, inView, InView } from 'react-intersection-observer';
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { Link as LinkRouter } from 'react-router-dom';
import MobileTopButton from "../MobileTopButton";
import {
  Container,
  Marker,
  ClickableArea,
  ProjectTag,
  ContentBg,
  WorkListContainer,
  WorkName,
  WorkDesc,
  VisitLink,
  Fake,
  ImageHover,
  WorkItem,
  WorkIndex,
  TagsContainer,
  WorkContents,
  TagsDivider,
  WorkActions,
  Details,
  WorkImageContainer,
  WorkImage,
  BgBlur,
  WorkList,
  CaseStudy,
  Divider
} from "./BlogElements";
import Scrollbar from "smooth-scrollbar";

const Blog = ({ projects }) => {

  console.log('initial projects', projects);

  const [projectValue, setProjectValue] = useState(0);

  const isOdd = (index) => {
    if (index % 2 == 0) {
      return true;
    } else {
      return false;
    }
  };

  function ProjTags({ tag, key, index }) {
    if (index < 5) {
      return <ProjectTag>{tag} <br/></ProjectTag>;
    }
  }

  const pageVariants3 = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8,
    },
    in: {
      opacity: 1,
      // y: '4.5rem',
      x: 0,
      scale: 1,
    },
    outOther: {
      opacity: 0,
      x: "-100vw",
      scale: 1,
      transition: {delay: 0, type: "tween",
        ease: [0.7, 0, 0.13, 1],
        duration: 0.85},
    },
    outSelected: {
      opacity: 0,
      position: 'aboslute',
      top: 0,
      scale: 1,
      transition: {delay: 0.2, type: "tween",
        ease: [0.7, 0, 0.13, 1],
        duration: 0.7},
    },
  };

  // const proj1 = { name: 'June ggg ONE One GGG One ogg', val: 1, isCS: true, tags: ['UX Design', 'Figma', 'React.JS'], link: ['https://www.junehomes.com'] }
  // const proj2 = { name: 'Two', val: 2, isCS: false, tags: ['2UX Design', 'Figma', 'React.JS'], link: [] }
  // const proj3 = { name: 'three', val: 3, isCS: false, tags: ['3UX Design', 'Figma', 'React.JS'], link: [] }
  // const proj4 = { name: 'four', val: 4, isCS: true, tags: ['4UX Design', 'Figma', 'React.JS'], link: ['https://www.junehomes.com'] }
  // const proj5 = { name: 'five', val: 5, isCS: false, tags: ['5UX Design', 'Figma', 'React.JS'], link: [] }
  // const proj6 = { name: 'six', val: 6, isCS: false, tags: ['6UX Design', 'Figma', 'React.JS'], link: [] }
  // const proj7 = { name: 'seven', val: 7, isCS: true, tags: ['7UX Design', 'Figma', 'React.JS'], link: [] }
  // const proj8 = { name: 'eight', val: 8, isCS: false, tags: ['8UX Design', 'Figma', 'React.JS'], link: [] }
  // const proj9 = { name: 'nine', val: 9, isCS: false, tags: ['9UX Design', 'Figma', 'React.JS'], link: [] }
  
  // const myProjects = [ proj1, proj2, proj3, proj4, proj5, proj6, proj7, proj8, proj9 ];

  const ListContainerRef = useRef();

  let observerOptions = {
    root: ListContainerRef.target,
    rootMargin: '-48% 0px -49% 0px',
    // threshold: 0.1
  }

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

  useEffect (() => {
      for (var i = 0; i < myRefs.length; i++) { 
          // console.log('curr', myRefs[i].current);
          // console.log('root', root);
          const observer = new IntersectionObserver((projectsList) => {
            if (projectsList[0].isIntersecting) {
              // console.log('scroll - current proj index', projectValue);
              setProjectValue(projectsList[0].target.id);
              projectsList[0].target.style.opacity = 1.0;
            } else {
              projectsList[0].target.style.opacity = 0.5;
            }
          }, observerOptions)
          observer.observe(myRefs[i].current);
      }
  }, [])

  const handleClick = (index) => {
    // console.log('proj clicked', index);
    // console.log('clicked - current proj index', projectValue);
    myRefs[index].current?.scrollIntoView({ behavior: 'smooth' });
  }

  //MAIN PROJECTS LIST
  let projects_list = projects.map((project, index) => {

    if (project.isCS) {
      return (
        <WorkItem id={index} ref={myRefs[index]} onClick={()=> handleClick(index)} currProj={projectValue} thisProj={index}>
          {project.name}
          {/* <Fake>{projectValue}</Fake> */}
          <CaseStudy>CASE STUDY</CaseStudy>
        </WorkItem>
      )
    } else {
      return (
        <WorkItem id={index} ref={myRefs[index]} onClick={()=> handleClick(index)} currProj={projectValue} thisProj={index}>
          {project.name}
        </WorkItem>
      )
    }
  });

  console.log('current proj index', projectValue);
  console.log('curr project', projects[projectValue]);
  console.log('first tag of curr project', projects[projectValue].tags[0]);

  let tagsDisplayed = projects[projectValue].tags.map((tag, index) => (
    <ProjTags
      tag={tag}
      key={tag.id}
      index={index}
      // tagsLength={4}
    />
  ));

  let visit_link = () => {
    if (projects[projectValue].link.length == 1) {
      // console.log("got to link");
      return (
        <VisitLink href={projects[projectValue].link[0]} target="_blank">
          Visit ↗
        </VisitLink>
      )
    } else {
      return;
    }
  }

  const pageVariants = {
    initial: {
      y: "101vh",
      // opacity: 0
    },
    in: {
      y: "0",
      // opacity: 1
    },
    out: {
      y: "101vh",
      // opacity: 0
    },
  };

  const pageVariantsWorks = {
    initial: {
      x: "100vw",
      // opacity: 0
    },
    in: {
      x: "calc(7.15vw + 3rem)",
      // opacity: 1
    },
    out: {
      x: "100vw",
      // opacity: 0
    },
  };

  const pageTransition = {
    type: "tween",
    ease: [0.7, 0, 0.13, 1],
    duration: 0.85,
  };

  const worksVariants = {
    // transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    hidden: { y: "-20vh", opacity: 0 },
    show: {
      y: "0vw",
      opacity: 1,
      // transition: {
      //   staggerChildren: 1, delayChildren: 0.5, duration: 2
      // }
      transiiton: { 
        type: "tween",
        ease: [0.7, 0, 0.13, 1],
        duration: 10,
      },
    },
  };

  const pageVariants2 = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "-100vw",
      scale: 1.2,
    },
  };

  // console.log(window.screen.height);

  let rightImageSource = "imgs/" + projects[projectValue].imgs[0];

  //TODO: Fix filters not working
  return (
    <Container
      // id="head"
      // as={motion.div}
      // initial="initial"
      // animate="in"
      // exit="out"
      // variants={pageVariants2}
      // transition={pageTransition}
    >
      {/* <TopOfWorks
        to={"proj2"}
        smooth={true}
        duration={500}
        spy={true}
        offset={-80}
        exact="true"
      >
        top
      </TopOfWorks> */}
      <Divider />
      <WorkListContainer id="topWorks"
        ref={ListContainerRef}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: {
              type: "tween",
              ease: [0.7, 0, 0.13, 1],
              duration: 0.5,
          } }}
        transition={{
            type: "tween",
            ease: [0.7, 0, 0.13, 1],
            duration: 0.8,
        }}
      >
        <Marker />
        <ClickableArea to={"/" + projectValue + "/works"} id={"proj1"}>
          View Details →
        </ClickableArea>
        <WorkActions
          as={motion.div}
          initial={{ y: '150px' }}
          animate={{ y: 0, position: 'fixed' }}
          exit={{ y: '150px', transition: {
                type: "tween",
                ease: [0.7, 0, 0.13, 1],
                duration: 0.5,
                delay: 0.1
            } }}
          transition={{
              type: "tween",
              ease: [0.7, 0, 0.13, 1],
              duration: 0.5,
              delay: 0.1
          }}
        >
          <WorkName>{projectValue}</WorkName>
          <TagsContainer>{tagsDisplayed}</TagsContainer>
          <Details
            to={"/" + projectValue + "/works"}
            id={"proj" + projectValue}
          >
            Details  →
          </Details>
          {visit_link}
        </WorkActions>

        {projects_list}

      </WorkListContainer>

      <ContentBg
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
            type: "tween",
            ease: [0.7, 0, 0.13, 1],
            duration: 0.8,
        }}
      >
        <img src={rightImageSource}/>
        <BgBlur />
      </ContentBg>

      <WorkImageContainer>
        <WorkImage
          as={motion.div}
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1}}
          exit={{ opacity: 0, scale: 0.99, transition: {
                type: "tween",
                ease: [0.7, 0, 0.13, 1],
                duration: 0.5,
            } }}
          transition={{
              type: "tween",
              ease: [0.7, 0, 0.13, 1],
              duration: 0.5,
          }}
        >
          <img src={rightImageSource}/>
        </WorkImage>
      </WorkImageContainer>
    </Container>
  );
};

export default connect(({ projects }) => ({ projects }))(Blog);
