import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { nameShortener } from 'src/utils';

import { ReactComponent as GenearatedIcon } from '../../assets/icons/generated-icon-sample.svg';
import { ReactComponent as SpinningIcon } from '../../assets/icons/spinning-icon.svg';

import { UploadFile } from '../../types';
import styles from './UploadingPopup.module.scss';

function ListItem({ file }: { file: UploadFile }) {
  const name = nameShortener(file.name, 31);
  return (
    <li className={styles.ListItem}>
      <div className={styles.NameIconContainer}>
        <div>
          <GenearatedIcon />
        </div>
        <div>{name}</div>
      </div>
      <div className={styles.SpinningContainer}><SpinningIcon className={styles.SpinningIcon} fill='green' /></div>
    </li>
  );
}

function UploadingPopup({ items, page }: { items: UploadFile[]; page: string }) {
  const [showNum, setShowNum] = useState(items.length);

  useEffect(() => {
    setShowNum(items.length);
  }, [items.length]);

  return (
    <>
      {showNum > 0 && (
        <div className={classNames(styles.PageContainer, { [styles.PageDropBottom]: page === 'drop-file' })}>
          <div className={styles.TopBar}>
            <div>Uploading {items.length} Items</div>
            <button className={styles.CloseBtn} onClick={() => setShowNum(0)}>
              X
            </button>
          </div>
          <div className={styles.List}>{items.length > 0 && items.map((item: UploadFile, index: number) => <ListItem key={index} file={item} />)}</div>
        </div>
      )}
    </>
  );
}

export default UploadingPopup;
