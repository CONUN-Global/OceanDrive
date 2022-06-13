import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  backAnimation: false,
};

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setBackAnimation: (state, { payload }) => {
      state.backAnimation = payload;
    },
  },
});

// each case under reducers becomes an action
export const { setBackAnimation } = walletSlice.actions;

export default walletSlice.reducer;
