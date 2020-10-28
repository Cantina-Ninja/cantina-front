import styled, { css } from 'styled-components';

interface AccordionProps {
  isOpen: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  button {
    text-align: left;
    font-size: 1.5rem;
    background: none !important;
    border: 0;
    width: 100% !important;
    color: #6859ea;
  }
`;

export const Content = styled.div<AccordionProps>`
  /* here comes the compromise, set a max-height that would for your usual contents*/

  display: none;
  ${props =>
    props.isOpen &&
    css`
      display: block;
    `}
`;
