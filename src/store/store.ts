import { configureStore } from '@reduxjs/toolkit';

import { swapi } from './api';
import isDetailsLoadingSlice from './slicers/isDetailsLoadingSlice';
import isErrorSlice from './slicers/isErrorSlice';
import isMainLoadingSlice from './slicers/isMainLoadingSlice';
import pageNumSlice from './slicers/pageNumSlice';
import perPageSlice from './slicers/perPageSlice';
import searchSlice from './slicers/searchSlice';

export const store = configureStore({
  reducer: {
    search: searchSlice,
    [swapi.reducerPath]: swapi.reducer,
    perPage: perPageSlice,
    pageNum: pageNumSlice,
    isMainLoading: isMainLoadingSlice,
    isDetailsLoading: isDetailsLoadingSlice,
    isError: isErrorSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(swapi.middleware)
});
