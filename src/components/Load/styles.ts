import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  background: rgba(17, 20, 21, 0.8);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  .spinner {
    border: 8px solid rgba(17, 20, 21, 0.1);
    border-left-color: #6859ea;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
