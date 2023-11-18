import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { updateDetailsLoading } from './slicers/isDetailsLoadingSlice';
import { updateMainLoading } from './slicers/isMainLoadingSlice';

export const swapi = createApi({
  reducerPath: 'swapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api' }),
  endpoints: (build) => ({
    getChars: build.query({
      query: (page) => `people${page}`,
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
    })
  })
});

export const { useGetCharsQuery, useGetDetailsQuery } = swapi;
