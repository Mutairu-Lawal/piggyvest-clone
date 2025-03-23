import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showUserNameModal: false,
};

const userNameSlice = createSlice({
  name: 'userNameModal',
  initialState,
  reducers: {
    toggleUserNameModal: (state) => {
      state.showUserNameModal = !state.showUserNameModal;
    },
  },
});

export const { toggleUserNameModal } = userNameSlice.actions;

export default userNameSlice.reducer;
