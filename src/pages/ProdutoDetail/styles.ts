import styled from 'styled-components';
import { Form as form } from '@unform/web';

export const Container = styled.main``;

export const Form = styled(form)`
  display: flex;
  width: 100%;
  margin-top: 10px;

  flex-wrap: wrap;

  div {
    flex: 1;
  }
`;
