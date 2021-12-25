import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Designer, Engineer, Entreprenuer <br />
        
      </SectionTitle>
      <SectionText> 
      I live in a world of infinite possibilities, preferring to see things not as they are but as they could be. I know that life is limited only by the boundaries of our own beliefs, and i am very much driven to push the limits of, well, everything 
      </SectionText>
      <Button onClick={() => window.location = 'https://joyfolk.co'}>become a joyfolk</Button>
    </LeftSection>
  </Section>
);

export default Hero;