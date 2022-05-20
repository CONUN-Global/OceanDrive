import React, { ReactNode } from 'react';
import { DriveIcon, HomeIcon, SearchIcon, SettingsIcon } from '../../const';
import styles from './RightSideLayer.module.scss';

interface RightSideProps {
  title: string;
  IconComponent: any;
  children: ReactNode;
}

const RightSideLayer = ({ IconComponent, title, children }: RightSideProps) => {
  return (
    <div className={styles.LightBg}>
      <div className={styles.WhiteBg}>
        <div className={styles.TopBg}>
          <div className={styles.TopBgLeft}>
            {/* here goes conditional title */}
            {title}
          </div>
          <div className={styles.TopBgRight}>
            <div className={styles.LeftSide}>
              <div className={styles.SearchBox}>
                <SearchIcon className={styles.SearchIcon} />
                <p className={styles.SearchWord}>Search Here</p>
              </div>
              <div className={styles.TabNFT}>
                {/* here goes conditional SVG icon as a Reactcomponent */}
                {IconComponent}
              </div>
              <div className={styles.HomeIcon}>
                <HomeIcon />
              </div>
              <div className={styles.DriveIcon}>
                <DriveIcon />
              </div>
            </div>
            <div>
              <SettingsIcon />
            </div>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
};

export default RightSideLayer;
