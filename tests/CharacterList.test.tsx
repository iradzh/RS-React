import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { loadListSimple } from '../src/api/service';
import { PageLayout } from '../src/layouts/PageLayout';

test('Verify that the component renders the specified number of cards', async () => {
  const routes = [
    {
      path: '/',
      element: <PageLayout />,
      loader: loadListSimple,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
  });

  render(<RouterProvider router={router} />);

  await waitFor(() => screen.getByText('Luke Skywalker'));
  const cards = screen.getAllByTestId('character-card');
  expect(cards).toHaveLength(10);
});

test('Check that an appropriate message is displayed if no cards are present', async () => {
  const routes = [
    {
      path: '/:page',
      element: <PageLayout />,
      loader: loadListSimple,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/999'],
  });

  render(<RouterProvider router={router} />);

  await waitFor(() => screen.getByText('No data available'));

  expect(screen.getByText('No data available')).toBeInTheDocument();
});
