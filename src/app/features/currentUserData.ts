import { createSlice } from '@reduxjs/toolkit';
import { getSessionStorage } from '../../utils/sessionStorage';
// import { UserProps } from '../../data/users';

// Initialize user data
const getCurrentUser = getSessionStorage('user');

const initialState = {
  user: getCurrentUser,
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
