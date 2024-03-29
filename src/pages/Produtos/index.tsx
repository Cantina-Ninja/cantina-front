import React, { useState, useEffect, useCallback } from 'react';
import formatCurrency from '../../utils/formatCurrency';

import Pagination from '../../components/Pagination';
import Card from '../../components/Card';
import Table from '../../components/Table';
import { Main, CardsContainer, ContainerProdutos } from './styles';

import api from '../../services/api';
import Load from '../../components/Load';

interface ProdutosProps {
  readonly id?: number;
  readonly skuProduto?: number;
  readonly nomeProduto: string;
  readonly marca: string;
  readonly validade: string;
  readonly qtdEstoque: number;
  readonly valorUnit: number | string;
}

interface ItemsProps {
  content: ProdutosProps[];
  last: boolean;
  number: number;
  pageable: any;
  totalElements: number;
  totalPages: number;
}

const Produtos: React.FC = () => {
  const [produtos, setProdutos] = useState<ProdutosProps[]>([]);
  const [activePage, setActivePage] = useState(1);
  const [totalItemsCount, setTotalItemsCount] = useState(1);
  const itemsCountPerPage = 5;

  const getProdutos = useCallback(async () => {
    try {
      const { data } = await api.get<ItemsProps>('produtos', {
        params: {
          search: '',
          page: activePage - 1,
          perPage: itemsCountPerPage,
          orderBy: 'skuProduto',
          orderDirection: 'DESC',
        },
      });

      const { content, totalElements } = data;

      setTotalItemsCount(totalElements);

      setProdutos(
        content.map(
          ({
            skuProduto,
            nomeProduto,
            marca,
            validade,
            qtdEstoque,
            valorUnit,
          }) => {
            return {
              id: skuProduto,
              nomeProduto,
              marca,
              validade: new Date(validade).toLocaleDateString('pt-br'),
              qtdEstoque,
              valorUnit: formatCurrency(Number(valorUnit)),
            };
          },
        ),
      );
    } catch (error) {
      console.warn(error);
    }
  }, [activePage]);

  useEffect(() => {
    getProdutos();
  }, [getProdutos, activePage]);

  useEffect(() => {
    if (produtos.length > 0 && produtos.length !== itemsCountPerPage) {
      getProdutos();
    }
  }, [getProdutos, produtos, itemsCountPerPage]);

  const handlePageChange = (pageNumber: any) => {
    setProdutos([]);
    setActivePage(pageNumber);
  };

  return (
    <Main>
      <header>Produtos</header>
      <CardsContainer>
        <Card
          title="Qtd. Produtos"
          backgroundColor="#6859EA"
          valueColor="#fff"
          value={`${totalItemsCount}`}
          route="/produtos/new"
        />
      </CardsContainer>
      <hr />
      <ContainerProdutos>
        {!produtos.length && <Load />}
        <Table
          columns={['Produtos', 'Marca', 'Validade', 'Quantidade', 'Valor']}
          rows={produtos}
          routeEdit="produtos"
          routeRemove="produtos"
          stateRows={setProdutos}
        />
      </ContainerProdutos>
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

export default Produtos;
