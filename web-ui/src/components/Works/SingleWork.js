import React, { useState, useEffect } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { motion } from "framer-motion";
import { connect } from 'react-redux';
import styled from 'styled-components';
import lax from 'lax.js'
import { Container, Images, PicContainer, Mobile, PicIndex, ImgZoom, ProjectTags, Label, Title, IndexNum, Semester, TitleText, Image, ShortDesc, Class, CardTop, Details, Close, DescLabel, TagsLabel, Tag, DownButton, Work, ExitArea, ImgCloseArea, ZoomedImgsContainer, Labels } from './SingleWorkElements';

var imageToExpIndex = 0;

window.onload = function () {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })

    // Add animation bindings to elements
    lax.addElements('.selector', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 'screenWidth/2', 'screenWidth'],
        ]
      }
    })
  }


const SingleWork = ({ toggle, imageZoomed, project, selected }) => {

    // const isOdd = (index) => {
    //     if ((index % 2) == 0) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    // console.log("Reached Single Work");

    
    const [imgToExpand, setImgToExpand] = useState(0);

    const toggleZoomImg = (val) => {
        // console.log(val);
        console.log("image to expand: " + val);
        setImgToExpand(val);

        imageToExpIndex = val;
        // setTimeout(function(){ alert("Hello"); }, 3000);
        //console.log("image zoom set to: " + imgToExpand);
        console.log("[toggleZoomImg] imageToExpIndex = " + imageToExpIndex);
        {toggle()};
        // if (imgToExpand != 0) {
        //     // <toggle />
        //     setImgToExpand(index);
        //     console.log("image to expand: " + imgToExpand);
        // } else if (imgToExpand == index) {
        //     // <toggle />
        //     setImgToExpand(0);
        // } else {

        // }
    };

    var zerofilled = ('0'+project.id).slice(-2);

    // const handleDisplayProject = (index) => {
    //     var currHoverAllowed = hoverAllowed;
    //     // console.log("proj: " + projectDisplayed);
    //     console.log("hover: " + hoverAllowed);
    //     if (index != 0) {
    //       setProjectDisplayed(index);
    //       setHoverAllowed(false);
    //       console.log("index: " + index);
    //     } else if (projectDisplayed == index) {
    //       setProjectDisplayed(0);
    //       setHoverAllowed(true);
    //       console.log("deselecting");
    //     } else {
    //       setHoverAllowed(true);
    //       // setProjectDisplayed(0);
    //       // console.log("hover: " + hoverAllowed);
    //       console.log("deselecting");
    //     }
    //   };

    function Picture_Displayed({picture, index}) {
        let index_int = index + 1; 
        let index_str = 'pic' + index_int;
        // console.log(index_str);
        const [isSticky, setIsSticky] = useState(false);
        const changeName = () => {
            if(window.scrollY >= '12rem') {
                setIsSticky(true);
                console.log("scroll detect working");
            } else {
                setIsSticky(false);
            }
        };
        useEffect(() => {
            window.addEventListener('scroll', changeName)
        }, []);
        
        var imgID = "#img" + index;
        var zeroFilledImg = ('0'+index).slice(-2);

        let is_last = false;

        console.log("# of imgs: " + project.imgs.length);

        if (project.imgs.length == (1 + index)) {
            is_last = true;
        } 

        if (index == 0) {
            return (
                <></>
            )
        } else {
            return (
                // <PicContainer as={motion.div} initial={{ scale: 1 }} 
                //                 animate={imgToExpand === picture.id ? { scale: 1.5 } : { scale: 1 }}
                //                 transition={{ duration: 0.3 }} onClick={() => (toggleShowInfo(picture.id))} isSticky={isSticky} >
                <PicContainer isSticky={isSticky} onClick={() => {toggleZoomImg(index)}} isLast={is_last}>
                    {/* <PicIndex>{zeroFilledImg}</PicIndex> */}
                    <img src={"/imgs/" + picture} alt={picture} id="project-img"></img>    
                    {/* <img src={"/imgs/" + picture} alt={picture} style={{height: '100%'}} id="project-img"></img>     */}
                </PicContainer>
            );
        }
        
    }

    function ProjTags({tag}) {    
        return (
          <Tag>{tag}.</Tag>
        );
      };

    const tagsDisplayed = project.tags.map((tag, index) => (
        <ProjTags tag={tag} key={tag.id} index={index} />
      ));

    const pictures_displayed = project.imgs.map((picture, index) => (
        <Picture_Displayed picture={picture} key={picture.id} index={index} />
    ));

    const zoomed_img = project.imgs.map((picture, index) => (
        <ZoomedImgs picture={picture} key={picture.id} index={index} />
    ));

    function ZoomedImgs({picture, index}) {
        let index_int = index + 1; 

        //if (index == imgToExpand) {
        if (index == imageToExpIndex) {
            console.log("Reached picking img to zoom, #" + index);
            console.log("[ZoomedImgs] imageToExpIndex = " + imageToExpIndex);

            return (
                // <h1>TEST IMAGE ZOOM</h1>
                <img src={"/imgs/" + picture} alt={picture} style={{objectFit: 'contain', maxWidth: '100%'}}></img>
            )
        } else {
            console.log("rendering no zoomed image");
            return (
                <></>
            )
        }    
    };

    const imgElement = document.getElementById('img2');
    // titleElement.scrollIntoView({ behavior: 'smooth' });

    if (selected) {
        return (
            <Container>
                {/* <ExitArea onClick={toggle}/> */}
                {/* <ImgZoom as={motion.div} initial={{ x: '20vw', y: '100vh', opacity: 0 }} 
                    animate={setImgToExpand != 0 ? { x: '20vw', y: '0', opacity: 0 } : { x: '20vw', y: '100vh', opacity: 1 }}
                    transition={{
                        type: "tween",
                        ease: [0.7, 0, 0.13, 1],
                        duration: 0.7
                    }}>{zoomed_img}</ImgZoom> */}
                {/* <ImgZoom>{zoomed_img}</ImgZoom> */}
                <ImgZoom as={motion.div} initial={{ opacity: 0, scale: 1, zIndex: -1 }}
                    animate={!imageZoomed ? { opacity: 0, zIndex: -1 } : { opacity: 1, zIndex: 999}}
                    transition={{
                        type: "tween",
                        ease: [0.7, 0, 0.13, 1],
                        duration: 0.25
                    }}>
                    <ZoomedImgsContainer onClick={() => {toggleZoomImg(0)}}>{zoomed_img}</ZoomedImgsContainer>
                    <ImgCloseArea onClick={() => {toggleZoomImg(0)}}></ImgCloseArea>
                </ImgZoom>
                {/* <DownButton onClick={toggle}>down</DownButton> */}
                <Details>
                        <TitleText>{project.name}</TitleText>
                        <Labels>
                            <Label>{project.semester}</Label>
                            <Label>{project.class}</Label>
                        </Labels>
                </Details>
                <Work>
                    {/* <IndexNum>{zerofilled}</IndexNum> */}
                    {/* <Details>
                        
                        <TitleText>{project.name}</TitleText>
                    </Details> */}
                    <ShortDesc>
                            <DescLabel>OVERVIEW</DescLabel>
                            {project.desc}
                    </ShortDesc>
                    <ProjectTags>
                            <TagsLabel>TAGS</TagsLabel>
                            {tagsDisplayed}
                    </ProjectTags>
                    <Images>
                        {pictures_displayed}
                    </Images>
                </Work>
                <Mobile>
                    <ShortDesc>
                        <DescLabel>OVERVIEW</DescLabel>
                        {project.desc}
                    </ShortDesc>
                    <ProjectTags>
                        <TagsLabel>TAGS</TagsLabel>
                        {tagsDisplayed} 
                    </ProjectTags>      
                    {pictures_displayed}
                </Mobile>
            </Container>
        );
    } else {
        return (
            <></>
        );
    };
};

export default SingleWork;