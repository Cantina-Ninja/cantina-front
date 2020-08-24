import React from 'react';
import Sidebar from '../../components/Sidebar';

const Dashboard: React.FC = () => (
  <>
    <Sidebar pageWrapId="page-wrap" outerContainerId="root" />
    <div id="page-wrap">
      <h1>Click to show menu</h1>
    </div>
  </>
);

export default Dashboard;
