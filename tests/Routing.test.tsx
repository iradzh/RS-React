import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { test } from 'vitest';

import { RootLayout } from '../src/layouts/RootLayout';
import React from 'react';

test('get NotFoundPage in case of wrong route', async () => {
  const routes = [
    {
      path: '/wrongRoute',
      element: <RootLayout />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
  });

  render(<RouterProvider router={router} />);

  const errorMessage = /Wrong link, here is correct to go home/;
  const messageElement = await screen.findByText(errorMessage);

  expect(messageElement).toBeInTheDocument();
});
