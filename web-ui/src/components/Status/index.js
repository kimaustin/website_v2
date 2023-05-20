import React from 'react';
import { Container, BotSection, TopSection, Marquee, HoverContainer} from './StatusComponents';

const Status = () => {
    return (
        <Container>
            {/* <TopSection>
                Currently based in Brooklyn, NY
            </TopSection>
            <BotSection>
                Last Updated: 12/20/21
            </BotSection> */}
            <HoverContainer>
                {/* <div>&nbsp; #Web #Digital #Photography #Music #Art #SoftwareDev #UI #UX #GraphicDesign #Web #Digital #Photography #Music #Art #SoftwareDev #UI #UX #GraphicDesign</div> */}
                <Marquee starter={true}>#GraphicDesign #Web #Photography #Create #SoftwareDev #UI #UX</Marquee>
                <Marquee starter={false}>#GraphicDesign #Web #Photography #Create #SoftwareDev #UI #UX</Marquee>
            </HoverContainer>
        </Container>
    );
};

export default Status;
 