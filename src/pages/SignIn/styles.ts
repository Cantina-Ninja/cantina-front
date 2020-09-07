import styled, { keyframes } from 'styled-components';
import { Form as form } from '@unform/web';
import bgSignIn from '../../assets/bgSignIn.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

const fromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px)
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content = styled.div`
  animation: ${fromLeft} 1.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 800px;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${bgSignIn}) no-repeat center;
  background-size: cover;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  line-height: 1.3;
  margin-bottom: 35px;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  img {
    margin-left: 25px;
    width: 6rem;
  }

  h2 {
    font-size: 1.2rem;
  }
  h1 {
    color: #fff;
    font-size: 2rem;
  }
`;

export const Form = styled(form)`
  flex: flex;
  flex-direction: row;
  width: 50%;

  button {
    margin-top: 35px;
  }
`;
