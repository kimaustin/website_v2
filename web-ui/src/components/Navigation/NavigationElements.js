import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 90px;
    width: 30vw;
    /* width: 100vw; */
    /* background: #1E1C1F; */
    // background: green;
    background: ${props => props.theme.bgNav};
    backdrop-filter: blur(12px);
    border-bottom: .5px solid ${props => props.theme.border};
    z-index: 999;

    @media screen and (max-width: 767px) {
        top: unset;
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
    /* grid-template-columns: 50px 1fr 78px; */
    /* overflow: hidden; */
    width: 36px;
    height: calc(100vh - 90px);
    padding: 18px 10px 18px 10px;

    position: fixed;
    left: 0;
    top: 90px;

    background: ${props => props.theme.bgNav};
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
 
export const Logo = styled.a`
    width: 14px;
    height: 14px;
    background-image: url("logo.png");
    background-size: cover;
    border: 1px solid ${props => props.theme.border};

    @media screen and (max-width: 767px) {
        // height: 14px;
        // width: 14px;
    }
`

export const NavHome = styled(LinkRouter)`
    font-size: 14px;
    letter-spacing: 0.5px;
    // height: 18px;
    // color: #FFFFFF;
    // text-decoration: none;
    // font-family: 'OpenSans';
    /* writing-mode: vertical-rl;
    text-orientation: upright; */

    /* position: relative; */
    display: flex;
    height: 18px;
    // margin-bottom: 36px;
    color: ${props => props.theme.primary};
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
        padding-top: 3px;
        font-size: 14px;
        float: left;
    }
`;

export const Switcher = styled.div`
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* text-align: center; */
    width: 100%;
    height: 25px;
    margin-top: -4.5px;
    /* margin-left: 012.5%; */
    border-radius: 30px;
    overflow: hidden;
    border: 1px solid ${props => props.theme.border};
    /* height: 16px; */

    /* &:hover {
        background: ${isLight => (isLight ? 'rgba(30, 30, 31, 0.1)' : 'rgba(242, 249, 256, 1)')};
        cursor: pointer;
    } */

    @media screen and (max-width: 767px) {
        margin-top: -3px;
        height: 28px;
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
    height: 100%;
    font-family: 'SS3';
    /* margin-top: 0px; */
    background: ${props => props.theme.primary};
    /* background: green; */
    border-radius: 30px;
    /* height: 24px; */
`

export const LightIcon = styled.div`
    z-index: 999;
    font-size: 15px;
    padding-left: 45%;
    padding-top: 4.75px;
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
        padding-left: 55%;
        padding-top: 5.4px;
    }
`

export const DarkIcon = styled.div`
    z-index: 999;
    font-size: 13px;
    text-align: center;
    /* padding-left: 0%; */
    padding-top: 5.7px;
    padding-left: 0%;
    width: 150%;
    margin-left: -50%;
    color: ${isLight => (isLight ? 'rgba(30, 30, 31, 1)' : 'rgba(242, 249, 256, 1)')};

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */

    &:hover {
        opacity: .7;
        cursor: pointer;
    }

    @media screen and (max-width: 767px) {
        padding-right: 2px;
        padding-left: unset;
    }
`

export const MobileMenuToggle = styled.div`
    display: none;

    @media screen and (max-width: 767px) {
        display: inline-grid;
        // position: absolute;
        padding-top: 2px;
        right: 0;
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
    padding-left: 23px;
    /* width: 100%; */
    color: ${props => props.theme.primary};
    font-family: 'SS3';
    font-size: 14px;
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
    float: right;
    padding-right: 18px;
    text-align: right;
    text-decoration: none;
    
    font-family: 'SS3';
    font-size: 14px;
    color: ${props => props.theme.primary};

    transition: all .2s ease-in-out;
    
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