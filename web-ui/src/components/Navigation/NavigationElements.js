import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 103px;
    width: 31.5vw;
    /* width: 100vw; */
    /* background: #1E1C1F; */
    background: green;
    background: rgba(30, 28, 31, 0.65);
    backdrop-filter: blur(11px);
    border-bottom: .5px solid #403F3F;
    z-index: 999;

    @media screen and (max-width: 768px) {
        left: 0;
        top: 0;
        width: calc(100vw);
        height: 6vh;
        /* border-top: 1.5px solid #201D17;
        border-left: 1.5px solid #201D17;
        border-right: 2px solid #201D17; */
        background: none;
        text-orientation: unset;
        /* writing-mode: horizontal-tb; */
        font-size: 1.1rem;
        letter-spacing: -.02rem;
        /* background: black; */
    }
`

export const Divider = styled.div`
  z-index: 999;
  position: fixed; 
  left: 31.5vw;
  top: 0;
  height: 100vh;

  border-left: .5px solid #403F3F;
`

export const Indicator = styled.div`
    position: fixed;
    width: 8px;
    height: 8px;
    top: 78px;
    /* left: ${({currpage}) => 
        currpage === 'works' && '24px' || 
        currpage === 'test' && '86px'
    }; */
    /* left: 20px; */

    background: white;
    opacity: 0.8;
`

export const NavContainer = styled.div`
    height: 100%;
    width: 31.5vw;
    /* background: #1E1C1F; */
    background: rgba(30, 28, 31, 0.6);
    backdrop-filter: blur(13.5px);
    /* border-bottom: .75px solid #464242; */
    display: inline-block;
    /* z-index: 999; */
`

export const NonMobile = styled.ul`
    display: flex;
    /* display: inline-block; */
    /* align-items: center; */
    /* list-style: none; */
    /* text-align: right; */
    position: fixed;
    /* width: 50%; */
    padding-left: 24px;
    padding-top: 19px;

    /* left: .875rem; */
    /* top: 14.5rem; */
    /* width: 3.25rem; */
    /* cursor: url("/imgs/c_right.svg"), auto; */
    /* justify-content: space-between; */
    /* right: 1vw; */
    /* height: 100%; */

    /* margin-right: -21.5px; */
    @media screen and (max-height: 768px) {
        display: none;
    }
`;

export const Logo = styled.div`
    width: 18px;
    height: 18px;
    background-image: url("logo.png");
    background-size: cover;
`

export const NavHome = styled(LinkRouter)`
    /* display: relative; */
    /* padding-bottom: 1.5rem; */
    /* width: 100%; */
    /* border-bottom: 2px solid #201D17; */
    padding-left: 10px;
    font-size: 13px;

    /* height: 100%; */
    /* font-size: 2rem; */
    /* opacity: 0.8; */
    color: #FFFFFF;
    /* flex: 1; */s
    /* cursor: url("/imgs/cursor1.svg"), auto; */
    /* border-bottom: 2px solid #201D17; */
    
    text-decoration: none;
    /* position: absolute; */
    /* left: .875rem; */
    /* letter-spacing: -.1rem; */
    /* font-family: 'CG Medium Italic'; */
    font-family: 'OpenSans';

    /* color: ${({currpage, thispage}) => 
        currpage === thispage && '#FDFEF5'
    };

    background: ${({currpage, thispage}) => 
        currpage === thispage && '#201D17;'
    }; */
    
    &:hover {
        text-decoration: underline;
    }

    @media screen and (max-width: 768px) {
        /* color: white; */
        position: relative;
        display: flex;
        /* left: 0; */
        /* top: 0; */
        width: calc(100% / 3);
        height: 100%;
        /* padding-top: -1vh; */
        /* height: calc(3vh - 5px); */
        /* padding-bottom: 1.5rem; */
        /* padding-top: 1rem; */
        /* padding-right: .45rem; */
        /* padding: auto; */
        border-bottom: 0;
        padding: 0;
        justify-content: center;
        align-items: center;
        text-align: center;
        /* margin-left: 16px; */
        /* padding-left: 0; */
        /* left: 12px; */
    }
`;

export const NonMobile1 = styled.ul`
    /* display: flex; */
    /* align-items: center; */
    /* list-style: none; */
    /* text-align: right; */
    /* position: sticky; */
    padding-top: 18px;
    padding-right: 22px;
    display: inline-block;
    /* margin-right: calc(68.5vw); */
    float: right;

    /* @media screen and (max-height: 768px) {
        top: 0;
        width: calc((100vw * 2) / 3);
        width: 100vw;
        height: 6vh;
        overflow-y: hidden;
        right: 0;
        left: 0;
        border: 2px solid #201D17;
        background: #FDFEF5;
    } */
