import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Home = () => {
  return (
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
    </div>
  );
};

export default Home;
