import styled from 'styled-components';
import { Form as form } from '@unform/web';

export const Container = styled.main``;

export const Form = styled(form)`
  flex: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 10px;

  button {
    margin: 10px;
  }
`;
