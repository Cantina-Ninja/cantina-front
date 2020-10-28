import React from 'react';
import { Main } from './styles';
import Accordion from '../../components/Accordion';
import AcessandoTelaProdutos from '../../assets/acessando_tela_produtos.gif';
import AcessandoTelaUsuarios from '../../assets/acessando_tela_usuarios.gif';
import AcessandoTelaVendas from '../../assets/acessando_tela_vendas.gif';
import CadastrandoProduto from '../../assets/cadastrando_produto.gif';
import AtualizandoProuto from '../../assets/atualizando_produto.gif';
import CadastrandoUsuario from '../../assets/cadastrando_usuario.gif';
import RealizandoVenda from '../../assets/realizando_venda.gif';
import AcessandoVendedor from '../../assets/acessando_vendedor.gif';

const Help: React.FC = () => {
  return (
    <Main>
      <header>Ajuda</header>
      <Accordion title="Acessando tela de produtos">
        <img src={AcessandoTelaProdutos} alt="" />
      </Accordion>
      <Accordion title="Acessando tela de usuários">
        <img src={AcessandoTelaUsuarios} alt="" />
      </Accordion>
      <Accordion title="Acessando tela de vendas">
        <img src={AcessandoTelaVendas} alt="" />
      </Accordion>
      <Accordion title="Cadastrando produtos">
        <img src={CadastrandoProduto} alt="" />
      </Accordion>
      <Accordion title="Atualizando produtos">
        <img src={AtualizandoProuto} alt="" />
      </Accordion>
      <Accordion title="Cadastrando usuário">
        <img src={CadastrandoUsuario} alt="" />
      </Accordion>
      <Accordion title="Realizando venda">
        <img src={RealizandoVenda} alt="" />
      </Accordion>
      <Accordion title="Acessando vendedor">
        <img src={AcessandoVendedor} alt="" />
      </Accordion>
    </Main>
  );
};

export default Help;
