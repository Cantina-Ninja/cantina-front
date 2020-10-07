import styled from 'styled-components';

export const Container = styled.main``;

export const ContainerProdutos = styled.section`
  position: relative;
  flex-direction: column;
`;
export const ContainerInfo = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

export const ContainerItem = styled.div`
  flex: 1;
  min-width: 400px;
  margin: 15px 20px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 h6 {
  }
  p {
    margin-top: 10px;
    color: #fff;
  }
`;
