import { Link, Outlet } from 'react-router-dom';

import SearchBar from '../components/SearchBar/SearchBar';
export const RootLayout = () => {
  return (
    <div className='root-layout'>
      <Link to='/' className='home'>
        <SearchBar />
      </Link>
      <>
        <Outlet />
      </>
    </div>
  );
};
