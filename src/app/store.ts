import { configureStore } from '@reduxjs/toolkit';
import currentUserSliceReducer from './features/currentUserData';

export const store = configureStore({
  reducer: {
    currentUserData: currentUserSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
