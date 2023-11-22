import { createSlice } from '@reduxjs/toolkit';

const isErrorSlice = createSlice({
  name: 'isError',
  initialState: false,
  reducers: {
    updateIsError: (state, action) => {
      return action.payload;
    }
  }
});

export const { updateIsError } = isErrorSlice.actions;

export default isErrorSlice.reducer;
