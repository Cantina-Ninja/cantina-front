import React from 'react';

import Card from '../../components/Card';

import Table from '../../components/Table';

import { Main } from './styles';

const Produtos: React.FC = () => {
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
          route="/produtos/combo"
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
          route="/produtos/combo"
        />
        <Card
          title="Combos"
          backgroundColor="#7371FF"
          valueColor="#fff"
          value="R$ 1.024"
          route="/produtos/combo"
        />
      </section>
      <section className="combos-produtos">
        <Table />
        <hr />
        <Table />
      </section>
    </Main>
  );
};

export default Produtos;
