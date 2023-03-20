import styled from 'styled-components';
import { keyframes } from "styled-components";
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Container = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    overflow: hidden;

    background: #FFFDFA;

    text-align: center;
    justify-content: center;
    align-items: center;

    cursor: url("../imgs/c_main.svg"), crosshair;
    cursor: crosshair;

    img {
        /* max-height: 35vh; */
        position: absolute;
        left: 42.5%;
        top: 50%;
        transform: translate(0, -52%);
        width: 15vw;

        max-height: 37vh;
        /* max-width: 17.5vw; */
        /* width: 18vw; */
        object-fit: cover;
        /* border: 1px solid #201D17; */
    }

`;

export const Header = styled.p`
    z-index: 999;
    display: block;
    position: relative;
    color: #201D17;

    font-size: 14vw;
    font-family: "CG LI";
    font-kerning: auto;
    letter-spacing: -.4vw;

    text-align: center;
    justify-content: center;
    align-items: center;

    position: absolute;
    left: 0;
    top: calc(50% - 23.2vw);
    transform: translate(0, -50%);
    width: 100vw;

    /* padding-bottom: 12vw; */

`

export const MainImg = styled.div`
    /* position: absolute; */
    /* top: 2.5rem; */
    /* left: 0; */
    /* left: calc(7.15vw - 3.75rem + 3rem); */

    /* position: absolute; */
    /* left: 0; */
    /* top: 0; */
    /* left: 50%;
    top: 50%;
    transform: translate(0, -50%); */
    display: block;
    width: 17.5vw;
    height: 35vh;

    justify-content: center;
    align-items: center;
    text-align: center;

    img {
        /* max-height: 35vh; */
        width: 100%;
        /* max-width: 17.5vw; */
        /* width: 18vw; */
        object-fit: cover;
        /* border: 1px solid #201D17; */
    }
`

export const MainDesc = styled.div`
    /* width: 23%; */
    color: #201D17;

    font-size: 3vh;
    /* font-size: 2vw; */
    font-family: "JejuMyeongjo";
    letter-spacing: -.03rem;
    line-height: 108%;

    padding-bottom: 2rem;
    /* position: absolute;
    top: 50%;
    transform: translate(0, -50%); */

    /* 2.59 rem */
    position: absolute;
    left: 0;
    top: calc(50% + 18vh);
    /* top: calc(50% - 1.295rem); */
    transform: translate(0, -50%);
    width: 100vw;

    /* padding-top: 10.1vw; */
`

export const MainBio = styled.div`
    position: absolute;
    z-index: 999;

    /* width: calc(100vw - 3.5rem); */
    /* width: 100%; */
    /* top: 2.5rem; */
    /* top: 37vh; */
    /* left: calc(7.15vw - 3.75rem + 3rem + 32.5vw + 2rem); */
    /* height: calc(100vw - 5rem); */
    /* height: calc(66vh); */
    height: 100vh;

    text-align: left;
    justify-content: center;
    align-items: center;
    color: #201D17;
    /* border-bottom: 1px solid #201D17 50%; */
    /* border-left: 1px solid #201D17; */
    /* border-top: 1px solid #201D17 50%; */
    /* overflow-y: hidden; */
    /* overflow-x: hidden; */

    /* top: -1px; */
    /* left: 3.5; */
    /* top: 1.75rem; */
    /* top: 2rem; */
    /* position: absolute; */
    /* left: 50%; */
    /* top: 50%; */
    /* transform: translate(0, -50%); */

    /* padding-top: 1.2rem; */
    /* padding-left: 1.75rem; */
    /* padding-left: 50%; */
    /* padding-bottom: 1.8rem; */
    /* padding-bottom: 50%; */
    /* padding-right: 2rem; */
    border: 1px solid blue;

    @media screen and (max-width: 811px) {
        overflow-y: hidden;
        overflow-x: hidden;
        width: 100%;
        left: 0;
        height: 88%;
        /* padding-top: 5.5vh; */
    }
`;

export const ButtonContainer = styled.div`
    /* position: fixed;
    width: 12.5rem;
    left: calc(7.15vw - 3.75rem + 3rem + 32.5vw + 2.1rem);
    bottom: 2.5rem;
    z-index: 999; */

    position: fixed;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;

    @media screen and (max-width: 811px) {
        /* padding-left: 2%; */
        width: 39%;
        left: 1rem;
        /* right: 2%; */
        bottom: 5.25%;
    }
