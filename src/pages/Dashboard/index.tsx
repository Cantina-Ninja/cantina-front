import React from 'react';
import ChartLine from '../../components/ChartLine';
import Card from '../../components/Card';
import { Main, ContainerChart, CardsContainer } from './styles';

const Dashboard: React.FC = () => {
  const data = [
    1500,
    200,
    7000,
    100,
    700,
    900,
    500,
    4000,
    500,
    4000,
    500,
    4000,
  ];

  return (
    <Main>
      <header>Dashboard</header>
      <ContainerChart>
        <ChartLine height={100} data={data} />
      </ContainerChart>
      <hr />
      <CardsContainer>
        <Card
          title="Produtos"
          backgroundColor="#FFC700"
          valueColor="#000"
          value="111"
          route="/produtos/new"
        />
      </CardsContainer>
    </Main>
  );
};

export default Dashboard;
