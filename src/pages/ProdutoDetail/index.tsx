import React from 'react';
import { Link } from 'react-router-dom';

import { Main } from './styles';

const ProdutoDetail: React.FC = () => {
  return (
    <Main>
      <header>Produtos - Adicionar</header>
      <section>
        <article>
          <Link to="combo">xxxx</Link>
        </article>
      </section>
    </Main>
  );
};

export default ProdutoDetail;
