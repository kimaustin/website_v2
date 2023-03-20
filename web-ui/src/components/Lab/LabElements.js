import styled from 'styled-components'
import { Link } from 'react-scroll';

export const Container = styled.div`
    display: block;
    position: fixed;
    
    width: calc(100vw - 7rem + 5px);
    /* width: calc(20vw); */
    left: calc(3.5rem - 1.75px);
    /* top: 1.75rem; */
    /* padding-right: 5rem; */
    height: 100vh;

    cursor: url("../imgs/cursor1.svg"), crosshair;
    overflow-y: hidden;
    overflow-x: hidden;
    
    ::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 768px) {
        width: 100vw;
        height: 90.5vh;
        
        top: 6vh;
        left: 0;
    }
`

export const TopSection = styled.div`
    position: fixed;
    width: calc((100% / 3) + 4.5px);
    /* top: 1.75rem; */
    height: calc(70% - 1rem);

    @media screen and (max-width: 768px) {
        height: calc(88vh + 1.75px);
        top: 6vh;
        width: 3.5rem;
    }
`

export const LabGrid = styled.div`
    z-index: 990;
    display: grid;
    /* position: fixed; */
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
    /* grid-column-gap: -1.75px; */
    overflow-x: hidden;
    overflow-y: scroll;
    /* border-top: 1.75px solid #201D17; */
    border-bottom: 1.75px solid #201D17;
    border-right: 1.75px solid #201D17;
    /* grid-row-gap: -1.75px; */
    /* background-color: black; */
    width: calc(50% + 1.75px);
    width: calc((100% / 3) + 4.5px);
    width: 100%;
    /* top: 0; */
    /* background: #201D17; */
    height: calc(100% - 2.45rem);

    ::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 768px) {
        /* position: fixed; */
        grid-template-rows: unset;
        /* top: 0; */
        border-left: 1.75px solid #201D17;
        border-bottom: 0;
        width: calc(3.5rem + 2.1px);
        height: 90.5vh;
    }
`

export const LabContent = styled.div`
    display: block;
    position: fixed;
    z-index: 999;
    width: calc((100% / 3) + 1.75px);
    /* width: calc(10rem); */
    height: calc(30% + 1.75px);
    top: calc(70% + .5rem - 1.75px);
    /* left: calc(100% / 3 - 7rem); */
    left: 3.5rem;
    overflow: hidden;
    border-top: 1.75px solid #201D17;
    border-right: 1.75px solid #201D17;
    background: #FDFEF5;
    color: #201D17;

    @media screen and (max-width: 768px) {
        /* display: none; */
        width: calc(100vw - 3.5rem);
        height: calc(17vh + 1.75px);
        top: calc(77vh);
        border-bottom: 1.75px solid #201D17;
        border-left: 1.75px solid #201D17;
        opacity: 0;
        display: none;
    }
`

export const Labs = styled.div`
    position: fixed;
    display: grid;
    /* left: calc(50% - 1.25rem); */
    border-top: 1.75px solid #201D17;
    left: 0;
    top: calc(50%);
    /* height: calc(50% - 1.25em); */
    width: calc(50% + 1.75px);
    height: 50%;
    /* grid-template-columns: 1fr; */
    /* grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; */
    overflow-y: scroll;
`

export const Pics = styled.div`
    /* width: 96vw; */
    /* height: 89vh; */
    /* width: 5rem; */
    height: 100%;
    width: calc(100% + 1.75px);
    /* width: calc(100% + 1rem); */
    z-index: 999;
    /* padding-top: calc(50% - 1.75rem); */
    /* padding-left: calc(50% - 1.3rem); */
    padding-left: 1.25rem;
    padding-top: 1vh;
    /* align-items: center; */
    /* text-align: center; */
    /* justify-content: center; */
    border-right: 1.75px solid #201D17;
    /* border-top: 1.75px solid #201D17; */
    border-bottom: 1.75px solid #201D17;
    /* transition: .15s all ease-in-out; */
    /* scale: (1); */
    /* overflow-x: hidden; */

    color:  ${({ currProj, currPreview }) => (currProj === currPreview ? '#FDFEF5' : '#201D17')};
    background:  ${({ currProj, currPreview }) => (currProj === currPreview ? '#201D17' : '#FDFEF5')};
    
    cursor: url("../imgs/cursor1.svg"), crosshair;

    &:hover {
        /* width: 100%; */
        color: #FDFEF5;
        background: #201D17;
        /* border-bottom: none; */
        /* transform: translate3d(30px, 30px, 30px);  */
        /* transform: translate3d(50px, 50px, 50px) scale(3);  */
    }

    @media screen and (max-width: 768px) {
        /* width: 100%; */
        padding: 0;
    }
`

