import { createSlice } from '@reduxjs/toolkit';
import {
  getSessionStorage,
  setSessionStorage,
} from '../../utils/sessionStorage';
import { UserProps } from '../../data/users';

/**
 * Fetches user data from the API based on the user stored in session storage
 * @returns The user data or undefined if not found
 */
const fetchUserDb = async () => {
  const currentUserData: UserProps | undefined = getSessionStorage('user');

  try {
    if (!currentUserData) throw new Error('No user');

    const res = await fetch(`api/users/${currentUserData.id}`);
    if (!res.ok) throw new Error(res.statusText);

    const data = await res.json();

    // Update session storage with latest data
    setSessionStorage('user', data);

    return data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      // console.log(err.message);
    }
    return undefined;
  }
};

// Initialize user data
const getCurrentUser = await fetchUserDb();

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
