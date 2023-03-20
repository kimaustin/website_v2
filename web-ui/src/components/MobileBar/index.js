import React from 'react';
import { MobileBarContainer, Background, Icon, MobileBarWrapper, MobileBarMenu, MobileBarRoute } from './MobileBarElements'

const MobileBar = ({isOpen, toggle}) => {
    return (
        <MobileBarContainer isOpen={isOpen}>
            {/* <Background isOpen={isOpen}/> */}
            {/* <Icon onClick={toggle}>↓</Icon> */}
            <MobileBarWrapper>
                <MobileBarMenu>
                    <MobileBarRoute to="/works" onClick={toggle}>WORK</MobileBarRoute>
                    <MobileBarRoute to="/lab" onClick={toggle}>LAB</MobileBarRoute>
                    <MobileBarRoute to="/info" onClick={toggle}>INFO</MobileBarRoute>
                </MobileBarMenu>
            </MobileBarWrapper>
        </MobileBarContainer>
    )
};

export default MobileBar; 
