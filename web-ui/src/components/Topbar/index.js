import React from 'react';
import { TopbarContainer, Icon, CloseIcon, TopbarWrapper, TopbarMenu, TopbarLink, TopBtnWrap, TopbarRoute } from './TopbarElements'

const Topbar = ({isOpen, toggle}) => {
    return (
        <TopbarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>→</Icon>
            <TopbarWrapper>
                <TopbarMenu>
                    <TopbarRoute to="/works">buttonAction</TopbarRoute>
                    <TopbarLink to="landing2" onClick={toggle}>Landing</TopbarLink>
                    <TopbarLink to="about" onClick={toggle}>About</TopbarLink>
                    <TopbarLink to="work" onClick={toggle}>Work</TopbarLink>
                    <TopbarLink to="nektine" onClick={toggle}>Nektine</TopbarLink>
                </TopbarMenu>
                <TopBtnWrap>
                    <TopbarRoute to="/buttonAction">buttonAction</TopbarRoute>
                </TopBtnWrap>
            </TopbarWrapper>
        </TopbarContainer>
    )
}

export default Topbar; 
