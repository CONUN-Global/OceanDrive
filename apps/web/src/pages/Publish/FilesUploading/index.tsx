import React from 'react';
import { UploadFile } from 'src/types';
import { ReactComponent as Close } from '../../../assets/icons/close.svg';
import { ReactComponent as Garbage } from '../../../assets/icons/GarbageCan.svg';
import { ReactComponent as Image } from '../../../assets/icons/Upload_File_Types/image.svg';
import { ReactComponent as Text } from '../../../assets/icons/Upload_File_Types/text.svg';
import { ReactComponent as File } from '../../../assets/icons/Upload_File_Types/file.svg';

import styles from './FilesUploading.module.scss';

interface IProps {
  data: UploadFile[];
  setData: (arg: UploadFile[] | any) => void;
}

function ListItem({ file, deleteItem, showBtn }: { file: UploadFile; deleteItem: (id: string) => void; showBtn: boolean }) {
  let Icon;
  switch (file.type.split('/')[0]) {
    case 'image':
      Icon = <Image />;
      break;
    case 'application':
      Icon = <File />;
      break;
    case 'text':
      Icon = <Text />;
      break;
    default:
      Icon = <File />;
  }

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
