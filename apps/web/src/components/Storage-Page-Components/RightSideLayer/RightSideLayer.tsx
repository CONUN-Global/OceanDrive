import React, { ReactNode } from 'react';

import { ReactComponent as SearchIcon } from '../../../assets/icons/search-icon.svg';
import { ReactComponent as IHomeIcon } from '../../../assets/icons/i-home-icon.svg';
import { ReactComponent as IDriveIcon } from '../../../assets/icons/i-drive-icon.svg';
import { ReactComponent as ISettingsIcon } from '../../../assets/icons/i-settings-icon.svg';

import styles from './RightSideLayer.module.scss';

interface RightSideProps {
  title: string;
  IconComponent: any;
  children: ReactNode;
}

const RightSideLayer = ({ IconComponent, title, children }: RightSideProps) => {
  return (
    <div className={styles.lightbg}>
      <div className={styles.whitebg}>

        <div className={styles.topbg}>
          <div className={styles.topBgLeft}>
            {/* here goes conditional title */}
            {title}
          </div>
          <div className={styles.topBgRight}>
            <div className={styles.leftSide}>
              <div className={styles.searchBox}>
                <SearchIcon className={styles.searchIcon} />
                <p className={styles.searchWord}>Search Here</p>
              </div>
              <div className={styles.tabNFT}>
                {/* here goes conditional SVG icon as a Reactcomponent */}
                {IconComponent}
              </div>
              <div className={styles.iHomeIcon}>
                <IHomeIcon />
              </div>
              <div className={styles.iDriveIcon}>
                <IDriveIcon />
              </div>
            </div>
            <div>
              <ISettingsIcon />
            </div>
          </div>
        </div>

        {children}

      </div>
    </div>
  );
};

export default RightSideLayer;
