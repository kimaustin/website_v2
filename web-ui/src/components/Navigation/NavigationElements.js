import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 103px;
    width: 30vw;
    /* width: 100vw; */
    /* background: #1E1C1F; */
    // background: green;
    background: rgba(30, 30, 31, 0.60);
    backdrop-filter: blur(12px);
    border-bottom: .5px solid #403F3F;
    z-index: 999;

    @media screen and (max-width: 767px) {
        top: unset;
        bottom: 0;
        width: 100vw;
        border-top: .5px solid #313131;
        border-bottom: unset;
        height: 52px;
    }
`

export const Divider = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
    z-index: 999;
    position: fixed; 
    left: 0;
    top: 42.25px;
    width: 30vw;

    border-bottom: .5px solid #565656;
  }
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

    @media screen and (max-height: 767px) {
        top: 101vh;
        display: none;
    }
`

export const NavContainer = styled.div`
    height: 100%;
    width: 30vw;
    /* background: #1E1C1F; */
    background: rgba(30, 28, 31, 0.6);
    backdrop-filter: blur(13.5px);
    /* border-bottom: .75px solid #464242; */
    display: inline-block;
    /* z-index: 999; */
`

export const NonMobile = styled.div`
    display: flex;
    position: fixed;
    padding-left: 24px;
    padding-top: 19px;

    @media screen and (max-width: 767px) {
        width: 100vw;
        padding-left: 18px;
        padding-right: 18px;
        display: inline-grid;
        grid-template-columns: 1fr 1fr;
        padding-top: 16px;
    }
`;
 
export const OpenMenu = styled.div`
    color: black;
    font-size: 16px;
`

export const Logo = styled.a`
    width: 14px;
    height: 14px;
    background-image: url("logo.png");
    background-size: cover;

    @media screen and (max-width: 767px) {
        // height: 14px;
        // width: 14px;
    }
`

export const NavHome = styled(LinkRouter)`
    font-size: 13px;
    // height: 18px;
    // color: #FFFFFF;
    // text-decoration: none;
    // font-family: 'OpenSans';

    position: relative;
    display: flex;
    height: 18px;
    // margin-bottom: 36px;
    color: #FFFFFF;
    text-decoration: none;
    font-family: 'SS3';
    justify-content: start;
    align-items: start;
    text-align: left;

    /* color: ${({currpage, thispage}) => 
        currpage === thispage && '#FDFEF5'
    };

    background: ${({currpage, thispage}) => 
        currpage === thispage && '#201D17;'
    }; */
    
    &:hover {
        text-decoration: underline;
    }

    @media screen and (max-width: 767px) {
        height: 14px;
        padding-top: 1px;
        font-size: 14px;
        float: left;
    }
`;

export const MobileMenuToggle = styled.div`
    display: none;

    @media screen and (max-width: 767px) {
        display: inline-grid;
        // position: absolute;
        right: 0;
        align-items: end;
        align-content: end;
        float: right;
        text-align: right;
        // width: 100%;
        color: white;

        font-family: 'SS3';
        font-size: 14px;
    }
`;

export const NonMobile1 = styled.div`
    padding-top: 16px;
    padding-right: 22px;
    display: inline-block;
    float: right;

    @media screen and (max-width: 767px) {
        display: none;
    }
`;

export const NavDOMLink = styled(LinkRouter)`
    /* padding-bottom: 1.5rem; */
    padding-left: 23px;
    /* width: 100%; */
    color: #FFFFFF;
    font-family: 'SS3';
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

    @media screen and (max-height: 767px) {
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
    font-family: 'SS3';
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
    width: 30vw;
    height: 48px;
    overflow: hidden;
    justify-items: stretch;

    /* display: inline-grid; */
    /* grid-template-columns: 1fr 1fr 1fr 1fr; */
    /* grid-template-rows: 1fr; */
    /* row-gap: 8px; */
    /* border-top: 0.5px solid #403F3F; */
    /* border-bottom: 1px solid #464242; */

    @media screen and (max-width: 767px) {
        display: none;
    }
`;

export const NavDOMLink2 = styled(LinkRouter)`
    display: inline-grid;
    position: relative;
    padding-right: 30px;

    color: #D2CACA;
    text-decoration: none;
    font-size: 13px;
    font-family: "SS3";

    &:hover {
        text-decoration: underline;
    }

    @media screen and (max-height: 767px) {
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
  font-family: "SS3";

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
    left: 30vw;
    width: 70vw;
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

export const Rotating = styled.div`
    width: 50%;
    height: 50%;
    transition: 0.3s all ease-in-out;
    transform: ${({toggle}) => (toggle ? 'rotate(0.5turn)' : 'rotate(0turn)')};
`