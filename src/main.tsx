import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import FormWithHook from './components/FormWithHook/FormWithHook';
import FormUncontr from './components/FormUncontr/FormUncontr';
import NotFoundPage from './pages/NotFoundPage';

import './index.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="/uncontrolled" element={<FormUncontr />} />
      <Route path="/usehook" element={<FormWithHook />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
