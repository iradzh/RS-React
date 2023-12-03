import React from 'react';
import { TableForm } from '../interfaces';
import Table from '../components/Table/Table';

const Home = () => {
  return (
    <div className="homePage">
      <div className="tables">
        <Table form={TableForm.UNC} />
        <Table form={TableForm.HOOK} />
      </div>
    </div>
  );
};

export default Home;
