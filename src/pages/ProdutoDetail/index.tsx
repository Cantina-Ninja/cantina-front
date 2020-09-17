import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Form, Container, InputsContainer } from './styles';

const ProdutoDetail: React.FC = () => {
  const { id = '' }: any = useParams();
  const handleSubmit = useCallback(async (data: any) => {
    console.log(data);
  }, []);
  return (
    <Container>
      <header>{id ? 'Alteração de produto' : 'Criar produto'}</header>
      <Form onSubmit={handleSubmit}>
        <InputsContainer>
          <Input
            perspective="horizontal"
            description="Nome do produto"
            name="nmProduto"
            type="text"
            placeholder="Produto"
          />
          <Input
            perspective="horizontal"
            description="Quantidade em estoque"
            name="qtdEstoque"
            type="text"
            placeholder="00"
          />
          <Input
            perspective="horizontal"
            description="Marca"
            name="marca"
            type="text"
            placeholder="Marca"
          />
          <Input
            perspective="horizontal"
            description="Valor do produto"
            name="vlProduto"
            type="text"
            placeholder="R$ 00,00"
          />
          <Input
            perspective="horizontal"
            description="Data Validade"
            name="dtValidade"
            type="Date"
          />
        </InputsContainer>
        <hr />
        <div>
          <Button type="submit">
            {id ? 'Alterar produto' : 'Criar produto'}
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default ProdutoDetail;
