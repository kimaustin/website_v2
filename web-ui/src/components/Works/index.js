import React, { useState } from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { Link as LinkRouter } from 'react-router-dom';
import SingleWork from "./SingleWork";
import MobileTopButton from "../MobileTopButton";
import {
  Container,
  Background,
  Header,
  Loader,
  NameSort,
  Divider,
  ProjectTag,
  NextProjLabel,
  PrevProjLabel,
  Side,
  Label,
  StartBg,
  FiltersContainer,
  Filter,
  FilterSmall,
  ContentContainer,
  WorkList,
  ProjectItem,
  WorksContainer,
  WorkName,
  WorkName2,
  Image,
  Indicator,
  WorkItem,
  ContentBg,
  TypeSort,
  DateSort,
  WorkDate,
  WorkIndex,
  WorkType,
  Close,
  TagsContainer,
  TestButton,
  NextProj,
  PrevProj,
  AllProjs,
  WorksContainerMove,
  DetailsContainer,
  TagsContainer2,
  Top,
  TopOfWorks,
  WorkContents,
  TagsDivider,
  WorkImageItem,
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
  
  const [filterType, setFilterType] = useState(0);
  const [projectDisplayed, setProjectDisplayed] = useState(0);
  const [hoverAllowed, setHoverAllowed] = useState(true);
  const [imageZoomed, setImageZoomed] = useState(false);

  // const [topVal, setTopVal] = useState("-1px");
  // const [leftVal, setLeftVal] = useState("-1px");

  // 100 - 4.8 = 93.2
  // 93.2 / length = * .7
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

  const handleDisplayProject = (index) => {
    var currHoverAllowed = hoverAllowed;
    // console.log("proj: " + projectDisplayed);
    console.log("hover: " + hoverAllowed);

    if (index > 16) {
      setProjectDisplayed(1);
    } else if (index == 0) {
      setProjectDisplayed(15);
    } else if (index != -1) {
      setProjectDisplayed(index);
      setHoverAllowed(false);
      console.log("index: " + index);
    } else if (projectDisplayed == index) {
      setProjectDisplayed(-1);
      setHoverAllowed(true);
      console.log("deselecting");
    } else {
      setHoverAllowed(true);
      // setProjectDisplayed(0);
      // console.log("hover: " + hoverAllowed);
      console.log("deselecting");
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


  let project_previews = projects.map((project) => {
    if (project.id < 16) {
      return (
        <WorkImageItem>
          <Image>
            <img src={"imgs/" + project.imgs[0]} />
          </Image>
        </WorkImageItem>
      )
    }
  });

  // LIST OF PROJECTS
  let project_names = projects.map((project) => {
    // means no content displayed
    var zerofilled = ("0" + project.id).slice(-2);

    const tagsDisplayed = project.tags.map((tag, index) => (
      <ProjTags
        tag={tag}
        key={tag.id}
        index={index}
        tagsLength={project.tags.length}
      />
    ));

    let index_str = "proj" + project.id;

    let filteredOut = false;

    if (filterType != 0 && project.type != filterType) {
      filteredOut = true;
    }

    if (project.id < 17) {
      console.log("filtered out for " + project.id + ": " + filteredOut);
      // if (filterType == 0 || filterType == project.type) {
        return (
          <WorkItem
            as={motion.div}
            initial="initial"
            animate="in"
            exit={projectDisplayed === project.id ? "outSelected" : "outOther"}
            variants={pageVariants3}
            transition={{
              type: "tween",
              ease: [0.7, 0, 0.13, 1],
              duration: 0.8,
              delay: project.id * 0.16,
            }}
            onClick={() => handleDisplayProject(project.id)}
            projectDisplayed={projectDisplayed}
            projectId={project.id}
            filteredOut={false}
          >
            <WorkContents
              to={"/" + project.id + "/works"}
              id={"proj" + project.id}
              projectType={project.type}
              filter={filterType}
              filteredOut={false}
              projectDisplayed={projectDisplayed}
              projectId={project.id}
            >
              <WorkIndex>{zerofilled}</WorkIndex>
              <WorkName>{project.name}</WorkName>
              <TagsContainer>{tagsDisplayed}</TagsContainer>
              <TagsDivider />
            </WorkContents>
            {/* <Image hoverAllowed={hoverAllowed}>
              <img src={"imgs/" + project.imgs[0]} />
            </Image> */}
          </WorkItem>
        );
      // }
    }
  });

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

  // function NextProjPreview() {

  //   console.log("loprojects: " + projects.length);
  //   // console.log("proj: " + projects[1].name);

  //   // var indexChecked = index - 1;

  //   // if (index > 18) {
  //   //  indexChecked = 1;
  //   // } else if (index == 0) {
  //   //   indexChecked = 18;
  //   // }

  //   if ((projectDisplayed + 1) > 18) {
  //     return (
  //       <p>{projects[0].name}</p>
  //     );
  //   } else {
  //     return (
  //       <p>{projects[projectDisplayed + 1].name}</p>
  //     )
  //   }

  //   // var name = projects[indexChecked].name;

  //   // return (
  //     // <h1>{projects[1].name}</h1>
  //     // <p>{name}</p>
  //     // <p>hi</p>
  //   // );
  // }

  // function PrevProjPreview(index) {
  //   var indexChecked = index;

  //   if (index == 0) {
  //   }

  //   return )
  //   return (
  //     <p>{projects[indexChecked].name}</p>
  //   );
  // }

  let project_content = projects.map((project) => {
    return <ProjContent project={project} key={project.id} />;
  });

  const toggleWithType = (filter) => {
    console.log("filter type: " + filterType);
    if (filterType != filter) {
      setFilterType(filter);
    } else {
      setFilterType(0);
    }
  };

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

  const filtersVariants = {
    initial: {
      y: "-8.5rem",
      // opacity: 0
    },
    in: {
      y: "0vh",
      // opacity: 1
    },
    out: {
      y: "-8.5rem",
      transition: {
          type: "tween",
          ease: [0.7, 0, 0.13, 1],
          duration: 0.85,
      }
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

  //TODO: Fix filters not working
  return (
    <Container
      id="head"
      as={motion.div}
      initial="initial"
      animate="in"
      exit="out"
      // variants={pageVariants2}
      // transition={pageTransition}
    >
      <FiltersContainer 
          as={motion.div} 
          initial="initial"
          animate="in"
          exit="out"
          variants={filtersVariants}
          transition={{
            type: "tween",
            ease: [0.7, 0, 0.13, 1],
            duration: 0.8,
            delay: 7 * 0.12,
          }}
        >
            <Filter 
              as={motion.div} 
              initial="initial"
              animate="in"
              exit="out"
              variants={filtersVariants}
              transition={{
                type: "tween",
                ease: [0.7, 0, 0.13, 1],
                duration: 0.8,
                delay: 7 * 0.12,
              }}
              filterVal={filterType} fType={2} bgColor={'green'} onClick={() => toggleWithType(2)}>SD</Filter>
            <Filter 
              as={motion.div} 
              initial="initial"
              animate="in"
              exit="out"
              variants={filtersVariants}
              transition={{
                type: "tween",
                ease: [0.7, 0, 0.13, 1],
                duration: 0.8,
                delay: 8 * 0.12,
              }}
              filterVal={filterType} fType={1} bgColor={'yellow'} onClick={() => toggleWithType(1)}>GD</Filter>
            <Filter 
              as={motion.div} 
              initial="initial"
              animate="in"
              exit="out"
              variants={filtersVariants}
              transition={{
                type: "tween",
                ease: [0.7, 0, 0.13, 1],
                duration: 0.8,
                delay: 9 * 0.12,
              }}
              filterVal={filterType} fType={3} bgColor={'blue'} onClick={() => toggleWithType(3)}>UX</Filter>
        </FiltersContainer>
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
      <WorksContainer id="topWorks">
        {project_names}
      </WorksContainer>
      {/* <WorksContainer id="topWorks" zVal="999">
        {project_previews}
      </WorksContainer> */}
      {/* </WorksContainerMove> */}
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
