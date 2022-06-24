import React from 'react';

import { UploadFile } from '../../types';
import styles from './UploadingPopup.module.scss';

function ListItem({ file }: { file: UploadFile }) {
  return <li className={styles.ListItem}>{file.name}</li>;
}

function UploadingPopup({ items, setIsPopupShowing }: { items: UploadFile[]; setIsPopupShowing: (value: boolean | ((prevVar: boolean) => boolean)) => void }) {
  return (
    <div className={styles.PageContainer}>
      <div className={styles.TopBar}>
        <div>Uploading {items.length} Items</div>
        <button className={styles.CloseBtn} onClick={() => setIsPopupShowing(false)}>
          X
        </button>
      </div>
      <div className={styles.List}>
        {items.map((item: UploadFile, index: number) => (
          <ListItem key={index} file={item} />
        ))}
      </div>
    </div>
  );
}

export default UploadingPopup;
