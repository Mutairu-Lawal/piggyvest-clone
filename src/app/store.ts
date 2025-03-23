import { configureStore } from '@reduxjs/toolkit';
import currentUserSliceReducer from './features/currentUserData';
import quickSaveReducer from './features/QuickSaveSlice';
import userNameModalReducer from './features/UserNameSlice';

export const store = configureStore({
  reducer: {
    currentUserData: currentUserSliceReducer,
    quickSave: quickSaveReducer,
    userNameModal: userNameModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
