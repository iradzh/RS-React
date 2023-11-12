import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { test } from 'vitest';

import { loadListSimple } from '../src/api/service';
import { PageLayout } from '../src/layouts/PageLayout';

test('get NotFoundPage in case of wrong route', async () => {
  const routes = [
    {
      path: '/wrongRoute',
      element: <PageLayout />,
      loader: loadListSimple,
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
