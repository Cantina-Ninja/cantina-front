import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import Table from '../../components/Table';
import { Main } from './styles';

interface ComboProps {
  nomeCombo?: string;
  unitDesc?: number;
  valor?: number;
}

const Produtos: React.FC = () => {
  const data = [
    {
      skuCombo: 1,
      nomeCombo: 'Combo - Lanche Rápido',
      unitDesc: 3.0,
      produtos: [
        {
          skuProduct: 1,
          nomeProduto: 'Coca-cola 350ml',
          validade: '31/08/2020 21:00',
          qtdEstoque: 18,
          marca: 'Gelfoods',
          valorUnir: 4.2,
        },
        {
          skuProduct: 1,
          nomeProduto: 'HotDog Completo',
          validade: '31/08/2020 21:00',
          qtdEstoque: 18,
          marca: 'CantinaNinja',
          valorUnir: 8.9,
        },
      ],
    },
    {
      skuCombo: 2,
      nomeCombo: 'Combo2 - Lanche Rápido',
      unitDesc: 3.0,
      produtos: [
        {
          skuProduct: 1,
          nomeProduto: 'Coca-cola 350ml',
          validade: '31/08/2020 21:00',
          qtdEstoque: 18,
          marca: 'Gelfoods',
          valorUnir: 4.2,
        },
        {
          skuProduct: 1,
          nomeProduto: 'HotDog Completo',
          validade: '31/08/2020 21:00',
          qtdEstoque: 18,
          marca: 'CantinaNinja',
          valorUnir: 8.9,
        },
      ],
    },
  ];

  const [combos, setCombo] = useState<ComboProps[]>([]);

  useEffect(() => {
    setCombo(
      data.map(({ nomeCombo: titulo, unitDesc, produtos }) => {
        return { titulo, valor: 0, unitDesc };
      }),
    );
  }, []);

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
        <Card
          title="Combos"
          backgroundColor="#7371FF"
          valueColor="#fff"
          value="R$ 1.024"
        />
        <Card
          title="Combos"
          backgroundColor="#7371FF"
          valueColor="#fff"
          value="R$ 1.024"
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
          header={['Combo', 'Valor', 'Desconto']}
          data={combos}
          routeEdit=""
          routeRemove=""
        />
        <hr />
      </section>
    </Main>
  );
};

export default Produtos;
