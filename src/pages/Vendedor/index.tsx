import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { RiUser6Line } from 'react-icons/ri';
import { FaRegCreditCard } from 'react-icons/fa';
import cpfMask from '../../utils/cpfMask';

import formatValue from '../../utils/formatValue';

import Button from '../../components/Button';
import Table from '../../components/Table';
import Input from '../../components/Input';
import DropDown from '../../components/DropDown';

import api from '../../services/api';

import {
  Container,
  ContainerHeader,
  ContainerInfo,
  ContainerItem,
  ContainerVendas,
  Form,
  ContainerHeaderRight,
  ContainerCart,
  ContainerTable,
  ContainerPrice,
} from './styles';

interface ProdutosProps {
  readonly id?: number;
  readonly skuProduto?: number;
  readonly nomeProduto: string;
  readonly marca: string;
  readonly validade: string;
  readonly qtdEstoque: number;
  readonly valorUnit: any[];
}

const dataPermission = [
  {
    key: 'credit',
    value: 'Crédito',
  },
  {
    key: 'debit',
    value: 'Débito',
  },
  {
    key: 'money',
    value: 'Dinheiro',
  },
];

const Vendedor: React.FC = () => {
  const [produtos, setProdutos] = useState<ProdutosProps[]>([]);
  const [cart, setCart] = useState<any[]>([]);
  const [cpf, setCpf] = useState('000.000.000-00');

  const getProdutos = useCallback(async () => {
    const { data } = await api.get<ProdutosProps[]>('produtos');

    setProdutos(
      data.map(
        ({
          skuProduto,
          nomeProduto,
          marca,
          validade,
          qtdEstoque,
          valorUnit,
        }) => {
          return {
            id: skuProduto,
            nomeProduto,
            marca,
            validade: new Date(validade).toLocaleDateString('pt-br'),
            qtdEstoque,
            valorUnit: [valorUnit, formatValue(Number(valorUnit))],
          };
        },
      ),
    );
  }, []);

  useEffect(() => {
    getProdutos();
  }, [getProdutos]);

  const handleAddCart = useCallback(
    async ({ id, nomeProduto, valorUnit }: any) => {
      setCart([
        ...cart,
        {
          id,
          nomeProduto,
          valorUnit,
        },
      ]);
    },
    [cart],
  );

  return (
    <Container>
      <header>Vendedor</header>

      <Form onSubmit={() => {}}>
        <ContainerHeader>
          <ContainerInfo>
            <ContainerItem>
              <h3>Olá, vendedor(a)</h3>
              <h1>Amanda Trevisan Julius Barbosa Pinto</h1>
            </ContainerItem>
          </ContainerInfo>
          <ContainerHeaderRight>
            <Input
              icon={RiUser6Line}
              perspective="horizontal"
              description="CPF"
              name="confirmacaoSenha"
              value={cpf}
              onChange={e => setCpf(cpfMask(e.target.value))}
            />
            <DropDown
              data={dataPermission}
              icon={FaRegCreditCard}
              perspective="horizontal"
              description="Pagamento"
              name="permissao"
            />
          </ContainerHeaderRight>
        </ContainerHeader>
        <hr />
        <ContainerTable>
          <Table
            columns={['Produtos', 'Marca', 'Validade', 'Quantidade', 'Valor']}
            rows={produtos}
            routeAddCart="add"
            stateRows={handleAddCart}
          />
          <ContainerCart>
            <Table
              columns={['Carrinho', 'Valor']}
              rows={cart}
              routeRemove="cart"
              stateRows={setCart}
            />
            <hr />
            <ContainerPrice>
              <ContainerItem>
                <h3>Total</h3>
                <h1>
                  {formatValue(cart.reduce((a, b) => a + b.valorUnit[0], 0))}
                </h1>
              </ContainerItem>
              <Button type="submit">Finalizar pedido</Button>
            </ContainerPrice>
          </ContainerCart>
        </ContainerTable>
        <ContainerVendas />
      </Form>
    </Container>
  );
};

export default Vendedor;