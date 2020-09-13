import React, { useState, useEffect, useCallback } from 'react';
import Card from '../../components/Card';
import Table from '../../components/Table';
import { Main, CardsContainer, ContainerProdutos } from './styles';
import formatValue from '../../utils/formatValue';

import api from '../../services/api';

interface ProdutosProps {
  readonly id?: number;
  readonly skuProduto?: number;
  readonly nomeProduto: string;
  readonly validade: string;
  readonly qtdEstoque: number;
  readonly marca?: string;
  readonly valorUnit: number | string;
}

const Produtos: React.FC = () => {
  const [produtos, setProdutos] = useState<ProdutosProps[]>([]);

  const getProdutos = useCallback(async () => {
    const { data } = await api.get<ProdutosProps[]>('produtos');

    setProdutos(
      data.map(
        ({ skuProduto, nomeProduto, validade, qtdEstoque, valorUnit }) => {
          return {
            id: skuProduto,
            nomeProduto,
            validade: new Date(validade).toLocaleDateString('pt-br'),
            qtdEstoque,
            valorUnit: formatValue(Number(valorUnit)),
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
          backgroundColor="#FFC700"
          valueColor="#000"
          value={`${produtos.length}`}
          route="/produtos/new"
        />
      </CardsContainer>
      <hr />
      <ContainerProdutos>
        <Table
          columns={['Produtos', 'Validade', 'Quantidade', 'Valor']}
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
