import styled from 'styled-components';
import { Form as form } from '@unform/web';

export const Container = styled.main``;

export const InputsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  & > div {
    flex: 1;
  }
`;

export const Form = styled(form)`
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
    justify-content: center;
    button {
      width: 30%;
    }
  }
`;
