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
  readonly marca: string;
  readonly validade: string;
  readonly qtdEstoque: number;
  readonly valorUnit: number | string;
}

const Produtos: React.FC = () => {
  const [produtos, setProdutos] = useState<ProdutosProps[]>([]);

  const getProdutos = useCallback(async () => {
    const { data } = await api.get<ProdutosProps[]>('produtos');

    setProdutos(
      data.map(
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