`

export const DownButton = styled(LinkRouter)`
    /* position: absolute; */
    position: relative;
    /* left: 0; */
    /* top: 0; */
    /* width: 100; */
    /* bottom: 42vh; */
    /* margin-top: 2rem; */

    padding-left: .95rem;
    padding-top: .45rem;
    padding-right: .95rem;
    padding-bottom: .5rem;

    font-size: 1.7vh;
    font-family: 'JejuMyeongjo';
    /* letter-spacing: -.01rem; */
    /* border-bottom: 1px solid #201D17; */
    text-transform: uppercase;
    text-decoration: none;

    /* border: 1px solid blue; */

    text-align: center;
    justify-content: center;
    align-items: center;

    opacity: 1;
    transition: .15s all ease-in-out;
    /* background: #FFFDFA; */
    color: #201D17;

    position: absolute;
    /* left: 0; */
    top: calc(60% + 21vh);
    left: 43vw;
    /* top: 100%; */
    /* top: calc(50% + 18%); */
    /* transform: translate(0, -50%); */
    /* width: 100vw; */
    width: 14vw;

    cursor: pointer;
    
    &:hover {
        /* color: #FDFEF5;
        background: #201D17; */
        /* transform: skew(-2deg); */
        transform: rotateZ(10deg);
        opacity: 0.5;
    }

    @media screen and (max-width: 811px) {
        /* width: 30%; */
        /* padding-left: 2.5%; */
        /* left: 65.5%; */
        /* bottom: 8%; */

        letter-spacing: -.035rem;
        font-size: 1rem;
    }
`;

export const lilMove = styled.p`

    transition: 0.2s all ease-in-out;

    ${DownButton}:hover & {
        transform: translateX(1rem);
        padding-left: 1rem;
    }

    &:hover {
        padding-left: 1rem;
    }
`

export const Divider = styled.div`  
    z-index: 999;
    position: fixed;
    border-left: 1px solid #201D17;
    left: 0;
    top: 0;
    /* left:  calc(50vw - 2.65rem); */
    height: 100%;
    width: 1rem;
    background: #FDFEF5;

    @media screen and (max-width: 811px) {
        display: none;
        opacity: 0;
    }
`

export const Divider2 = styled.div`  
    position: fixed;
    border-top: 1px solid #201D17;
    left: calc(50% - 1.25rem);
    top: 50%;
    width: 100%;
`

export const SelectedListContainer = styled.div`
    position: fixed;
    display: grid;
    top: calc(50% - 5px);
    left: 0;
    width: calc(50% + .25rem);
    height: calc(50% + 10px);
    /* height: 100%; */
`

export const SelectedWorks = styled.div`
    z-index: 998;   
    position: fixed;
    display: grid;
    /* left: calc(50% - 1.25rem); */
    /* left: -1px; */
    left: 0px;
    top: 0;
    /* left: calc(3.5rem - 1px); */
    /* top: calc(50% - 5px); */
    height: calc(50% + 10px);
    /* height: calc(50% - 1.25em); */
    /* width: calc(50% - 3.1rem); */
    width: calc(100vw - 7rem);
    height: 100vh;
    padding-bottom: 1rem;
    /* background: #201D17; */
    /* padding-right: -.5rem; */

    /* border-left: 1px solid #201D17; */
    /* border: 1px solid #201D17; */

    /* grid-template-columns: 1fr; */
    /* grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; */
    overflow-y: scroll;
`

export const SelectedLabel = styled.div`
    position: fixed;
    /* left: calc(3.5rem - 1px); */
    left: -1px;
    top: 0;
    /* left: calc(50% - 1.25rem); */
    /* left: calc(50%); */
    /* left: calc(0); */
    top: calc(50vh - 3.5rem - 1px);
    width: calc(50% - 3.1rem);
    /* width: 100%; */
    height: 3.5rem;
    font-size: 1rem;
    font-family: 'SpaceMono';
    padding-left: 1.5rem;
    padding-top: 1.25vh;
    border-top: 1px solid #201D17;
    border-bottom: 1px solid #201D17;
    color: #FDFEF5;
    background: #201D17;
`

export const WorkItem = styled.div`
    font-family: 'SpaceMono';
    font-size: 2.25rem;
    /* width: calc(100% - 6.75vh); */
    text-decoration: none;
    /* padding-left: 2.15rem; */
    /* padding-top: 1.25vh; */
    /* width: calc(50% + .25rem); */
    width: 100%;

    height: auto;
    /* height: 5rem; */
    /* padding-bottom: 5rem; */
    border-bottom: 1px solid #201D17;
    border-right: 1px solid #201D17;
    /* background: yellow; */
    color: #201D17;

    /* cursor: url("../imgs/c_right.svg"), crosshair; */
    cursor: crosshair;

    &:hover {
        color: #FDFEF5;
        background: #201D17;
    }
