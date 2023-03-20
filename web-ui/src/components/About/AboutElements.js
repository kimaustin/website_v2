import styled from 'styled-components';
// import { Link as LinkRouter } from 'react-router-dom';

// export const AboutContainer = styled.div`
//     z-index: 999;
//     /* display: none; */
//     /* display: ${({ showInfo }) => (showInfo ? 'block' : 'none')}; */
//     width: 32.5vw;
//     height: 101vh;
//     background: white;
// `

export const Container = styled.div`
    z-index: 998;
    /* background: #201D17; */
    /* background: #FDFEF5; */
    /* color: #FDFEF5; */
    /* color: #201D17; */
    /* display: ${({ showInfo }) => (showInfo ? 'block' : 'none')}; */
    display: block;
    position: fixed;
    overflow: hidden;
    opacity: 1;

    left: 0;
    top: 0;

    /* height: 100vh; */
    /* width: 15vw; */
    /* width: 100%;
    height: 100%; */
    /* left: 25rem; */
    /* width: calc(25vw + .5px); */
    /* top: 1.75rem; */
    height: 100vh;
    width: 100vw;
    /* background: #FDFEF5; */
    /* border-bottom: 1px solid black; */
    /* border-right: 1px solid #201D17; */
    /* border-left: 1px solid #201D17; */
    /* border-radius: 0 6rem 6rem 0; */
    text-shadow: 0 0 1px #000;
    filter: blur(-2x);
    -webkit-filter: blur(-1.5px);
    /* cursor: url("/imgs/c_main.svg"), auto; */
  cursor: crosshair;

`

// export const Close = styled.p`
//     z-index: 999;
//     position: fixed;
//     font-family: 'SpaceMono';
//     /* font-weight: lighter; */
//     width: 100%;
//     padding-left: 1.5rem;
//     border-top: 1px solid #201D17;
//     /* left: 1.4rem; */
//     bottom: 0;
//     padding-bottom: 3rem;
//     padding-top: .75rem;
//     /* top: 50vh; */
//     color: #201D17;
//     /* text-orientation: mixed; */
//     /* writing-mode: vertical-rl; */
//     /* cursor: pointer; */
//     font-size: 2rem;
//     /* opacity: 1; */
//     /* transition: 0.1s all ease-in-out; */
//     cursor: url("/imgs/c_close.svg"), auto;
//     transition: 0.15s all ease-in-out;

//     &:hover {
//         color: #FDFEF5;
//         background: #201D17;
//     }
// `

export const Close = styled.p`
    z-index: 999;
    font-family: 'SpaceMono';
    /* font-weight: lighter; */
    /* width: 100%; */
    padding-left: 1rem;
    border-top: 1px solid #201D17;
    /* left: 1.4rem; */
    bottom: 0;
    padding-bottom: 3.85rem;
    padding-top: .35rem;
    /* top: 50vh; */
    color: #201D17;
    /* text-orientation: mixed; */
    /* writing-mode: vertical-rl; */
    /* cursor: pointer; */
    font-size: 1.6rem;
    /* font-weight: bold; */
    /* opacity: 1; */
    /* transition: 0.1s all ease-in-out; */
    cursor: url("/imgs/c_close.svg"), auto;
    /* transition: 0.15s all ease-in-out; */

    &:hover {
        color: #FDFEF5;
        background: #201D17;
    }
`

export const Side = styled.div`
    z-index: 999;
    height: 7.5vw;
    width: 15.7vw;
    position: fixed;
    font-size: 8vw;
    letter-spacing: -.3vw;
    bottom: 7.5vh;
    left: 88.25vw;
    /* border: 1px solid black; */
    transform: rotate(90deg);

    @media screen and (max-width: 768px) {
        display: none;
    }    
`

export const Content = styled.div`
    /* margin-left: 51vw; */
    position: fixed;
    left: calc(25.15vw + 6.35rem);
    top: 3vh;
    width: 28vw;

    z-index: 999;
    text-align: left;

    @media screen and (max-height: 640px) {
        display: none;
    }
`

export const Desc = styled.p`
    /* color: black; */
    font-family: 'JejuMyeongjo';
    font-size: 1rem;
    /* letter-spacing: -.03rem; */
    line-height: 130%;
    padding-bottom: 1.5rem;
`

export const Styled1 = styled.span`
/* display: inline; */
    overflow: hidden;
    font-family: 'CG Medium Italic';
    /* color: black; */
    font-size: 1rem;
    /* letter-spacing: -.1rem; */
    /* line-height: 130%; */
`

