import { Link, NavLink, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store';

export const RootLayout = () => {
  return (
    <Provider store={store}>
      <div className="root-layout">
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
        <>
          <Outlet />
        </>
      </div>
    </Provider>
  );
};
