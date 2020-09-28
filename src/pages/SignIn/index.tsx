import React, { useCallback, useRef } from 'react';
import { RiUser6Line, RiKey2Fill } from 'react-icons/ri';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import getValidationErros from '../../utils/getValidationErros';
import { useAuth } from '../../hooks/auth';

import { Container, Content, Background, Header, Form } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Logo from '../../assets/logo.svg';

interface SignInData {
  nome: string;
  senha: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(async (data: SignInData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        nome: Yup.string().required('Usuário obrigatório'),
        senha: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        nome: data.nome,
        senha: data.senha,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErros(err);
        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Header>
            <div>
              <h2>Bem vindo(a) ao</h2>
              <h1>CantinaNinja</h1>
            </div>
            <img src={Logo} alt="Logotipo" />
          </Header>
          <Input
            name="nome"
            icon={RiUser6Line}
            type="text"
            autoComplete="username"
            placeholder="Nome"
          />
          <Input
            name="senha"
            autoComplete="current-password"
            icon={RiKey2Fill}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
