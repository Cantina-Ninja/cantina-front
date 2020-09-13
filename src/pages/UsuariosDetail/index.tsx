import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { RiUser6Fill, RiAdminLine, RiLockPasswordLine } from 'react-icons/ri';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Form, Container, InputsContainer } from './styles';

const UsuariosDetail: React.FC = () => {
  const { id = '' }: any = useParams();
  const handleSubmit = useCallback(async (data: any) => {}, []);
  return (
    <Container>
      <header>{id ? 'Edição de usuário' : 'Criar usuário'}</header>
      <Form onSubmit={handleSubmit}>
        <InputsContainer>
          <Input
            icon={RiUser6Fill}
            perspective="horizontal"
            description="Nome do usuário"
            name="nmUsuario"
            type="text"
          />
          <Input
            icon={RiAdminLine}
            perspective="horizontal"
            description="Permissão"
            name="tpPermissao"
            type="text"
          />
          <Input
            icon={RiLockPasswordLine}
            perspective="horizontal"
            description="Senha"
            name="pwUsuario"
            type="text"
          />
          <Input
            icon={RiLockPasswordLine}
            perspective="horizontal"
            description="Confirmar senha"
            name="pwUsuario"
            type="text"
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
