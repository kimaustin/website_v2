import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useInView, inView, InView } from 'react-intersection-observer';
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { Link as LinkRouter } from 'react-router-dom';
import SingleWork from "./SingleWork";
import MobileTopButton from "../MobileTopButton";
import {
  Container,
  Marker,
  HitMarker,
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
} from "./WorkElements";
import Scrollbar from "smooth-scrollbar";
import { FixedContent } from "./WorkExpandedElements";

// const options = {
//   damping: 0.1,
//   renderByPixels: true,
//   alwaysShowTracks: false,
//   continuousScrolling: false
// }

// Scrollbar.init(document.querySelector('#my-scrollbar'), options);

const Works = ({ projects, aboutToggle }) => {

  const [projectDisplayed, setProjectDisplayed] = useState(0);
  const [hoverAllowed, setHoverAllowed] = useState(true);
  const [imageZoomed, setImageZoomed] = useState(false);

  const { ref: myRef1, inView, entry } = useInView({
    rootMargin: '-210px'
  });

  // const myRef1 = useRef();
  // const [selectedProjVisible, setSelectedProjVisible] = useState();

  // console.log('selectedProjVisible: ' + selectedProjVisible);
  
  // if(inView) {
  //   // console.log('ref: ',  myRef1.current);
  //   // console.log('entry', entry);
  //   // console.log('about to update proj desc');
  // }

  const [projectValue, setProjectValue] = useState(0);

  // useEffect(() =>  {
  //   console.log('ref: ' + myRef1.current);
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setSelectedProjVisible(entry.isIntersecting);
  //     // console.log('entry: ' + entry); 
  //   })
  //   observer.observe(myRef1.current);
  // }, []) 

  // const [topVal, setTopVal] = useState("-1px");
  // const [leftVal, setLeftVal] = useState("-1px");

  // console.log(projects.length);
  //TODO: pass in Projects Length as variable instaed of Connecting to Store to retrieve
  // let margin = (64 / projects.length) * .8;
  // let y_index = ((project.id - 1) * margin) + 49;
  // let stringY = y_index + "vh";
  // let stringY2 = (y_index - 2) + "vh";
  // console.log("stringY2: " + stringY2);

  // document.onmousemove = function(event) {
  //   // pointerX = event.screenX + "px";
  //   // pointerY = event.screenY + "px";
  //   if (event.pageY >= (window.innerHeight - 340)) {
  //       setTopVal((event.pageY - 340) + "px");
  //       setLeftVal((event.pageX + 2) + "px");
  //   } else {
  //       setTopVal((event.pageY + 1) + "px");
  //       setLeftVal((event.pageX + 2) + "px");
  //   }
  // }

  // if ( this.state.displayQuestions ) {
  //   questions = (
  //   <div>
  //        { this.state.questions.map((question, index) => {
  //             return <Question key={question.id}
  //             title={question.title} />
  //        })}
  //   </div>
  //   )
  // }

  const toggleImgZoom = () => {
    setImageZoomed(!imageZoomed);
    // console.log("Img Toggle reached.");
    // console.log("curr zoom status: " + imageZoomed);
  };

  const isOdd = (index) => {
    if (index % 2 == 0) {
      return true;
    } else {
      return false;
    }
  };

  // const [header, setHeader] = useState("header");

  // const listenScrollEvent = (event) => {
  //   if (WorkListContainer.scrollY < 250) {
  //     // console.log("got to scroll listener event");
  //   } else if (WorkListContainer.scrollY > 250) {
  //     // console.log("got to scroll listener event");
  //   }
  // // };

  // useEffect(() => {
  //   window.addEventListener("scroll", listenScrollEvent);

  //   return () => window.removeEventListener("scroll", listenScrollEvent);
  // }, []);

  // ----------------------------------------------------------------------------------------
  // ON SCROLL, UPDATE THE IMAGE AND DESCRIPTION DETAILS
  // const changeSelector = () => {
  //   // if scroll = project number * divided value
  //   if(window.scrollY >= 80 && window.scrollY < 250) {
  //       // setCurrImage(true);
  //     console.log("got to scroll listener event");
  //     setProjectDisplayed(2);
  //   } else {
  //       // setCurrImage(false);
  //     }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', changeSelector)
  // }, []);

  const handleDisplayProject = (index) => {
    var currHoverAllowed = hoverAllowed;
    // console.log("proj: " + projectDisplayed);
    // console.log("hover: " + hoverAllowed);

    if (index > 16) {
      setProjectDisplayed(1);
    } else if (index == 0) {
      setProjectDisplayed(15);
    } else if (index != -1) {
      setProjectDisplayed(index);
      setHoverAllowed(false);
      // console.log("index: " + index);
    } else if (projectDisplayed == index) {
      setProjectDisplayed(-1);
      setHoverAllowed(true);
      // console.log("deselecting");
    } else {
      setHoverAllowed(true);
      // setProjectDisplayed(0);
      // console.log("hover: " + hoverAllowed);
      // console.log("deselecting");
    }
  };

  const togglePage = () => {
    handleDisplayProject(-1);
  };

  // ARROWS TO SWITCH BETWEEN PROJECTS, ANIMATE VERTICALLY

  function ProjTags({ tag, index, tagsLength }) {
    // if (index == tagsLength - 1) {
    //   return (
    //     <ProjectTag>{tag}.</ProjectTag>
    //   );
    // } else {
    //   return <ProjectTag>{tag}. </ProjectTag>;
    // }
      return <ProjectTag>{tag}. <p /></ProjectTag>;
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


  // let project_previews = projects.map((project) => {
  //   if (project.id < 16) {
  //     return (
  //       <WorkImageItem>
  //         <Image>
  //           <img src={"imgs/" + project.imgs[0]} />
  //         </Image>
  //       </WorkImageItem>
  //     )
  //   }
  // });

  // OLD LIST OF PROJECTS
  // let project_names = projects.map((project) => {
  //   // means no content displayed
  //   var zerofilled = ("0" + project.id).slice(-2);

  //   const tagsDisplayed = project.tags.map((tag, index) => (
  //     <ProjTags
  //       tag={tag}
  //       key={tag.id}
  //       index={index}
  //       tagsLength={project.tags.length}
  //     />
  //   ));

  //   let index_str = "proj" + project.id;

  //   let filteredOut = false;

  //   // if (filterType != 0 && project.type != filterType) {
  //   //   filteredOut = true;
  //   // }

  //   if (project.id < 17) {
  //     console.log("filtered out for " + project.id + ": " + filteredOut);
  //     // if (filterType == 0 || filterType == project.type) {
  //       return (
  //         <WorkItem
  //           as={motion.div}
  //           initial="initial"
  //           animate="in"
  //           exit={projectDisplayed === project.id ? "outSelected" : "outOther"}
  //           variants={pageVariants3}
  //           transition={{
  //             type: "tween",
  //             ease: [0.7, 0, 0.13, 1],
  //             duration: 0.8,
  //             delay: project.id * 0.16,
  //           }}
  //           onClick={() => handleDisplayProject(project.id)}
  //           projectDisplayed={projectDisplayed}
  //           projectId={project.id}
  //           filteredOut={false}
  //         >
  //           <WorkContents
  //             to={"/" + project.id + "/works"}
  //             id={"proj" + project.id}
  //             projectType={project.type}
  //             // filter={filterType}
  //             filteredOut={false}
  //             projectDisplayed={projectDisplayed}
  //             projectId={project.id}
  //           >
  //             <WorkIndex>{zerofilled}</WorkIndex>
  //             <WorkName>{project.name}</WorkName>
  //             <TagsContainer>{tagsDisplayed}</TagsContainer>
  //             <TagsDivider />
  //           </WorkContents>
  //           {/* <Image hoverAllowed={hoverAllowed}>
  //             <img src={"imgs/" + project.imgs[0]} />
  //           </Image> */}
  //         </WorkItem>
  //       );
  //     // }
  //   }
  // });


  const proj1 = { name: 'June ggg ONE One GGG One ogg', val: 1, isCS: true, tags: ['UX Design', 'Figma', 'React.JS'], link: ['https://www.junehomes.com'] }
  const proj2 = { name: 'Two', val: 2, isCS: false, tags: ['2UX Design', 'Figma', 'React.JS'], link: [] }
  const proj3 = { name: 'three', val: 3, isCS: false, tags: ['3UX Design', 'Figma', 'React.JS'], link: [] }
  const proj4 = { name: 'four', val: 4, isCS: true, tags: ['4UX Design', 'Figma', 'React.JS'], link: ['https://www.junehomes.com'] }
  const proj5 = { name: 'five', val: 5, isCS: false, tags: ['5UX Design', 'Figma', 'React.JS'], link: [] }
  const proj6 = { name: 'six', val: 6, isCS: false, tags: ['6UX Design', 'Figma', 'React.JS'], link: [] }
  const proj7 = { name: 'seven', val: 7, isCS: true, tags: ['7UX Design', 'Figma', 'React.JS'], link: [] }
  const proj8 = { name: 'eight', val: 8, isCS: false, tags: ['8UX Design', 'Figma', 'React.JS'], link: [] }
  const proj9 = { name: 'nine', val: 9, isCS: false, tags: ['9UX Design', 'Figma', 'React.JS'], link: [] }
  
  const myProjects = [ proj1, proj2, proj3, proj4, proj5, proj6, proj7, proj8, proj9 ];

  const ListContainerRef = useRef();

  let observerOptions = {
    root: ListContainerRef.target,
    rootMargin: '-49% 0px -50% 0px',
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

  useEffect (() => {
      // const observer = new IntersectionObserver((projectsList) => {
      //     console.log("projects list", projectsList);
      //     console.log('root', projectsList.root);
      // }, observerOptions)
      for (var i = 0; i < myRefs.length; i++) { 
          // console.log('curr', myRefs[i].current);
          // console.log('root', root);
          const observer = new IntersectionObserver((projectsList) => {
            if (projectsList[0].isIntersecting) {
              console.log('scroll - current proj index', projectValue);
              setProjectValue(projectsList[0].target.id);
              projectsList[0].target.style.opacity = 1.0;
            } else {
              projectsList[0].target.style.opacity = 0.5;
            }
          }, observerOptions)
          observer.observe(myRefs[i].current);
      }
  }, [])

  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
  }

  const handleClick = (index) => {
    // console.log('proj clicked', index);
    console.log('clicked - current proj index', projectValue);
    myRefs[index].current?.scrollIntoView({ behavior: 'smooth' });
    // await timeout(1000); //for 1 sec delay
    // setProjectValue(index);
  }

  //MAIN PROJECTS LIST
  let projects_list = myProjects.map((project, index) => {

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


  //test projects list
  // const { ref: refName, inView: inView2, entry: entry2 } = useInView({
  //   rootMargin: '-210px'
  // });



  // console.log('current proj index', projectValue);
  // console.log('curr project visit', myProjects[projectValue].link.length);

  let tagsDisplayed = myProjects[projectValue].tags.map((tag, index) => (
    <ProjTags
      tag={tag}
      key={tag.id}
      index={index}
      tagsLength={4}
    />
  ));

  let visit_link = () => {
    if (myProjects[projectValue].link.length == 1) {
      // console.log("got to link");

      return (
        <VisitLink href={myProjects[projectValue].link[0]} target="_blank">
          Visit ↗
        </VisitLink>
      )
    } else {
      return;
    }
  }

  function ProjContent({ project }) {
    if (projectDisplayed == project.id) {
      return (
        <SingleWork
          project={project}
          selected={true}
          toggle={toggleImgZoom}
          imageZoomed={imageZoomed}
        ></SingleWork>
      );
    } else {
      return (
        // <SingleWork project={project} selected={true}></SingleWork>
        <></>
      );
    }
  }

  // let proj_preview = projects.map((project) => {
  //   if ((projectDisplayed + 1) > 18) {
  //     return (
  //       // <NextProj onClick={() => (handleDisplayProject(projectDisplayed + 1))}>
  //         <p>{project.name}</p>
  //       // </NextProj>
  //     );
  //   } else {
  //     return (
  //       <WorkItem filteredOut={true}><WorkName isBg={true} filteredOut={true} oddItem={isOdd(project.id)}>{project.name} </WorkName></WorkItem>
  //       );
  //   }
  // });

  let project_content = projects.map((project) => {
    return <ProjContent project={project} key={project.id} />;
  });

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

  let rightImageSource = "testProjCover" + projectValue + ".png";

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
      {/* <Label as={motion.div} initial="initial"
          animate="in"
          exit="out"
          variants={filtersVariants}
          transition={filtersTransition} id="filters">Filters:</Label> */}
      {/* <WorksContainerMove 
          as={motion.div} initial="initial"
          animate="in"
          exit="out"
          variants={pageVariantsWorks}
          transition={pageTransition}
        > */}

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
      {/* <Divider /> */}

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
        {/* {project_names} */}
        {/* <HitMarker /> */}
        <Marker />
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
            id={"proj1"}
          >
            Details  →
          </Details>
          {visit_link}
        </WorkActions>

        {projects_list}

      </WorkListContainer>

      {/* <WorksContainer id="topWorks" zVal="999">
        {project_previews}
      </WorksContainer> */}
      {/* </WorksContainerMove> */}

      <ContentBg
        // bgFileName={rightImageSource}
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

      {/* <ContentContainer
          as={motion.div} initial={{ x: '-101vw', y: '0' }} 
          animate={hoverAllowed ? { x: '-101vw', y: '-100vh' } : { x: '0', y: '-100vh'}}
          transition={{
            type: "tween",
            ease: [0.7, 0, 0.13, 1],
            duration: 0.9 }} showContent={!hoverAllowed}
          >{project_content}
        </ContentContainer> */}
      {/* <ContentBg isBehind={imageZoomed} as={motion.div} initial={{ x: '100vw' }} 
          animate={hoverAllowed ? { x: '100vw' } : { x: 'calc(94vw - 3.5rem - 1px)' }}
          transition={{ duration: 0.7 }}>
            <AllProjs onClick={() => (handleDisplayProject(-1))}>Close</AllProjs>
            <NextProj onClick={() => (handleDisplayProject(projectDisplayed + 1))}>
              <NextProjLabel>Next Project</NextProjLabel>
            </NextProj>
            <PrevProj onClick={() => (handleDisplayProject(projectDisplayed - 1))}>
              <PrevProjLabel>Previous Project</PrevProjLabel>
            </PrevProj>
        </ContentBg> */}
    </Container>
  );
};

export default connect(({ projects }) => ({ projects }))(Works);
