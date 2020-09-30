import React, { useCallback, useState, useEffect, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { RiUser6Line } from 'react-icons/ri';
import { FaRegCreditCard } from 'react-icons/fa';
import { toast } from 'react-toastify';

import cpfMask from '../../utils/cpfMask';
import formatValue from '../../utils/formatCurrency';

import Button from '../../components/Button';
import Table from '../../components/Table';
import Input from '../../components/Input';
import DropDown from '../../components/DropDown';
import Pagination from '../../components/Pagination';
import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import {
  Container,
  ContainerHeader,
  ContainerInfo,
  ContainerItem,
  ContainerVendas,
  Form,
  ContainerHeaderRight,
  ContainerProducts,
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

interface ItemsProps {
  content: ProdutosProps[];
  last: boolean;
  number: number;
  pageable: any;
  totalElements: number;
  totalPages: number;
}

const dataPermission = [
  {
    key: 'CREDITO',
    value: 'Crédito',
  },
  {
    key: 'DEBITO',
    value: 'Débito',
  },
  {
    key: 'DINHEIRO',
    value: 'Dinheiro',
  },
];

const Vendedor: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const nomeVendedor = useAuth()?.nome || '';
  const [cart, setCart] = useState<any[]>([]);
  const [cpf, setCpf] = useState('000.000.000-00');
  const [produtos, setProdutos] = useState<ProdutosProps[]>([]);
  const [activePage, setActivePage] = useState(1);
  const [totalItemsCount, setTotalItemsCount] = useState(1);
  const itemsCountPerPage = 5;

  const getProdutos = useCallback(async () => {
    try {
      const { data } = await api.get<ItemsProps>('produtos', {
        params: {
          search: '',
          page: activePage - 1,
          perPage: itemsCountPerPage,
          orderBy: 'skuProduto',
          orderDirection: 'DESC',
        },
      });

      const { content, totalElements } = data;

      setTotalItemsCount(totalElements);

      setProdutos(
        content.map(
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
    } catch (error) {
      console.warn(error);
    }
  }, [activePage]);

  useEffect(() => {
    getProdutos();
  }, [getProdutos, activePage]);

  const handleAddCart = useCallback(
    async ({ id, nomeProduto, valorUnit }: any) => {
      setCart([
        ...cart,
        {
          id,
          title: nomeProduto,
          valorUnit,
        },
      ]);
    },
    [cart],
  );

  const handlePageChange = (pageNumber: any) => {
    setActivePage(pageNumber);
  };

  const handleSubmit = useCallback(
    async (data: any) => {
      try {
        const venda = {
          cpf: data?.cpf,
          formaPagamento: data?.formaPagamento?.key,
          itens: cart
            .map(item => {
              return {
                quantidade: cart.reduce(
                  (beforeCart: any, { id }: any) =>
                    beforeCart + (item?.id === id),
                  0,
                ),
                produto: {
                  skuProduto: item?.id,
                },
                subTotal: item?.valorUnit[0],
              };
            })
            .filter(
              (v: any, i, a) =>
                a.findIndex(
                  (t: any) => t.produto.skuProduto === v.produto.skuProduto,
                ) === i,
            ),
          valorTotal: cart.reduce(
            (beforeCart, { valorUnit }) => beforeCart + valorUnit[0],
            0,
          ),
        };

        if (!cart.length) {
          toast.error('😕 Ops! Carrinho vazio', {
            position: 'top-center',
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return;
        }

        api.post('/vendas', venda).then(response => {
          if (response?.status === 201) {
            toast.success('🙌 Venda efetuada com sucesso!', {
              position: 'top-center',
              autoClose: 6000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setCart([]);
            setCpf(cpfMask('00000000000'));
          }
        });
      } catch (error) {
        console.warn(error);
      }
    },
    [cart],
  );

  return (
    <Container>
      <header>Vendedor</header>

      <Form
        onSubmit={handleSubmit}
        ref={formRef}
        initialData={{
          formaPagamento: {
            key: 'DINHEIRO',
            value: 'Dinheiro',
          },
        }}
      >
        <ContainerHeader>
          <ContainerInfo>
            <ContainerItem>
              <h3>Olá, vendedor(a)</h3>
              <h1>{nomeVendedor}</h1>
            </ContainerItem>
          </ContainerInfo>
          <ContainerHeaderRight>
            <Input
              icon={RiUser6Line}
              perspective="horizontal"
              description="CPF"
              name="cpf"
              value={cpf}
              onChange={e => setCpf(cpfMask(e.target.value))}
            />
            <DropDown
              data={dataPermission}
              icon={FaRegCreditCard}
              perspective="horizontal"
              description="Pagamento"
              name="formaPagamento"
            />
          </ContainerHeaderRight>
        </ContainerHeader>
        <hr />
        <ContainerTable>
          <ContainerProducts>
            <Table
              columns={['Produtos', 'Marca', 'Validade', 'Quantidade', 'Valor']}
              rows={produtos}
              routeAddCart="add"
              stateRows={handleAddCart}
            />
            <Pagination
              activePage={activePage}
              itemsCountPerPage={itemsCountPerPage}
              totalItemsCount={totalItemsCount}
              pageRangeDisplayed={4}
              onChange={pageNumber => handlePageChange(pageNumber)}
            />
          </ContainerProducts>
          <ContainerCart>
            <Table
              columns={['Carrinho', 'Valor']}
              rows={cart}
              routeRemove="fake"
              stateRows={setCart}
            />
            <hr />
            <ContainerPrice>
              <ContainerItem>
                <h3>Total</h3>
                <h1>
                  {formatValue(
                    cart.reduce(
                      (beforeCart, { valorUnit }) => beforeCart + valorUnit[0],
                      0,
                    ),
                  )}
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
