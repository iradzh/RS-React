import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import Character from '../src/components/Character/Charachter';
import CharacterList from '../src/components/CharacterList/CharacterList';
import { server } from './mocks/server';
import { loadCharacter, loadListSimple } from '../src/api/service';
import DetailsLayout from '../src/layouts/DetailsLayout';
import { PageLayout } from '../src/layouts/PageLayout';

test('Ensure that the card component renders the relevant card data', () => {
  const charData = {
    id: 1,
    name: 'Luke Skywalker',
    birth_year: '19BBY',
    gender: 'male',
    eye_color: 'blue',
    skin_color: 'fair',
    height: '172',
    mass: '77',
    hair_color: 'fair',
    url: 'https://swapi.dev/api/people/1/',
  };

  render(<Character char={charData} />);

  expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  expect(screen.getByText('19BBY')).toBeInTheDocument();
  expect(screen.getByText('male')).toBeInTheDocument();
});

test('Validate that clicking on a card opens a detailed card component', async () => {
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

    expect(screen.getByText('Details')).toBeInTheDocument();
  } else {
    console.error('Card link not found.');
  }
});

// test('Check that clicking triggers an additional API call to fetch detailed information', async () => {
//   const charData = {
//     name: 'Luke Skywalker',
//     birth_year: '19BBY',
//     gender: 'male',
//     url: 'https://swapi.dev/api/people/1/',
//   };

//   const routes = [
//     {
//       path: '/',
//       element: <CharacterList />,
//       loader: () => Promise.resolve([charData]), // Mock the data loading
//     },
//   ];

//   const router = createMemoryRouter(routes, {
//     initialEntries: ['/'],
//   });

//   render(<RouterProvider router={router} />);

//   const cardLink = screen.getByText('Luke Skywalker').closest('a');
//   userEvent.click(cardLink);

//   // Wait for the additional API call to be made (replace with actual endpoint used for detailed information)
//   await waitFor(() => expect(server.pretendToBeOffline()));

//   // Ensure that the detailed information is rendered after the API call
//   expect(screen.getByText('Detailed Information')).toBeInTheDocument(); // Replace with actual text/content
// });
