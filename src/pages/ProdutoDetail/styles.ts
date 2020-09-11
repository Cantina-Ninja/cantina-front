import styled from 'styled-components';
import { Form as form } from '@unform/web';

export const Container = styled.main``;

export const Form = styled(form)`
  flex: flex;
  flex-direction: row;
  width: 100%;

  button {
    margin-top: 5px;
  }
`;
