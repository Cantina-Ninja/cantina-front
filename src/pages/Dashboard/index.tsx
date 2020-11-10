import React, { useState, useCallback, useEffect } from 'react';
import ChartLine from '../../components/ChartLine';
import Card from '../../components/Card';
import { Main, ContainerChart, CardsContainer } from './styles';
import formatCurrency from '../../utils/formatCurrency';

import api from '../../services/api';
import Load from '../../components/Load';

const Dashboard: React.FC = () => {
  const [dashboard, setDashboard] = useState();
  const [totalMes, setTotalMes] = useState('');
  const [totalDia, setTotalDia] = useState('');

  const getDashboad = useCallback(async () => {
    try {
      const { data } = await api.get<any>('dashboard');
      setDashboard(data);
    } catch (error) {
      console.warn(error);
    }
  }, []);

  const getTotalMes = useCallback(async () => {
    try {
      const { data } = await api.get<any>('dashboard/totaldomes');
      setTotalMes(formatCurrency(Number(data[0])));
    } catch (error) {
      console.warn(error);
    }
  }, []);

  const getTotalDia = useCallback(async () => {
    try {
      const { data } = await api.get<any>('dashboard/totaldodia');
      setTotalDia(formatCurrency(Number(data[0])));
    } catch (error) {
      console.warn(error);
    }
  }, []);

  useEffect(() => {
    getDashboad();
    getTotalMes();
    getTotalDia();
  }, []);

  return (
    <Main>
      <header>Dashboard</header>
      <ContainerChart>
        {dashboard ? <ChartLine height={100} data={dashboard} /> : <Load />}
      </ContainerChart>
      <hr />
      <CardsContainer>
        <Card
          title="Vendas do dia"
          backgroundColor="#6859EA"
          valueColor="#fff"
          value={totalDia}
        />
        <Card
          title="Vendas do mês"
          backgroundColor="#1C1F20"
          valueColor="#fff"
          value={totalMes}
        />
      </CardsContainer>
    </Main>
  );
};

export default Dashboard;
