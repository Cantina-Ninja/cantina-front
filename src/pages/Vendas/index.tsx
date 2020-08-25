import React from 'react';
import Sidebar from '../../components/Sidebar';

const Vendas: React.FC = () => (
  <>
    <Sidebar isOpen pageWrapId="page-wrap" outerContainerId="root" />
    <div id="page-wrap">
      <h1>Olá, Vendas</h1>
    </div>
  </>
);

export default Vendas;
