import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import FormWithHook from './components/FormWithHook/FormWithHook';
import FormUncontr from './components/FormUncontr/FormUncontr';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'uncontrolled',
        element: <FormUncontr />,
      },
      {
        path: 'usehook',
        element: <FormWithHook />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
