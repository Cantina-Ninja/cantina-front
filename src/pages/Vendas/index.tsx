import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Main, ContainerVendas } from './styles';

import Table from '../../components/Table';
import api from '../../services/api';
import formatValue from '../../utils/formatValue';
import formaCpf from '../../utils/formatCpf';

interface VendasProps {
  readonly id?: number;
  readonly idVenda?: number;
  readonly cpf?: string;
  readonly valorTotal: string;
  readonly dataVenda: string;
}

const Vendas: React.FC = () => {
  const [vendas, setVendas] = useState<VendasProps[]>([]);

  const getVendas = useCallback(async () => {
    const { data } = await api.get<VendasProps[]>('vendas');

    setVendas(
      data.map(({ idVenda, cpf = '', valorTotal, dataVenda }) => {
        return {
          id: idVenda,
          idVenda,
          cpf: formaCpf(cpf),
          dataVenda: new Date(dataVenda).toLocaleDateString('pt-br'),
          valorTotal: formatValue(Number(valorTotal)),
        };
      }),
    );
  }, []);

  useEffect(() => {
    getVendas();
  }, [getVendas]);

  return (
    <Main>
      <header>Vendas</header>
      <ContainerVendas>
        <Table
          columns={['Nro. venda', 'CPF', 'Data', 'Total']}
          rows={vendas}
          routeView="vendas"
          stateRows={setVendas}
        />
      </ContainerVendas>
      <hr />
    </Main>
  );
};

export default Vendas;
