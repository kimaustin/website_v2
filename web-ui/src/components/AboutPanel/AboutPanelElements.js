import styled from 'styled-components';

export const Container = styled.div`
    z-index: 1000;
    display: block;
    position: fixed;
    width: 24vw;
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

    @media screen and (max-width: 767px) {
       width: 100vw;
       border-right: unset;
       display: none;
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

export const Styled2 = styled.div`
    display: flex;
    padding-left: 22px;
    width: 100%;
    margin-top: 40px;
    
    color: #CCCCCC;
    font-size: 14px;
    font-family: 'OpenSans';
    line-height: 19px;
`

export const Bottom = styled.div`
    position: fixed;
    padding-left: 20px;
    padding-right: 20px;
    bottom: 22px;
    width: 100%;
    text-align: left;
    overflow: hidden;
    z-index: 997;
`

export const Close = styled.p`
    z-index: 999;
    color: white;
    font-family: 'SS3';
    font-size: 14px;

    padding-top: 30px;

    &:hover {
        text-decoration: underline;
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

    overflow: hidden;

    padding-top: 8px;
    font-family: 'SS3';
    font-size: 14px;

    color: white;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    
    }

`