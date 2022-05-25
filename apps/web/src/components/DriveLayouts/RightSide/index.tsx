import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as WalletIcon } from '../../../assets/icons/drive-icon.svg';
import { ReactComponent as HomeIcon } from '../../../assets/icons/home-icon.svg';
import { ReactComponent as OceanStorageIcon } from '../../../assets/icons/OceanStorage-icon.svg';
import styles from './RightSideLayer.module.scss';

interface IRightSide {
  children: ReactNode;
}

const IconArray = [
  { title: 'storage', icon: <OceanStorageIcon /> },
  { title: 'marketplace', icon: <HomeIcon /> },
  { title: 'wallet', icon: <WalletIcon /> },
];

function RightSideLayer({ children }: IRightSide) {
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
}

export default RightSideLayer;
