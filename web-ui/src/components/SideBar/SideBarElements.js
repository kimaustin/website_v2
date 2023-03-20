import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: auto;
    bottom: auto;
    z-index: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 20vw;
    height: 100vh;
    min-width: 240px;
    /* -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row; */
    flex-direction: row;
    /* -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start; */
    justify-content:flex-start
`

export const Wrapper = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: .3vw;
    height: 100%;
    min-width: 6px;
    /* -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column; */
    /* -ms-flex-direction: column; */
    flex-direction: column;
    /* -webkit-box-pack: justify; */
    /* -webkit-justify-content: space-between; */
    /* -ms-flex-pack: justify; */
    justify-content: space-between;
    border: none;
    background-color:#fdceeb;
    overflow: hidden;
`

export const SingleTick = styled.div`
    width: 100%;
    height: 1px;
    margin-top: 1vh;
    margin-bottom: 1vh;
    border-bottom: 1px solid #2569f1;
    background-color:transparent;
`
