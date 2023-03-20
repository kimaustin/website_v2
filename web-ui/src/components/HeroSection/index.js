import React, {useState} from 'react';
import Video from '../../videos/home.mp4';
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover= () => {
        setHover(!hover);
    };

    return (
        <HeroContainer id="home" offset={-80}>
            <HeroBg>
                <VideoBg autoplay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Austin Kim's Portfolio</HeroH1>
                <HeroP>Graphic Design, Sof Dev, Experience Design</HeroP>
                <HeroBtnWrapper>
                    <Button to="proj1" onMouseEnter={onHover} onMouseLeave={onHover}
                        primary="true" dark="false" smooth={true} duration={500}>
                        Look at work. {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
}

export default HeroSection;
