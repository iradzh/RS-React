import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Page } from '../pages/Page/Page';
import { store } from '../store/store';

export const PageLayout = () => {
  return (
    <div className='page-layout'>
      <Provider store={store}>
        <Page />
        <>
          <Outlet />
        </>
      </Provider>
    </div>
  );
};
