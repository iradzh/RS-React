import React from 'react';
import { test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
// import NotFoundPage from '../src/pages/NotFoundPage';
import Home from '../src/pages/Home';
test('get NotFoundPage in case of wrong route', async () => {
  const routes = [
    {
      path: '/wrongRoute',
      element: <Home />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
  });

  render(<RouterProvider router={router} />);

  const errorMessage = /404 Not Found/;
  const messageElement = screen.getByText(errorMessage);

  expect(messageElement).toBeInTheDocument();
});
