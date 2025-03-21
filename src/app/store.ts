import { configureStore } from '@reduxjs/toolkit';
import currentUserSliceReducer from './features/currentUserData';
import quickSaveReducer from './features/QuickSaveSlice';

export const store = configureStore({
  reducer: {
    currentUserData: currentUserSliceReducer,
    quickSave: quickSaveReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
