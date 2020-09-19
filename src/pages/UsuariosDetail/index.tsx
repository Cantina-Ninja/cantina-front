import React, { useCallback, useState, useRef, useEffect } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { useParams } from 'react-router-dom';
import { RiUser6Fill, RiAdminLine, RiLockPasswordLine } from 'react-icons/ri';

import Input from '../../components/Input';
import Button from '../../components/Button';
import DropDown from '../../components/DropDown';

import getValidationErros from '../../utils/getValidationErros';
import api from '../../services/api';

import { Form, Container, InputsContainer } from './styles';

const dataPermission = [
  {
    key: 'ROLE_USER',
    value: 'Vendedor',
  },
  {
    key: 'ROLE_ADMIN',
    value: 'Administrador',
  },
];

interface UsuarioProps {
  readonly nome: string;
  readonly senha: string;
  readonly permissao?: string;
  readonly tipoPerfil: string[];
}

const UsuariosDetail: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { id = '' }: any = useParams();
  const [usuario, setUsuario] = useState<UsuarioProps>();

  const getUsuario = useCallback(async () => {
    const { data } = await api.get<UsuarioProps>(`usuarios/${id}`);
    setUsuario(data);
  }, [id, setUsuario]);

  const handleSubmit = useCallback(
    async (data: UsuarioProps) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          nome: Yup.string().required('Usuário obrigatório'),
          permissao: Yup.string().required('Permissão obrigatória'),
          senha: Yup.string().required('Senha obrigatória'),
          confirmacaoSenha: Yup.string()
            .oneOf([Yup.ref('senha'), ''], 'As senhas não coincidem')
            .required('Confirmação de senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // Edit User
        if (id) {
          await api.put(`usuarios/${id}`, {
            nome: data.nome,
            senha: data.senha,
            tipoPerfil: [data.permissao],
          });
          return;
        }

        // Create User
        await api.post(`usuarios/${id}`, {
          nome: data.nome,
          senha: data.senha,
          tipoPerfil: [data.permissao],
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [id],
  );

  useEffect(() => {
    getUsuario();
  }, [getUsuario]);

  return (
    <Container>
      <header>{id ? 'Edição de usuário' : 'Criar usuário'}</header>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={usuario}>
        <InputsContainer>
          <Input
            icon={RiUser6Fill}
            perspective="horizontal"
            description="Nome do usuário"
            name="nome"
            type="text"
          />
          <DropDown
            data={dataPermission}
            icon={RiAdminLine}
            perspective="horizontal"
            description="Permissão"
            name="permissao"
          />
          <Input
            icon={RiLockPasswordLine}
            perspective="horizontal"
            description="Senha"
            name="senha"
            type="password"
          />
          <Input
            icon={RiLockPasswordLine}
            perspective="horizontal"
            description="Confirmar senha"
            name="confirmacaoSenha"
            type="password"
          />
        </InputsContainer>
        <hr />
        <div>
          <Button type="submit">
            {id ? 'Alterar usuário' : 'Criar usuário'}
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default UsuariosDetail;