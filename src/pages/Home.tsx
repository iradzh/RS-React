import React from 'react';
import { Provider } from 'react-redux';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { store } from '../store/store';
import { TableForm } from '../interfaces';
import Table from '../components/table/Table';

const Home = () => {
  return (
    <Provider store={store}>
      <div className="homePage">
        <nav>
          <Link to="/" className="homeLink">
            HOME
          </Link>
          <NavLink to="/uncontrolled" className="navLink">
            FormUncontr
          </NavLink>
          <NavLink to="/usehook" className="navLink">
            FormWithHook
          </NavLink>
        </nav>
        <Outlet />
        <div className="tables">
          <Table form={TableForm.UNC} />
          <Table form={TableForm.HOOK} />
        </div>
      </div>
    </Provider>
  );
};

export default Home;
