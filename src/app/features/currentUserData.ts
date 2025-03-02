import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    accountNumber: '0163810053',
    email: 'user@gmail.com',
    id: '001',
    password: 'user',
    phoneNumber: '07037686956',
    fullName: 'lawal Mutairu',
    userName: 'mtlaw',
    piggyPoints: 40,
    showBalance: false,
  },
};
export const showBalanceSlice = createSlice({
  name: 'showBalance',
  initialState,
  reducers: {
    toggleState: (state) => {
      state.user.showBalance = !state.user.showBalance;
    },
    updateState: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { toggleState } = showBalanceSlice.actions;

export default showBalanceSlice.reducer;
