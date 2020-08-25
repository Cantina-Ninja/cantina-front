import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Produtos from '../pages/Produtos';
import Usuarios from '../pages/Usuarios';

// import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/produtos" component={Produtos} />
    <Route path="/usuarios" component={Usuarios} />
  </Switch>
);

export default Routes;
