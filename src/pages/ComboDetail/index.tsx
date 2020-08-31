import React from 'react';
import { Link } from 'react-router-dom';

import { Main } from './styles';

const ComboDetail: React.FC = () => {
  return (
    <Main>
      <header>Combo - Adicionar</header>
      <section>
        <article>
          <Link to="combo">xxxx</Link>
        </article>
      </section>
    </Main>
  );
};

export default ComboDetail;
