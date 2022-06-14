export type AppState = {
  backupPhrase: string;
  setBackupPhrase: (phrase: string) => void;
};
export type ObjectType = {
  [key: string]: string;
};

export type UploadFile = {
  filePath: string;
  type: string;
  size: number;
  path: string;
  src: string;
  id: string;
  name: string;
};
