import React, { useState, useEffect, useCallback } from 'react';
import Card from '../../components/Card';
import Table from '../../components/Table';
import { Main } from './styles';

import api from '../../services/api';

interface ComboProps {
  readonly id?: number;
  readonly skuCombo?: number;
  readonly nomeCombo: string;
  readonly valor: number;
  readonly unitDesc: number;
}

interface ProdutosProps {
  readonly id?: number;
  readonly skuProduto?: number;
  readonly nomeProduto: string;
  readonly validade: string;
  readonly qtdEstoque: number;
  readonly marca?: string;
  readonly valorUnit: number;
}

const Produtos: React.FC = () => {
  const [combos, setCombo] = useState<ComboProps[]>([]);
  const [produtos, setProdutos] = useState<ProdutosProps[]>([]);

  const getCombos = useCallback(async () => {
    const { data } = await api.get<ComboProps[]>('combos');

    setCombo(
      data.map(({ skuCombo, nomeCombo, valor, unitDesc }) => {
        return {
          id: skuCombo,
          nomeCombo,
          valor,
          unitDesc,
        };
      }),
    );
  }, []);

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
    getCombos();
    getProdutos();
  }, [getCombos, getProdutos]);

  return (
    <Main>
      <header>Produtos</header>
      <section className="produtos">
        <Card
          title="Produtos"
          backgroundColor="#FFC700"
          valueColor="#000"
          value={`${produtos.length}`}
          route="/produtos/new"
        />
        <Card
          title="Combos"
          backgroundColor="#7371FF"
          valueColor="#fff"
          value={`${combos.length}`}
          route="/combos/new"
        />
      </section>
      <section className="combos-produtos">
        <Table
          columns={['Combos', 'Valor', 'Desconto']}
          rows={combos}
          routeEdit="combos"
          routeRemove="combos"
        />
        <hr />
        <Table
          columns={['Produtos', 'Validade', 'Quantidade', 'Valor']}
          rows={produtos}
          routeEdit="produtos"
          routeRemove="produtos"
        />
      </section>
    </Main>
  );
};

export default Produtos;
