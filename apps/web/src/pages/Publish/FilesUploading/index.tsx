import React from 'react';
import { UploadFile } from 'src/types';

import styles from './FilesUploading.module.scss';

interface IProps {
  data: UploadFile[];
  setData: (arg: UploadFile[] | any) => void;
}

function FilesUploading({ data, setData }: IProps) {
  ///////Filter out this item from the Data array and setData with reduced data
  function deleteItem(id: string) {
    console.log(id);
  }

  return (
    <div className={styles.Container}>
      <button className={styles.ResetBtn} onClick={() => setData([])}>
        X
      </button>
      <div>
        {data.map((file: UploadFile) => (
          <li key={file.id}>
            {file.name} <button onClick={() => deleteItem(file.id)}>X</button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default FilesUploading;
