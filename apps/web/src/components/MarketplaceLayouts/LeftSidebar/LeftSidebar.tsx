import React, { ReactNode } from 'react';
import { UnionVectorIcon } from 'src/const';
import Button from 'src/components/Button';

import styles from './LeftSidebar.module.scss';

const LeftSidebar = ({ children }: { children?: ReactNode }) => {
  return (
    <div className={styles.leftSideBar}>
      <div className={styles.ContentContainer}>
        <img src={require('src/assets//images/Profile.png')} className={styles.Avatar} />
        {children}
        <div>
          <Button className={styles.UploadButton}>Upload a File</Button>
          <div className={styles.UtilityButtons}>
            <div className={styles.LockAccount}>
              Lock <UnionVectorIcon />
            </div>
            <div className={styles.LockAccount}>
              Settings <UnionVectorIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
