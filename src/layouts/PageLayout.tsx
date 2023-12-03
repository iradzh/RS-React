import { Outlet } from 'react-router-dom';

import Home from '../pages/Home';

export const PageLayout = () => {
  return (
    <div className="page-layout">
      <Home />
      <>
        <Outlet />
      </>
    </div>
  );
};
