import React, { useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RiUser6Line, RiKey2Fill } from 'react-icons/ri';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';

import { Form, Container } from './styles';

const ProdutoDetail: React.FC = () => {
  const { id = '' } = useParams();
  const handleSubmit = useCallback(async (data: any) => {}, []);
  return (
    <Container>
      <header>{id ? 'Edição de Produto' : 'Criar Produto'}</header>
      <section>
        <Form onSubmit={handleSubmit}>
          <Input
            name="nome"
            icon={RiUser6Line}
            type="text"
            placeholder="Nome do Produto"
          />
        </Form>
      </section>
    </Container>
  );
};

export default ProdutoDetail;
