import React from 'react';
import { UploadFile } from '../../../types';
import { ReactComponent as Close } from '../../../assets/icons/close.svg';
import { ReactComponent as Garbage } from '../../../assets/icons/GarbageCan.svg';

import getFileIcon from '../../../helpers/getFileIcon';
import styles from './FilesUploading.module.scss';

interface IProps {
  data: UploadFile[];
  setData: (arg: UploadFile[] | any) => void;
}

function ListItem({ file, deleteItem, showBtn }: { file: UploadFile; deleteItem: (id: string) => void; showBtn: boolean }) {
  const Icon = getFileIcon(file.type);

  return (
    <li key={file.id} className={styles.ListItem}>
      <div className={styles.IconAndText}>
        {Icon}
        <div className={styles.FileName}>{file.name}</div>
      </div>
      {showBtn && (
        <button className={styles.ListBtn} onClick={() => deleteItem(file.id)}>
          <Garbage className={styles.Icon} />
        </button>
      )}
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
        <p className={styles.TitleText}>Attached Files</p>
        <button className={styles.XBtnContainer} onClick={() => setData([])}>
          <Close className={styles.XBtn} />
        </button>
      </nav>
      <div className={styles.ListContainer}>
        {data.map((file: UploadFile) => (
          <ListItem key={file.id} file={file} deleteItem={deleteItem} showBtn={data.length > 1} />
        ))}
      </div>
    </div>
  );
}

export default FilesUploading;
