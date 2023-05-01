import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useInView, inView, InView } from 'react-intersection-observer';
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { Link as LinkRouter } from 'react-router-dom';
import {
  Container,
  ImageContainer,
  WorkListContainer,
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

  const ListContainerRef = useRef();

  let observerOptions = {
    root: ListContainerRef.target,
    rootMargin: '0px -48% 0px -48%',
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
    return (
      <ImageContainer to={'/' + index + '/works'}>
        <img src={'imgs/' + project.imgs[0]}></img>
      </ImageContainer>
    )
  })


  //MAIN PROJECTS LIST
  let projects_list = projects.map((project, index) => {

    // var refName = 'ref' + {project};
    // const { ref: refName, inView: inView2, entry } = useInView({
    //   rootMargin: '-210px'
    // });

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
          {/* <Fake>{projectValue}</Fake> */}
        </WorkItem>
        // <InView>
        //   {({ inView, ref, entry }) => (
        //     <WorkItem ref={refName} id={"testID" + project}>
        //       {project.name}
        //       <ImageHover heightVar={"1" + project.val + "%"}>
        //         <img src={"testProjCover" + project.val + ".png"} />
        //       </ImageHover>  
        //     </WorkItem>
        //   )}
        // </InView>
      )
    }
  });

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
    <Container>
      <Label>Work Photo Index</Label>
      <Version>v2.13</Version>
      <ScrollContainer
        as={motion.div}
        initial={{ y: '-103px' }}
        animate={{ y: 0 }}
        exit={{ y: '103px', transition: {
              type: "tween",
              ease: [0.7, 0, 0.13, 1],
              duration: 0.5,
          } }}
        transition={{
            type: "tween",
            ease: [0.7, 0, 0.13, 1],
            duration: 1,
        }}
      >
        {imgPreviews}
      </ScrollContainer>
    </Container>
  )
}

export default connect(({ projects, sideProjectsToggle }) => ({ projects, sideProjectsToggle }))(SideProjects);

