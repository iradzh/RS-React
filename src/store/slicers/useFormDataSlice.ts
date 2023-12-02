import { createSlice } from '@reduxjs/toolkit';

const useFormData = createSlice({
  name: 'useFormData',
  initialState: {
    name: '',
    age: 0,
    email: '',
    password: '',
    gender: '',
    tc: false,
  },
  reducers: {
    setUseFormData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUseFormData } = useFormData.actions;

export default useFormData.reducer;
