import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import formatValue from '../../utils/formatValue';
import formaCpf from '../../utils/formatCpf';
import Table from '../../components/Table';

import api from '../../services/api';

import { ContainerVendas, Container } from './styles';

interface ProdutosProps {
  readonly id?: number;
  readonly skuProduto?: number;
  readonly nomeProduto: string;
  readonly marca: string;
  readonly validade: string;
  readonly qtdEstoque: number;
  readonly valorUnit: number | string;
}

const VendaView: React.FC = () => {
  const { id = '' }: any = useParams();
  const [produtos, setProdutos] = useState<ProdutosProps[]>([]);

  const getVenda = useCallback(async () => {
    const { data: dataProdutos } = await api.get<ProdutosProps[]>(
      `vendas/${id}`,
    );

    setProdutos(dataProdutos);
  }, [id, setProdutos]);

  useEffect(() => {
    getVenda();
  }, [getVenda]);

  return (
    <Container>
      <header>Detalhes da venda</header>
      <hr />
      {/*
         <Table
          columns={['Produtos', 'Marca', 'Suv total']}
          rows={vendas}
          routeView="vendas"
          stateRows={setVendas}
        /> */}
      <ContainerVendas />
    </Container>
  );
};

export default VendaView;
