import React from 'react';
import Button from 'src/components/Button';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';
import { ReactComponent as TabNFtIcon } from '../../assets/icons/tabNFT-icon.svg';
import { ReactComponent as IHomeIcon } from '../../assets/icons/i-home-icon.svg';
import { ReactComponent as IDriveIcon } from '../../assets/icons/i-drive-icon.svg';
import { ReactComponent as ISettingsIcon } from '../../assets/icons/i-settings-icon.svg';

import styles from './Storage.module.scss';

const Storage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lightbg}>
        <div className={styles.whitebg}>
          <div className={styles.topbg}>
            <div className={styles.topBgLeft}>My Drive</div>
            <div className={styles.topBgRight}>
              <div className={styles.leftSide}>
                <div className={styles.searchBox}>
                  <SearchIcon className={styles.searchIcon} />
                  <p className={styles.searchWord}>Search Here</p>
                </div>
                <div className={styles.tabNFT}>
                  <TabNFtIcon className={styles.tabNFTIcon}/>
                </div>
                <div className={styles.iHomeIcon}>
                  <IHomeIcon />
                </div>
                <div className={styles.iDriveIcon}>
                  <IDriveIcon />
                </div>
              </div>
              <div className={styles.rightSide}>
                <ISettingsIcon />
              </div>
            </div>
          </div>

          <div className={styles.rectangle918}>
            <div className={styles.dragAndDrop}>
              <div className={styles.dr}>Drag and Drop</div>
              <div className={styles.dr} style={{ marginTop: '-7px' }}>
                or
              </div>
              <div>
                <Button className={styles.Button}>Browse</Button>
              </div>
              <div className={styles.un}>Unlimitied Size Upload</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storage;
