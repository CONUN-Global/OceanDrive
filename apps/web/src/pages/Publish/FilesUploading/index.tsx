import React, { useEffect } from 'react';
import { UploadFile } from 'src/types';

import styles from './FilesUploading.module.scss';

interface IProps {
  data: UploadFile[];
  setData: (arg: UploadFile[] | any) => void;
}

function ListItem({ file, deleteItem }: any) {
  return (
    <li key={file.id} className={styles.ListItem}>
      {file.name}
      <button className={styles.ListBtn} onClick={() => deleteItem(file.id)}>
        X
      </button>
    </li>
  );
}

function FilesUploading({ data, setData }: IProps) {
  function deleteItem(itemId: string) {
    setData((prev: UploadFile[]) => prev.filter((item: any) => item.id !== itemId));
  }

  return (
    <div className={styles.Container}>
      <nav className={styles.TopBar}>
        <p>Attached Files</p>
        <button className={styles.ResetBtn} onClick={() => setData([])}>
          X
        </button>
      </nav>
      <div className={styles.ListContainer}>
        {data.map((file: UploadFile) => (
          <ListItem key={file.id} file={file} deleteItem={deleteItem} />
        ))}
      </div>
    </div>
  );
}

export default FilesUploading;
