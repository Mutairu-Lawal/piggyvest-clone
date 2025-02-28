import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: false,
};

export const showBalanceSlice = createSlice({
  name: 'showBalance',
  initialState,
  reducers: {
    toggleState: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggleState } = showBalanceSlice.actions;

export default showBalanceSlice.reducer;
