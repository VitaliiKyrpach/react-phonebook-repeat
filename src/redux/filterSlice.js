import { createSlice } from '@reduxjs/toolkit';

const initialState = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    typeFilter: (state, action) => (state = action.payload),
  },
});

export const { typeFilter } = filterSlice.actions;
export default filterSlice.reducer;
