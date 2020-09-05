import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { Main } from './styles';

const ComboDetail: React.FC = () => {
  const { id = '' } = useParams();

  console.log(id);
  return (
    <Main>
      <header>{id ? 'Edição de Combo' : 'Criar Combo'}</header>
      <section>
        <article> # {id}</article>
      </section>
    </Main>
  );
};

export default ComboDetail;
