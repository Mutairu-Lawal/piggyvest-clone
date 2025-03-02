import { createSlice } from '@reduxjs/toolkit';
import { getSessionStorage } from '../../utils/sessionStorage';

const initialState = {
  user: getSessionStorage('user'),
};

export const currentUserDataSlice = createSlice({
  name: 'currentUserData',
  initialState,
  reducers: {
    updateUserState: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { updateUserState } = currentUserDataSlice.actions;

export default currentUserDataSlice.reducer;
