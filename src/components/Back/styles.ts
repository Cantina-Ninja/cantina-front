import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  border: 0;
  background: transparent;

  position: absolute;
  left: 25px;
  top: 25px;

  svg {
    font-size: 3rem;
    color: rgb(170, 170, 170);
    transition: all 0.2s;

    &:hover {
      color: #fff;
    }
  }
`;
