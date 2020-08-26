import React from 'react';
import Sidebar from '../../components/Sidebar';

const Dashboard: React.FC = () => (
  <>
    <Sidebar
      disableCloseOnEsc
      isOpen
      pageWrapId="page-wrap"
      outerContainerId="root"
    />
    <main id="page-wrap">
      <h1>Olá, Dashboard</h1>
    </main>
  </>
);

export default Dashboard;
