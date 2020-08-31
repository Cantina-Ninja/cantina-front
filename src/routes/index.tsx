import React from 'react';

import { Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Produtos from '../pages/Produtos';
import ProdutoDetail from '../pages/ProdutoDetail';
import Usuarios from '../pages/Usuarios';
import Vendas from '../pages/Vendas';
import SignIn from '../pages/SignIn';
import ComboDetail from '../pages/ComboDetail';

import Route from './Route';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route
        path="/dashboard"
        exact
        isPrivate
        activeMenu
        component={Dashboard}
      />
      <Route path="/produtos" exact isPrivate activeMenu component={Produtos} />
      <Route path="/produtos/produto" isPrivate component={ProdutoDetail} />
      <Route path="/produtos/combo" isPrivate component={ComboDetail} />
      <Route path="/usuarios" exact isPrivate activeMenu component={Usuarios} />
      <Route path="/vendas" exact isPrivate activeMenu component={Vendas} />
    </Switch>
  </>
);

export default Routes;
