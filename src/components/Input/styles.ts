import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #1C1F20;
  border-radius: 10px;
  border: 2px solid #1C1F20;
  padding: 16px;
  width: 100%;
  color: #44474A;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

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
