import { createSlice } from '@reduxjs/toolkit';
import { IDisplayValue } from '../../interfaces';

const hookData = createSlice({
  name: 'hookData',
  initialState: {
    isInitialised: false,
    name: '',
    age: 0,
    email: '',
    password: '',
    passwordConfirmed: '',
    gender: '',
    pic: '',
    tc: false,
  } as IDisplayValue,
  reducers: {
    setHookData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setHookData } = hookData.actions;

export default hookData.reducer;
