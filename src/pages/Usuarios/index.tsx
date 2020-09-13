import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Main, ContainerUsuarios } from './styles';

import Table from '../../components/Table';
import Button from '../../components/Button';
import api from '../../services/api';

interface UsuariosProps {
  readonly id?: number;
  readonly nome: string;
  readonly tipoPerfil: string;
}

const Usuarios: React.FC = () => {
  const history = useHistory();

  const [usuarios, setUsuarios] = useState<UsuariosProps[]>([]);

  const getUsuarios = useCallback(async () => {
    const { data } = await api.get<UsuariosProps[]>('usuarios');

    setUsuarios(
      data.map(({ id, nome, tipoPerfil = '%' }) => {
        return {
          id,
          nome,
          tipoPerfil,
        };
      }),
    );
  }, []);

  useEffect(() => {
    getUsuarios();
  }, [getUsuarios]);

  return (
    <Main>
      <header>Usuarios</header>
      <ContainerUsuarios>
        <Table
          columns={['Usuarios', 'Acesso']}
          rows={usuarios}
          routeEdit="usuarios"
          routeRemove="usuarios"
          stateRows={setUsuarios}
        />
      </ContainerUsuarios>
      <hr />
      <div>
        <Button type="button" onClick={() => history.push('usuarios/new')}>
          Criar Usuário
        </Button>
      </div>
    </Main>
  );
};

export default Usuarios;
