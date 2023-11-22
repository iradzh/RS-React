import { createSlice } from '@reduxjs/toolkit';

const isDetailsLoadingSlice = createSlice({
  name: 'isDetailsLoading',
  initialState: false,
  reducers: {
    updateDetailsLoading: (state, action) => {
      return action.payload;
    }
  }
});

export const { updateDetailsLoading } = isDetailsLoadingSlice.actions;

export default isDetailsLoadingSlice.reducer;
