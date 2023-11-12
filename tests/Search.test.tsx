import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { loadListSimple } from '../src/api/service';
import { PageLayout } from '../src/layouts/PageLayout';

test('Verify that clicking the Search button saves the entered value to the local storage.', async () => {
  const routes = [
    {
      path: '/:page',
      element: <PageLayout />,
      loader: loadListSimple,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/1'],
  });

  render(<RouterProvider router={router} />);

  const searchInput = await screen.findByTestId('searchInput');
  await userEvent.type(searchInput, 'Luke');

  const searchButton = await screen.findByTestId('searchBtn');
  await userEvent.click(searchButton);

  const storedSearchValue = localStorage.getItem('search');
  expect(storedSearchValue).toEqual('Luke');
});
