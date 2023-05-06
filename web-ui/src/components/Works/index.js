import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useInView, inView, InView } from 'react-intersection-observer';
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { Link as LinkRouter, useHistory, useNavigate, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import {
  Container,
  Marker,
  MarkerL,
  MarkerR,
  HitMarker,
  MobileWorkItem,
  DeskWorkItem,
  WorkArrow,
  ClickableArea,
  ProjectTag,
  ContentBg,
  WorkListContainer,
  DetailsExpanded,
  WorkName,
  WorkDesc,
  VisitLink,
  Fake,
  TextHover,
  ImageHover,
  Indicator,
  TopLine,
  IndicatorLong,
  WorkItem,
  WorkTitle,
  WorkClass,
  BottomWork,
  WorkIndex,
  TagsContainer,
  WorkContents,
  TagsDivider,
  WorkPreview,
  Details,
  WorkImageContainer,
  WorkImage,
  BgBlur,
  WorkList,
  CaseStudy,
  Divider
} from "./WorkElements";

// Scrollbar.init(document.querySelector('#my-scrollbar'), options);


const Works = ({ projects, toggleLight }) => {

  const [projectDisplayed, setProjectDisplayed] = useState(0);
  const [hoverAllowed, setHoverAllowed] = useState(true);
  const [imageZoomed, setImageZoomed] = useState(false);
  // const [animateProject, setAnimateProject] = useState(999);

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

  // function ProjTags({ tag, index, tagsLength }) {
  //   // if (index == tagsLength - 1) {
  //   //   return (
  //   //     <ProjectTag>{tag}.</ProjectTag>
  //   //   );
  //   // } else {
  //   //   return <ProjectTag>{tag}. </ProjectTag>;
  //   // }
  //     return <ProjectTag>{tag}.<br /></ProjectTag>;
  // }

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

  const ListContainerRef = useRef();

  let observerOptions = {
    root: ListContainerRef.target,
    rootMargin: '-48% 0px -51% 0px',
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
  // myRefs.push(useRef());

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
              // console.log('scroll - current proj index', projectValue);
              setProjectValue(projectsList[0].target.id);
              // setAnimateProject(i);
              projectsList[0].target.style.opacity = 1.0;
              // projectsList[0].target.style.width = "95%";
              // projectsList[0].target.style.marginLeft = "5%";
              // projectsList[0].target.style.color = 'white';
            } else {
              // setAnimateProject(999);
              // projectsList[0].target.style.color = '#B7B7B7';
              projectsList[0].target.style.opacity = 0.4;
              // projectsList[0].target.style.width = "100%";
              // projectsList[0].target.style.marginLeft = 0;
            }
          }, observerOptions)
          observer.observe(myRefs[i].current);
      }
  }, [])

  const historyPage = useHistory();

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const loader = async (index) => {
    // myRefs[index].current?.scrollIntoView({ behavior: 'smooth' });

    // return redirect("/" + projectValue + "/works");
  };

  const handleMobileClick = async event => {
    // console.log('before');
    myRefs[event].current?.scrollIntoView({ behavior: 'smooth' });
    // setProjectValue(event);

    await delay(600);
  
    historyPage.push("/" + event + "/works");
    // console.log('after');
  };
  
  const handleClick = (index) => {
    // console.log('proj clicked', index);
    // console.log('clicked - current proj index', projectValue);
    myRefs[index].current?.scrollIntoView({ behavior: 'smooth' });
    // navigate("/" + projectValue + "/works");

    // await timeout(1000); //for 1 sec delay
    // setProjectValue(index);
  }
  

  //MAIN PROJECTS LIST
  let projects_list = projects.map((project, index) => {

    let project_tags = project.tags.map((tag, index) => (
      <ProjectTag>{tag}</ProjectTag>
    ));

    let height_varPreview = "calc(120px + " + ((index) * (90 / (projects.length + 3))) + "vh)";
    
    if (project.class_short == "June") {
      // console.log('comparison', projectValue, index);
      return (
        <WorkItem id={index} ref={myRefs[index]} currProj={projectValue} thisProj={index}
          // as={motion.div}
          // initial="initial"
          // animate="in"
          // exit={projectValue === index ? "outSelected" : "outOther"}
          // variants={pageVariants3}
          // transition={{
          //   type: "tween",
          //   ease: [0.7, 0, 0.13, 1],
          //   duration: 0.8,
          //   delay: index * 0.16,
          // }}
        >
          <DeskWorkItem onClick={()=> handleClick(index)}>
            <TopLine>
                <CaseStudy>CASE STUDY</CaseStudy>
                <TagsContainer>
                  {project_tags}
                </TagsContainer>
              </TopLine>
              <WorkTitle>{project.name}</WorkTitle>
          </DeskWorkItem>
          <MobileWorkItem onClick={()=> handleMobileClick(index)}>
            <TopLine>
              <CaseStudy>CASE STUDY</CaseStudy>
              <TagsContainer>
                {project_tags}
              </TagsContainer>
            </TopLine>
            <WorkTitle>{project.name}</WorkTitle>
          </MobileWorkItem>
        </WorkItem>
      )
    } else {
      // console.log('comparison', projectValue, index);
      return (
        <WorkItem id={index} ref={myRefs[index]} onClick={()=> handleClick(index)} currProj={projectValue} thisProj={index}>
          <DeskWorkItem onClick={()=> handleClick(index)}>
            <TopLine>
                <TagsContainer>
                  {project_tags}
                </TagsContainer>
              </TopLine>
              <WorkTitle>{project.name}</WorkTitle>
          </DeskWorkItem>
          <MobileWorkItem onClick={()=> handleMobileClick(index)}>
            <TopLine>
              <TagsContainer>
                {project_tags}
              </TagsContainer>
            </TopLine>
            <WorkTitle>{project.name}</WorkTitle>
          </MobileWorkItem>
        </WorkItem>
      )
    }
  });

  //test projects list
  // const { ref: refName, inView: inView2, entry: entry2 } = useInView({
  //   rootMargin: '-210px'
  // });

  // console.log('current proj index', projectValue);
  // console.log('curr project visit', myProjects[projectValue].link.length);

  // let tagsDisplayed = projects[projectValue].tags.map((tag, index) => (
  //   <ProjTags
  //     tag={tag}
  //     key={tag.id}
  //     index={index}
  //     // tagsLength={4}
  //   />
  // ));

  // let visit_link = () => {
  //   if (projects[projectValue].link.length > 0) {
  //     // console.log("got to link");
  //     return (
  //       <VisitLink href={projects[projectValue].link[0]} target="_blank">
  //         Visit ↗
  //       </VisitLink>
  //     )
  //   } else {
  //     return (
  //       <></>
  //     );
  //   }
  // }


  // function ProjContent({ project }) {
  //   if (projectDisplayed == project.id) {
  //     return (
  //       <SingleWork
  //         project={project}
  //         selected={true}
  //         toggle={toggleImgZoom}
  //         imageZoomed={imageZoomed}
  //       ></SingleWork>
  //     );
  //   } else {
  //     return (
  //       // <SingleWork project={project} selected={true}></SingleWork>
  //       <></>
  //     );
  //   }
  // }

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

  // let project_content = projects.map((project) => {
  //   return <ProjContent project={project} key={project.id} />;
  // });


  // console.log(window.screen.height);

  let rightImageSource = "imgs/" + projects[projectValue].imgs[0];
  // let rightImageSource = projects[projectValue].imgs[0];
  let height_var = "calc(122px + " + ((projectValue) * (88 / (projects.length + 3))) + "vh)";
  let mobile_height_var = "calc(134px + " + ((projectValue) * (54 / (projects.length + 4))) + "vh)";

  //TODO: Fix filters not working
  return (
    <Container 
      // as={motion.div}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0, transition: {
      //   type: "tween",
      //   ease: [0.7, 0, 0.13, 1],
      //   duration: 0.2,
      // } }}
      // transition={{
      //     type: "tween",
      //     ease: [0.7, 0, 0.13, 1],
      //     duration: 0.5,
      // }}
    >
      {/* <ThemeProvider theme={theme}> */}
        <Divider
           as={motion.div}
           initial={{ y: '-100vh' }}
           animate={{ y: '0' }}
           exit={{ y: '-100vh', transition: {
             type: "tween",
             ease: [0.7, 0, 0.13, 1],
             duration: 0.2,
           } }}
           transition={{
               type: "tween",
               ease: [0.7, 0, 0.13, 1],
               duration: 0.6,
              //  delay: 0.9
           }}
        />
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

      <WorkListContainer id="topWorks"
        ref={ListContainerRef}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: {
          type: "tween",
          ease: [0.7, 0, 0.13, 1],
          duration: 0.2,
        } }}
        transition={{
            type: "tween",
            ease: [0.7, 0, 0.13, 1],
            duration: 0.5,
            delay: 0.5
        }}
      >
        {/* {project_names} */}
        {/* <HitMarker /> */}
        <Marker />
        <MarkerL />
        <MarkerR />
        {projects_list}
      </WorkListContainer>

      <WorkPreview
        heightVar={height_var}
        mobileHVar={mobile_height_var}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: {
              type: "tween",
              ease: [0.7, 0, 0.13, 1],
              duration: 0.1
          } }}
        transition={{
            type: "tween",
            ease: [0.7, 0, 0.13, 1],
            duration: 0.2,
            delay: 0.55
        }}
        >
          <img src={rightImageSource}/>
          <WorkName>{projects[projectValue].class}</WorkName>
          <WorkDesc>{projects[projectValue].semester}</WorkDesc>
      </WorkPreview>
      {/* <WorksContainer id="topWorks" zVal="999">
        {project_previews}
      </WorksContainer> */}
      {/* </WorksContainerMove> */}

      <ContentBg
        // bgFileName={rightImageSource}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: {
              type: "tween",
              ease: [0.7, 0, 0.13, 1],
              duration: 0.2
        } }}
        transition={{
          type: "tween",
          ease: [0.7, 0, 0.13, 1],
          duration: .4,
        }}
      >
        <img src={rightImageSource}/>
        <BgBlur />
      </ContentBg>

      <ClickableArea
        to={"/" + projectValue + "/works"}
        id={"proj" + projectValue}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: {
              type: "tween",
              ease: [0.7, 0, 0.13, 1],
              duration: 0.3
          } }}
        transition={{
            type: "tween",
            ease: [0.7, 0, 0.13, 1],
            duration: 0.8,
            delay: 1.2
        }}
      >
        <Details
          to={"/" + projectValue + "/works"}
          id={"proj" + projectValue}
        >
          View Details
        </Details>
      </ClickableArea>

      {/* <ClickableArea>
        {projects[projectValue].name}
      </ClickableArea> */}

      <WorkImageContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: {
            type: "tween",
            ease: [0.7, 0, 0.13, 1],
            duration: 0.3
          }}}
        transition={{
            type: "tween",
            ease: [0.7, 0, 0.13, 1],
            duration: 0.6,
        }}>
        <WorkImage
          as={motion.div}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1}}
          exit={{ opacity: 0, scale: 0.99, transition: {
                type: "tween",
                ease: [0.7, 0, 0.13, 1],
                duration: 0.2,
            } }}
          transition={{
              type: "tween",
              ease: [0.7, 0, 0.13, 1],
              duration: 0.7,
              delay: 0.5,
          }}
        >
          <img src={rightImageSource}/>
          {/* <img src={"testProjCover" + projectValue + ".png"}/> */}
        </WorkImage>
      </WorkImageContainer>

    </Container>
  );
};

export default withRouter(connect(({ projects }) => ({ projects }))(Works));