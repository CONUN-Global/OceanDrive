import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  settingsModalIsOpen: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleSettings: state => {
      state.settingsModalIsOpen = !state.settingsModalIsOpen;
    },
  },
});

export const { toggleSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
