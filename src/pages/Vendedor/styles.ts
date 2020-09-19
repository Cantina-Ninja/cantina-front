import styled from 'styled-components';
import { Form as form } from '@unform/web';

export const Container = styled.main``;

export const ContainerVendas = styled.section`
  flex-direction: column;
`;
export const ContainerInfo = styled.div`
  display: flex;
  flex-wrap: wrap;

  flex: 1;
`;

export const ContainerItem = styled.div`
  flex: 1;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 h6 {
  }
  h1 {
    margin-top: 10px;
    color: #fff;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const ContainerHeaderRight = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;

  > div {
    flex: 1;
  }
`;

export const ContainerTable = styled.div`
  display: flex;
  flex-direction: row;

  table {
    flex: 1;
    &:first-child {
      margin-right: 1rem;
    }
  }
`;

export const ContainerCart = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 1rem;
`;

export const ContainerPrice = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 1rem;

  > div,
  > button {
    flex: 1;
  }
`;

export const Form = styled(form)`
  display: flex;
  flex-direction: column;
`;
