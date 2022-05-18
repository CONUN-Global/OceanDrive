import React, { ReactNode } from 'react';

import { TabNftIcon, HomeIcon, DriveIcon, SettingsIcon } from 'src/const';

import styles from './RightSideLayer.module.scss';

interface RightSideProps {
  title: string;

  children: ReactNode;
}

const RightSideLayer = ({ title, children }: RightSideProps) => {
  return (
    <div className={styles.LightBg}>
      <div className={styles.WhiteBg}>
        <div className={styles.TopBg}>
          <div className={styles.PageTitle}>{title}</div>
          <div className={styles.TopBgRight}>
            <div className={styles.LeftSide}>
              {/* <div className={styles.SearchBox}>
                <SearchIcon className={styles.SearchIcon} />
                <p className={styles.SearchWord}>Search Here</p>
              </div> */}
              <div className={(styles.ActiveTab, styles.TabButton)}>
                <TabNftIcon />
              </div>
              <div className={(styles.HomeIcon, styles.TabButton)}>
                <HomeIcon />
              </div>
              <div className={(styles.DriveIcon, styles.TabButton)}>
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
