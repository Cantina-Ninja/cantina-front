import React, {
  useLayoutEffect,
  useState,
  useCallback,
  useEffect,
} from 'react';
import ChartLine from '../../components/ChartLine';
import Card from '../../components/Card';
import { Main, ContainerChart, CardsContainer } from './styles';

import api from '../../services/api';
import Load from '../../components/Load';

const Dashboard: React.FC = () => {
  const [dashboard, setDashboard] = useState<any[]>([]);
  const { innerWidth }: any = window;

  const getDashboad = useCallback(async () => {
    try {
      const { data } = await api.get<any>('dashboard');

      setDashboard(data);
    } catch (error) {
      console.warn(error);
    }
  }, []);

  useLayoutEffect(() => {
    console.log(innerWidth);
  }, [innerWidth]);

  useEffect(() => {
    getDashboad();
  }, []);

  return (
    <Main>
      <header>Dashboard</header>
      <ContainerChart>
        <ChartLine height={100} data={dashboard} />
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
