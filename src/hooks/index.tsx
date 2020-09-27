import React from 'react';

import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './auth';
import { MenuProvider } from './menu';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastContainer />
    <MenuProvider>{children}</MenuProvider>
  </AuthProvider>
);

export default AppProvider;
