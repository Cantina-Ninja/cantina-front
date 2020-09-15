import React, { useCallback, useEffect, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { useParams } from 'react-router-dom';
import { RiUser6Fill, RiAdminLine, RiLockPasswordLine } from 'react-icons/ri';

import Input from '../../components/Input';
import Button from '../../components/Button';
import DropDown from '../../components/DropDown';

import { Form, Container, InputsContainer } from './styles';

const UsuariosDetail: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { id = '' }: any = useParams();
  const dataPermission = [
    {
      key: 'USER',
      value: 'Vendedor',
    },
    {
      key: 'ADMIN',
      value: 'Administrador',
    },
  ];

  /* useEffect(() => {
    https://unform.dev/guides/get-set-field-value
    formRef.current?.setFieldValue('lsPermissao', 'John Doe');
    formRef.current?.setData({ lsPermissao: 'AAAAAAAAAAAAAAAA' });
  }, []); */

  const handleSubmit = useCallback(async (data: any) => {
    console.log(data);
    // formRef.current?.setErrors({ lsPermissao: 'xxxxxxxxxxxx' });
  }, []);

  return (
    <Container>
      <header>{id ? 'Edição de usuário' : 'Criar usuário'}</header>
      <Form ref={formRef} onSubmit={handleSubmit}>
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
            description="senha"
            name="pw"
            type="password"
          />
          <Input
            icon={RiLockPasswordLine}
            perspective="horizontal"
            description="Confirmar senha"
            name="rppw"
            type="confirmPassword"
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
