import { configureStore } from '@reduxjs/toolkit';

import { swapi } from './api';
import isDetailsLoadingSlice from './isDetailsLoadingSlice';
import isMainLoadingSlice from './isMainLoadingSlice';
import pageNumSlice from './pageNumSlice';
import perPageSlice from './perPageSlice';
import searchSlice from './searchSlice';

export const store = configureStore({
  reducer: {
    search: searchSlice,
    [swapi.reducerPath]: swapi.reducer,
    perPage: perPageSlice,
    pageNum: pageNumSlice,
    isMainLoading: isMainLoadingSlice,
    isDetailsLoading: isDetailsLoadingSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(swapi.middleware)
});
