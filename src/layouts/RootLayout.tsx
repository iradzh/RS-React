import { Link, Outlet } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
export const RootLayout = () => {
  return (
    <div className='root-layout'>
      <Link to='/'>
        <Home />
      </Link>
      <>
        <Outlet />
      </>
    </div>
  );
};