export const Divider = styled.div`  
    z-index: 999;
    position: fixed;
    display: grid;
    border-left: 1.75px solid #201D17;
    /* width: calc(50%); */
    width: calc(((100% * 2) / 3));
    /* left: calc(50% + 1.75px); */
    left: calc((100% / 3) + 3.5rem);
    /* top: 1.75rem; */
    height: calc(100% - 1.75rem);

    @media screen and (max-width: 768px) {
        left: 3.5rem;
        top: 6vh;
        height: calc(71vh + 1.75px);
        height: 90.5vh;
        width: calc(100vw - 3.5rem);
        
        overflow: hidden;

        border-bottom: 1.75px solid #201D17;
        border-right: 1.75px solid #201D17;
    }
`

export const NextSection = styled.div`
    position: fixed;
    z-index: 1;
    width: 55%;
    top: 0;
    right: 0;
    /* margin-top: -50%; */
    /* margin-left: 50%; */
    height: 200%;
    background: yellow;
    opacity: 0;
    cursor: url("../imgs/c_next.svg"), crosshair;

    &:hover {
        /* opacity: .05; */
    }

    @media screen and (max-width: 768px) {
        width: calc(30%);
        top: unset;
        height: 2.25rem;
        bottom: 2.5vw;
        bottom: 0;
        right: 0;
        /* right: 2.5%; */
        position: absolute;

        padding-top: .25rem;
        font-family: 'SpaceMono';
        font-size: 1rem;
        text-align: center;
        justify-content: center;
        align-items: center;

        color: #FDFEF5;
        background: #201D17;
        opacity: 1;
        border: 1.75px solid #201D17;
    }
`

export const PrevSection = styled.div`
    z-index: 2;
    width: 45%;
    /* margin-left: 0%; */
    /* margin-left: 50%; */
    height: 100%;
    /* background: yellow; */
    opacity: 0;
    cursor: url("../imgs/c_prev.svg"), crosshair;

    &:hover {
        /* opacity: .05; */
    }

    @media screen and (max-width: 768px) {
        z-index: 999;
        display: grid;
        width: calc(30%);
        height: 2.25rem;
        bottom: 2.5vw;
        left: 2.5%;
        left: 0;
        bottom: 0;
        position: absolute;
        /* margin-top: calc(90.5vh - 2.25rem); */

        padding-top: .25rem;
        font-family: 'SpaceMono';
        font-size: 1rem;
        text-align: center;

        color: #FDFEF5;
        background: #201D17;
        opacity: 1;
        border: 1.75px solid #201D17;
    }
`

export const PreviewContainer = styled.div`
    z-index: -1;
    overflow: hidden;
    position: fixed;
    display: flex;
    /* left: calc(50% + 1.75px); */
    /* left: calc((100% / 3)); */
    justify-content: center;
    top: 0;
    width: calc(((100% * 2) / 3) - 3.5rem);
    width: calc(100% - 7rem);
    padding-top: 2%;
    /* padding-left: 2%; */
    height: 92.5%;
    height: 100%;
    /* background: #201D17; */
    opacity: 1;
    /* border-left: 1.75px solid #201D17; */
    /* border-bottom: 1.75px solid #201D17; */

    @media screen and (max-width: 768px) {
        z-index: -1;
        width: 100%;
        height: calc(100% - 2.25rem);
        padding-top: 23%;
        overflow: hidden;
        /* background: #201D17; */
        color: #FDFEF5;
    }
`

export const PicIndex = styled.div`
    position: fixed;
    z-index: 999;
    top: calc(93% + 1.25rem);
    /* left: calc((100% / 3) + 8.5rem); */
    text-align: center;
    align-items: center;
    height: 5%;
    color: #201D17;
    /* width: calc(((100% * 2) / 3) - 7rem); */
    width: 100%;
    font-family: 'SpaceMono';
    font-size: 1.6rem;
    letter-spacing: -.15rem;

    @media screen and (max-width: 768px) {
        /* border-top: 1.75px solid #201D17; */
        /* color: #FDFEF5; */
        font-size: 1.1rem;
        top: 0;
        
        color: inherit;
        
        padding-top: .25rem;
        padding-right: .8rem;
        text-align: right;
        bottom: 1%;
        height: 10%;
        /* background: #FDFEF5; */
    }   
`

