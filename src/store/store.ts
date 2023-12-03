import { configureStore } from '@reduxjs/toolkit';

import hookDataSlice from './slicers/hookDataSlice';
import uncontrFormSlice from './slicers/uncontrFormSlice';

export const store = configureStore({
  reducer: {
    hookData: hookDataSlice,
    uncontrForm: uncontrFormSlice,
  },
});
