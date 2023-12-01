import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import FormWithHook from './components/FormWithHook/FormWithHook';
import FormUncontr from './components/FormUncontr/FormUncontr';
import NotFoundPage from './pages/NotFoundPage';

import './index.scss';
import { PageLayout } from './layouts/PageLayout';
import { RootLayout } from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<PageLayout />} />
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