export const LabDetailName = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        font-family: 'SpaceMono';
        font-size: 1.1rem;
        padding-left: .75rem;
        padding-top: .25rem;
        padding-bottom: .25rem;
        text-align: left;
        
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        color: #FDFEF5;
        background: #201D17;;
    }
`

export const AddLab = styled.div`
    /* position: fixed; */
    z-index: 999;
    width: 4rem;
    height: 4rem;
    padding-left: 1.25rem;
    padding-top: .5rem;
    font-size: 2rem;
    border-right: 1.75px solid #201D17;
    border-bottom: 1.75px solid #201D17;
    /* transition: .1s all ease-in-out; */

    &:hover {
        color: #FDFEF5;
        background: #201D17;
    }
`

export const LabIndex = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: grid;
        /* padding: auto; */
        /* padding-right: 2rem; */
        font-family: 'SpaceMono';
        font-size: 2.25rem;
        font-size: 1rem;

        text-align: center;
        align-items: center;
        justify-content: center;

        display: flex;
        padding-top: calc(50% + .35rem);
    }
`

export const Label = styled.div`
    display: grid;
    padding-left: 1.25rem;
    padding-top: .75rem;
    padding-bottom: .5rem;
    width: 100%;
    height: 3rem;
    font-family: 'SharpGrotesk';
    font-size: 1.2rem;
    /* border-bottom: 1.75px solid #201D17; */
    color: #FDFEF5;
    background: #201D17;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const LabDetails = styled.div`
    /* padding-right: 2rem; */
    width: calc(100% - 2rem);
    height: 100%;
    /* overflow-y: scroll; */
    overflow: hidden;
    /* text-orientation: mixed; */
    /* writing-mode: vertical-rl; */

    @media screen and (max-width: 768px) {
        width: calc(100vw - 3.5rem - 1.75px);
    }
`

export const LabName = styled.div`
    display: grid;
    /* position: relative; */
    /* padding-top: 1.5rem; */
    padding: auto;
    padding-top: 1.5vh;
    /* left: 2rem; */
    /* border-bottom: 1.75px solid #201D17; */
    /* top: 1rem; */
    line-height: 85%;
    /* justify-content: center; */
    /* width: 100%;     */
    word-wrap: break-word;

    font-family: 'SpaceMono';
    /* transform: translate(-50%, -50%); */
    /* justify-content: center; */
    /* align-items: left; */
    font-size: 1.6rem;
    /* text-orientation: mixed; */
    /* writing-mode: vertical-rl; */

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const LabDesc = styled.div`
    position: relative;
    /* left: 2rem; */
    /* top: 5rem; */
    width: 90%;
    /* overflow-y: scroll; */
    font-family: 'SpaceMono';
    font-size: 1.25rem;
    padding-top: 1.5rem;
    padding-left: 1.25rem;
    line-height: 90%;
    /* height: calc(100% - 6rem); */
    /* text-orientation: mixed; */
    /* writing-mode: vertical-rl; */

    @media screen and (max-width: 768px) {
        text-align: unset;
        justify-content: unset;
        align-items: unset;
        position: absolute;
        top: 0;
        left: 0;
        padding-left: .75rem;
        padding-top: 0;
        font-size: 1rem;
    }
`

export const Top = styled(Link)`
    position: fixed;
    display: flex;
    z-index: 990;
    /* cursor: pointer; */
    background: white;
    bottom: 8vh;
    right: 16px;
    /* width: 4rem; */
    /* height: 2rem; */
    /* transition: all 0.2s ease-in-out; */
    /* padding-left: .85rem; */
    /* padding-right: .85rem; */
    padding: .85rem;
    border: 1px solid black;
    border-radius: 70px;
    font-size: 2rem;

    color: black;
    text-decoration: none;

    &:hover {
        background: black;
        color: white;        
    }

    @media screen and (min-width: 768px) {
        bottom: 3vh;
    }
`

export const CursorPreview = styled.div`
    position: fixed;
    top: ${props => (props.topVal)};
    left: ${props => (props.leftVal)};
    max-width: 8rem;
    opacity: 0;
    /* height */

    ${LabIndex}:hover {
        opacity: 1;
    }
`