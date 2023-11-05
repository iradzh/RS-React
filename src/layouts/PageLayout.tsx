import { Outlet } from 'react-router-dom';

import { Page } from '../pages/Page/Page';
export const PageLayout = () => {
  return (
    <div className='page-layout'>
      <Page />
      <>
        <Outlet />
      </>
    </div>
  );
};
