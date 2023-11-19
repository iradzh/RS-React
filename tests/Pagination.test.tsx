import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { PageLayout } from '../src/layouts/PageLayout';

test('Make sure the component updates URL query parameter when page changes.', async () => {
  const routes = [
    {
      path: '/:page',
      element: <PageLayout />
    }
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/1']
  });

  render(<RouterProvider router={router} />);

  const pathBefore = router.state.location.pathname;

  const nextPageBtn = await screen.findByTestId('nextPageBtn');
  await userEvent.click(nextPageBtn!);

  const pathAfter = router.state.location.pathname;

  expect(pathBefore).toEqual('/1');
  expect(pathAfter).toEqual('/2');
  expect(pathBefore).not.toEqual(pathAfter);
});
