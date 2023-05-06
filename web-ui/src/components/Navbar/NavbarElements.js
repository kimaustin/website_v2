import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';

export const Container = styled.div`
    z-index: 1000;
    height: 420px;
    width: 100vw;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;

    background: ${props => props.theme.bgNav};
    backdrop-filter: blur(13px);

    border-top: 1px solid ${props => props.theme.border};
    /* filter: blur(-2x); */
    /* -webkit-filter: blur(-1.5px); */
    /* cursor: url("/imgs/cursor1.svg"), auto; */

    @media screen and (max-width: 767px) {
        backdrop-filter: blur(10px);
    }
`

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const Logo = styled.a`
    width: 18px;
    height: 18px;
    background-image: url("logo.png");
    background-size: cover;

    border: 1px solid ${props => props.theme.border};
`

export const NavHome = styled(LinkRouter)`
    position: absolute;
    left: 14px;
    top: 17px;
    display: flex;
    height: 18px;
    // margin-bottom: 32px;
    font-size: 14px;
    color: ${props => props.theme.secondary};
    text-decoration: none;
    font-family: 'OpenSans';
    justify-content: start;
    align-items: start;
    text-align: left;

    /* color: ${({currpage, thispage}) => 
        currpage === thispage && '#FDFEF5'
    };

    background: ${({currpage, thispage}) => 
        currpage === thispage && '#201D17;'
    }; */
    
    
    
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    // height: 80px;
    // z-index: 1;
    width: 100%;
    // padding: 0 24px;
    // max-width: 1100px;
`

export const NavLogo = styled(LinkRouter)`
    color: #fff;
    justify-self: flex-start;
    /* cursor: pointer; */
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const Close = styled.div`
    display: block;
    position: fixed;
    bottom: 0;
    right: 0;
    // height: 40px;
    padding-right: 14px;
    padding-bottom: 18px;
    color: ${props => props.theme.primary};
    font-family: 'OpenSans';
    font-size: 14px;
    letter-spacing: 0.2px;
    font-weight: 400;
    
`

export const About = styled.div`
    z-index: 999;
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    padding-left: 14px;
    padding-bottom: 18px;
    color: ${props => props.theme.primary};
    font-family: 'SS3';
    font-size: 14px;
    letter-spacing: 0.2px;
    // display: ${({mobileAbout}) => (mobileAbout ? 'block' : 'none')};

    
    
`

export const Menu = styled.div`
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    padding-left: 14px;
    padding-bottom: 18px;
    color: ${props => props.theme.primary};
    font-family: 'SS3';
    font-size: 14px;
    letter-spacing: 0.2px;
    // display: ${({mobileAbout}) => (mobileAbout ? 'none' : 'block')};
`

export const MobileAboutContainer = styled.div`
    z-index: 998;
    position: absolute;
    left: 0;
    // top: calc(100vh - 320px);
    top: 0;
    align-items: start;
    text-align: left;
    padding: 60px 0 0 14px;

    color: ${props => props.theme.primary};
    font-family: 'SS3';
    font-size: 22px;
`

export const Styled1 = styled.div`
    padding-top: 6px;
    color: ${props => props.theme.secondary};
    font-family: 'SS3';
    font-size: 14px;
    letter-spacing: 0.2px;
`

export const Styled2 = styled.div`
    padding-top: 14px;
    color: ${props => props.theme.secondary};
    font-family: 'SS3';
    font-size: 14px;
    letter-spacing: 0.2px;
    line-height: 135%;
`

export const Styled3 = styled.div`
    padding-top: 16px;
    color: ${props => props.theme.cs};
    font-family: 'SS3';
    font-size: 14px;
    letter-spacing: 0.2px;
    padding-bottom: 12px;
`

export const Social = styled.div`
    padding-top: 16px;
    color: ${props => props.theme.primary};
    font-family: 'SS3';
    font-size: 14px;
    letter-spacing: 0.1px;
`

export const NavMenu = styled.div`
    // width: 100vw;
    // display: grid;
    z-index: 1000;
    position: absolute;
    left: 0;
    // top: calc(100vh - 320px);
    top: 0;
    align-items: start;
    text-align: left;
    padding: 64px 0 0 14px;
    // margin-right: -21.5px;

    @media screen and (max-width: 767px) {
        // display: none;       
    }
`

export const Details1 = styled.div`
    z-index: -1;
    display: flex;
    position: absolute;
    top: 0px;
    left: 14px;
    margin-top: 324px;
    width: 100vw;
    height: 20px;
    
    color: ${props => props.theme.secondary};
    font-family: 'OpenSans';
    font-size: 12px;
    line-height: 154%;
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkScroll)`
    /* color: white; */
    display: flex;
    align-items: start;
    text-align: left;
    text-decoration: none;
    // padding: 0 1rem;
    margin-bottom: 8px;

    color: ${props => props.theme.primary};
    font-family: 'OpenSans';
    font-size: 14px;

    &:active {
        border-bottom: 3px solid #01bf71;
    }
`

export const NavLinksDOM = styled(LinkRouter)`
    z-index: 999;
    display: block;
    // align-items: center;
    text-decoration: none;
    // height: 100%;
    /* cursor: pointer; */

    color: ${props => props.theme.primary};
    font-family: 'OpenSans';
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.2px;
    padding-bottom: 16px;
    opacity: 0.9;

    &:active {
        border-bottom: 3px solid #01bf71;
    }
`


export const NavLinksDOM2 = styled(LinkRouter)`
    z-index: 999;
    display: block;
    // align-items: center;
    text-decoration: none;
    // height: 100%;
    /* cursor: pointer; */


    color: ${props => props.theme.primary};
    font-family: 'OpenSans';
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.2px;
    padding-bottom: 16px;
    opacity: 0.4;

    &:active {
        border-bottom: 3px solid #01bf71;
    }
`

export const CloseBtn = styled.nav`
    position: absolute;
    right: 14px;
    top: 14px;
    width: 30px;
    height: 30px;
    padding: 4px;
    text-align: right;

    color: ${props => props.theme.primary};
    font-family: 'OpenSans';
    font-weight: 500;
    font-size: 16px;


    

    // border: 1px solid white;
`

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 21.5px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    /* cursor: pointer; */
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: #fff;
        color: #010606;
    }
`