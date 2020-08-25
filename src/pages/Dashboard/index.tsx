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
    <div id="page-wrap">
      <h1>Olá, Dashboard</h1>
    </div>
  </>
);

export default Dashboard;
