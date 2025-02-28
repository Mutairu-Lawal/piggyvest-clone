import { configureStore } from '@reduxjs/toolkit';
import showBalanceSliceReducer from './features/showBalanceSlice';

export const store = configureStore({
  reducer: {
    showBalance: showBalanceSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
