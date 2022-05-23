import React, { ReactNode } from 'react';
import { ReactComponent as UnionVectorIcon } from '../../../assets/icons/union-vector-icon.svg';
import placeholderImg from '../../../assets/images/Profile.png';
import Button from '../../Button';
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
