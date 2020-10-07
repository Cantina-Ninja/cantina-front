import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';
import getValidationErros from '../../utils/getValidationErros';

import { Form, Container, InputsContainer } from './styles';
import { currencyMask, currencyNumber } from '../../utils/currecyMask';

interface ProdutoProps {
  readonly nomeProduto: string;
  readonly validade: string;
  readonly qtdEstoque: number;
  readonly marca: string;
  readonly valorUnit: string;
}

const ProdutoDetail: React.FC = () => {
  const { id = '' }: any = useParams();
  const history = useHistory();
  const [produto, setProduto] = useState<any>();
  const [valorUnit, setValorUnit] = useState(currencyMask('100'));

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
          valorUnit: Yup.string().required('Valor unitário obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const [ano, mes, dia] = data.validade.split('-');

        if (id) {
          await api
            .put(`produtos/${id}`, {
              nomeProduto: data.nomeProduto,
              marca: data.marca,
              qtdEstoque: data.qtdEstoque,
              validade: `${ano}/${mes}/${dia}`,
              valorUnit: currencyNumber(data.valorUnit),
            })
            .then(response => {
              if (response.status === 200) {
                toast.success(response.data.mensagem, {
                  position: 'top-center',
                  autoClose: 6000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  toastId: response.data?.mensagem,
                });
                response.status === 200 && history.push('/produtos');
              }
            });
        } else {
          await api
            .post('produtos', {
              nomeProduto: data.nomeProduto,
              marca: data.marca,
              qtdEstoque: data.qtdEstoque,
              validade: `${ano}/${mes}/${dia}`,
              valorUnit: currencyNumber(data.valorUnit),
            })
            .then(response => {
              if (response.status === 200) {
                toast.success(response.data.mensagem, {
                  position: 'top-center',
                  autoClose: 6000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  toastId: response.data?.mensagem,
                });
                response.status === 200 && history.push('/produtos');
              }
            });
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [id, history],
  );

  const getProduto = useCallback(async () => {
    const { data } = await api.get<any>(`produtos/${id}`);

    const [ano, mes, dia] = data.validade.split('/');

    setProduto({
      nomeProduto: data.nomeProduto,
      marca: data.marca,
      qtdEstoque: data.qtdEstoque,
      validade: `${ano}-${mes}-${dia}`,
    });

    setValorUnit(currencyMask(String(data.valorUnit)));
  }, [id, setProduto]);

  useEffect(() => {
    if (id) {
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
            maxLength={3}
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
            value={valorUnit}
            onChange={e => setValorUnit(currencyMask(e.target.value))}
            placeholder="R$ 00,00"
          />
          <Input
            perspective="horizontal"
            description="Data Validade"
            name="validade"
            type="Date"
            min="2020-01-01"
            max="2100-12-31"
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
