import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Main, ContainerUsuarios } from './styles';

import Table from '../../components/Table';
import Load from '../../components/Load';
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
    try {
      await api.get<UsuariosProps[]>('usuarios').then((response: any) => {
        if (response?.error) return;

        setUsuarios(
          response.data.map(({ id, nome, tipo }: any) => {
            return {
              id,
              title: nome,
              tipoPerfil: tipo === 1 ? 'Administrador(a)' : 'Vendedor(a)',
            };
          }),
        );
      });
    } catch (error) {
      console.warn(error);
    }
  }, []);

  useEffect(() => {
    getUsuarios();
  }, [getUsuarios]);

  return (
    <Main>
      <header>Usuários</header>
      <ContainerUsuarios>
        {!usuarios.length && <Load />}
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
