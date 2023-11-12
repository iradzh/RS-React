import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { loadCharacter, loadListSimple } from '../src/api/service';
import DetailsLayout from '../src/layouts/DetailsLayout';
import { PageLayout } from '../src/layouts/PageLayout';

test('Check that a loading indicator is displayed while fetching data;', async () => {
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

  await waitFor(() => screen.getByText('C-3PO'));

  const cardLink = screen.getByText('C-3PO').closest('a');

  await userEvent.click(cardLink!);
  expect(
    screen.getByText(
      'The Force will guide us through this delay caused by a sluggish API'
    )
  ).toBeInTheDocument();
});

test('Make sure the detailed card component correctly displays the detailed card data', async () => {
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
  await waitFor(() => screen.getByText('Luke Skywalker'));

  const cardLink = screen.getByText('Luke Skywalker').closest('a');

  if (cardLink) {
    await userEvent.click(cardLink);

    await waitFor(() => screen.getByText('Details'));
    expect(screen.getByTestId('details')).toBeInTheDocument();
    expect(screen.getByTestId('details-name').textContent).toEqual(
      'Luke Skywalker'
    );
    expect(screen.getByTestId('details-mass').textContent).toEqual('77');
    expect(screen.getByTestId('details-skin_color').textContent).toEqual(
      'fair'
    );
  } else {
    console.error('Card link not found.');
  }
});

test('Ensure that clicking the close button hides the component.', async () => {
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
  await waitFor(() => screen.getByText('Luke Skywalker'));

  const cardLink = screen.getByText('Luke Skywalker').closest('a');
  await userEvent.click(cardLink!);

  await waitFor(() => screen.getByTestId('details'));

  const closeLink = screen.getByTestId('details-close');
  await userEvent.click(closeLink);

  expect(await screen.queryByTestId('details')).toBeNull();
});
