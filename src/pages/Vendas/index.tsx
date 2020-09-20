import React, { useState, useEffect, useCallback } from 'react';
import { Main, ContainerVendas, CardsContainer } from './styles';

import api from '../../services/api';
import formatCurrency from '../../utils/formatCurrency';
import formatCpf from '../../utils/formatCpf';

import Card from '../../components/Card';
import Table from '../../components/Table';

interface VendasProps {
  readonly id?: number;
  readonly idVenda?: number;
  readonly cpf?: string;
  readonly valorTotal: string;
  readonly dataVenda: string;
}

const Vendas: React.FC = () => {
  const [vendas, setVendas] = useState<VendasProps[]>([]);
  const [lucroTotal, setTotalLucro] = useState(0);

  const getVendas = useCallback(async () => {
    const { data } = await api.get<VendasProps[]>('vendas');

    setVendas(
      data.map(({ idVenda, cpf = '', valorTotal, dataVenda }) => {
        setTotalLucro(
          (prevTotalLucro): number => prevTotalLucro + Number(valorTotal),
        );

        return {
          id: idVenda,
          idVenda,
          cpf: formatCpf(cpf),
          dataVenda: new Date(dataVenda).toLocaleDateString('pt-br'),
          valorTotal: formatCurrency(Number(valorTotal)),
        };
      }),
    );
  }, []);

  useEffect(() => {
    getVendas();
  }, [getVendas]);

  return (
    <Main>
      <header>Vendas</header>
      <CardsContainer>
        <Card
          title="Qtd. vendas"
          backgroundColor="#6859EA"
          valueColor="#fff"
          value={`${vendas.length}`}
        />
        <Card
          title="Lucro total"
          backgroundColor="#6859EA"
          valueColor="#fff"
          value={`${formatCurrency(lucroTotal)}`}
        />
      </CardsContainer>
      <hr />
      <ContainerVendas>
        <Table
          columns={['Nro. venda', 'CPF', 'Data', 'Total']}
          rows={vendas}
          routeView="vendas"
        />
      </ContainerVendas>
      <hr />
    </Main>
  );
};

export default Vendas;
