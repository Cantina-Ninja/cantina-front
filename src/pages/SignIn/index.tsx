import React from 'react';
import { RiUser6Line, RiKey2Fill } from 'react-icons/ri';
import * as yup from 'yup';
import { Container, Content, Background, Header, Form } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Logo from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  const signIn = async (data: object) => {
    // { email: 'test@example.com', password: '123456' }
    const schema = yup.object().shape({
      user: yup.string().required('Usuário não preenchido'),
      password: yup.string().required('Senha não preenchida'),
    });
    const teste = await schema.isValid(data);
    console.log(teste);
  };

  return (
    <Container>
      <Background />

      <Content>
        <Form onSubmit={signIn}>
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
