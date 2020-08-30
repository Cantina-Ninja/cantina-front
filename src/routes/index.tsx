import React from 'react';

import { Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Produtos from '../pages/Produtos';
import ProdutoDetail from '../pages/ProdutoDetail';
import Usuarios from '../pages/Usuarios';
import Vendas from '../pages/Vendas';
import SignIn from '../pages/SignIn';

import Route from './Route';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" exact isPrivate component={Dashboard} />
      <Route path="/produtos" exact isPrivate component={Produtos} />
      <Route path="/produtos/produto" isPrivate component={ProdutoDetail} />
      <Route path="/usuarios" exact isPrivate component={Usuarios} />
      <Route path="/vendas" exact isPrivate component={Vendas} />
    </Switch>
  </>
);

export default Routes;
