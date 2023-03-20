import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const MobileBarContainer = styled.aside`
    /* overflow: hidden; */
    position: fixed;
    z-index: ${({ isOpen }) => (isOpen ? '0' : '999')};
    width: 100%;
    height: 44vh;
    background: #0d0d0d;
    display: grid;
    /* backdrop-filter: ${({ isOpen }) => (isOpen ? 'blur(8px)' : 'brightness(50%)')}; */
    align-items: center;
    /* top: 0; */
    bottom: ${({ isOpen }) => (isOpen ? '-100%' : '6vh')};
    transition: 0.4s ease-in-out;
`;


export const Background = styled.div`
    width: 100vw;
    height: 89vh;
    position: fixed;
    top: 5vh;

    cursor: default;
    background: black;
    z-index: 998;
    opacity: ${({isOpen}) => (isOpen ? 0 : 0.6)};
    /* top: ${({isOpen}) => (isOpen ? '100vh' : '0vh')}; */
    transition: 0.4s all ease-in-out;
`

export const Icon = styled.div`
    /* z-index: 999;
    position: absolute;
    top: .75em;
    left: .85em;
    background: transparent;
    font-size: 1.5rem;
    /* cursor: pointer; */
    color: white;
    padding-left: 6px;
    padding-top: 4px;
    border: 1.5px solid white;
    height: 40px;
    border-radius:50%;
    width: 40px;

    &:hover {
        color: black;
        background-color: white;
        transition: all 0.3s ease-in-out;
    } */
    z-index: 999;
    display: block;
    position: absolute;
    top: 94vh;
    left: 0;
    background: black;
    font-size: 5vh;
    /* cursor: pointer; */
    color: white;
    background-color: black;
    padding-left: 2.5vw;
    padding-top: 4px;
    border: 1.5px solid black;
    height: 6vh;
    /* border-radius:50%; */
    width: 11vw;

    &:hover {
        color: white;
        background-color: black;
        transition: all 0.3s ease-in-out;
    }
`;

export const MobileBarWrapper = styled.div`
    z-index: 999;
    color: #fff;
`;

export const MobileBarMenu = styled.ul`
    margin-top: 1vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: left;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const MobileBarRoute = styled(LinkRouter)`
    white-space: nowrap;
    padding-left: 16px;
    color: white;
    opacity: 0.8;
    font-size: 5rem;
    outline: none;
    border: none;
    /* cursor: pointer; */
    /* transition: all 0.2s ease-in-out; */
    text-decoration: none;

    &:hover {
        /* transition: all 0.2s ease-in-out; */
        /* background: #fff; */
        color: white;
        opacity: 1;
        /* border-right: 5px solid white; */
    }
`;