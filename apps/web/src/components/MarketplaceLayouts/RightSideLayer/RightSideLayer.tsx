import React, { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import classNames from 'classnames';
import { OceanStorageIcon, HomeIcon, DriveIcon } from 'src/const';

import styles from './RightSideLayer.module.scss';

interface IRightSide {
  title: string;
  children: ReactNode;
}

const IconArray = [
  { title: 'storage', icon: <OceanStorageIcon /> },
  { title: 'marketplace', icon: <HomeIcon /> },
  { title: 'drive', icon: <DriveIcon /> },
];

const RightSideLayer = ({ children }: IRightSide) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.OuterBg}>
      <div className={styles.InnerBg}>
        <div className={styles.TopBar}>
          <div className={styles.IconsAndSettings}>
            <div className={styles.IconsOnly}>
              {IconArray.map((item, index) => {
                return (
                  <div key={index} onClick={() => navigate(`/${item.title}`)} className={classNames(styles.BtnContainer, { [styles.active]: pathname.includes(`${item.title}`) })}>
                    {item.icon}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default RightSideLayer;
