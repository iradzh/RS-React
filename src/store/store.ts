import { configureStore } from '@reduxjs/toolkit';

import useFormDataSlice from './slicers/useFormDataSlice';
import uncontrFormSlice from './slicers/uncontrFormSlice';

export const store = configureStore({
  reducer: {
    useFormData: useFormDataSlice,
    uncontrForm: uncontrFormSlice,
  },
});
