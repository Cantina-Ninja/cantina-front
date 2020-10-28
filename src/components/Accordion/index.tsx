import React, { useState, useRef } from 'react';
import { MdAddCircle } from 'react-icons/md';

import { Container, Content } from './styles';

export interface AccordionProps {
  title: string;
}

const Accordion: React.FC<AccordionProps> = ({ children, title = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const content: any = useRef(null);

  return (
    <Container>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      <Content ref={content} isOpen={isOpen}>
        {children}
      </Content>
    </Container>
  );
};

export default Accordion;
