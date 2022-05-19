import React, { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import classNames from 'classnames';
import { OceanStorageIcon, HomeIcon, DriveIcon } from 'src/const';

import styles from './RightSideLayer.module.scss';

interface RightSideProps {
  title: string;
  children: ReactNode;
}

const RightSideLayer = ({ children }: RightSideProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.OuterBg}>
      <div className={styles.InnerBg}>
        <div className={styles.TopBar}>
          <div className={styles.IconsAndSettings}>
            <div className={styles.IconsOnly}>
              <div onClick={() => navigate(`/storage`)} className={classNames(styles.BtnContainer, { [styles.active]: pathname.includes('storage') })}>
                <OceanStorageIcon />
              </div>
              <div onClick={() => navigate(`/marketplace`)} className={classNames(styles.BtnContainer, { [styles.active]: pathname.includes('marketplace') })}>
                <HomeIcon />
              </div>
              <div onClick={() => navigate(`/drive`)} className={classNames(styles.BtnContainer, { [styles.active]: pathname.includes('drive') })}>
                <DriveIcon />
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default RightSideLayer;
