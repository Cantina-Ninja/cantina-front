import React from 'react';
import { Main } from './styles';
import Accordion from '../../components/Accordion';
import TelaProdutos from '../../assets/acessando_tela_produtos.gif';

const Help: React.FC = () => {
  return (
    <Main>
      <header>Ajuda</header>
      <Accordion title="Titulo 123">
        <img src={TelaProdutos} alt="Acessando tela de produtos" />
      </Accordion>
    </Main>
  );
};

export default Help;
