import { Outlet } from 'react-router-dom';

import AppContextProvider from '../context/ContextProvider';
import { Page } from '../pages/Page/Page';
export const PageLayout = () => {
  return (
    <div className='page-layout'>
      <AppContextProvider>
        <Page />
        <>
          <Outlet />
        </>
      </AppContextProvider>
    </div>
  );
};
