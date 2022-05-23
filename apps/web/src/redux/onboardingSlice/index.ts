import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  backupPhrase: '',
};

export const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setBackupPhrase: (state, { payload }) => {
      state.backupPhrase = payload;
    },
  },
});

// each case under reducers becomes an action
export const { setBackupPhrase } = onboardingSlice.actions;
export default onboardingSlice.reducer;
