import { createSlice } from '@reduxjs/toolkit';
import {
  getSessionStorage,
  setSessionStorage,
} from '../../utils/sessionStorage';
import { UserProps } from '../../data/users';

const fectchUserDb = async () => {
  const currentUserData: UserProps | undefined = getSessionStorage('user');
  try {
    if (!currentUserData) throw new Error('No user');

    const res = await fetch(`api/users/${currentUserData.id}`);

    if (!res.ok) throw new Error(res.statusText);

    const data = await res.json();

    // upadate with client server
    setSessionStorage('user', data);

    return data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message);
      return undefined;
    }
  }
};

const getCurrentUser = await fectchUserDb();

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
