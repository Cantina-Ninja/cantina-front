import React, { useCallback, useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { useParams, useHistory } from 'react-router-dom';
import { RiUser6Fill, RiAdminLine, RiLockPasswordLine } from 'react-icons/ri';

import Input from '../../components/Input';
import Button from '../../components/Button';
import DropDown from '../../components/DropDown';

import getValidationErros from '../../utils/getValidationErros';
import api from '../../services/api';

import { Form, Container, InputsContainer } from './styles';

const dataPermission = [
  {
    key: 1,
    value: 'Administrador',
  },
  {
    key: 2,
    value: 'Vendedor',
  },
];

interface UsuarioProps {
  readonly nome?: string;
  readonly senha?: string;
  readonly permissao?: any;
  readonly tipoUsuario?: number;
}

const UsuariosDetail: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { id = '' }: any = useParams();
  const [usuario, setUsuario] = useState<UsuarioProps>({
    permissao: {
      key: 1,
      value: 'Administrador',
    },
  });
  const history = useHistory();

  const getUsuario = useCallback(async () => {
    try {
      const { data } = await api.get<UsuarioProps>(`usuarios/${id}`);

      const roleProps = dataPermission.find(
        item => item.key === data?.tipoUsuario,
      );

      setUsuario({
        nome: data.nome,
        permissao: roleProps,
      });
    } catch (error) {
      console.warn(error);
    }
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

        if (id) {
          await api
            .put(`usuarios/${id}`, {
              nome: data.nome,
              senha: data.senha,
              tipoUsuario: data.permissao.key === 1 ? 1 : 2,
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
                response.status === 200 && history.push('/usuarios');
              }
            });
        } else {
          await api
            .post(`usuarios/${id}`, {
              nome: data.nome,
              senha: data.senha,
              tipoUsuario: data.permissao.key === 1 ? 1 : 2,
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
                response.status === 200 && history.push('/usuarios');
              }
            });
        }

        history.push('/usuarios');
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
    if (id) {
      getUsuario();
    }
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
