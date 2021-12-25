import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Specialties</SectionTitle>
    <SectionText>
      I've created projects across multiple industries, from Non-Tech to Tech. From Education to Extreme Sports. From Performing Arts to Complex Systems, and all of it are community-driven and is built together with the community.
      My go-to approach is always by first principles, which is to break down complicated problems into basic elements and then reassemble them from the ground up.
    </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Strategies</ListTitle>
            <ListParagraph>
              Experience with <br />
              turning ideas into profitable realities by focusing on small niches, organic marketing and maximizing resources
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Design</ListTitle>
            <ListParagraph>
              Experience with <br />
              Branding, UI/UX and Industrial Design using tools like Figma, Illustrator, Photoshop, AutoCAD. 
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiZend size="3rem" />
          <ListContainer>
            <ListTitle>Programming</ListTitle>
            <ListParagraph>
              Experience with <br />
              Javascript, React, NextJS, TailwindCSS, AWS, MYSQL, Graphql.
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
