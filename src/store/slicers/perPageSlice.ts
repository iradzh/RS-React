import { createSlice } from '@reduxjs/toolkit';

const perPageSlice = createSlice({
  name: 'perPage',
  initialState: 10,
  reducers: {
    updatePerPage: (state, action) => {
      return action.payload;
    }
  }
});

export const { updatePerPage } = perPageSlice.actions;

export default perPageSlice.reducer;
