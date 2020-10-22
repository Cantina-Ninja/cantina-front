import React from 'react';

import { Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Produtos from '../pages/Produtos';
import ProdutoDetail from '../pages/ProdutoDetail';
import Usuarios from '../pages/Usuarios';
import Vendas from '../pages/Vendas';
import Vendedor from '../pages/Vendedor';
import VendaView from '../pages/VendaView';
import SignIn from '../pages/SignIn';
import Error from '../pages/Error';

import Route from './Route';
import UsuariosDetail from '../pages/UsuariosDetail';
import Help from '../pages/Help';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route
        path="/dashboard"
        exact
        isPrivate
        authorisedUsers="ADMIN"
        activeMenu
        component={Dashboard}
      />
      <Route
        path="/produtos"
        exact
        isPrivate
        authorisedUsers="ADMIN"
        activeMenu
        component={Produtos}
      />

      <Route
        path="/produtos/:id/edit"
        isPrivate
        authorisedUsers="ADMIN"
        component={ProdutoDetail}
      />
      <Route
        path="/produtos/new"
        isPrivate
        authorisedUsers="ADMIN"
        component={ProdutoDetail}
      />

      <Route
        path="/usuarios"
        exact
        isPrivate
        authorisedUsers="ADMIN"
        activeMenu
        component={Usuarios}
      />

      <Route
        path="/usuarios/:id/edit"
        isPrivate
        authorisedUsers="ADMIN"
        component={UsuariosDetail}
      />
      <Route
        path="/usuarios/new"
        isPrivate
        authorisedUsers="ADMIN"
        component={UsuariosDetail}
      />

      <Route
        path="/vendas"
        exact
        isPrivate
        authorisedUsers="ADMIN"
        activeMenu
        component={Vendas}
      />
      <Route
        path="/vendas/:id/view"
        isPrivate
        authorisedUsers="ADMIN"
        component={VendaView}
      />

      <Route
        path="/vendedor"
        exact
        isPrivate
        authorisedUsers="USER"
        activeMenu
        component={Vendedor}
      />

      <Route
        path="/ajuda"
        exact
        isPrivate
        authorisedUsers="USER"
        activeMenu
        component={Help}
      />

      <Route path="/error" isPrivate activeMenu component={Error} />
    </Switch>
  </>
);

export default Routes;
