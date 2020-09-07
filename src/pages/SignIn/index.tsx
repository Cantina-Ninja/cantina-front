import React, { useCallback } from 'react';
import { RiUser6Line, RiKey2Fill } from 'react-icons/ri';
import * as Yup from 'yup';
import { Container, Content, Background, Header, Form } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Logo from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        user: Yup.string().required('Usário obrigatório'),
        password: Yup.string().required('Senha obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      console.log(error);
    }

    console.log(data);
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <Form onSubmit={handleSubmit}>
          <Header>
            <div>
              <h2>Bem vindo(a) ao</h2>
              <h1>CantinaNinja</h1>
            </div>
            <img src={Logo} alt="Logotipo" />
          </Header>
          <Input
            name="user"
            icon={RiUser6Line}
            type="text"
            placeholder="Usuario"
          />
          <Input
            name="password"
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
