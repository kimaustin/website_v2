import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    padding-left: 24px;
    padding-right: 24px;
    height: 80px;
    /* width: calc(50vw - 12px); */
    width: calc(37vw + 0.5px);
    /* width: 100vw; */
    /* background: #1E1C1F; */
    // background: green;
    background: ${props => props.theme.bgNav};
    backdrop-filter: blur(12px);
    border-right: 1px solid ${props => props.theme.border};
    border-bottom: 1px solid ${props => props.theme.border};
    z-index: 999;

    @media screen and (max-width: 767px) {
        top: unset;
        /* left: 0; */
        padding-left: 0;
        padding-right: unset;
        bottom: 0px;
        width: 100vw;
        border-top: .5px solid ${props => props.theme.border};
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

    background: ${props => props.theme.primary};
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
    /* background: rgba(30, 28, 31, 0.6); */
    backdrop-filter: blur(13.5px);
    /* border-bottom: .75px solid #464242; */
    display: inline-block;
    /* z-index: 999; */
`

export const DrawerToggle = styled.div`
    position: fixed;
    left: 0;
    top: calc(22vh);
    width: 32px;
    height: 70px;
    margin-left: 6px;
    padding: 9px 0px 0px 0px;
    align-items: center;
    align-content: center;
    text-align: center;
    /* margin-left: -1px; */
    /* background-image: url("logo.png"); */
    /* background-size: cover; */
    overflow: hidden;
    border-radius: 7px;
    transition: 0.1s all ease-in-out;    

    /* background: ${isOpen => (isOpen ? 'green' : 'red')}; */

    img {
        border-radius: 30px;
        text-align: center;
        width: calc(14px);
        height: calc(14px);
        object-fit: contain;
    }

    &:hover {
        background: ${props => props.theme.bgNav};
        opacity: 0.9;
        cursor: pointer;
    }

    @media screen and (max-width: 767px) {
        height: 14px;
        width: 14px;
    }
`

export const VersionLabel = styled.div`
    position: absolute;
    /* height: 0; */
    bottom: -7px;
    width: 100%;
    left: 9.5px;
    /* float: right; */
    /* padding-right: 18px; */
    /* text-align: right; */
    /* text-decoration: none; */
    font-family: 'SS3';
    font-size: 12px;
    color: ${props => props.theme.primary};

    /* transition: all .2s ease-in-out; */

    transform-origin: 0 0;
    transform: rotate(-90deg);
`

export const NonMobile = styled.div`
    display: inline-grid;
    grid-template-columns: 50px 1fr 78px;
    width: calc(30vw - 40px);
    height: 18px;
    padding-top: 2px;
    /* overflow: hidden; */

    position: fixed;
    left: 20px;
    top: 15px;

    /* border: 1px solid green; */

    @media screen and (max-width: 767px) {
        width: calc(100vw - 28px);
        /* width: 50%; */
        grid-template-columns: 1fr 1fr 1fr;
        height: 52px;
        /* height: 24px; */
        left: 14px;
        overflow: unset;
        padding-top: 15px;
        /* position: unset; */
        top: unset;
        bottom: 0;
        left: 14px;
        paddig-left: 14px;
    }
`;

export const SimpleNav = styled.div`
    display: inline-grid;
    /* display; grid; */
    grid-template-columns: auto 1fr auto auto;
    /* overflow: hidden; */
    /* align-items: center; */
    align-content: center;
    width: 100%;
    height: 90px;
    /* height: calc(100vh - 88px); */
    /* padding: 18px 14px 20px 20px; */
    padding-bottom: 4px;

    /* position: fixed; */
    /* left: 6px; */
    /* top: 80px; */

    /* background: ${props => props.theme.bgNav}; */
    /* border: 1px solid green; */

    @media screen and (max-width: 767px) {
        /* width: calc(100vw - 28px); */
        border-top: 1px solid ${props => props.theme.border};

        background: ${props => props.theme.bgNav};
        backdrop-filter: blur(12px);
        display: inline-grid;
        width: 100vw;
        /* width: 50%; */
        grid-template-columns: 1fr 1fr 1fr;
        height: 52px;
        /* height: 24px; */
        overflow: unset;
        padding-top: 15px;
        /* position: unset; */
        top: unset;
        bottom: 0;
        paddig-left: 14px;
    }
`;
 
export const Logo = styled.a`
    width: 15px;
    height: 15px;
    /* margin-left: -1px; */
    margin-right: 6px;
    margin-top: -1px;
    background-image: url("logo.png");
    background-size: cover;
    border: 1px solid ${props => props.theme.border};

    @media screen and (max-width: 767px) {
        // height: 14px;
        // width: 14px;
    }
`

export const NavHome = styled.div`
    font-size: 10px;
    /* position absolute; */
    letter-spacing: 2px;
    line-height: 100%;
    /* left: 28.5px; */
    /* top: 14px; */
    // height: 18px;
    // color: #FFFFFF;
    // text-decoration: none;
    // font-family: 'OpenSans';
    /* writing-mode: vertical-rl;
    text-orientation: upright; */

    /* transform-origin: 0 0; */
    /* transform: rotate(90deg); */

    /* position: relative; */
    display: flex;
    /* width: 18px; */
    /* height: 18px; */
    /* width: 90px; */
    margin-right: 20px;
    margin-top: 1.5px;
    color: ${props => props.theme.secondary};
    text-decoration: none;
    font-family: 'SS3';
    opacity: 0.9;
    justify-content: start;
    align-items: start;
    text-align: left;

    /* color: ${({currpage, thispage}) => 
        currpage === thispage && '#FDFEF5'
    };

    background: ${({currpage, thispage}) => 
        currpage === thispage && '#201D17;'
    }; */
    
    /* &:hover {
        text-decoration: underline;
    } */

    @media screen and (max-width: 767px) {
        position: fixed;
        top: 16px;
        /* display: grid; */
        left: 88px;
        margin-top: unset;
        margin-right: unset;
        transform-origin: unset;
        transform: unset;
        height: 14px;
        padding-top: 3px;
        font-size: 11px;
        float: left;
    }
`;


export const Switcher = styled.div`
    /* position: absolute; */
    /* left: 34px; */
    /* bottom: 46px; */
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* text-align: center; */

    width: 60px;
    height: 22px;
    
    margin-top: -5.5px;
    /* margin-left: 012.5%; */
    /* border-radius: 0px; */
    overflow: hidden;
    border: 1px solid ${props => props.theme.secondary};
    /* height: 16px; */

    /* transform-origin: 0 0; */
    /* transform: rotate(90deg); */

    /* &:hover {
        background: ${isLight => (isLight ? 'rgba(30, 30, 31, 0.1)' : 'rgba(242, 249, 256, 1)')};
        cursor: pointer;
    } */

    @media screen and (max-width: 767px) {
        position: fixed;
        left: 14px;;
        top: 16px;

        margin-top: -4px;
        height: 24px;
        /* width: 80%; */
        /* width: 100%; */
        /* margin-left: 17%; */
    }
`

export const ThemeIndicator = styled.div`
    z-index: -1;
    /* position: relative; */
    /* top: 0;  */
    /* left: 0; */
    /* font-size: 20px; */
    width: 160%;

    height: 24px;
    font-family: 'SS3';
    /* margin-top: 0px; */
    background: ${props => props.theme.primary};
    /* background: green; */
    /* border-radius: 30px; */
    /* height: 24px; */

    @media screen and (max-width: 767px) {
        height: 24px;
    }   
`

export const LightIcon = styled.div`
    z-index: 999;
    font-size: 24px;

    padding-left: 40%;
    margin-top: 0px;
    /* margin-bottom: 2px; */
    padding-bottom: 3px;
    /* padding-top: -1px; */
    width: 150%;
    color: ${isLight => (isLight ? 'rgba(242, 249, 256, 1)' : 'rgba(30, 30, 31, 1)')};

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    
    &:hover {
        opacity: .85;
        cursor: pointer;
    }

    @media screen and (max-width: 767px) {
        font-size: 30px;
        padding-left: 35%;
        margin-top: -2.5px;
    }
`

export const DarkIcon = styled.div`
    z-index: 999;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    /* padding-left: 0%; */
    padding-top: 1.5px;
    padding-left: 2px;
    margin-top: 0px;
    width: 150%;
    margin-left: -50%;
    color: ${isLight => (isLight ? 'rgba(30, 30, 31, 1)' : 'rgba(242, 249, 256, 1)')};

    /* transform-origin: 0 0; */
    /* transform: rotate(-90deg); */

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */

    &:hover {
        opacity: .7;
        cursor: pointer;
    }

    @media screen and (max-width: 767px) {
        transform-origin: unset;
        transform: unset;
        padding-right: 0px;
        margin-top: -2px;
        padding-left: 1px;
        font-size: 16px;
        font-weight: 600;
    }
`

export const MobileMenuToggle = styled.div`
    display: none;

    @media screen and (max-width: 767px) {
        display: inline-grid;
        position: fixed;
        margin-top: -2px;
        right: 14px;
        top: 19px;
        /* align-items: end; */
        /* align-content: end; */
        float: right;
        text-align: right;
        // width: 100%;
        color: ${props => props.theme.primary};

        font-family: 'SS3';
        font-size: 14px;
    }
`;

export const MobileAbout = styled.div`
    display: none;

    @media screen and (max-width: 767px) {
        display: inline-grid;
        // position: absolute;
        // right: 0;
        align-items: center;
        align-content: center;
        // float: right;
        text-align: center;
        // width: 100%;
        justify-content: center;
        color: ${props => props.theme.primary};

        font-family: 'SS3';
        font-size: 14px;
    }
`

export const NonMobile1 = styled.div`
    padding-top: 16px;
    padding-right: 22px;
    display: inline-block;
    float: right;

    @media screen and (max-width: 767px) {
        // padding-right: unset;
        // float: unset;
        // text-align: center;
        // align-items: center;
        // align-content: center;
        // justify-content: center;
        display: none;
    }
`;

export const NavDOMLink = styled(LinkRouter)`
    /* padding-bottom: 1.5rem; */
    /* padding-left: 23px; */
    /* width: 100%; */
    display: flex;
    color: ${props => props.theme.primary};
    font-family: 'SS3';
    font-size: 14px;
    /* display: flex; */
    /* align-items: right; */
    text-align: right;
    margin-right: 1.8vw;
    /* float: right; */
    width: 100%;
    text-decoration: none;
    /* letter-spacing: -.1rem; */
    line-height: 75%;

    /* border: 1px solid green; */

    /* transition: all .2s ease-in-out; */
    
    &:hover {
        text-decoration: underline;
    }

    @media screen and (max-height: 767px) {
        /* border-bottom: 0;
        padding: 0;
        width: calc(100vw / 3);
        justify-content: center;
        align-items: center;
        text-align: center;
        border-top: 0;
        border-left: 2px solid #201D17; */
        display: none;
    }
`;

export const NavDOMLinkAbout = styled(LinkRouter)`
    float: right;
    /* padding-right: 18px; */
    text-align: right;
    text-decoration: none;
    
    font-family: 'SS3';
    font-size: 14px;
    line-height: 75%;
    color: ${props => props.theme.primary};

    /* display: block; */
    /* transition: all .2s ease-in-out; */
    /* transform-origin: 0 0; */
    /* transform: rotate(-90deg); */

    /* position: absolute; */
    /* bottom: 72px; */
    /* left: 15px; */

    &:hover {
        text-decoration: underline;
    }

    /* writing-mode: vertical-rl; */
    /* text-transform: rotate(90); */
    /* text-orientation: upright; */

    @media screen and (max-width: 767px) {
        display: none;
    }
`;

export const NonMobile2 = styled.div`
    position: fixed;
    top: 56px;
    left: 20px;
    grid-gap: 1px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 20%);
    justify-content: space-between;
    /* justify-content: space-evenly; */

    /* padding-top: 3px; */
    /* padding-left: 20px; */
    /* padding-bottom: 14px; */
    width: calc(30vw - 40px);

    height: 20px;
    overflow: hidden;
    /* justify-items: stretch; */

    
    /* display: inline-grid; */
    /* grid-template-columns: 1fr 1fr 1fr 1fr; */
    /* grid-template-rows: 1fr; */
    /* row-gap: 8px; */
    /* border: 1px solid blue; */
    /* border-top: 0.5px solid #403F3F; */
    /* border-bottom: 1px solid #464242; */

    @media screen and (max-width: 767px) {
        display: none;
    }
`;

export const NavDOMLink2 = styled(LinkRouter)`
    /* display: grid; */
    position: relative;
    padding-right: 30px;

    color: ${props => props.theme.primary};
    text-decoration: none;
    font-size: 14px;
    font-family: "SS3";

    /* border: 1px solid green; */

    &:hover {
        text-decoration: underline;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-between;

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

export const NavDOMLink3 = styled(LinkRouter)`
    /* display: inline-grid; */
    position: relative;
    padding-right: 30px;

    /* border: 1px solid green; */

    color: ${props => props.theme.primary};
    text-decoration: none;
    font-size: 14px;
    font-family: "SS3";

    opacity: 0.25;


    display: flex;
    flex-direction: column;
    justify-content: space-between;


    &:hover {
        // text-decoration: underline;
        cursor: not-allowed;
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
  font-size: 14px;
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
    /* background: ${props => props.theme.bgNav}; */
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