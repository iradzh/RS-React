import React from 'react';

import '@testing-library/jest-dom';
import { test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import NotFoundPage from '../src/pages/NotFoundPage';

test('get NotFoundPage in case of wrong route', async () => {
  const routes = [
    {
      path: '/wrongRoute',
      element: <NotFoundPage />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/wrongRoute'],
  });

  render(<RouterProvider router={router} />);

  const errorMessage = /Wrong link, here is correct to go/;
  const messageElement = await screen.findByText(errorMessage);

  expect(messageElement).toBeInTheDocument();
});
