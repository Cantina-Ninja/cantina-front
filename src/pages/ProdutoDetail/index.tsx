import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';
import getValidationErros from '../../utils/getValidationErros';

import { Form, Container, InputsContainer } from './styles';

interface ProdutoProps {
  readonly nomeProduto: string;
  readonly validade: string;
  readonly qtdEstoque: number;
  readonly marca: string;
  readonly valorUnit: number;
}

const ProdutoDetail: React.FC = () => {
  const { id = '' }: any = useParams();
  const history = useHistory();
  const [produto, setProduto] = useState<any>();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ProdutoProps) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          nomeProduto: Yup.string().required('Nome do produto obrigatório'),
          validade: Yup.string().required('Validade do produto obrigatório'),
          qtdEstoque: Yup.number().typeError('Apenas valores numéricos'),
          marca: Yup.string().required('Marca do produto obrigatório'),
          valorUnit: Yup.number().typeError('Apenas valores numéricos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const [ano, mes, dia] = data.validade.split('-'); // TODO

        if (id) {
          // Edit Product
          await api.put(`produtos/${id}`, {
            nomeProduto: data.nomeProduto,
            marca: data.marca,
            qtdEstoque: data.qtdEstoque,
            validade: `${ano}/${mes}/${dia}`,
            valorUnit: data.valorUnit,
          });
        } else {
          // Create Product
          await api.post('produtos', {
            nomeProduto: data.nomeProduto,
            marca: data.marca,
            qtdEstoque: data.qtdEstoque,
            validade: `${ano}/${mes}/${dia}`,
            valorUnit: data.valorUnit,
          });
        }

        // Redirect
        history.push('/produtos');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [id],
  );

  const getProduto = useCallback(async () => {
    const { data } = await api.get<any>(`produtos/${id}`);

    const [ano, mes, dia] = data.validade.split('/'); // TODO

    setProduto({
      nomeProduto: data.nomeProduto,
      marca: data.marca,
      qtdEstoque: data.qtdEstoque,
      validade: `${ano}-${mes}-${dia}`,
      valorUnit: data.valorUnit,
    });
  }, [id, setProduto]);

  useEffect(() => {
    if (id) {
      // Edit Product
      getProduto();
    }
  }, [getProduto, id]);

  return (
    <Container>
      <header>{id ? 'Alteração de produto' : 'Criar produto'}</header>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={produto}>
        <InputsContainer>
          <Input
            perspective="horizontal"
            description="Nome do produto"
            name="nomeProduto"
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
            name="valorUnit"
            type="text"
            placeholder="R$ 00,00"
          />
          <Input
            perspective="horizontal"
            description="Data Validade"
            name="validade"
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
