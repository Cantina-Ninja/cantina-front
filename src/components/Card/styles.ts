import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

export interface CardProps {
  background: string;
  color: string;
}

export interface LinkItemProps {
  color: string;
}

export const Container = styled.div<CardProps>`
  background: ${props => props.background};
  height: 118px;
  border-radius: 10px;
  color: ${props => props.color};
  max-width: 300px;
  min-width: 253px;
  font-weight: 600;
  transition: background-color 0.4s;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  & + & {
    margin-left: 40px;
  }

  h1 {
    font-size: 34px;
  }

  h2 {
    position: absolute;
    left: 15px;
    top: 10px;
    font-size: 19px;
  }

  &:hover {
    background: ${props => shade(0.2, props.background)};
  }
`;

export const LinkItem = styled(Link)<LinkItemProps>`
  position: absolute;
  right: 15px;
  top: 10px;
  font-size: 34px;

  svg {
    fill: ${props => shade(0.2, props.color)};
  }
`;
