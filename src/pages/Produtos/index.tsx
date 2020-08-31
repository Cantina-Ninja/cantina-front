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
          value="R$ 1.024"
          route="/produtos/combo"
        />
        <Card
          title="Card teste"
          backgroundColor="#1C1F20"
          valueColor="#C2C9D0"
          value="44K"
        />
        <Card
          title="Card teste 2"
          backgroundColor="#1C1F20"
          valueColor="#C2C9D0"
          value="0%"
        />
      </section>
    </Main>
  );
};

export default Produtos;
