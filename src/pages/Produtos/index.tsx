import React from 'react';

import Card from '../../components/Card';

import { Main } from './styles';

const Produtos: React.FC = () => {
  return (
    <Main>
      <header>Produtos</header>
      <section>
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
          value="23"
          route="/produtos/combos"
        />
      </section>
    </Main>
  );
};

export default Produtos;
