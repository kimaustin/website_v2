import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    position: fixed;
    z-index: 998;
    display: grid;
    grid-template-columns: repeat(auto-fill, 12vw);
    /* grid-template-rows: repeat(auto-fill, 15vh); */
    grid-gap: 6px;
    justify-content: space-evenly;
    left: 46px;
    top: 0;
    width: calc(100vw - 46px);
    height: 100vh;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 110px;
    
    overflow-x: hidden;
    overflow-y: scroll;

    -ms-overflow-style: none; 
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
    /* background: ${props => props.theme.bgN}; */

    @media screen and (max-width: 767px) {
        grid-template-columns: repeat(auto-fill, 27.5vw);
        grid-template-rows: unset;
        padding-left: 6px;
        padding-right: 6px;
        padding-top: 134px;
        padding-bottom: 70px;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    padding-bottom: 10px;

    text-align: center;
    align-items: center;
    /* border: 1px solid blue; */

    img {
        max-height: calc(100%);
        max-width: 100%;
        object-fit: scale-down;
        /* border: 1px solid blue; */
    }
`

export const Label = styled.div`
    padding-top: 4px;
    font-family: "JejuMyeongjo";
    font-size: 14px;
    color: ${props => props.theme.primary};
`