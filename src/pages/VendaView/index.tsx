import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import formatCurrency from '../../utils/formatCurrency';
import formatCpf from '../../utils/formatCpf';
import Table from '../../components/Table';

import api from '../../services/api';

import {
  Container,
  ContainerInfo,
  ContainerItem,
  ContainerVendas,
} from './styles';

interface ProdutosProps {
  readonly id?: number;
  readonly skuProduto?: number;
  readonly nomeProduto: string;
  readonly marca: string;
  readonly validade: string;
  readonly qtdEstoque: number;
  readonly valorUnit: number | string;
}

interface ItensProps {
  readonly desconto: number;
  readonly quantidade: number;
  readonly subTotal: number;
  readonly valor: number;
  readonly produto: ProdutosProps;
}

interface VendaProps {
  readonly cpf: string;
  readonly formaPagamento: string;
  readonly dataVenda: string;
  readonly idVenda: number;
  readonly nfe?: string;
  readonly valorTotal: number;
  readonly itens?: ItensProps[];
}

const VendaView: React.FC = () => {
  const { id = '' }: any = useParams();
  const [produtos, setProdutos] = useState<ProdutosProps[]>([]);
  const [venda, setVenda] = useState<VendaProps>();

  const getVenda = useCallback(async () => {
    const { data } = await api.get<VendaProps | any>(`vendas/${id}`);
    const itens = data.itens || [];

    setVenda({
      cpf: data.cpf,
      formaPagamento: data.formaPagamento,
      dataVenda: data.dataVenda,
      idVenda: data.idVenda,
      valorTotal: data.valorTotal,
      nfe: data?.nfe?.chaveAcesso,
    });

    setProdutos(
      itens.map(({ subTotal, quantidade, produto }: ItensProps) => {
        return {
          id: produto.skuProduto,
          nomeProduto: produto.nomeProduto,
          marca: produto.marca,
          validade: new Date(produto.validade).toLocaleDateString('pt-br'),
          quantidade,
          valorUnit: formatCurrency(Number(produto.valorUnit)),
          subTotal: formatCurrency(Number(subTotal)),
        };
      }),
    );
  }, [id, setProdutos]);

  useEffect(() => {
    getVenda();
  }, [getVenda]);

  return (
    <Container>
      <header>Detalhes da venda</header>
      <ContainerInfo>
        <ContainerItem>
          <h3>Nro. venda</h3>
          <p>{venda?.idVenda}</p>
        </ContainerItem>
        <ContainerItem>
          <h3>CPF</h3>
          <p>{formatCpf(venda?.cpf || '')}</p>
        </ContainerItem>
        <ContainerItem>
          <h3>Data da venda</h3>
          <p>{venda?.dataVenda}</p>
        </ContainerItem>
        <ContainerItem>
          <h3>Forma de pagamento</h3>
          <p>{venda?.formaPagamento}</p>
        </ContainerItem>
        <ContainerItem>
          <h3>Total</h3>
          <p>{formatCurrency(venda?.valorTotal || 0)}</p>
        </ContainerItem>
        <ContainerItem>
          <h3>Chave NFE</h3>
          <p>{venda?.nfe}</p>
        </ContainerItem>
      </ContainerInfo>
      <hr />
      <Table
        columns={[
          'Produtos',
          'Marca',
          'Validade',
          'Quantidade',
          'Valor unidade',
          'Subtotal',
        ]}
        rows={produtos}
      />
      <ContainerVendas />
    </Container>
  );
};

export default VendaView;
