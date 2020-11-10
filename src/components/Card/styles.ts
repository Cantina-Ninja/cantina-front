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

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 0 30px 30px;

  h1 {
    margin-top: 0.5rem;
    font-size: 34px;
  }

  h2 {
    position: absolute;
    left: 15px;
    top: 10px;
    font-size: 19px;
  }

  transition: all 0.3s;

  &:hover {
    background: ${props => shade(0.2, props.background)};

    transform: translate3d(0, -0.2rem, 0);
  }
`;

export const LinkItem = styled(Link)<LinkItemProps>`
  position: absolute;
  right: 15px;
  top: 10px;
  font-size: 34px;
  display: block;

  svg {
    fill: ${props => shade(0.2, props.color)};

    transform: rotate(0deg);
    transition: all 0.5s ease-in-out 0s;

    &:hover {
      transform: rotate(180deg);
    }
  }
`;
