import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const TopbarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 80%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    /* top: 0; */
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    left: 1.5rem;
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
    }
`;

export const TopbarWrapper = styled.div`
    color: #fff;
`;

export const TopbarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const TopbarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    /* cursor: pointer; */

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`;

export const TopBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const TopbarRoute = styled(LinkRouter)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    /* cursor: pointer; */
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;