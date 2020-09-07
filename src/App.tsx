import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { MenuProvider } from './hooks/menu';
import AppProvider from './hooks';

import GlobalStyle from './style/global';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <MenuProvider>
        <Routes />
      </MenuProvider>
    </AppProvider>
    <GlobalStyle />
  </Router>
);

export default App;
