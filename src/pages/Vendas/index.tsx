import React, { useState, useEffect, useCallback } from 'react';

import api from '../../services/api';
import formatCurrency from '../../utils/formatCurrency';
import formatCpf from '../../utils/formatCpf';

import Card from '../../components/Card';
import Load from '../../components/Load';
import Table from '../../components/Table';
import Pagination from '../../components/Pagination';
import { Main, ContainerVendas, CardsContainer } from './styles';

interface VendasProps {
  readonly id?: number;
  readonly idVenda?: number;
  readonly cpf?: string;
  readonly valorTotal: string;
  readonly dataVenda: string;
}

interface ItemsProps {
  content: VendasProps[];
  last: boolean;
  number: number;
  pageable: any;
  totalElements: number;
  totalPages: number;
}

const Vendas: React.FC = () => {
  const [vendas, setVendas] = useState<VendasProps[]>([]);
  const [lucroTotal, setTotalLucro] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [totalItemsCount, setTotalItemsCount] = useState(1);
  const itemsCountPerPage = 5;

  const getVendas = useCallback(async () => {
    try {
      const { data } = await api.get<ItemsProps>('vendas', {
        params: {
          search: '',
          page: activePage - 1,
          perPage: itemsCountPerPage,
          orderBy: 'dataVenda',
          orderDirection: 'DESC',
        },
      });

      const { content, totalElements } = data;

      setTotalItemsCount(totalElements);

      setVendas(
        content.map(({ idVenda, cpf = '', valorTotal, dataVenda }) => {
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
    } catch (error) {
      console.warn(error);
    }
  }, [activePage]);

  useEffect(() => {
    getVendas();
  }, [getVendas, activePage]);

  const handlePageChange = (pageNumber: any) => {
    setVendas([]);
    setActivePage(pageNumber);
  };

  return (
    <Main>
      <header>Vendas</header>
      <CardsContainer>
        <Card
          title="Qtd. Vendas"
          backgroundColor="#6859EA"
          valueColor="#fff"
          value={`${totalItemsCount}`}
        />
      </CardsContainer>
      <hr />
      <ContainerVendas>
        {!vendas.length && <Load />}
        <Table
          columns={['Nro. venda', 'CPF', 'Data', 'Total']}
          rows={vendas}
          routeView="vendas"
        />
      </ContainerVendas>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={4}
        onChange={pageNumber => handlePageChange(pageNumber)}
      />
    </Main>
  );
};

export default Vendas;
