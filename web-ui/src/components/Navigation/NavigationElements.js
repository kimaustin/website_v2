import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Container = styled.div`
    z-index: 999;
    position: fixed;
    display: ${({currpage}) => currpage === 'main' && 'none'};
    left: 0;
    height: 100vh;
    width: 3.5rem;

    /* cursor: url("/imgs/c_main.svg"), auto; */
    cursor: crosshair;


    text-orientation: mixed;
    writing-mode: vertical-rl;

    @media screen and (max-width: 811px) {
        left: 0;
        top: 0;
        width: calc(100vw);
        height: 6vh;
        /* border-top: 1.5px solid #201D17;
        border-left: 1.5px solid #201D17;
        border-right: 1px solid #201D17; */
        background: none;
        text-orientation: unset;
        writing-mode: horizontal-tb;
        font-size: 1.1rem;
        letter-spacing: -.04rem;
        /* background: black; */
    }
`;

export const Controller = styled.div`
    z-index: 999;
    position: fixed;
    left: 50vw;
    left: 30%;
    top: 45vh;

    border-radius: 3rem;
    width: 2rem;
    height: 2rem;
    background: red;

    &:hover {
        opacity: 0.5;
        transform: translate(-50%, -50%), scale(1.5);
    }
`

export const NonMobile1 = styled.ul`
    display: flex;
    align-items: center;
    position: fixed;
    left: calc(8.3vw - 3.75rem - 20px);
    left: calc(7vw - 3.5rem);
    left: calc(3.5vw);
    top: 3vh;
    width: 3.5rem;
`;

export const NaviLink = styled(LinkRouter)`
    position: relative;
    width: 3rem;
    height: 8.75rem;
    
    margin-bottom: .75rem;
    padding-top: 1.15rem;
    padding-right: .75rem;

    cursor: crosshair;

    color: #201D17;
    background: #FFFDFA;
    color: ${({currpage, thispage}) => 
        currpage === thispage && '#FDFEF5'
    };
    background: ${({currpage, thispage}) => 
        currpage === thispage && '#201D17;'
    };
    border: 1px solid #201D17;

    text-decoration: none;
    font-size: 1.2rem;
    font-family: 'Iskoola';
    font-family: 'JejuMyeongjo';

    transition: 0.15s all ease-in-out;

    &:hover {
        /* cursor: url("/imgs/c_main.svg"), auto; */
        cursor: pointer;
        background: #201D17;
        color: #FDFEF5;
    }
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