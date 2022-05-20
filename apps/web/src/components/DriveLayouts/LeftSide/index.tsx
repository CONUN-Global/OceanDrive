import React, { ReactNode } from 'react';
import Button from 'src/components/Button';
import placeholderImg from 'src/assets/images/Profile.png';

import { ReactComponent as UnionVectorIcon } from 'src/assets/icons/union-vector-icon.svg';

import styles from './LeftSidebar.module.scss';

const LeftSidebar = ({ children }: { children?: ReactNode }) => {
  return (
    <div className={styles.leftSideBar}>
      <div className={styles.ContentContainer}>
        <img src={placeholderImg} className={styles.Avatar} />
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
