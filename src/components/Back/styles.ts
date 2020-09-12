import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  border: 0;
  background: transparent;

  position: absolute;
  left: 2rem;
  top: 2.5rem;

  svg {
    font-size: 3rem;
    color: rgb(170, 170, 170);
    transition: all 0.2s;

    &:hover {
      color: #fff;
    }
  }
`;
