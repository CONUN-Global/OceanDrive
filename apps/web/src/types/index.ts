export type AppState = {
  backupPhrase: string;
  setBackupPhrase: (phrase: string) => void;
  userLogin: boolean;
  setUserLogin: (status: boolean) => void;
};
export type ObjectType = {
  [key: string]: string;
};
