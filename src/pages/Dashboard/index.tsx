import React from 'react';
import ChartLine from '../../components/ChartLine';
import Card from '../../components/Card';
import { Main, ContainerChart, CardsContainer } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Main>
      <header>Dashboard</header>
      <ContainerChart>
        <ChartLine height={70} />
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
