import { createSlice } from '@reduxjs/toolkit';

const pageNumSlice = createSlice({
  name: 'pageNum',
  initialState: 1,
  reducers: {
    updatePageNum: (state, action) => {
      return action.payload;
    }
  }
});

export const { updatePageNum } = pageNumSlice.actions;

export default pageNumSlice.reducer;
