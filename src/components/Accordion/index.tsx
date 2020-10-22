import React from 'react';
import { MdAddCircle } from 'react-icons/md';

import { Container, Content } from './styles';

export interface AccordionProps {
  title: string;
}

const Accordion: React.FC<AccordionProps> = ({ children, title = '' }) => (
  <Container>
    <h1>{title}</h1>
    <Content>{children}</Content>
  </Container>
);

export default Accordion;
