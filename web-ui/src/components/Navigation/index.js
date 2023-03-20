import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';
import { Container, NonMobile1, Mobile, Rotating, NaviLink} from './NavigationElements';

const Navigation = ({toggle, aboutToggle}) => {

    const location = useLocation();
    
    let currPage = location.pathname.split("/").pop();

    const [dotOpened, setDotOpened] = useState(false);

    const toggleDotOpened = () => {
        setDotOpened(!dotOpened);
        console.log("dot open status" + dotOpened);
    };

    return (
        <Container currPage={currPage} 
            // as={motion.div} initial={{ x: '0', y: '0' }} 
            // animate={aboutToggle ? {  x: '25vw', y: 0 } : { x: '0', y: '0' }}
            // transition={pageTransition}
        >
            <NonMobile1>
                <NaviLink currpage={currPage} thispage={''} to="/">A. Kim</NaviLink>
                <NaviLink currpage={currPage} thispage={'works'} to="/works">Index</NaviLink>
                <NaviLink currpage={currPage} thispage={'info'} to="/info" style={{position: 'fixed', bottom: '2.9vh', left: 'calc(3.5vw + .27rem)'}}>Info</NaviLink>
            </NonMobile1>
            {/* <Mobile onClick={toggle}><Rotating>â†‘</Rotating></Mobile> */}
        </Container>
    );
};

export default Navigation;