import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerInputProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

interface ContainerProps {
  perspective: 'horizontal' | 'vertical';
}

export const ContainerInput = styled.div<ContainerInputProps>`
  background: #1C1F20;
  border-radius: 10px;
  border: 2px solid #1C1F20;
  padding: 16px;
  width: 100%;
  color: #44474A;

  display: flex;
  align-items: center;


  ${props =>
    props.isErrored &&
    css`
      color: #d72638;
      border-color: #d72638;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #6859ea;
      border-color: #6859ea;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #6859ea;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #C2C9D0;
    height: 16px;

    &::placeholder {
      color: #44474A;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #d72638;
    color: #fff;

    &::before {
      border-color: #d72638 transparent;
    }
  }
`;

export const Container = styled.div<ContainerProps>`
  ${props =>
    props.perspective === 'vertical' &&
    css`
      & + div {
        margin-top: 8px;
      }
    `}
  ${props =>
    props.perspective === 'horizontal' &&
    css`
      margin-top: 20px;
      margin-left: 8px;
      margin-right: 8px;
    `}
`;

export const Title = styled.p`
  margin-bottom: 15px;
`;
