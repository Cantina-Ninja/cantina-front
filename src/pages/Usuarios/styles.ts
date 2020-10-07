import styled from 'styled-components';

export const Main = styled.main`
  & > div {
    display: flex;
    justify-content: center;
    button {
      width: 30%;
    }
  }
`;

export const ContainerUsuarios = styled.section`
  position: relative;
  flex-direction: column;
`;

export const CardsContainer = styled.div`
  margin: 0 -30px;
`;
