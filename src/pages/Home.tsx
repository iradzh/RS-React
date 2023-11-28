import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className="homePage">
      <nav>
        <Link to="/" className="homeLink">
          HOME
        </Link>
        <Link to="/uncontrolled" className="navLink">
          FormUncontr
        </Link>
        <Link to="/usehook" className="navLink">
          FormWithHook
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
