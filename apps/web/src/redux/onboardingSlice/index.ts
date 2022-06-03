import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  backupPhrase: [],
  backAnimation: false,
};

export const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setBackupPhrase: (state, { payload }) => {
      state.backupPhrase = payload;
    },
    setBackAnimation: (state, { payload }) => {
      state.backAnimation = payload;
    },
  },
});

// each case under reducers becomes an action
export const { setBackupPhrase, setBackAnimation } = onboardingSlice.actions;

export default onboardingSlice.reducer;
