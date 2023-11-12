import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { loadCharacter, loadListSimple } from '../src/api/service';
import DetailsLayout from '../src/layouts/DetailsLayout';
import { PageLayout } from '../src/layouts/PageLayout';

test('Verify that the component renders the specified number of cards', async () => {
  const routes = [
    {
      path: '/:page',
      element: <PageLayout />,
      loader: loadListSimple,
      children: [
        {
          path: '',
          element: <DetailsLayout />,
          loader: loadCharacter,
        },
      ],
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/1'],
  });

  render(<RouterProvider router={router} />);

  const cards = await screen.findAllByTestId('character-card');
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
