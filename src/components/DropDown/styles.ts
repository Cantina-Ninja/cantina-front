import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerDropDownProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored?: boolean;
}

interface ContainerProps {
  perspective: 'horizontal' | 'vertical';
}

export const Container = styled('div')<ContainerProps>`
  ${props =>
    props.perspective === 'vertical' &&
    css`
      margin-top: 8px;
    `}
  ${props =>
    props.perspective === 'horizontal' &&
    css`
      margin-top: 20px;
      margin-left: 4px;
      margin-right: 4px;
    `}
`;

export const Title = styled.p`
  margin-bottom: 15px;
`;

export const DropDownContainer = styled('div')<ContainerDropDownProps>`
  position: relative;
  cursor: pointer;
  background: #1C1F20;
  border-radius: 10px;
  border: 2px solid #1C1F20;
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
      color: #c2c9d0;
      svg {
        color: #6859ea;
      }
    `}

  svg {
    margin-right: 16px;
  }
`;

export const DropDownHeader = styled('div')`
  padding: 16px;
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const HeaderTitle = styled('div')`
  display: flex;
`;

export const DropDownListContainer = styled('div')`
  position: absolute;
  top: 65px;
  left: 0;
  z-index: 100;
  width: 100%;

  &::before {
    content: '';
    border-style: solid;
    border-color: #6859ea transparent;
    border-width: 0 6px 6px 6px;
    top: -6px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const DropDownList = styled('ul')`
  box-sizing: border-box;
  background-color: #1c1f20;
`;

export const ListItem = styled('li')`
  list-style: none;
  color: #fff;
  background-color: #1c1f20;
  padding: 20px 20px;
  transition: all 0.5s ease;

  border-width: 0 2px 0 2px;
  border-style: solid;
  border-color: #6859ea;

  &:first-child {
    border-width: 2px 2px 0 2px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:last-child {
    border-width: 0 2px 2px 2px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &:hover {
    background-color: #6859ea;
    color: #fff;
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
