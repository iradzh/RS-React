import { createSlice } from '@reduxjs/toolkit';

const uncontrForm = createSlice({
  name: 'uncontrForm',
  initialState: {
    name: '',
    age: 0,
    email: '',
    password: '',
    gender: '',
    tc: false,
  },
  reducers: {
    setUncontrData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUncontrData } = uncontrForm.actions;

export default uncontrForm.reducer;