`

export const ItemIndex = styled.div`
    position: absolute;
    /* display: flex; */
    right: 0;
    /* margin-top: -10rem; */
    /* top: 0; */
    /* display: inline; */
    /* color: #FDFEF5; */
    /* background: #201D17; */
    height: 100%;
    /* text-align: right; */
    width: 5.25rem;
    padding-left: 1.45rem;
    font-family: 'SpaceMono';
    /* padding-top: .7rem; */
`

export const ItemDetail = styled(LinkRouter)`
    height: 5rem;
    /* width: 65%; */
    /* border-bottom: 1px solid #201D17; */
    /* display: block; */
    /* height: 100%; */
    position: absolute;
    /* cursor: url("../imgs/c_right.svg"), crosshair; */
    cursor: crosshair;

    /* margin-left: 5.5rem; */
    padding-left: 1.2rem;
    padding-bottom: -1rem;
    padding-top: 2.5vh;
    font-family: 'SharpGrotesk';
    font-size: 1.6rem;
    text-decoration: none;
    color: #201D17;
    background: #FDFEF5;


/* 
    &:hover {
        color: #FDFEF5;
        background: #201D17;
    } */

    ${WorkItem}:hover & {
        background: #201D17;
        color: #FDFEF5;
    }
`


export const Styled = styled.span`
    display: inline;
    /* font-family: 'CG Italic'; */
    font-size: 20vh;
    /* line-height: 180%; */
    padding-left: 1.75rem;
    padding-top: 1.2rem;
    padding-bottom: 1.8rem;
    padding-right: 2rem;

`

export const BasicTxt1 = styled.p`
    z-index: 1;
    padding-left: 2rem;
    padding-right: 2.25rem;
    padding-top: 1.25rem;
    padding-bottom: 1.5rem;
    /* width: calc(50% + .25rem); */
    width: calc(50vw - 2rem);
    height: calc(100%);
    /* height: calc(50vh - 3.5rem - 1px); */
    overflow-y: scroll;
    overflow-x: hidden;

    font-family: 'SharpGrotesk';
    font-size: 9.5vh;
    font-size: 6.25vh;
    letter-spacing: -.3vh;
    font-kerning: auto;
    line-height: 110%;

    /* border-right: 1px solid #201D17; */
    /* border-bottom: 1px solid #201D17; */

    @media screen and (max-width: 811px) {
        display: none;
        /* margin-bottom: 2rem; */
    }
`

export const BasicTxt2 = styled.p`
        z-index: 1;
        padding-left: 2rem;
        padding-right: 2.25rem;
        padding-top: 1.25rem;
        padding-bottom: 1.5rem;
        /* width: calc(50% + .25rem); */
        width: calc(50vw - 2rem);
        height: calc(100%);
        /* height: calc(50vh - 3.5rem - 1px); */
        overflow-y: scroll;
        overflow-x: hidden;

        font-family: 'SharpGrotesk';
        font-size: 9.5vh;
        font-size: 6.25vh;
        letter-spacing: -.3vh;
        font-kerning: auto;
        line-height: 110%;
        display: none;

    /* border-right: 1px solid #201D17; */
    /* border-bottom: 1px solid #201D17; */

    @media screen and (max-width: 811px) {
        display: block;
        width: calc(100vw + 1rem);
        padding-right: 2.5rem;
        padding-top: 2rem;
        padding-left: 1rem;
        letter-spacing: -.25vh;
        height: 88vh;
        /* height: 50%; */
        font-size: 8.5vw;
        /* margin-bottom: 2rem; */
    }
`

export const TypeHover = styled.p`
    display: inline-flex;
    z-index: 3;
    /* transition: .15s all ease-in-out; */
    color: #201D17;

    /* background-image: linear-gradient(to right, black 0, black 100%); */
    /* background-position: 0 0 -0.1em; */
    /* background-size: ${({selected}) => selected ? '100% 100%;' : '0 100%'}; */
    /* background-position: 0 1.11em; */
    /* background-size: 0 100%; */
    /* background-repeat: no-repeat; */
    transition: background .1s;

    &:hover {
        /* transform: skew(8deg); */
        /* outline: 1px solid #201D17; */
        /* 
        opacity: ${({ isBg }) => (isBg ? '1' : '1')};
        color: ${({ isBg }) => (isBg ? '#FDFEF5' : '#FDFEF5')};
        background: ${({ isBg }) => (isBg ? 'black' : 'black')};
        z-index: 3; */
        /* color: grey; */
        /* cursor: pointer; */
        /* border-bottom: 5px solid #201D17; */
        /* background-size: 100% 100%; */
        /* transition: 0.2s all ease-in-out; */
    }

    @media screen and (max-width: 811px) {
        max-width: 95%;
        background: #FDFEF5;
        /* outline: 1px solid #201D17; */
    }
