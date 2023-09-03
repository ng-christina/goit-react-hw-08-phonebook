import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterAction: (_, action) => {
      return action.payload;
    },
  },
});

export const { filterAction } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
