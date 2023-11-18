import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { updateDetailsLoading } from './isDetailsLoadingSlice';
import { updateMainLoading } from './isMainLoadingSlice';

export const swapi = createApi({
  reducerPath: 'swapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api' }),
  endpoints: (build) => ({
    getChars: build.query({
      query: () => `people`,
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        dispatch(updateMainLoading(true));
        try {
          await queryFulfilled;
          dispatch(updateMainLoading(false));
        } catch (err) {
          dispatch(updateMainLoading(false));
        }
      }
    }),
    getDetails: build.query({
      query: (id) => `people/${id}`,
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        dispatch(updateDetailsLoading(true));
        try {
          await queryFulfilled;
          dispatch(updateDetailsLoading(false));
        } catch (err) {
          dispatch(updateDetailsLoading(false));
        }
      }
    }),
    searchChar: build.query({
      query: (search) => `people/?search=${search}`,
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        dispatch(updateMainLoading(true));
        try {
          await queryFulfilled;
          dispatch(updateMainLoading(false));
        } catch (err) {
          dispatch(updateMainLoading(false));
        }
      }
    })
  })
});

export const { useGetCharsQuery, useGetDetailsQuery, useSearchCharQuery } =
  swapi;
