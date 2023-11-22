import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { updateDetailsLoading } from './slicers/isDetailsLoadingSlice';
import { updateIsError } from './slicers/isErrorSlice';
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
          dispatch(updateIsError(false));
        } catch (err) {
          dispatch(updateMainLoading(false));
          dispatch(updateIsError(true));
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
          dispatch(updateIsError(false));
        } catch (err) {
          dispatch(updateDetailsLoading(false));
          dispatch(updateIsError(true));
        }
      }
    })
  })
});

export const { useGetCharsQuery, useGetDetailsQuery } = swapi;