`

export const HoverName = styled.div`
    display: inline;
    z-index: 1;
    transition: 0.2s all ease-in-out;
    font-family: 'SharpGrotesk';
    /* font-family: 'Neurial'; */
    letter-spacing: -0.2rem;
    /* &:hover {
        opacity: .5;
    } */

    img {
        display: inline;
        height: 5.2vh;
        /* width: 2rem; */
    }

    @media screen and (max-width: 811px) {
        position: sticky;
        letter-spacing: -0.35vh;
        letter-spacing: -.25vh;
        top: 0;

        img {
            display: inline;
            height: 4vh;
            display: none;
        }
    }
`

export const ImageContainer = styled.div`
    z-index: 999;
    display: flex;
    opacity: 0;
    width: calc(50% - 2.5rem);
    /* height: calc(50vh - 1.75rem); */
    height: 100%;
    overflow: hidden;
    /* border-left: 1px solid #201D17; */
    position: fixed;
    /* left: 50%; */
    left: calc(50vw - 2.5rem);
    top: 0;
    padding-top: 2.5%;
    user-select: none;
    justify-content: center;
    pointer-events: none;
    background: #FDFEF5;

    ${TypeHover}:hover & {
        opacity: 1;
    }

    :hover & {
        display: none;
    }

    @media screen and (max-width: 811px) {
        opacity: .5;

        position: relative;
        display: inline;
        top: 0;
        left: 0;
        height: 40vh;
        width: 95%;

        display: none;
    }
`

export const WorksImageContainer = styled.div`
    z-index: -1;
    display: flex;
    opacity: 0;
    /* width: calc(50% - 1.23rem - 1px); */
    width: calc(50vw - 2.8rem);
    height: 100vh;
    overflow: hidden;
    position: fixed;
    /* left: 1%; */
    left: calc(50vw - 3.6rem);
    top: 0;
    user-select: none;
    pointer-events: none;
    justify-content: center;
    /* background: #201D17; */
    
    ${WorkItem}:hover & {
        opacity: 1;
    }

    &:hover & {
        display: none;
    }
`

export const Kim = styled.p`
    font-family: 'CG Italic';
    font-size: 6.3vh;
    color: white;
    letter-spacing: -.3vh;
    display: inline;
`

export const Name = styled.p`
    display: inline;
    // /* height: 100%; */
    /* font-size: 2.5vh; */
    color: white;
    /* margin-top: -10vh; */
    /* margin-bottom: -2vh; */
    /* background: white; */
    padding-left: 1.75vw;
    padding-right: 1.8vw;
    padding-top: .8vh;
    padding-bottom: .8vh;
    /* height: 3.5vh; */
    border: .3em solid white;
    border-radius: 12vh;
    /* /* cursor: pointer; */
    /* margin-bottom: 1rem; */
    /* margin-right: .75rem; */
    text-decoration: none;
    /* position: absolute; */
    /* left: 9vw; */
    /* float: none; */
    /* cursor: pointer; */
    font-size: 5.5vh;
    font-weight: bold;
    line-height: 100%;
    letter-spacing: -.3vh;
    /* font-family: 'AG'; */
    /* color: black; */

    /* color: ${({currpage, thispage}) => 
        currpage === thispage && 'red'
    }; */

    &:hover {
        /* border: .4em solid blue; */
        /* transition: all 0.1s ease-in-out; */
        /* text-shadow: 0 0 1px #000; */
        /* filter: blur(2x); */
        /* -webkit-filter: blur(1.5px); */
    }

    /* @media screen and (max-width: 811px) {
        color: white;
        margin-left: 16px;
        /* padding-left: 0; */
        left: 11px;
        font-size: 1rem;
    } */
`

export const BodySection = styled.div`
    z-index: 998;
    /* height: 94%; */
    display: grid;
    /* grid-template-rows: 40px 40px 40px 40px; */
    width: 48vw;
    position: relative;
    /* margin-top: 16rem; */
    margin-top: 35vh;
    padding-bottom: 25vh;
    padding: 0 0 0 1rem;
    left: 50vw;
    font-size: 1.7em;

    /* @media screen and (max-width: 811px) {
        left: 0.1rem;
        width: 90vw;
        margin-top: 43vh;
    } */
`;