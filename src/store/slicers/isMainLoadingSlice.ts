import { createSlice } from '@reduxjs/toolkit';

import { IActionBool } from '../../types/interfaces';

const isMainLoadingSlice = createSlice({
  name: 'isMainLoading',
  initialState: false,
  reducers: {
    updateMainLoading: (state, action: IActionBool) => {
      return action.payload;
    }
  }
});

export const { updateMainLoading } = isMainLoadingSlice.actions;

export default isMainLoadingSlice.reducer;
