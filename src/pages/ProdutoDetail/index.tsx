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
      <header>{id ? 'Edição de produto' : 'Criar Produto'}</header>
      <section>
        <Form onSubmit={handleSubmit}>
          <Input
            description="Nome do produto"
            name="nomeProduto"
            type="text"
            placeholder="Produto"
          />
          <hr />
          <Input
            description="Quantidade em estoque"
            name="qtdEstq"
            type="text"
            placeholder="00"
          />
          <hr />
          <Input
            description="Marca"
            name="nome"
            type="text"
            placeholder="Marca"
          />
          <hr />
          <Input
            description="Valor do produto"
            name="nome"
            type="text"
            placeholder="R$ 00,00"
          />
          <hr />
          <Input description="Data Validade" name="dtVld" type="Date" />
        </Form>
      </section>
    </Container>
  );
};

export default ProdutoDetail;
