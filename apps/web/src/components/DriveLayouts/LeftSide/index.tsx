import classnames from 'classnames';
import React, { ReactNode } from 'react';
import { ReactComponent as UnionVectorIcon } from 'src/assets/icons/union-vector-icon.svg';
import { ReactComponent as SettingsIcon } from 'src/assets/icons/settings-icon.svg';

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
            <div className={classnames(styles.Logout, styles.UtilItem)}>
              <UnionVectorIcon />
              Logout
            </div>
            <div className={classnames(styles.Settings, styles.UtilItem)}>
              <SettingsIcon />
              Settings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
