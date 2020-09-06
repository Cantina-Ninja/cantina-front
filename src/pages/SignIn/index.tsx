import React from 'react';
import { RiUser6Line, RiKey2Fill } from 'react-icons/ri';
import { Form } from '@unform/web';
import Logo from '../../assets/logo.svg';

import { Main } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => {
  function handleSubmit(data: any) {
    // { email: 'test@example.com', password: '123456' }
    console.log(data);
  }

  return (
    <Main>
      <div className="container-bg" />
      <div className="wapper-signin">
        <div className="signin-container">
          <header>
            <div>
              <h2>Bem vindo(a) ao</h2>
              <h1>CantinaNinja</h1>
            </div>
            <img src={Logo} alt="Logotipo" />
          </header>
          <footer>
            <Form onSubmit={handleSubmit}>
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
          </footer>
        </div>
      </div>
    </Main>
  );
};

export default SignIn;