`;

export const NavDOMLink = styled(LinkRouter)`
    /* padding-bottom: 1.5rem; */
    padding-left: 23px;
    /* width: 100%; */
    color: #FFFFFF;
    font-family: 'OpenSans';
    font-size: 13px;
    /* display: flex; */
    /* align-items: left; */
    text-decoration: none;
    /* letter-spacing: -.1rem; */
    /* border-bottom: 2px solid #201D17; */

    /* transition: all .2s ease-in-out; */
    
    &:hover {
        text-decoration: underline;
    }

    @media screen and (max-height: 768px) {
        border-bottom: 0;
        padding: 0;
        width: calc(100vw / 3);
        justify-content: center;
        align-items: center;
        text-align: center;
        border-top: 0;
        border-left: 2px solid #201D17;
    }
`;

export const NavDOMLinkAbout = styled(LinkRouter)`
    /* padding-bottom: 1.5rem; */
    padding-left: 24px;
    /* width: 100%; */
    color: #FFFFFF;
    /* display: flex; */
    font-family: 'OpenSans';
    font-size: 13px;
    /* align-items: left; */
    text-decoration: none;
    /* letter-spacing: -.1rem; */
    /* border-top: 2px solid #201D17; */

    color: ${({currpage, thispage}) => 
        currpage === thispage && '#FDFEF5'
    };
/* 
    background: ${({currpage, thispage}) => 
        currpage === thispage && '#201D17;'
    }; */

    /* transition: all .2s ease-in-out; */
    
    &:hover {
        text-decoration: underline;
    }
`;

export const NonMobile2 = styled.div`
    position: fixed;
    top: 55px;
    /* padding-top: 3px; */
    padding-left: 24px;
    /* padding-bottom: 14px; */
    width: 31.5vw;
    height: 48px;
    overflow: hidden;
    justify-items: stretch;

    /* display: inline-grid; */
    /* grid-template-columns: 1fr 1fr 1fr 1fr; */
    /* grid-template-rows: 1fr; */
    /* row-gap: 8px; */
    /* border-top: 0.5px solid #403F3F; */
    /* border-bottom: 1px solid #464242; */

    /* @media screen and (max-width: 811px) {
    display: flow-root;
    top: calc(6vh + 1rem - 1px);
    width: 3.5rem;
    overflow: hidden;
    left: unset;
    right: calc(0.9rem);
    height: calc(21%);
    border: 1px solid #201d17;
    } */
`;

export const NavDOMLink2 = styled(LinkRouter)`
    display: inline-grid;
    position: relative;
    padding-right: 30px;

    color: #D2CACA;
    text-decoration: none;
    font-size: 13px;
    font-family: "OpenSans";

    &:hover {
        text-decoration: underline;
    }

    @media screen and (max-height: 768px) {
        border-bottom: 0;
        padding: 0;
        width: calc(100vw / 3);
        justify-content: center;
        align-items: center;
        text-align: center;
        border-top: 0;
        border-left: 2px solid #201D17;
    }
`;

export const Filter = styled.div`
  display: inline-grid;
  position: relative;
  padding-right: 30px;

  color: #D2CACA;
  text-decoration: none;
  font-size: 13px;
  font-family: "OpenSans";

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 811px) {
    display: none;
  }
`;

export const PhotoIndexContainer = styled.div`
    position: fixed;
    z-index: 998;
    top: 0;
    left: 31.5vw;
    width: 68.5vw;
    height: 103px;
    padding: 18px;

    /* background: green; */
    /* background: #1E1C1F; */
    background: rgba(51, 49, 52, 0.8);
    backdrop-filter: blur(12px);    

    /* border-bottom: 1px solid #464242; */
    /* border-left: 1px solid #464242; */

    color: white;
`

export const AboutContainer = styled.div`
    z-index: 998;
    /* display: none; */
    display: ${({ showInfo }) => (showInfo ? 'block' : 'none')};
    width: 28vw;
    height: 101vh;
    background: white;
`

export const InfoWrapper = styled.span`
    z-index: 999;
`

export const Mobile = styled.div`
    display: none;
    position: fixed;

    @media screen and (max-height: 530px) {
        z-index: 998;
        display: block;
        position: fixed;
        bottom: 0rem;
        left: 0;
        background: transparent;
        font-size: 5vh;
        /* cursor: pointer; */
        background: ${({toggle}) => (toggle ? 'white' : 'black')};
        background: white;
        color: ${({toggle}) => (toggle ? 'black' : 'black')};
        padding-left: 2.5vw;
        padding-top: 4px;
        border: 1.5px solid black;
        height: 6vh;
        /* border-radius:50%; */
        width: 11vw;
/* 
        &:hover {
            color: white;
            background-color: black;
            transition: all 0.3s ease-in-out;
        } */
    }
`;

export const Rotating = styled.div`
    width: 100%;
    height: 100%;
    transition: 0.3s all ease-in-out;
    transform: ${({toggle}) => (toggle ? 'rotate(0.5turn)' : 'rotate(0turn)')};
`