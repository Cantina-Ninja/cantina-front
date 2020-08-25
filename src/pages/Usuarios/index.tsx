import React from 'react';
import Sidebar from '../../components/Sidebar';

const Usuarios: React.FC = () => (
  <>
    <Sidebar isOpen pageWrapId="page-wrap" outerContainerId="root" />
    <div id="page-wrap">
      <h1>Olá, Usuarios</h1>
    </div>
  </>
);

export default Usuarios;
