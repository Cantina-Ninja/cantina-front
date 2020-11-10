import React, { useState, useRef } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { Container, Content } from './styles';

export interface AccordionProps {
  title: string;
}

const Accordion: React.FC<AccordionProps> = ({ children, title = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const content: any = useRef(null);

  return (
    <Container isOpen={isOpen}>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <MdKeyboardArrowRight />
      </button>
      <Content ref={content} isOpen={isOpen}>
        {children}
      </Content>
      <hr />
    </Container>
  );
};

export default Accordion;
