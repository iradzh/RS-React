import React from 'react';
import { TableForm } from '../interfaces';
import Table from '../components/table/Table';

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
