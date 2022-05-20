// import { getUserLoginStatus, setUserLoginStatus } from 'src/helpers/getUserLoginStatus';
import create from 'zustand';
import { AppState } from '../types';

const useStore = create<AppState>(set => ({
  // global store states and their related methods
  backupPhrase: '',
  setBackupPhrase: phrase => set({ backupPhrase: phrase }),
  userLogin: false,
  setUserLogin: (status: boolean) => {
    set({ userLogin: status });
  },
}));

export default useStore;
