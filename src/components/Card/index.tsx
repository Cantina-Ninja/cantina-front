import React from 'react';
import { MdAddCircle } from 'react-icons/md';

import { Container, LinkItem } from './styles';

export interface CardProps {
  title: string;
  backgroundColor: string;
  valueColor: string;
  value: string;
  route?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  backgroundColor,
  valueColor,
  value,
  route = '',
}) => (
  <Container background={backgroundColor} color={valueColor}>
    <h2>{title}</h2>
    <h1>{value}</h1>
    <LinkItem title={`Adicionar ${title}`} to={route} color={valueColor}>
      <MdAddCircle />
    </LinkItem>
  </Container>
);

export default Card;
