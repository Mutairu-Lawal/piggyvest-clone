import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showQuickSave: false,
};

const quickSaveSlice = createSlice({
  name: 'quickSave',
  initialState,
  reducers: {
    toggleQuickSaveState: (state) => {
      state.showQuickSave = !state.showQuickSave;
    },
  },
});

export const { toggleQuickSaveState } = quickSaveSlice.actions;
export default quickSaveSlice.reducer;
