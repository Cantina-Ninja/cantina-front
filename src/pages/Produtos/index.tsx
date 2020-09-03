import React, { useState, useEffect, useCallback } from 'react';
import Card from '../../components/Card';
import Table from '../../components/Table';
import { Main } from './styles';

import api from '../../services/api';

interface ComboProps {
  nomeCombo?: string;
  unitDesc?: number;
  valor?: number;
}

interface ProdutosProps {
  id?: number;
  skuProduto?: number;
  nomeProduto: string;
  validade: string;
  qtdEstoque: number;
  marca?: string;
  valorUnit: number;
}

const Produtos: React.FC = () => {
  const [combos, setCombo] = useState<ComboProps[]>([]);
  const [produtos, setProdutos] = useState<ProdutosProps[]>([]);

  const getProdutos = useCallback(async () => {
    const { data } = await api.get<ProdutosProps[]>('produtos');

    setProdutos(
      data.map(
        ({ skuProduto, nomeProduto, validade, qtdEstoque, valorUnit }) => {
          return {
            id: skuProduto,
            nomeProduto,
            validade,
            qtdEstoque,
            valorUnit,
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
      <section className="produtos">
        <Card
          title="Produtos"
          backgroundColor="#FFC700"
          valueColor="#000"
          value="111"
          route="/produtos/produto"
        />
        <Card
          title="Combos"
          backgroundColor="#7371FF"
          valueColor="#fff"
          value="R$ 1.024"
          route="/produtos/combo"
        />
        <Card
          title="Combos"
          backgroundColor="#7371FF"
          valueColor="#fff"
          value="R$ 1.024"
        />
      </section>
      <section className="combos-produtos">
        <Table
          columns={['Produtos', 'Validade', 'Quantidade', 'Marca', 'Valor']}
          rows={produtos}
          routeEdit="x"
          routeRemove="x"
        />
        <hr />
      </section>
    </Main>
  );
};

export default Produtos;