export const Styled2 = styled.p`
    position: fixed;
    bottom: 2.525rem;
    /* left: calc(7.15vw + 3rem); */
    /* overflow: hidden; */
    font-family: "JejuMyeongjo";
    font-size: 1rem;
    width: calc(31.5vw - 6rem);
    right: calc(7.15vw + 3.55rem);

`

export const Name = styled.div`
    /* margin-left: -1.48rem; */
    /* margin-top: 1.5rem; */
    position: fixed;
    /* left: calc(7.15vw + 3rem); */
    padding-left: calc(3.5vw + 3rem + 3.35vw);
    top: 3vh;

    display: inline;
    line-height: 100%;

    font-size: 2.7vw;
    font-family: 'CG LI';
    letter-spacing: -.03vw;

    /* transform: skew(-12deg); */
    /* color: black; */
    /* writing-mode: vertical-rl; */
`

export const Resume = styled.div`
    overflow: hidden;
    /* position: absolute; */
    width: 100%;
    /* height: ; */
    /* left: 0.5rem; */

    /* padding-left: .85rem; */
    /* padding-top: -3rem; */
    padding-right: .85rem;
    font-size: 1rem;
    /* cursor: pointer; */
    border-bottom: 1.5px solid white;

    &:hover {
        background: black;
        color: white;        
        /* transition: 0.2s all ease-in-out; */
    }
`

export const ProfileContainer = styled.div`
    position: fixed;
    top: 3vh;
    right: calc(7.15vw + 3.55rem);

    /* border: 1px solid blue; */

    display: block;
    width: calc(59.85vw - 20.3rem);
    width: calc(31.5vw - 6rem);
    height: 17.5%;

    /* width: 100%; */
    overflow: hidden;

    img {
        /* display: block; */
        object-fit: cover;
        width: 100%;
        transform: translateY(-32%);
    }
`

export const ResumeDownload = styled.div`
    /* height: 100%; */
    display: flex;
    align-items: center;
    float: none;
    /* width: fill; */
    text-decoration: none;
    /* padding-left: .85rem; */
    /* padding-right: .85rem; */
    padding: .85rem;
    margin-top: 1rem;
    border: 1px solid black;
    border-radius: 70px;
    font-size: 1.5rem;
    /* cursor: pointer; */

    &:hover {
        background: black;
        color: white;        
        /* transition: 0.2s all ease-in-out; */
    }
`

export const ImageSide = styled.div` 
    overflow: hidden;
    position: absolute;
    display: block;
    width: 40vw;
    z-index: 0;
    /* left: 51vw; */
    left: 6rem;
    bottom: -80vh;
    opacity: 1;
    /* transition: 0.5s all ease-in-out; */
    border: 3px solid black;

    /* &:hover {
        display: none;
    } */
    
    ${Resume}:hover & {
       bottom: 2rem;
    }

    @media screen and (max-width: 768px) {
        /* width: 96vw; */
        width: 40vw;
        height: 40vw;
        left: 0.5rem;
    }
`

export const Links = styled.div`
    position: fixed;
    /* padding-left: 2rem; */
    bottom: 2.5rem;
    width: 39%;
    /* right: 1.8rem; */
    /* margin-right: 1.8rem; */
    margin-top: 2rem;
    /* text-align: left; */
    /* border: 1px solid blue; */

    text-align: left;
    /* padding-left: 1rem; */
    overflow: hidden;
    z-index: 997;
`

export const Social = styled.p`
    /* display: list-item; */
    z-index: 990;
    width: auto;
    /* width: 100%; */
    /* border-top: 1px solid #201D17; */
    /* margin-bottom: .1rem; */
    cursor: alias;
    /* cursor: url("/imgs/c_main.svg"), auto; */
    
    /* left: 0; */
    /* padding-right: .85rem; */
    /* width: 15rem; */
    /* height: 3.5rem; */

    overflow: hidden;

    /* margin-left: -.30rem; */
    /* padding-left: 1rem; */
    /* padding-right: 1.4rem; */
    /* padding-top: .5rem; */
    padding-bottom: .325rem;
    /* border: 1px solid black; */
    /* border-radius: 120px; */
    font-family: 'CG Italic';
    font-family: 'SpaceMono';
    font-family: 'JejuMyeongjo';
    font-size: 1rem;
    letter-spacing: -.03rem;


    color: #201D17;
    text-decoration: none;

    transition: 0.1s all ease-in-out;

    &:hover {
        /* transform: skew(12deg); */
        opacity: 0.5;  
    }

`