import React, { useState, useEffect, useCallback } from 'react';
import Card from '../../components/Card';
import Table from '../../components/Table';
import { Main, CardsContainer, ContainerProdutos } from './styles';
import formatCurrency from '../../utils/formatCurrency';

import api from '../../services/api';

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
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: any;
  size: number;
  sort: any;
  totalElements: number;
  totalPages: number;
}

const Produtos: React.FC = () => {
  const [produtos, setProdutos] = useState<ProdutosProps[]>([]);

  const getProdutos = useCallback(async () => {
    const { data } = await api.get<ItemsProps>('produtos');
    const { content } = data;

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
  }, []);

  useEffect(() => {
    getProdutos();
  }, [getProdutos]);

  return (
    <Main>
      <header>Produtos</header>

      <CardsContainer>
        <Card
          title="Produtos"
          backgroundColor="#6859EA"
          valueColor="#fff"
          value={`${produtos.length}`}
          route="/produtos/new"
        />
      </CardsContainer>
      <hr />
      <ContainerProdutos>
        <Table
          columns={['Produtos', 'Marca', 'Validade', 'Quantidade', 'Valor']}
          rows={produtos}
          routeEdit="produtos"
          routeRemove="produtos"
          stateRows={setProdutos}
        />
      </ContainerProdutos>
    </Main>
  );
};

export default Produtos;
