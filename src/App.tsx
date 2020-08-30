import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { MenuProvider } from './hooks/menu';

import GlobalStyle from './style/global';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <MenuProvider>
      <Routes />
    </MenuProvider>
    <GlobalStyle />
  </Router>
);

export default App;
