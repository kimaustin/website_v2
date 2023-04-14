import styled from 'styled-components';

export const Container = styled.div`
    z-index: 999;
    display: block;
    position: fixed;
    width: 28vw;
    height: 100vh;
    overflow: hidden;

    /* opacity: 0.7;  */
    /* background: #403939; */
    background: rgba(64, 57, 57, 0.7);
    backdrop-filter: blur(11px);

    border-right: 1px solid #5F5F5F;
    /* filter: blur(-2x); */
    /* -webkit-filter: blur(-1.5px); */
    /* cursor: url("/imgs/cursor1.svg"), auto; */

    @media screen and (max-width: 768px) {
        margin-left: ${({ showInfo }) => (showInfo ? '0' : '-100vw')};
        /* margin-left: 1vw; */
        left: 0;
        overflow: hidden;
        /* width: ${({ showInfo }) => (showInfo ? '100vw' : '25vw')}; */
        width: 100vw;
        height: 94.5vh;
    }
`

export const Content = styled.div`
    overflow: hidden;
    width: 100%;
    z-index: 999;
    padding-left: 20px;
    pointer-events: none;
    padding-top: 20px;

    text-align: left;

    @media screen and (max-height: 640px) {
        display: none;
    }
`

export const Logo = styled.div`
    width: 18px;
    height: 18px;
    background-image: url("logo.png");
    background-size: cover;
`

export const Name = styled.div`
    display: flex;
    line-height: 100%;
    padding-top: 22px;
    padding-bottom: 16px;

    color: #FFFFFF;
    font-size: 24px;
    font-family: 'OpenSans';
    line-height: 31.2px;
`

export const Styled1 = styled.span`
    display: flex; 
    width: 100%;
    
    color: #CCCCCC;
    font-size: 12px;
    font-family: 'OpenSans';
    line-height: 16.7px;
`

export const Styled2 = styled.p`
    display: flex; 
    width: 85%;
    margin-top: 40px;
    
    color: #CCCCCC;
    font-size: 14px;
    font-family: 'OpenSans';
    line-height: 19px;
`

export const Bottom = styled.div`
    position: fixed;
    padding-left: 20px;
    /* padding-left: 2rem; */
    bottom: 22px;
    width: 100%;
    /* right: 1.8rem; */
    /* margin-right: 1.8rem; */
    /* margin-top: 7.2rem; */
    /* text-align: left; */
    text-align: left;
    /* padding-left: 1rem; */
    overflow: hidden;
    z-index: 997;
`











export const Close = styled.p`
    z-index: 999;
    font-family: 'Neurial';
    /* font-weight: lighter; */
    /* width: 100%; */
    padding-left: 1rem;
    border-top: 2px solid #201D17;
    /* left: 1.4rem; */
    padding-bottom: 3.125rem;
    padding-top: .5rem;
    /* top: 50vh; */
    color: #201D17;
    /* text-orientation: mixed; */
    /* writing-mode: vertical-rl; */
    /* cursor: pointer; */
    font-size: 1.5rem;
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

export const Desc = styled.p`
    /* color: black; */
    font-family: SpaceMono;
    font-size: 1rem;
    line-height: 110%;
    pointer-events: none;
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
    font-size: 1.6rem;
    /* cursor: pointer; */
    border-bottom: 1.5px solid white;

    &:hover {
        background: black;
        color: white;        
        /* transition: 0.2s all ease-in-out; */
    }
`

export const ProfileContainer = styled.div`
    /* position: fixed; */
    /* margin-top: 1rem; */
    /* margin-left: 2.5rem; */
    /* margin-right: 2rem; */
    /* margin-top: 2.35rem; */
    display: block;
    width: calc(20vw - 1.9rem);
    width: 100%;
    height: 37.5%;

    border-bottom: 1px solid #201D17;
    /* width: 100%; */
    overflow: hidden;

    img {
        display: block;
    }

    @media screen and (max-height: 998px) {
        display: none;
    }

    @media screen and (max-height: 1000px) {
        height: 15%;
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

export const Social = styled.a`
    display: list-item;
    z-index: 990;
    width: 100%;
    border-top: 2px solid #201D17;
    /* margin-bottom: .1rem; */
    cursor: url("/imgs/c_link.svg"), alias;
    /* left: 0; */
    /* padding-right: .85rem; */
    /* width: 15rem; */
    /* height: 3.5rem; */

    overflow: hidden;

    /* margin-left: -.30rem; */
    padding-left: 1rem;
    /* padding-right: 1.4rem; */
    padding-top: .75rem;
    padding-bottom: .75rem;
    /* border: 1px solid black; */
    /* border-radius: 120px; */
    font-family: 'CG Italic';
    font-family: 'SpaceMono';
    font-family: 'Neurial';
    font-size: 1.5rem;
    letter-spacing: -.03rem;

    color: #201D17;
    /* color: #201D17; */
    /* color: black; */
    text-decoration: none;
    /* transition: 0.15s all ease-in-out; */

    &:hover {
        /* transform: skew(12deg); */
        background: #201D17; 
        color: #FDFEF5;        
    }

`