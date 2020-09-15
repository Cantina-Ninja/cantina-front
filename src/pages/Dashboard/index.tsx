import React, { useLayoutEffect, useEffect } from 'react';
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

  const { innerWidth }: any = window;

  useLayoutEffect(() => {
    console.log(innerWidth);
  }, [innerWidth]);

  return (
    <Main>
      <header>Dashboard</header>
      <ContainerChart>
        <ChartLine height={100} data={data} />
      </ContainerChart>
      <hr />
      <CardsContainer>
        <Card
          title="Vendas do dia"
          backgroundColor="#6859EA"
          valueColor="#fff"
          value="1K"
        />
        <Card
          title="Meta diaria"
          backgroundColor="#1C1F20"
          valueColor="#fff"
          value="2K"
        />
        <Card
          title="Vendas do mês"
          backgroundColor="#1C1F20"
          valueColor="#fff"
          value="20K"
        />
      </CardsContainer>
    </Main>
  );
};

export default Dashboard;
