import create from 'zustand';
import { AppState } from '../types';

const useStore = create<AppState>(set => ({
  // global store states and their related methods
  backupPhrase: '',
  setBackupPhrase: phrase => set({ backupPhrase: phrase }),
}));

export default useStore;
