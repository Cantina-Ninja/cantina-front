import styled, { css } from 'styled-components';

interface AccordionProps {
  isOpen: boolean;
}

export const Container = styled.div<AccordionProps>`
  display: flex;
  flex-direction: column;

  button {
    text-align: left;
    font-size: 1.5rem;
    background: none !important;
    border: 0;
    width: 100% !important;
    color: #c2c9d0;

    display: flex;
    align-items: center;

    svg {
      width: 2rem;
      height: 2rem;
      fill: #6859ea;
      transition: transform 0.2s ease-in-out;
    }

    ${props =>
      props.isOpen &&
      css`
        svg {
          transform: rotate(90deg);
        }
      `}

    span {
      margin-right: 0.5rem;
    }
  }
`;

export const Content = styled.div<AccordionProps>`
  /* here comes the compromise, set a max-height that would for your usual contents*/
  margin-top: 1.5rem;

  img {
    width: 600px;
  }

  display: none;
  ${props =>
    props.isOpen &&
    css`
      display: block;
    `}
`;
