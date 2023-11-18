import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearchValue: (state, action) => {
      return action.payload;
    },
    clearSearchValue: () => {
      return '';
    }
  }
});

export const { setSearchValue, clearSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
