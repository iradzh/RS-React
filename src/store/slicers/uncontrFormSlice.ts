import { createSlice } from '@reduxjs/toolkit';
import { IDisplayValue } from '../../interfaces';

const uncontrForm = createSlice({
  name: 'uncontrForm',
  initialState: {
    isInitialised: false,
    name: '',
    age: 0,
    email: '',
    password: '',
    passwordConfirmed: '',
    gender: '',
    tc: false,
  } as IDisplayValue,
  reducers: {
    setUncontrData: (state, action) => {
      console.log(state);
      return action.payload;
    },
  },
});

export const { setUncontrData } = uncontrForm.actions;

export default uncontrForm.reducer;
